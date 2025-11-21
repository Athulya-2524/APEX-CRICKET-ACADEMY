import React from 'react'
import { Link } from 'react-router-dom'
Link

function Pnf() {
    return (
        <div style={{height:'80vh'}} className='d-flex justify-content-center align-items-center p-5 my-3 flex-column'>
            <img width={'50%'} src="http://cbuft.edu.bd/pages/docs/404-error.gif" alt="page not found" />
            <h1>Something went Wrong!!!</h1>
            <Link className='btn btn-primary' to={'/'}>Back to Home</Link>
        </div>
       
    )
}

export default Pnf