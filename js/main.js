const $ = selector => document.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)
const create = element => document.createElement(element)

const scores = (value) =>{
   let accumulator = []
   for(const score of value){
      //accumulator.push(score)
      if(accumulator >= 200){
         accumulator.push(score + 50)
   }else{
      accumulator.push(score)
   }
   return console.log(accumulator)
}}
scores([0,50])
scores([200, 50])