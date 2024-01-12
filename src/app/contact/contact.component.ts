import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{



  constructor(private builder: FormBuilder, private contact: ContactService) { }
  

  onSubmit(FormData: any) {

}

  FormData!: FormGroup;
  
  ngOnInit() {
    this.FormData = this.builder.group({
    Fullname: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required]),
    Comment: new FormControl('', [Validators.required])
    })
    }
}
