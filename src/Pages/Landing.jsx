import React from 'react'

const Landing = () => {
  return (
    <div className='container w-50'>

  <div className='mt-5 '  >
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
 
  <button className='mb-3'  type="submit" class="btn btn-primary">Submit</button>


{/* table */}
<table style={{marginBottom:'120px'}} class="table border border-1 mt-4 ">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  
  </tbody>
</table >

    </div>
  )
}

export default Landing