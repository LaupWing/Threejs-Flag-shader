import Debug from "./Utils/Debug"
import * as THREE from "three"

export default class Experience {
   canvas: HTMLCanvasElement
   debug: Debug
   scene: THREE.Scene

   constructor(canvas: HTMLCanvasElement){
      this.canvas = canvas
      this.debug = new Debug()
      this.scene = new THREE.Scene()
   }
}