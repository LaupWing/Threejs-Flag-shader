import Experience from "./Experience"
import Sizes from "./Utils/Sizes"

export default class Renderer {
   private experience: Experience
   private canvas: HTMLCanvasElement
   private sizes: Sizes
   private scene; 

   constructor(experience: Experience){
      this.experience = experience
      this.canvas = this.experience.canvas
      this.sizes = this.experience.sizes
   }
}