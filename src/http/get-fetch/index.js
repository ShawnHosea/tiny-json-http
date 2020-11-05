let arc = require('@architect/functions')
let tiny = require('tiny-json-http')

exports.handler = arc.http.async(userCard)

async function userCard(req) {

  let url = `https://reqres.in/api/users`
  let result = await tiny.get({url})
  let users = result.body.data
  console.log(users)
  // let arr = Array.from(users)
  let userCard = users.map(mapUsers)

  function mapUsers(user) {
    return `
    <div>
      <img src="${user.avatar}"/>
      <p>${user.first_name} ${user.last_name}</p>
      <p></p>
      <p>${user.email} </p>
    </div>
    `
  }

  let html = `
    
   <div>${userCard}</div>`

  return {
    html
  }
}