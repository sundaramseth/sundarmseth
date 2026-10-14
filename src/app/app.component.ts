import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({selector:'app-root',templateUrl:'./app.component.html',styleUrls:['./app.component.scss']})
export class AppComponent implements OnInit {
  title = 'Sundaram Seth';
  currentYear = new Date().getFullYear();
  experienceData: any[] = [];
  selectedExperienceId = 1;
  sceneX = 0;
  sceneY = 0;
  skills = ['Python', 'FastAPI', 'Django / DRF', 'React', 'Angular', 'TypeScript', 'PostgreSQL', 'AI / RAG', 'LangGraph', 'Three.js / WebGL'];
  constructor(private http:HttpClient) {}
  ngOnInit():void {
    this.http.get<any[]>('assets/experience.json?v=20261015').subscribe({next:items=>{this.experienceData=items;this.selectedExperienceId=items[0]?.id||1;},error:()=>{this.experienceData=[];}});
  }
  selectExperience(id:number):void { this.selectedExperienceId=id; }
  tiltScene(event:PointerEvent):void {
    if(event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
    const box=(event.currentTarget as HTMLElement).getBoundingClientRect();
    this.sceneX=(event.clientY-box.top)/box.height*10-5;
    this.sceneY=(event.clientX-box.left)/box.width*14-7;
  }
  resetScene():void { this.sceneX=0;this.sceneY=0; }
}
