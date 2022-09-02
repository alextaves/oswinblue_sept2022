const whiteOswin = document.querySelector("header.main-header h1 span")
const blueMain = document.querySelector("main")
const blueOuter = document.querySelector("div.outer-container")

const links = document.querySelectorAll("a")
const footer = document.querySelector("footer p")

const indexImageContainer = document.querySelector(".inner-main-content")
const indexDescription = document.querySelector(".artworkDescription")
const tokyoCloseUp = document.querySelector('.tokyo')

const circleBtns = document.querySelectorAll("div.circle-toggle > input")

circleBtns.forEach(btn => {
  btn.addEventListener("click", handleIndexImageSwitch)
})

function handleIndexImageSwitch(e){
  switch(e.target.value){
    case "indexImage01":
      indexImageContainer.innerHTML = `<div class="inner-image-container"></div>`
      indexDescription.innerHTML = `<p class="manly-text">Manly Beach,<br> Sydney, <br>2021</p>`
      whiteOswin.classList.remove("whiteOswin")
      blueMain.classList.remove("blue-mode")
      blueOuter.classList.remove("blue-mode")
      links.forEach(link => {
        link.style.color = "#5A5A5A"
      })
      footer.style.color = "#5A5A5A"
    break
    case "indexImage02":
      indexImageContainer.innerHTML = `<video class="tokyo" autoplay loop muted>
      <source src="/IMAGES/tokyo1964b.mp4" type="video/mp4">
      </video>`
      indexDescription.innerHTML = `<p class="tokyo-text">Tokyo Olympics, 1964<br>A sneak peek<br><span> at an Audio <br>/ Visual project <br>I'm working on<span></p>`
      whiteOswin.classList.remove("whiteOswin")
      blueMain.classList.remove("blue-mode")
      blueOuter.classList.remove("blue-mode")
      links.forEach(link => {
        link.style.color = "#5A5A5A"
      })
      footer.style.color = "#5A5A5A"
    break
    case "indexImage03":
      indexImageContainer.innerHTML = `<video class="tokyo tokyo-closeup" autoplay loop muted>
      <source class="tokyo" src="/IMAGES/tokyo-closeup2.mp4" type="video/mp4">
      </video>`
      indexDescription.innerHTML = `<p class="mantra">Fashion, sound,<br>
      design, art <br>& writing<br>
      are tenticles <br> from the<br>same thing
      </p>` 
      whiteOswin.classList.add("whiteOswin")
      blueMain.classList.add("blue-mode")
      blueOuter.classList.add("blue-mode")
      links.forEach(link => {
        link.style.color = "white"
      })
      footer.style.color = "white"
      break
  
  
  }
    

}





// indexImageBtn1.addEventListener("click", ()=>{
//     indexImageContainer.innerHTML = `<div class="inner-image-container"></div>`
//     indexDescription.innerHTML = `<p class="manly-text">Manly Beach,<br> Sydney, <br>2021</p>`
//     indexBody.style.backgroundColor = "#5A5A5A"
//     outerContainer.style.backgroundColor = "white";
//     alternateHeader.style.color = "#5A5A5A"
//     mainBackground.style.backgroundColor = "#eeeded"
//     links.forEach(link => {
//       link.style.color = "#5A5A5A"
//     })
//     footer.style.color = "#5A5A5A"
// })

// indexImageBtn2.addEventListener("click", ()=>{
//     indexImageContainer.innerHTML = `<video class="tokyo" autoplay loop muted>
//     <source src="/IMAGES/tokyo1964b.mp4" type="video/mp4">
//   </video>`
//   indexDescription.innerHTML = `<p class="tokyo-text">Tokyo Olympics,<br> 1964, <br>
//   A sneak peek at an Audio <br>/ Visual project I'm working on</p>`
//     indexBody.style.backgroundColor = "#5A5A5A"
//     outerContainer.style.backgroundColor = "white";
//     alternateHeader.style.color = "#5A5A5A"
//     mainBackground.style.backgroundColor = "#eeeded"
//     links.forEach(link => {
//       link.style.color = "#5A5A5A"
//     })
//     footer.style.color = "#5A5A5A"
    
// })
// indexImageBtn3.addEventListener("click", ()=>{
//     indexImageContainer.innerHTML = `<video class="tokyo tokyo-closeup" autoplay loop muted>
//     <source class="tokyo" src="/IMAGES/tokyo-closeup2.mp4" type="video/mp4">
//   </video>`
//   indexDescription.innerHTML = `<p class="mantra">Fashion, sound,<br>
//   design, art & writing<br>
//   are tenticles from<br> 
//   the same thing
// </p>`
//   indexBody.style.backgroundColor = "white"
//   outerContainer.style.backgroundColor = "#3502FF";
//   alternateHeader.style.color = "white"
//   mainBackground.style.backgroundColor = "#3502FF"
//   links.forEach(link => {
//     link.style.color = "white"
//   })
//   footer.style.color = "white"
  
  
    
// })