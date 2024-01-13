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
  isSubmit = true;
  submmitMessage = '';

  public myForm: AngularFirestoreCollection<any> | undefined;

  constructor(private formBuilder: FormBuilder, private fireStore:AngularFirestore) { }




  ngOnInit() {

    this.myForm = this.fireStore.collection('user enquiry');

    this.contactForm = this.formBuilder.group({
      Fullname: [null, [Validators.required, Validators.min(1)]],
      Email: [null, [Validators.required, Validators.email, Validators.min(1)]],
      Comment: [null, [Validators.required, Validators.min(1)]]
    })
  }

  submitData(value: any) {
    console.log(value);

    this.myForm?.add(value).then(res=>{
      this.submmitMessage = 'You message submiited succesfully! Thank You.'
      this.contactForm.reset();
    }).catch(res=>{
      console.log("error");
    })
    this.isSubmit = true;
    
    setTimeout(() => {
      this.isSubmit = false;
    }, 8000);
  }
}
