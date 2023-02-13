import Experience from "./Experience"
import Sizes from "./Utils/Sizes"
import * as THREE from "three"
import Camera from "./Camera"

export default class Renderer {
   private experience: Experience
   private canvas: HTMLCanvasElement
   private sizes: Sizes
   private scene: THREE.Scene 
   private camera: Camera
   private instance: THREE.WebGLRenderer

   constructor(experience: Experience){
      this.experience = experience
      this.canvas = this.experience.canvas
      this.sizes = this.experience.sizes
      this.scene = this.experience.scene
      this.camera = this.experience.camera
      this.instance = new THREE.WebGLRenderer({
         canvas: this.canvas,
         antialias: true
      })
      this.instance.setSize(this.sizes.width, this.sizes.height)
      this.instance.setPixelRatio(Math.min(window.devicePixelRatio, 2))
   }

   resize(){
      this.instance.setSize(this.sizes.width, this.sizes.height)
      this.instance.setPixelRatio(Math.min(window.devicePixelRatio, 2))
   }

   update(){
      this.instance.render(this.scene, this.camera.instance)
   }
}