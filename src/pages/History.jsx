import { Box,Paper } from '@mui/material'
import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import { RiArrowGoBackLine } from "react-icons/ri";
import { getHistoryAPI, removeHistoryAPI } from '../services/allAPI';

function History() {

    const [allHistory,setAllHistory] = useState([])
    
    console.log(allHistory);

    useEffect(()=>{
        getHistory()
    },[])

    const getHistory = async ()=>{
        try{
        const result = await getHistoryAPI()
        console.log(result);
        if(result.status==200){
            setAllHistory(result.data)
        }
    }catch(err){
        console.log(err);
     }
    }

    const deleteHistory = async (id)=>{
        try{
            await removeHistoryAPI(id)
            getHistory()
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div>
            <h1 className='text-center my-5'>
            Your Application History
            </h1>
            <Link to={'/'} className='float-end me-5 text-decoration-none bg-primary text-white rounded shadow' style={{marginTop:'-75px'}}> <RiArrowGoBackLine className='mb-1' />Back to Home </Link>
            <Box component="section" className='container-fluid'>
                <div className='row'>
               {
                allHistory.length>0?
                 allHistory?.map(item=>(
                    <div key={item?.id} className="col-md-4">
                        <Paper elevation={3} sx={{my:5,p:5,textAlign:'center'}}>
                            <div className="d-flex justify-content-between">
                                <h6 className='mt-2'>Date :{item?.timeStamp}</h6>
                                <button onClick={()=>deleteHistory(item?.id)} className='btn text-danger ms-5'>Delete your Application <MdDelete /></button>
                            </div>
                            <div className="border rounded p-3">
                                <img className='img-fluid' src={item?.applicationImg} alt="resume" />
                            </div>
                        </Paper>
                    </div>
                 ))
                :
                <p>No Applications!!!!</p>
               }     
                
                        
                </div>
            </Box>
            </div>
            
    )
}

export default History