const $ = selector => document.querySelector(selector)

//Exercise one: Traverse array of friends

const friends = ['Mariana', 'Rosana', 'Federica']

const showFriends = (array) =>{
   const createUl = document.createElement('ul')
   array.forEach(showFriend =>{
      const container = $('.containerExerciseOne')
      const li = document.createElement('li')
      li.innerText += showFriend



      container.appendChild(createUl)
      createUl.appendChild(li)
      console.log(container)
   })
}
showFriends(friends)