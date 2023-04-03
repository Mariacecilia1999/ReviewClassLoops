const $ = selector => document.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)
const create = element => document.createElement(element)

const scores = (value) =>{
   let accumulator = 0
   for(const score of value){
      accumulator += score
      if(accumulator > 200){
         accumulator += 50
         console.log(`Accumulator adds 50 points: ${accumulator}`)
      }
   }
   console.log(accumulator)
}
scores([0,50])
scores([200, 50])