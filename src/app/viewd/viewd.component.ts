import { AfterViewInit, Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import * as Three from "three";

@Component({
  selector: 'app-viewd',
  templateUrl: './viewd.component.html',
  styleUrls: ['./viewd.component.scss']
})
export class ViewdComponent implements OnInit, AfterViewInit {


  @ViewChild('canvas')
  private canvasRef!: ElementRef;

  //Cube Property
  @Input() public rotationSpeedX:number = 0.05;
  @Input() public rotationSpeedY:number = 0.05;
  @Input() public size:number = 200;
  @Input() public texture:string = "assets/images/about.jpeg";

  //Stag Properties
  @Input() public cameraZ: number = 400;
  @Input() public fieldOfView: number = 1;
  @Input('nearClipping') public nearClippingPlane:number = 1;
  @Input('farClipping') public farClipping:number = 2000;

//Private property
  private camera!: Three.OrthographicCamera;

  private get canvas():HTMLCanvasElement{
    return this.canvasRef.nativeElement;
  }

  private loader = new Three.TextureLoader()
  private geometry = new Three.BoxGeometry(2,3,4)
  private material = new Three.MeshBasicMaterial({map: this.loader.load(this.texture)})

  private cube: Three.Mesh = new Three.Mesh(this.geometry, this.material)
  private renderer!: Three.WebGLRenderer;
  private scene!: Three.Scene;

// Creating the Scene

private createScene(){

  console.log('not is use')
  //* Scene
  this.scene = new Three.Scene();
  this.scene.background = new Three.Color(0x00202)
  this.scene.add(this.cube);

  //Camera
  let aspectRation = this.getAspectRation();
  this.camera = new Three.OrthographicCamera(
    100 / - 2, 100 / 2, 100 / 2, 100 / - 2, 1, 1000
  )
  this.camera.position.z = this.cameraZ;

}

private getAspectRation(){
  return this.canvas.clientWidth / this.canvas.clientHeight;
}


private animateCube(){
  this.cube.rotation.x += this.rotationSpeedX;
  this.cube.rotation.y += this.rotationSpeedY;
}


private startrendringLoop(){
  console.log('not is use')
  //Renderer
  this.renderer = new Three.WebGLRenderer({canvas:this.canvas});
  this.renderer.setPixelRatio(devicePixelRatio);
  this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight)

  let component: ViewdComponent = this;
  (function render(){
   requestAnimationFrame(render);
   component.animateCube();
   component.renderer.render(component.scene,component.camera)
  }());

}

  ngAfterViewInit(): void {
    this.createScene();
    this.startrendringLoop();
  }

  ngOnInit(): void {
  console.log('not is use')
  }

}
