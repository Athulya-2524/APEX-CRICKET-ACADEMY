import { Box,Paper } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import { RiArrowGoBackLine } from "react-icons/ri";


function History() {
    return (
        <div>
            <h1 className='text-center my-5'>
            Your Application History
            </h1>
            <Link to={'/'} className='float-end me-5 text-decoration-none bg-primary text-white rounded shadow' style={{marginTop:'-75px'}}> <RiArrowGoBackLine className='mb-1' />Back to Home </Link>
            <Box component="section" className='container-fluid'>
                <div className='row'>
                    <div className="col-md-4">
                        <Paper elevation={3} sx={{my:5,p:5,textAlign:'center'}}>
                            <div className="d-flex justify-content-between">
                                <button className='btn text-danger ms-5'>Delete your Application <MdDelete /></button>
                            </div>
                            <div className="border rounded p-3">
                                <img className='img-fluid' src="https://www.pdffiller.com/preview/293/870/293870006.png" alt="resume" />
                            </div>
                        </Paper>
                    </div>
                </div>
            </Box>
            </div>
            
    )
}

export default History