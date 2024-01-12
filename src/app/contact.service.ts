import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private url = ""
  public constructor(public http:HttpClient){
    
  }

}
