import React from 'react'

import img1 from '../../images/icon.jpg'
import './Profile.css'

let name = 'Ronaldo Tunde'
let post =
  'Profile   Thanks for this - Genius Training today - totally turned my head around with my product - and all the past products i sold could have killed it but that is the past'
let quote1 = ' " '
let quote2 = ' " '

function Profile() {
  return (
    <div className="Profile_div">
      <div className="Profile_test">
        <img className="img-fluid Profile_test_img" src={img1} alt="" />
        <h4 className="Profile_div_h">{name}</h4>
        <p className="Profile_P">
          <span>{quote1}</span> {post} <span>{quote2} </span>
        </p>
      </div>
    </div>
  )
}

export default Profile
