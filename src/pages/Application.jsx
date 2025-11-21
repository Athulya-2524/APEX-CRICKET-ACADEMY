import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Preview from '../components/Preview';
import { getApplicationAPI } from '../services/allAPI';
import Edit from '../components/Edit';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


function Application() {
   const {id} = useParams()
   console.log(id);
   const [application,setApplication] = useState({})

   useEffect(()=>{
    getApplicationDetails()
   },[])

   const getApplicationDetails = async ()=>{
    const result = await getApplicationAPI(id)
    console.log(result);
    if(result.status==200){
      setApplication(result.data)
    }
   }
   
   const handleDownloadApplication = async ()=>{
    // creating pdf
    const doc = new jsPDF();
    const preview = document.getElementById("preview")
    // ss of preview
    const canvas = await html2canvas(preview)
    const applicationImg = canvas.toDataURL('image/png')
    console.log(applicationImg);
    const imgWidth = doc.internal.pageSize.getWidth()
    const imgHeight = doc.internal.pageSize.getHeight()
    doc.addImage(applicationImg,'PNG',0,0,imgWidth,imgHeight)
    doc.save(`${application.username}-application.pdf`)
   }

    return (
        
        <div className='ms-5' >

          <div id='preview'>
            <Preview applicationDetails={application}/>
          </div>

             <div className='d-flex text-center justify-content-center mt-4 mb-4'>
              <Edit applicationDetails={application} setApplicationDetails={setApplication}/>
            <Button onClick={handleDownloadApplication} className=' ms-5 bg-primary text-white'>Download Your Application</Button>
            <Link to={'/history'}> <Button className='ms-5 bg-primary text-white'>Your Application History</Button></Link>
            <Link to={'/'}><Button className='ms-5 bg-primary text-white'>Back to Home</Button></Link>
          </div>
          
            </div>


            
    )
}

export default Application