document.getElementById('login-btn').addEventListener('click',() =>{
const userValue = document.getElementById('input-userID')
const passwordValue = document.getElementById('input-password')
  if(userValue.value == 'admin' && passwordValue.value == 'admin123'){
    alert('Login successful.')
    window.location.assign("home.html")
  }
  else{
    alert('Incorrect username and password!')
  }
})
