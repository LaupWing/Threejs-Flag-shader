import Experience from "./Experience"
import Sizes from "./Utils/Sizes"
import * as THREE from "three"
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"

export default class Camera {
   private experience: Experience
   private sizes: Sizes
   private scene: THREE.Scene
   private canvas: HTMLCanvasElement
   private controls: OrbitControls
   public instance: THREE.PerspectiveCamera

   constructor(experience: Experience){
      this.experience = experience
      this.sizes = this.experience.sizes
      this.canvas = this.experience.canvas
      this.scene = this.experience.scene 
      this.instance = new THREE.PerspectiveCamera(
         75,
         this.sizes.width /this.sizes.height,
         0.1,
         100
      )
      this.scene.add(this.instance)
      this.controls = new OrbitControls(this.instance, this.canvas)
      this.controls.enableDamping = true
   }
   
   resize(){
      this.instance.aspect = this.sizes.width / this.sizes.height
      this.instance.updateProjectionMatrix()
   }
}