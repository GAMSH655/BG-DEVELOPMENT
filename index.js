const barBtn = document.querySelector('.fa-bars')
const navList = document.querySelector(".list")
const cancelBtn =document.querySelector (".cancelbtn")

barBtn.addEventListener('click' , function () {
     console.log('click')
     navList.style.display = "block"
})

cancelBtn.addEventListener('click' , function () {
    console.log('click')
    navList.style.display = "none"
})