const $ = selector => document.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)
const create = element => document.createElement(element)

const numbers = (arrNumbers)=>{
   let numbers = []
   for(number of arrNumbers){
      numbers.push(number *2)
   }
   return numbers
}
console.log(numbers([8,0,10,600]))