const imagenes = document.querySelectorAll ('.img-galeria')
const imagenes2 = document.querySelector('.agregar-imagen')
const contenedor = document.querySelector('.imagen-light')
const menu3 = document.querySelector('.menu');

imagenes.forEach(imagen =>{

    imagen.addEventListener('click',()=>{
        aparecerImagen(imagen.getAttribute('src'))
    })
})
contenedor.addEventListener('click',(e)=>{
if(e.target !== imagenes2){
    contenedor.classList.toggle('show')
    imagenes2.classList.toggle('showImage')
    menu3.style.opacity = '1'
    
}

})



const aparecerImagen = (imagen)=>{
    imagenes2.src = imagen;
    contenedor.classList.toggle('show')
    imagenes2.classList.toggle('showImage')
    menu3.style.opacity = '0'
}