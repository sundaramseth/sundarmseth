import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sundaram';
  lat = 51.678418;
  lng = 7.809007;

  isShowDiv = false;  
  isShowDivoff = false;
     

  constructor() {}

  toggleDisplayDiv() {  

    this.isShowDivoff = !this.isShowDivoff;
    this.isShowDiv = false;  
  }  

  toggleDisplayDivoff(){

    this.isShowDiv = true; 
    this.isShowDivoff = !this.isShowDivoff;
  }

  showEXP1 = true;  
  showEXP2 = false; 
  showEXP3 = false; 
  showEXP4 = false; 

  toggleshowEXP1(){
    let name = document.getElementById('ex1nav') as HTMLElement;
    name?.style.setProperty('background-color', '#b9e1ff' );
    name?.style.setProperty('color', '#000000' );
    name?.style.setProperty('border-left', '4px solid #000' );
    let name2 = document.getElementById('ex2nav') as HTMLElement;
    name2?.style.setProperty('background-color', '#f4f9fc');
    name2?.style.setProperty('color', '#000000' );
    name2?.style.setProperty('border-left', '4px solid #f4f9fc' );
    let name3 = document.getElementById('ex3nav') as HTMLElement;
    name3?.style.setProperty('background-color', '#f4f9fc');
    name3?.style.setProperty('color', '#000000' );
    name3?.style.setProperty('border-left', '4px solid #f4f9fc' );
    let name4 = document.getElementById('ex4nav') as HTMLElement;
    name4?.style.setProperty('background-color', '#f4f9fc');
    name4?.style.setProperty('color', '#000000' );
    name4?.style.setProperty('border-left', '4px solid #f4f9fc' );
this.showEXP1 = true;
this.showEXP2 = false;
this.showEXP3 = false;
this.showEXP4 = false;
  }

  toggleshowEXP2(){
    let name = document.getElementById('ex1nav') as HTMLElement;
    name?.style.setProperty('background-color', '#f4f9fc' );
    name?.style.setProperty('color', '#000000' );
    name?.style.setProperty('border-left', '4px solid #f4f9fc' );
    let name2 = document.getElementById('ex2nav') as HTMLElement;
    name2?.style.setProperty('background-color', '#b9e1ff');
    name2?.style.setProperty('color', '#000000' );
    name2?.style.setProperty('border-left', '4px solid #000000' );
    let name3 = document.getElementById('ex3nav') as HTMLElement;
    name3?.style.setProperty('background-color', '#f4f9fc');
    name3?.style.setProperty('color', '#000000' );
    name3?.style.setProperty('border-left', '4px solid #f4f9fc' );
    let name4 = document.getElementById('ex4nav') as HTMLElement;
    name4?.style.setProperty('background-color', '#f4f9fc');
    name4?.style.setProperty('color', '#000000' );
    name4?.style.setProperty('border-left', '4px solid #f4f9fc' );
    this.showEXP1 = false;
    this.showEXP2 = true;
    this.showEXP3 = false;
    this.showEXP4 = false;
 
   }
  
   toggleshowEXP3(){
    let name = document.getElementById('ex1nav') as HTMLElement;
    name?.style.setProperty('background-color', '#f4f9fc' );
    name?.style.setProperty('color', '#000000' );
    name?.style.setProperty('border-left', '4px solid #f4f9fc' );
    let name2 = document.getElementById('ex2nav') as HTMLElement;
    name2?.style.setProperty('background-color', '#f4f9fc');
    name2?.style.setProperty('color', '#000000' );
    name2?.style.setProperty('border-left', '4px solid #f4f9fc' );
    let name3 = document.getElementById('ex3nav') as HTMLElement;
    name3?.style.setProperty('background-color', '#b9e1ff');
    name3?.style.setProperty('color', '#000000' );
    name3?.style.setProperty('border-left', '4px solid #000000' );
    let name4 = document.getElementById('ex4nav') as HTMLElement;
    name4?.style.setProperty('background-color', '#f4f9fc');
    name4?.style.setProperty('color', '#000000' );
    name4?.style.setProperty('border-left', '4px solid #f4f9fc' );
    this.showEXP1 = false;
    this.showEXP2 = false;
    this.showEXP3 = true;
    this.showEXP4 = false;
   }

   toggleshowEXP4(){
    let name = document.getElementById('ex1nav') as HTMLElement;
    name?.style.setProperty('background-color', '#f4f9fc' );
    name?.style.setProperty('color', '#000000' );
    name?.style.setProperty('border-left', '4px solid #f4f9fc' );
    let name2 = document.getElementById('ex2nav') as HTMLElement;
    name2?.style.setProperty('background-color', '#f4f9fc');
    name2?.style.setProperty('color', '#000000' );
    name2?.style.setProperty('border-left', '4px solid #f4f9fc' );
    let name3 = document.getElementById('ex3nav') as HTMLElement;
    name3?.style.setProperty('background-color', '#f4f9fc');
    name3?.style.setProperty('color', '#000000' );
    name3?.style.setProperty('border-left', '4px solid #f4f9fc' ); 
    let name4 = document.getElementById('ex4nav') as HTMLElement;
    name4?.style.setProperty('background-color', '#b9e1ff');
    name4?.style.setProperty('color', '#000000' );
    name4?.style.setProperty('border-left', '4px solid #000000' );
    this.showEXP1 = false;
    this.showEXP2 = false;
    this.showEXP3 = false;
    this.showEXP4 = true;
 
   }
}
