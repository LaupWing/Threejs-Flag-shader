import Debug from "./Utils/Debug"
import * as THREE from "three"
import Sizes from "./Utils/Sizes"
import Camera from "./Camera"

export default class Experience {
   canvas: HTMLCanvasElement
   debug: Debug
   scene: THREE.Scene
   sizes: Sizes
   camera: Camera

   constructor(canvas: HTMLCanvasElement){
      this.canvas = canvas
      this.debug = new Debug()
      this.scene = new THREE.Scene()
      this.sizes = new Sizes()
      this.camera = new Camera(this)

      this.sizes.on("resize", () => {
         this.resize()
      })
   }

   resize(){
      this.camera.resize()
   }
}