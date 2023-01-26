import * as THREE from "three"
import Experience from "../Experience"

export default class Flag {
   private geometry: THREE.PlaneGeometry 

   constructor(experience: Experience){
      
      this.geometry = new THREE.PlaneGeometry(1, 1, 32, 32)
      const material = new THREE.MeshBasicMaterial({color: "orange"})
      const mesh = new THREE.Mesh(this.geometry, material)
      experience.scene.add(mesh)
   }
}