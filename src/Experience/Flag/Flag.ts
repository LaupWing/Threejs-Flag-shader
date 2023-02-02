import * as THREE from "three"
import Experience from "../Experience"
import vertexShader from "./shaders/vertex.glsl"
import fragmentShader from "./shaders/fragment.glsl"
import Debug from "../Utils/Debug"
import Time from "../Utils/Time"
import imgUrl from "./image.png"

export default class Flag {
   private geometry: THREE.PlaneGeometry 
   private material: THREE.RawShaderMaterial
   private debug: Debug
   private time: Time
   private mesh: THREE.Mesh

   constructor(experience: Experience){
      this.debug = experience.debug
      this.time = experience.time
      this.geometry = new THREE.PlaneGeometry(1, 1, 32, 32)
      const textureLoader = new THREE.TextureLoader() 
      const flagTexture = textureLoader.load(imgUrl)
      this.material = new THREE.RawShaderMaterial({
         fragmentShader,
         vertexShader,
         uniforms: {
            uFrequency:{
               value: new THREE.Vector2(10, 5)
            },
            uTime: {
               value: 0
            },
            uColor: {
               value: new THREE.Color("orange")
            },
            uTexture:{
               value: flagTexture
            }
         }
      })

      this.mesh = new THREE.Mesh(this.geometry, this.material)
      this.mesh.scale.y = 2 / 3
      const count = this.geometry.attributes.position.count
      const randoms = new Float32Array(count)
      for (let i = 0; i < count; i ++){
         randoms[i] = Math.random()
      }

      this.geometry.setAttribute("aRandom", new THREE.BufferAttribute(randoms, 1))
      experience.scene.add(this.mesh)
      this.setDebug()
   }

   setDebug(){
      if(this.debug.active){
         const debugFolder = this.debug.ui?.addFolder("flag")

         debugFolder?.add(this.material.uniforms.uFrequency.value, "x")
            .name("FrequencyX")
            .min(0)
            .max(20)
            .step(0.01)
         debugFolder?.add(this.material.uniforms.uFrequency.value, "y")
            .name("FrequencyY")
            .min(0)
            .max(20)
            .step(0.01)
      }
   }
   update(){
      this.material.uniforms.uTime.value = this.time.clock.getElapsedTime() 
   }
}