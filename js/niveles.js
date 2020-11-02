// window.addEventListener('DOMContentLoad', function() 
// {
   const FACIL = document.getElementById('facil')
   const MEDIO = document.getElementById('medio')
   const SUPREMO = document.getElementById('supremo')
   let n; 

   function soundLevel()
   {
      let sound_level = document.createElement("audio")
      sound_level.setAttribute("src", "https://omarsav.com/audio/niveles.mp3")
      sound_level.setAttribute("autoplay", "autoplay")
      document.body.appendChild(sound_level);
      console.log(sound_level)
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
// })
