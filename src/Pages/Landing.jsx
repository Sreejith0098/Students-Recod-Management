import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div style={{
     height:'73vh', textAlign:'center', 
    }}>
      <h1 style={{paddingTop:'150px'}}>Click here to continue</h1><br />
<Link to={'./home'} className='btn btn-primary mt-3' >
     Get started
</Link>

    </div>
  )
}

export default Landing