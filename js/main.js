const $ = selector => document.querySelector(selector)
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
   })
}

showFriends(['Mariana', 'Rosana', 'Federica'])