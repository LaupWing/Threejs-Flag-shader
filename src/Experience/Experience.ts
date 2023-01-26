import Debug from "./Utils/Debug"
import * as THREE from "three"
import Sizes from "./Utils/Sizes"
import Camera from "./Camera"
import Renderer from "./Renderer"
import Time from "./Utils/Time"

export default class Experience {
   public canvas: HTMLCanvasElement
   public debug: Debug
   public scene: THREE.Scene
   public sizes: Sizes
   public renderer: Renderer
   public camera: Camera
   public time: Time

   constructor(canvas: HTMLCanvasElement){
      this.canvas = canvas
      this.debug = new Debug()
      this.sizes = new Sizes()
      this.time = new Time()
      this.scene = new THREE.Scene()
      this.camera = new Camera(this)
      this.renderer = new Renderer(this)

      this.sizes.on("resize", () => {
         this.resize()
      })

      this.time.on("tick", () => {
         this.update()
      })
   }

   resize(){
      this.camera.resize()
   }

   update(){
      this.camera.update()
      this.renderer.update()
   }
}