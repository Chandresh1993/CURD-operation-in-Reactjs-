import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Read() {

  const [apiData, setApiData] = useState([])

  function getData() {
    axios.get('https://642f1cdb8ca0fe3352e082e0.mockapi.io/crud')
      .then((response) => {
        setApiData(response.data)

      })
  }

  function handleDelete(id) {
    axios.delete(`https://642f1cdb8ca0fe3352e082e0.mockapi.io/crud/${id}`).then(() => {
      getData();
    });

  }

  function setDataToStorage (id,name,age,email){
    localStorage.setItem('id',id);
    localStorage.setItem('name',name);
    localStorage.setItem('age',age);
    localStorage.setItem('email',email);


  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      <div className='row'>
        <div className='col-md-12'>
          <div className='mb-2 mt-2'>
            <Link to='/create'>
              <button className='btn btn-primary'>Create New Data</button>
            </Link>
          </div>
          <table className='table table-bordered table-striped table-dark table-hover'>
            <thead >
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                apiData.map((item) => {
                  return (
                    <>
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.e_name}</td>
                        <td>{item.e_age}</td>
                        <td>{item.e_email}</td>
                        <td>
                          <Link to='/edit'>
                            <button className='btn btn-primary' onClick={() => setDataToStorage(item.id, item.e_name, item.e_age, item.e_email)}>Edit</button>

                          </Link>
                        </td>
                        <td><button onClick={() => { if (window.confirm("are you sure to Delete data ?? ")) { handleDelete(item.id) } }} className='btn btn-danger' >
                          Delete
                        </button>
                        </td>
                      </tr>
                    </>
                  )

                })
              }

            </tbody>
          </table>

        </div>

      </div>


    </>
  )
}

export default Read
