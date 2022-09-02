console.log("helloo")

// const photo1 = document.querySelector(".photography-container1")
// const photo2 = document.querySelector(".photography-container2")
// const photo3 = document.querySelector(".photography-container3")
// const photo4 = document.querySelector(".photography-container4")
// const photo5 = document.querySelector(".photography-container5")

const photoContainer = document.querySelector(".inner-photography")


const artworkDescription = document.querySelector(".artworkDescription")

const circleBtns = document.querySelectorAll("div.circle-toggle > input")

circleBtns.forEach(btn => {
  btn.addEventListener("click", handlePhotoImageSwitch)
})

function handlePhotoImageSwitch(e){
  switch(e.target.value){
    case "photoImage01":
        photoContainer.innerHTML = `<div class="photography-container1 photo-container"></div>
        <div class="photo-credit">
            <p class="photo-credit-text">existential encounter - who are we? 2008 &#169</p>
        </div>  `
        artworkDescription.innerHTML = ` <p>RECENTLY REVISTED<br>THIS SERIES OF<br>PHOTOS FROM<br>2008</p>`
    break
    case "photoImage02":
        photoContainer.innerHTML = `<div class="photography-container2 photo-container"></div>
        <div class="photo-credit">
            <p class="photo-credit-text">confusion & clarity 2008 &#169</p>
        </div>  `
        artworkDescription.innerHTML = ` <p>SOMETHING WAS<br>GOING ON IN<br> MY HEAD THAT <br> HAS BEEN</p>`
    break
    case "photoImage03":
        photoContainer.innerHTML = `<div class="photography-container3 photo-container"></div>
        <div class="photo-credit">
            <p class="photo-credit-text">2008 &#169</p>
        </div>  `
        artworkDescription.innerHTML = ` <p>EVER SINCE<br>PLAYING OUT<br> IN ALMOST <br> EVERYTHING <br> I DO</p>`
    break
    case "photoImage04":
        photoContainer.innerHTML = `<div class="photography-container4 photo-container"></div>
        <div class="photo-credit">
            <p class="photo-credit-text">infinite gesture 2008 &#169</p>
        </div>  `
        artworkDescription.innerHTML = ` <p>THE IMAGES <br> ARE BOTH <br> QUIET AND<br> LOUD<br> </p>`
    break
    case "photoImage05":
        photoContainer.innerHTML = `<div class="photography-container5 photo-container"></div>
        <div class="photo-credit">
            <p class="photo-credit-text">she was once exactly there 2008 &#169</p>
        </div>  `
        artworkDescription.innerHTML = ` <p>PHOTOGRAPHY<br> HAS THIS ABILITY<br> TO MAKE A <br>SPLIT SECTOND<br> BECOME <br> INFINITE<br> </p>`
    break
    
  
  }
    

}

