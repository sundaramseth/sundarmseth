import { AfterViewInit, Component, ElementRef, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({selector:'app-root',templateUrl:'./app.component.html',styleUrls:['./app.component.scss']})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'Sundaram Seth';
  currentYear = new Date().getFullYear();
  experienceData: any[] = [];
  selectedExperienceId = 1;
  sceneX = 0;
  sceneY = 0;
  @ViewChild('interactiveCube') cube!: ElementRef<HTMLElement>;
  cubeDragging = false;
  private cubePitch = -22;
  private cubeYaw = 0;
  private cubeAutoRotate = true;
  private cubePointer: number | null = null;
  private pointerX = 0;
  private pointerY = 0;
  private animationFrame = 0;
  private previousFrame = 0;
  ngAfterViewInit():void {
    this.cubeAutoRotate = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.paintCube();
    this.zone.runOutsideAngular(() => {
      const animate = (time:number) => {
        const elapsed = this.previousFrame ? Math.min(time-this.previousFrame,100) : 0;
        this.previousFrame = time;
        if(this.cubeAutoRotate && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          this.cubeYaw = (this.cubeYaw + elapsed * 0.015) % 360;
          this.paintCube();
        }
        this.animationFrame = requestAnimationFrame(animate);
      };
      this.animationFrame = requestAnimationFrame(animate);
    });
  }
  ngOnDestroy():void { cancelAnimationFrame(this.animationFrame); }
  private paintCube():void {
    this.cube.nativeElement.style.transform = `rotateX(${this.cubePitch}deg) rotateY(${this.cubeYaw}deg)`;
  }
  startCubeDrag(event:PointerEvent):void {
    if(!event.isPrimary || event.button !== 0 || this.cubePointer !== null)return;
    event.preventDefault();
    this.cubeAutoRotate = false;
    this.cubePointer = event.pointerId;
    this.cubeDragging = true;
    this.pointerX = event.clientX; this.pointerY = event.clientY;
    const target = event.currentTarget as HTMLElement;
    target.focus({preventScroll:true});
    target.setPointerCapture(event.pointerId);
  }
  dragCube(event:PointerEvent):void {
    if(event.pointerId !== this.cubePointer)return;
    this.cubeYaw = (this.cubeYaw + (event.clientX-this.pointerX)*0.55) % 360;
    this.cubePitch = (this.cubePitch - (event.clientY-this.pointerY)*0.55) % 360;
    this.pointerX = event.clientX; this.pointerY = event.clientY;
    this.paintCube();
  }
  endCubeDrag(event:PointerEvent):void {
    if(event.pointerId !== this.cubePointer)return;
    this.cubePointer = null;
    this.cubeDragging = false;
    const target = event.currentTarget as HTMLElement;
    if(target.hasPointerCapture(event.pointerId))target.releasePointerCapture(event.pointerId);
  }
  resetCube():void {
    if(this.cubePointer !== null)return;
    this.cubePitch = -22; this.cubeYaw = 0;
    this.cubeAutoRotate = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.paintCube();
  }
  cubeKey(event:KeyboardEvent):void {
    if(event.key === 'Home') { event.preventDefault(); this.resetCube(); return; }
    if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(event.key))return;
    event.preventDefault(); this.cubeAutoRotate = false;
    if(event.key === 'ArrowLeft')this.cubeYaw -= 15;
    if(event.key === 'ArrowRight')this.cubeYaw += 15;
    if(event.key === 'ArrowUp')this.cubePitch += 15;
    if(event.key === 'ArrowDown')this.cubePitch -= 15;
    this.paintCube();
  }
  skills = ['Python', 'FastAPI', 'Django / DRF', 'React', 'Angular', 'TypeScript', 'PostgreSQL', 'AI / RAG', 'LangGraph', 'Three.js / WebGL'];
  constructor(private http:HttpClient, private zone:NgZone) {}
  ngOnInit():void {
    this.http.get<any[]>('assets/experience.json?v=20261015').subscribe({next:items=>{this.experienceData=items;this.selectedExperienceId=items[0]?.id||1;},error:()=>{this.experienceData=[];}});
  }
  selectExperience(id:number):void { this.selectedExperienceId=id; }
  tiltScene(event:PointerEvent):void {
    if(this.cubeDragging || event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
    const box=(event.currentTarget as HTMLElement).getBoundingClientRect();
    this.sceneX=(event.clientY-box.top)/box.height*10-5;
    this.sceneY=(event.clientX-box.left)/box.width*14-7;
  }
  resetScene():void { this.sceneX=0;this.sceneY=0; }
}
