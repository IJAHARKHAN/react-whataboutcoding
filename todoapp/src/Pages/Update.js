import {React, useEffect } from 'react'
import { Link, useLocation  } from 'react-router-dom'
import axios from 'axios' 

function Update() {    
    const location = useLocation();
    
 useEffect(() => {

    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');
    
    // console.log('ID from URL:', id);
   
     let url = `https://6697b1c602f3150fb66e9da8.mockapi.io/crud-apis/${id}`;   
            let method = 'GET';
            let headers = 'Access-Control-Allow-Origin';
            // let headers = '';
            let data = {}
            axios({url, method, headers, data}) 
            .then((respose) =>{
                console.log('getUpdateId', respose.data);            
                     
            })
 }, [location])




  return (
    <>   
   
    
     <div className="shadow p-3 mb-5 bg-body-tertiary rounded w-50 mx-auto mt-4"> 
      <div className="d-flex justify-content-between">
      <h3>Update</h3> 
      <div className="form-check form-switch">        
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>  
       </div>
      </div>
        
        <hr/>

        <div className="row">
          <div className="col-12 mt-1">
              <form>
              <div className="mb-3">
                <label htmlFor="Name" className="form-label">Name</label>
                <input type="text" className="form-control" id="Name" placeholder='Enter Your Name...'/>
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Ente Your Email...'/>                
              </div>

              <button type="submit" className="btn btn-primary">Update</button> <Link to="/read" className="btn btn-primary">Go to List</Link>
            </form>
          </div>
        </div>
        </div>    
    
    </>
  )
}

export default Update

