import React from 'react'

export default function Room() {
  return (
    <>
    <div class="w3-third w3-margin-bottom">
      <img src="https://www.w3schools.com/w3images/room_single.jpg" alt="Norway" style={{"width":"100%"}}/>
      <div class="w3-container w3-white">
        <h3>Single Room</h3>
        <h6 class="w3-opacity">From $99</h6>
        <p>Single bed</p>
        <p>15m<sup>2</sup></p>
        <p class="w3-large"><i class="fa fa-bath"></i> <i class="fa fa-phone"></i> <i class="fa fa-wifi"></i></p>
        <button class="w3-button w3-block w3-black w3-margin-bottom">Choose Room</button>
    </div>
    </>
  )
}
