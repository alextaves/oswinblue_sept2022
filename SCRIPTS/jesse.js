const jesseAnimated = document.querySelectorAll(".jesse-container1, .jesse-container2, .jesse-container3")

const animatedJesse = gsap.timeline({repeat: -1})
const animatedMobJesse = gsap.timeline({repeat: -1})

animatedJesse
    .set(jesseAnimated, { opacity: .1})
    .to(jesseAnimated, { opacity: 1, delay: .2, stagger: .75, duration: .5})