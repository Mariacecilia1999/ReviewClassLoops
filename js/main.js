const $ = selector => document.querySelector(selector)

//Exercise one: Traverse array of friends

const friends = ['Mariana', 'Rosana', 'Federica']

const showFriends = (array) =>{
   array.forEach(showFriend =>{
      const container = $('.containerExerciseOne')
      const createUl = document.createElement('ul')
      container.appendChild(createUl)
      console.log(container)
   })
}
showFriends(friends)