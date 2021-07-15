const form = document.getElementById('form')

form.addEventListener('submit', e => {
  e.preventDefault()
  alert('Email cadastrado com sucesso!')
  let name = document.getElementById('name').value
  let email = document.getElementById('email').value
  let data = {
    name,
    email
  }
  let convertData = JSON.stringify(data)
  localStorage.setItem('lead', convertData)
})
