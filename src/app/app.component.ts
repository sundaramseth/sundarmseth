import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sundaram';
  lat = 51.678418;
  lng = 7.809007;

  isShowDiv = false;  
  isShowDivoff = false;
  
  experienceData: any[] = [];
  selectedExperienceId: number = 1;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const url: string = './assets/experience.json'
    this.http.get(url).subscribe((response: any)=>{
      this.experienceData = response;
      if (this.experienceData.length > 0) {
        this.selectedExperienceId = this.experienceData[0].id;
      }
    })
  }

  toggleDisplayDiv() {  

    this.isShowDivoff = !this.isShowDivoff;
    this.isShowDiv = false;  
  }  

  toggleDisplayDivoff(){

    this.isShowDiv = true; 
    this.isShowDivoff = !this.isShowDivoff;
  }

  selectExperience(experienceId: number) {
    this.selectedExperienceId = experienceId;
    // Update styling for selected item
    this.experienceData.forEach((exp, index) => {
      const navElement = document.getElementById('exnav-' + exp.id) as HTMLElement;
      if (navElement) {
        if (exp.id === experienceId) {
          navElement.style.setProperty('background-color', '#b9e1ff');
          navElement.style.setProperty('color', '#000000');
          navElement.style.setProperty('border-left', '4px solid #000');
        } else {
          navElement.style.setProperty('background-color', '#f4f9fc');
          navElement.style.setProperty('color', '#000000');
          navElement.style.setProperty('border-left', '4px solid #f4f9fc');
        }
      }
    });
  }
}
