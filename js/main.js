// let menuIcon = document.querySelector('#menu-icon')
// let navbar = document.querySelector('.navbar')
// let selections = document.querySelectorAll('section')
// let navLinks = document.querySelectorAll('header navbar')

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x')
//     navbar.classList.toggle('active')
// }

let close_burger1 = document.getElementById('close_burger')
let open_burger1 = document.getElementById('open_burger')
  
function open_burger() {
    open_burger1.document.style.left = '0px'
} 

function close_burger() {
    open_burger1.document.style.left = '-300%'
} 