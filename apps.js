 var bound=document.querySelector('.bound')
var navbar=document.querySelector('.navbar')
 var navList=document.querySelector('.nav-list')
var rightNav=document.querySelector('.rightNav')



bound.addEventListener('click',()=>{
    rightNav.classList.toggle('view-resp')
    navList.classList.toggle('view-resp')
    navbar.classList.toggle('navheight-resp')

})