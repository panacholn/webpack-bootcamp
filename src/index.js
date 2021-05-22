const input = document.getElementById('name-input');
const button = document.getElementById('submit-btn');

let name = undefined

input.addEventListener('change', (e) => {
  name = e.target.value
})

button.addEventListener('click', (e) => {
  event.preventDefault()
  if (name) {
    alert(`Hello, ${name}`)
  } else {
    alert(`Hello, what is your name?`)
  }
})