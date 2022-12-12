const menu1 = document.querySelector('.menu');
const menu2 = document.querySelector('.menu-navegacion');
console.log(menu1);
console.log(menu2);

menu1.addEventListener('click',() =>{
menu2.classList.toggle("spread")
});
window.addEventListener('click',e=>{
if(menu2.classList.contains('spread')
   && e.target != menu2 && e.target != menu1){
    menu2.classList.toggle("spread")
   }

})