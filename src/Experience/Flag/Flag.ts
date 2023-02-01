import * as THREE from "three"
import Experience from "../Experience"
import vertexShader from "./shaders/vertex.glsl"
import fragmentShader from "./shaders/fragment.glsl"
import Debug from "../Utils/Debug"

export default class Flag {
   private geometry: THREE.PlaneGeometry 
   private material: THREE.RawShaderMaterial
   private debug: Debug

   constructor(experience: Experience){
      this.debug = experience.debug
      this.geometry = new THREE.PlaneGeometry(1, 1, 32, 32)
      this.material = new THREE.RawShaderMaterial({
         fragmentShader,
         vertexShader,
         uniforms: {
            uFrequency:{
               value: new THREE.Vector2(10, 5)
            }
         }
      })

      const mesh = new THREE.Mesh(this.geometry, this.material)
      const count = this.geometry.attributes.position.count
      const randoms = new Float32Array(count)
      for (let i = 0; i < count; i ++){
         randoms[i] = Math.random()
      }

      this.geometry.setAttribute("aRandom", new THREE.BufferAttribute(randoms, 1))
      experience.scene.add(mesh)
   }

   setDebug(){
      if(this.debug){
         
      }
   }
}