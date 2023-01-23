// Navbar responsive function
function Menu(e){
    let list = document.querySelector('ul');

    e.name === 'menu-sharp' ? (e.name = "close",list.classList.add('top-[80px]'), list.classList.add('opacity-100')): (e.name = "menu-sharp",list.classList.remove('top-[80px]'),list.classList.remove('top-[80px]'))
}

// Arrow button
let button = document.getElementById("scrollbutton");

window.onscroll = function() {
  if (document.body.scrollTop >20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}