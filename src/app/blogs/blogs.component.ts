import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit{
  
  public blogData: any = [];

  public constructor(public http:HttpClient){
    
  }
  ngOnInit(): void {

    const url: string = './assets/blogdata.json'
    this.http.get(url).subscribe((response)=>{
    this.blogData = response;
    })
  }

}
