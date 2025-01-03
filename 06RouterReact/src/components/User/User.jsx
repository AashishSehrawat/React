import React from 'react'
import { useParams } from 'react-router-dom'

// In this component, we learn how to get dynamic data form url. 

function User() {
    const {userid} = useParams();
  return (
    <div className='text-center text-3xl bg-slate-600 text-white p-6'>
      User: {userid}
    </div>
  )
}

export default User
