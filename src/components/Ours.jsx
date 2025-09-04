import React from 'react'

export default function Ours() {
  return (
    <>
    <div class="w3-container">
        <h3>Our Hotels</h3>
        <h6>You can find our hotels anywhere in the world:</h6>
  </div>
  
  <div class="w3-row-padding w3-padding-16 w3-text-white w3-large">
    <div class="w3-half w3-margin-bottom">
      <div class="w3-display-container">
        <img src="https://www.w3schools.com/w3images/cinqueterre.jpg" alt="Cinque Terre" style={{"width":"100%"}}/>
        <span class="w3-display-bottomleft w3-padding">Cinque Terre</span>
      </div>
    </div>
    <div class="w3-half">
      <div class="w3-row-padding" style={{"margin":"0 -16px"}}>
        <div class="w3-half w3-margin-bottom">
          <div class="w3-display-container">
            <img src="https://www.w3schools.com/w3images/newyork2.jpg" alt="New York" style={{"width":"100%"}}/>
            <span class="w3-display-bottomleft w3-padding">New York</span>
          </div>
        </div>
        <div class="w3-half w3-margin-bottom">
          <div class="w3-display-container">
            <img src="https://www.w3schools.com/w3images/sanfran.jpg" alt="San Francisco" style={{"width":"100%"}}/>
            <span class="w3-display-bottomleft w3-padding">San Francisco</span>
          </div>
        </div>
      </div>
      <div class="w3-row-padding" style={{"margin":"0 -16px"}}>
        <div class="w3-half w3-margin-bottom">
          <div class="w3-display-container">
            <img src="https://www.w3schools.com/w3images/pisa.jpg" alt="Pisa" style={{"width":"100%"}}/>
            <span class="w3-display-bottomleft w3-padding">Pisa</span>
          </div>
        </div>
        <div class="w3-half w3-margin-bottom">
          <div class="w3-display-container">
            <img src="https://www.w3schools.com/w3images/paris.jpg" alt="Paris" style={{"width":"100%"}}/>
            <span class="w3-display-bottomleft w3-padding">Paris</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="w3-container w3-padding-32 w3-black w3-opacity w3-card w3-hover-opacity-off" style={{"margin":"32px 0"}}>
    <h2>Get the best offers first!</h2>
    <p>Join our newsletter.</p>
    <label>E-mail</label>
    <input class="w3-input w3-border" type="text" placeholder="Your Email address"/>
    <button type="button" class="w3-button w3-red w3-margin-top">Subscribe</button>
  </div>
    </>
  )
}
