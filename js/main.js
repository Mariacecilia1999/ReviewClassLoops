const $ = selector => document.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)
const create = element => document.createElement(element)

const firstLetter = (values) =>{
   let letters = ''
   for(letter of values){
      letters += letter.charAt(0)
   }
   return letters

}

console.log(firstLetter(['Mariana', 'Rosana', 'Federica']))