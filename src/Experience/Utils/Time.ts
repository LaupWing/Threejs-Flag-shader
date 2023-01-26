import { EventEmitter } from "./EventEmitter"

export default class Time extends EventEmitter {
   private start: number
   private current: number
   public elapsed: number
   public delta: number

   constructor(){
      super()
      this.start = Date.now()
      this.current = this.start
      this.elapsed = 0
      this.delta = 0

      window.requestAnimationFrame(()=>{
         this.tick()
      })
   }

   tick(){
      const currentTime = Date.now()
      this.delta = currentTime - this.current
      this.current = currentTime
      this.elapsed = this.current - this.start

      this.trigger("tick")
      
      window.requestAnimationFrame(() => {
         this.tick()
      })
   }
}