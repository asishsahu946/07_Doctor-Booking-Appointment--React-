import React, { useState } from 'react'
import {assets} from '../assets/assets'

function MyProfile() {
  const [userData, setUserData] = useState({
    name: 'Edward vincent',
    image: assets.profile_pic,
    email: 'abc@gmail.com',
    phone: '2345678901',
    address: {
      line1: '57th cross , Richmond',
      line2: 'Circle, Church Road, London'
    },
    gender: 'male',
    dob: '2000-01-20'
  })

  const [isEdit, setIsEdit] = useState(false)
  return (
    <div>
        <img src={userData.image} alt="" />

        {
          isEdit ?
          <input type='text' /> :
          <p>{userData.name}</p>
        }
    </div>
  )
}

export default MyProfile