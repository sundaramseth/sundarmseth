import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  
  public projectData: any = [];

  public constructor(public http:HttpClient){
    
  }
  ngOnInit(): void {

    const url: string = './assets/data.json'
    this.http.get(url).subscribe((response)=>{
      this.projectData = response;
    })
  }

  
}