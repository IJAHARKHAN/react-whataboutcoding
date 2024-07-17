
import { useEffect, React, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios' 


function Read() {
 const [getList, setGetList] = useState([])

//  console.log('getList', getList)

    let navigate = useNavigate()

    let getData = () => {
        let url = 'https://6697b1c602f3150fb66e9da8.mockapi.io/crud-apis';
        let method = 'GET';
        let headers = 'Access-Control-Allow-Origin';
        let data = {}
        axios({url, method, headers, data}) 
        .then((respose) =>{
            // console.log('readRespose', respose.data);
            setGetList(respose.data) 
        
        })  
    }


    let upadateListItem = (e)=>{
        console.log('event', e)
        // navigate('/update')
    }

    let handleDelete = (id) => {
        // console.log('handleDelete', id)
        if (window.confirm("Do you really want to delete?")) {
            let url = `https://6697b1c602f3150fb66e9da8.mockapi.io/crud-apis/${id}`;
            let method = 'DELETE';
            let headers = 'Access-Control-Allow-Origin';
            // let headers = '';
            let data = {}
            axios({url, method, headers, data}) 
            .then((respose) =>{
                //console.log('readRespose', respose.data);            
                getData()        
            })
          }
        
    }

 useEffect(() => {
    getData()
 }, [])
 

  return (
    <>   
   
    
     <div className="shadow p-3 mb-5 bg-body-tertiary rounded w-50 mx-auto mt-4"> 
     
      <div className="d-flex justify-content-between">
      <h3>List</h3> 
      <div><Link to="/" className="btn btn-primary btn-sm">Go to Create</Link></div>
      
      <div className="form-check form-switch">        
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>  
       </div>
      </div>
        
        <hr/>

        <div className="row">
          <div className="col-12 mt-1" style={{overflow:'auto', maxHeight:'calc(100vh - 185px)'}}>
         <table className="table table-sm">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
                
                </tr>
            </thead>
            <tbody>

                { getList && getList.map((list, index) => (
                    <tr key={list.id}>
                    <th scope="row">{index + 1 }</th>
                    <td>{list.name}</td>
                    <td>{list.email}</td>                
                    <td>
                    <div className="d-flex gap-3 align-items-center">
                    <i className="bi bi-pencil-square pointer fs-4 text-success pointer" title='Update List Item' onClick={(e) => {upadateListItem(e)}}></i>    
                    <i className="bi bi-x-square fs-4 text-danger pointer" title='Delete List Item' onClick={() => handleDelete(list.id)}></i>
                    </div>    
                    </td>                
                    </tr> 
                ))
                
            }

            </tbody>
            </table>
          </div>
        </div>
        </div>    
    
    </>
  )
}

export default Read





