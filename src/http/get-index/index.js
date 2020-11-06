const arc = require('@architect/functions')
let tiny = require('tiny-json-http')
let userCard = require('@architect/views/userCard')

exports.handler = async function http (req) {

  let url = `https://reqres.in/api/users`
  let result = await tiny.get({url})
  let users = result.body.data
  console.log(users)
  
  let cards = users.map(user => userCard(user)).join( " ")
  console.log(cards)

  return {
    statusCode: 200,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body: `
<!DOCTYPE html>
<html lang="en" class="font-sans">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Architect</title>
  <link rel="stylesheet" type="text/css" href="${arc.static('/styles.css')}">
  <link rel="stylesheet" type="text/css" href="${arc.static('/custom.css')}">
</head>
<body class="padding-32">
  <div class="max-width-320">
    <h1>How to use tiny-json-http!</h1>
  </div>
  <div class="userCard">${cards}</div>
</body>
</html>
`
  }
}