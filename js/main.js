const $ = selector => document.querySelector(selector)

//Exercise one: Traverse array of friends

const friends = ['Mariana', 'Rosana', 'Federica']

const showFriends = (array) =>{
   array.forEach(showFriend =>{
      console.log(showFriend)
   })
}
showFriends(friends)