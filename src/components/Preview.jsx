import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
Link


function Preview({applicationDetails}) {
    return (
        <>
        <div className='container shadow p-5 rounded ms-5 mt-5'>
            <h4 className='text-center' style={{fontFamily:'-apple-system',height:'70px'}}>
            APEX CRICKET ACADEMY
            </h4>
            <h5>1.Personal Details</h5>
            <h6>Full Name :{applicationDetails?.username}</h6>
            <h6>Age :{applicationDetails?.age}</h6>
            <h6>DOB :{applicationDetails?.dob}</h6>
            <h6>Gender :{applicationDetails?.gender}</h6>
            <h6>Address :{applicationDetails?.address}</h6>
            <h6>City :{applicationDetails?.city}</h6>
            <h6>State :{applicationDetails?.state}</h6>
            <h6>Pin :{applicationDetails?.pin}</h6>
            <h6>Mobile Number :{applicationDetails?.moNumber}</h6>
            <h6>Email Id :{applicationDetails?.email}</h6>
            <hr />
            <h5>2.Academic Details</h5>
            <h6>Current School / College :{applicationDetails?.school}</h6>
            <h6>Class / Course :{applicationDetails?.course}</h6>
            <h6>School / College Address :{applicationDetails?.scAddress}</h6>
            <h6>School / College Contact Number(Optional) :{applicationDetails?.scNumber}</h6>
            <hr />
            <h5>3.Cricket Information</h5>
            <h6>Playing Role(Batsman / Bowler / All-Rounder / Wicketkeeper) :{applicationDetails?.role}</h6>
            <h6>Previous Experience(School,Club,College,etc.) :{applicationDetails?.experience}</h6>
            <h6>Preferred Training Batch / Timing :{applicationDetails?.batch}</h6>
            <hr />
            <h5>4.Parent / Guardian Details</h5>
            <h6>Parent / Guardian Name :{applicationDetails?.parent}</h6>
            <h6>Relationship :{applicationDetails?.relation}</h6>
            <h6>Contact Number :{applicationDetails?.paNumber}</h6>
            
            

          {/* <div className='d-flex text-center justify-content-center'>
              <Button className='ms-5 bg-primary text-white'>Edit</Button>
            <Button className=' ms-5 bg-primary text-white'>Download</Button>
            <Link to={'/history'}> <Button className='ms-5 bg-primary text-white'>History</Button></Link>
            <Link to={'/'}><Button className='ms-5 bg-primary text-white'>Home</Button></Link>
          </div> */}
            </div>
        </>
       
    )
}

export default Preview