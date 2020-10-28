const FACIL = document.getElementById('facil')
const MEDIO = document.getElementById('medio')
const SUPREMO = document.getElementById('supremo')
let n; 

// function level()
// {
   
//    let sonido = document.createElement("audio")
//    sonido.setAttribute("src", "https://omarsav.com/audio/level.mp3")
//    sonido.setAttribute("autoplay", "autoplay")
//    document.body.appendChild(sonido);

//    return n = "facil"
// }

// // level()
// return level

function soundLevel()
{
   var sonido = document.createElement("audio")
   sonido.setAttribute("src", "https://omarsav.com/audio/niveles.mp3")
   sonido.setAttribute("autoplay", "autoplay")
   document.body.appendChild(sonido);
   console.log("hola")
}

FACIL.addEventListener("mouseover", () =>
{
   soundLevel()
})

MEDIO.addEventListener("mouseover", () =>
{
   soundLevel()
})

SUPREMO.addEventListener("mouseover", () =>
{
   soundLevel()
})

FACIL.addEventListener("click", () =>
{
   return n = "facil"
})

MEDIO.addEventListener("click", () =>
{
   return n = "medio"
})

SUPREMO.addEventListener("click", () =>
{
   return n = "supremo"
})

