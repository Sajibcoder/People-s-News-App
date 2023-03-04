import React from 'react'

const Footer= () => {
  return (
    
    <div className="container" style={{backgroundColor:' aliceblue'}}>
  <footer className=" py-3 my-4 ">
    <p className="col-md-4 mb-0" style={{fontSize:'20px', color:'blue'}}>© 2023 People's News Organization, Inc, West Bengal</p>
    <div style={{color:'blue'}}>
    <h2>Follow Us</h2>
    <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center', marginTop:'30px', fontSize:'15px',fontWeight:'bold', gap:'10px', width:'50%'}}>
    <a href="https://www.youtube.com/" rel="noreferrer" target="_blank" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none text-danger">Youtube</a>
    <a href="https://www.facebook.com/?_rdc=1&_rdr" rel="noreferrer" target="_blank" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none text-primary">Facebook</a>
    <a href="https://www.instagram.com/" rel="noreferrer" target="_blank" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none text-danger">Instagram</a>
    <a href="https://twitter.com/?lang=en-in" rel="noreferrer" target="_blank"  className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none text-info">Twitter</a>
    </div>
    </div>
  </footer>
</div>
  )
}

export default Footer