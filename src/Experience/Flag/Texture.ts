import * as THREE from "three"
import imgUrl from "./image.png"

export default class Texture {
   constructor(){
      const textureLoader = new THREE.TextureLoader() 
      const flagTexture = textureLoader.load(imgUrl)
   }
}