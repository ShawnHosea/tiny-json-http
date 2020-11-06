module.exports =  function userCard(user) {

 return `
    <div>
        <div>
            <img src="${user.avatar}"/>
            <p>${user.first_name} ${user.last_name}</p>
            <p>${user.email} </p>
      </div>
    </div>
    `
}