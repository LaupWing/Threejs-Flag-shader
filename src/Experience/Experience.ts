import Debug from "./Utils/Debug"
import * as THREE from "three"
import Sizes from "./Utils/Sizes"

export default class Experience {
   canvas: HTMLCanvasElement
   debug: Debug
   scene: THREE.Scene
   sizes: Sizes

   constructor(canvas: HTMLCanvasElement){
      this.canvas = canvas
      this.debug = new Debug()
      this.scene = new THREE.Scene()
      this.sizes = new Sizes()

      this.sizes.on("resize", () => {
         this.resize()
      })
   }

   resize(){
      
   }
}