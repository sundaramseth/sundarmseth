import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { firstValueFrom, from, timeout } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  isSubmit = false;
  sending = false;
  submmitMessage = '';
  private readonly notificationUrl = 'https://formsubmit.co/ajax/sundaramseth.ucer@gmail.com';

  constructor(private formBuilder: FormBuilder, private fireStore: AngularFirestore, private http: HttpClient) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      Fullname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      Email: ['', [Validators.required, Validators.email, Validators.maxLength(200)]],
      Comment: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(3000)]],
      Website: ['']
    });
  }

  async submitData(): Promise<void> {
    if (this.contactForm.invalid || this.sending) return;
    if (this.contactForm.value.Website) {
      this.submmitMessage = 'Thanks — your enquiry has been received.';
      this.isSubmit = true;
      this.contactForm.reset();
      return;
    }
    const enquiry = {
      Fullname: String(this.contactForm.value.Fullname || '').trim(),
      Email: String(this.contactForm.value.Email || '').trim(),
      Comment: String(this.contactForm.value.Comment || '').trim()
    };
    if (enquiry.Fullname.length < 2 || enquiry.Comment.length < 5) {
      this.submmitMessage = 'Please enter your name and a short message.';
      this.isSubmit = true;
      return;
    }
    this.sending = true;
    this.isSubmit = false;
    try {
      // Run independently: an email outage must not discard the saved enquiry,
      // and a database outage must not prevent the email notification.
      const [saved, notified] = await Promise.allSettled([
        firstValueFrom(from(this.fireStore.collection('user_enquiry').add({ ...enquiry, createdAt: new Date().toISOString() })).pipe(timeout(15000))),
        firstValueFrom(this.http.post<{ success?: boolean | string; message?: string }>(this.notificationUrl, {
          name: enquiry.Fullname,
          email: enquiry.Email,
          message: enquiry.Comment,
          _replyto: enquiry.Email,
          _subject: 'New portfolio enquiry — Sundaram Seth',
          _template: 'table',
          _url: 'https://sundaramsethweb.web.app/#contact'
        }, { headers: { Accept: 'application/json' } }).pipe(timeout(15000)))
      ]);
      const emailAccepted = notified.status === 'fulfilled' &&
        (notified.value.success === true || notified.value.success === 'true') &&
        !/needs? activation|activate (?:this|the|your) form/i.test(notified.value.message || '');
      if (saved.status === 'fulfilled' || emailAccepted) {
        this.submmitMessage = emailAccepted
          ? 'Thanks — your enquiry has been received. I’ll get back to you soon.'
          : 'Your enquiry is saved. For an urgent reply, please contact me on WhatsApp.';
        this.contactForm.reset();
      } else {
        this.submmitMessage = 'Your enquiry could not be sent. Please try again or contact me on WhatsApp.';
      }
    } catch {
      this.submmitMessage = 'Your enquiry could not be sent. Please try again or contact me on WhatsApp.';
    } finally {
      this.sending = false;
      this.isSubmit = true;
    }
  }
}
