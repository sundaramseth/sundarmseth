import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;
  isSubmit = false;
  submmitMessage = '';

  public myForm: AngularFirestoreCollection<any> | undefined;

  constructor(private formBuilder: FormBuilder, private fireStore:AngularFirestore) { }




  ngOnInit() {

    this.myForm = this.fireStore.collection('user_enquiry');

    this.contactForm = this.formBuilder.group({
      Fullname: [null, [Validators.required, Validators.minLength(2)]],
      Email: [null, [Validators.required, Validators.email]],
      Comment: [null, [Validators.required, Validators.minLength(5)]]
    })
  }

  submitData(value: any) {
    console.log(value);

    this.myForm?.add(value).then(res=>{
      this.submmitMessage = 'Your message submitted successfully! Thank You.'
      this.contactForm.reset();
      this.isSubmit = true;
      
      setTimeout(() => {
        this.isSubmit = false;
      }, 5000);
    }).catch(error=>{
      console.log("Error details:", error);
      console.error("Firestore error:", error.message || error);
      this.submmitMessage = 'Error sending message. Please try again.'
      this.isSubmit = true;
      
      setTimeout(() => {
        this.isSubmit = false;
      }, 5000);
    })
  }
}
