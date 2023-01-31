import * as THREE from "three"
import Experience from "../Experience"
import vertexShader from "./shaders/vertex.glsl"
import fragmentShader from "./shaders/fragment.glsl"

export default class Flag {
   private geometry: THREE.PlaneGeometry 
   private material: THREE.RawShaderMaterial

   constructor(experience: Experience){
      
      this.geometry = new THREE.PlaneGeometry(1, 1, 32, 32)
      this.material = new THREE.RawShaderMaterial({
         fragmentShader,
         vertexShader
      })
      const mesh = new THREE.Mesh(this.geometry, this.material)
      experience.scene.add(mesh)
   }
}