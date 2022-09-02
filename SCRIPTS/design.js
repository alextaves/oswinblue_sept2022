const clientTextBtns = document.querySelectorAll("li.clientText > button");
const clientDescription = document.querySelector(".client-description")
const clientContainer = document.querySelector(".clients-example")
const thirdBox = document.querySelector(".colorOuter")
const oswaldVertical = document.querySelector(".oswaldVertical")
const testimonial = document.querySelector(".testimonial")
const joefreshbackground = document.querySelector("joefreshbackground")



clientTextBtns.forEach(btn => {
    btn.addEventListener("click", handleClientText)    
})
function handleClientText(e) {
   
    switch(e.target.value){
        case 'hairbydavidText':
            
            clientDescription.innerHTML = `<p>One of Toronto’s top hair salons located in the Fashion District. Project was a complete website redesign that included a chat feature.</p>
            <p>Team-</p>
            <p>Alex - Art Direction and programer</p>
            <p>Brent Kulba - Project Manager, SEO Analytics and programer
            </p>
            <br>
            <a href="http://hairbydavidandco.com" target="_blank">Hair by David & Co</a>`
            clientContainer.innerHTML = `<div class="hairbydavidImage fade-in">
            <img src="IMAGES/hairbydavid.jpg">
            </div>`
            thirdBox.innerHTML = `<div class="davidImageContainer fade-in"></div>`
   
        break;
        case 'joefreshText':
            clientDescription.innerHTML = `<p>One of Canada’s most popular fashion brands. Alex joined the team from the very beginning and quickly was made Graphic Head Designer. Alex’s role entailed - branding concepts, labelling & packaging, textile and fabric art and design. 
            </p>
            <p>Highlights include, Scouts Canada rebranding and the creating the graphic component to the Canadian Athletic Collection.
            </p>
            <br>
            <p class="testimonial">testimonial</p>
            <a href="http://joefresh.ca" target="_blank">Joe Fresh</a>`
            clientContainer.innerHTML = `<div class="joefreshbackground fade-in">
            <div class="testimonial-container">
                <p>"Alex’s work as a designer is energetic
                    and ahead of the curve, merging the
                    worlds of art and design. He worked with
                    me for 8 years as the head of the graphic
                    department at Joe Fresh, and he
                    understood both how to get behind a
                    brand and how to push it forward."</p>
                    <p class="joeSign">Joseph Mimran
                        Founder Joe Fresh
                        Founder Club Monaco
                        Dragon CBC'S Dragon's Den</p>
            </div>
        </div>`
            thirdBox.innerHTML = `<div class="joeImageContainer fade-in"></div>`
                
        break
        case 'oswaldText':
            clientDescription.innerHTML = `<p>Opening in 2016, Oswald’s Gallery & Goods was located in the heart of the Art District in Hamilton ON. Once known as Canada’s Steel city, it went the way of many industrial cities and it’s now a renowned creative hub. Although other contemporary galleries had set up shop before Oswald’s, the collective gallery packed a real punch, quickly becoming the most popular gallery in the city- even receiving a glowing review from the NY Times in the  "Fives Places to visit when in...Hamilton" column.</p>

            <p>Role - curator, designer and artist</p>`
            clientContainer.innerHTML = `<div class="oswaldImage fade-in">
            <div class="oswaldLogo">
                <img src="IMAGES/oswaldlogo.png">
            </div>
            </div>`
            thirdBox.innerHTML = `<div class="oswaldVertical fade-in">
            <div class="animatedFace">
                <img src="IMAGES/oswaldVertical.jpg">
            </div>
        </div>`
        break;
        case 'watchdogText':
            clientDescription.innerHTML = `<p>A law firm located in Sydney, Australia that focuses on compliance law , privacy and data and the new commonwealth legislation regulations for Modern Slavery.</p>
            <p>Team-</p>
            <p>Alex - Art Direction and programer</p>
            <p>Elizabeth - Project Manager and programer
            </p>
            <br>
            <a href="http://watchdogcompliance.com" target="_blank">Watchdog Compliance</a>`
            clientContainer.innerHTML = `<div class="watchdogbackground fade-in"></div>`
            thirdBox.innerHTML = ` <div class="colorDivWatchdog fade-in"></div>`
        break;
        case 'joyText':
            clientDescription.innerHTML = `<p>Up and coming Canadian talent, Joy Debruyn has found herself a new creative direction - songwriter / performer. Alex fell in love with her unusual sound and concept and approached Joy to develop a website concept based around her music.
            </p>
            <br>
            <a href="http://joyofthesky.com" target="_blank">Cosmic Rhythm, by Joy de Bruyn</a>`
            clientContainer.innerHTML = `<div class="hairbydavidImage fade-in">
        
            </div>`
            thirdBox.innerHTML = `<div class="davidImageContainer fade-in"></div>`
        break
    }
}









