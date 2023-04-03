const $ = selector => document.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)
const create = element => document.createElement(element)
//Exercise one PLUS: Traverse array of friends , add a sad face for each <li>

//If I press the face, the friend is removed from the friend from the friends list



const showFriends = (values) =>{
   const containerExercisePlus = $('.containerExerciseOnePlus')
   console.log(containerExercisePlus)
   const ul = create('ul')
   containerExercisePlus.appendChild(ul)
   values.forEach(value =>{
      const li = create('li')
      li.innerText += value
      ul.appendChild(li)
      const span = create('span')
      li.appendChild(span)
      span.classList.add('notFriend')
      const img = create('img')
      span.appendChild(img)
      img.classList.add('imgSadFace')
      img.setAttribute('src', './img/sadFace.png')
      img.style.width = '17px'
      const classImage = $$('.imgSadFace')
      classImage.forEach(img =>{
         img.addEventListener('click', function(){

            //First parentElement span, second parentElement li
            console.log(img.parentElement.parentElement)
            img.parentElement.parentElement.remove()
         })
      })
   }) 
}

showFriends(['Mariana', 'Rosana', 'Federica'])