import Debug from "./Utils/Debug"

export default class Experience {
   canvas: HTMLCanvasElement
   debug: Debug
   

   constructor(canvas: HTMLCanvasElement){
      this.canvas = canvas
      this.debug = new Debug()
   }
}