import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { updateApplicationAPI } from '../services/allAPI';
import { useParams } from "react-router-dom";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  maxHeight:'80vh',
  overflowY:'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Edit({applicationDetails,setApplicationDetails}) {
    const [open,setOpen] = useState(false)

    const { id } = useParams();


    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);   

    const handleApplicationUpdate = async ()=>{
        const {username,age,dob,gender,address,city,state,pin,moNumber,email} = applicationDetails
    if(!username && !age && !dob && !gender && !address && !city && !state && !pin && !moNumber && !email){
        alert("Fill the Form Completely!!!")   
    }else{
        // api
        console.log("Api Call");
        try{
            const result = await updateApplicationAPI(id,applicationDetails)
            console.log(result);
            if(result.status==200){
                alert("Changes updated successfully.")
                handleClose()
            }
        }catch(err){
            console.log(err);
        }  
     }
    }

    return (
        <div>
            <Button onClick={handleOpen} className='ms-5 bg-primary text-white'>Edit Your Application</Button>
            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Your Application
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {/* personal details */}
           <div>
                           <h3>Personal Details</h3>
                           <div className="row p-3">
                               
                               <TextField value={applicationDetails.username} onChange={e=>setApplicationDetails({...applicationDetails,username:e.target.value})} className='' id="standard-basic-name" label="Full Name" variant="standard" />
                               <TextField  value={applicationDetails.age} onChange={e=>setApplicationDetails({...applicationDetails,age:e.target.value})} className='mt-4' id="standard-basic-age" label="Age" variant="standard" />
                               <TextField  value={applicationDetails.address} onChange={e=>setApplicationDetails({...applicationDetails,address:e.target.value})} className=' mt-4' id="standard-basic-address" label="Address" variant="standard" />
                               <TextField  value={applicationDetails.city} onChange={e=>setApplicationDetails({...applicationDetails,city:e.target.value})} className=' mt-4' id="standard-basic-city" label="City" variant="standard" />
                               <TextField  value={applicationDetails.moNumber} onChange={e=>setApplicationDetails({...applicationDetails,moNumber:e.target.value})} className='mt-4 ' id="standard-basic-mnumber" label="Mobile Number" variant="standard" />
                               
                               
                               <TextField  value={applicationDetails.dob} onChange={e=>setApplicationDetails({...applicationDetails,dob:e.target.value})} id="standard-basic-dob" label="DOB" variant="standard" />
                               <TextField  value={applicationDetails.gender} onChange={e=>setApplicationDetails({...applicationDetails,gender:e.target.value})} className='mt-4' id="standard-basic-gender" label="Gender" variant="standard" />
                               <TextField  value={applicationDetails.state} onChange={e=>setApplicationDetails({...applicationDetails,state:e.target.value})} className='mt-4'  id="standard-basic-state" label="State" variant="standard" />
                               <TextField  value={applicationDetails.pin} onChange={e=>setApplicationDetails({...applicationDetails,pin:e.target.value})} className='mt-4'  id="standard-basic-pin" label="Pin" variant="standard" />
                               <TextField  value={applicationDetails.email} onChange={e=>setApplicationDetails({...applicationDetails,email:e.target.value})} className='mt-4' id="standard-basic-email" label="Email Id" variant="standard" />
                               
                           </div>
                       </div>
                 {/* acaedemic details */}
                 <div>
                 <h3>Academic Details</h3>
                 <div className='row p-3'>
                     <TextField  value={applicationDetails.school} onChange={e=>setApplicationDetails({...applicationDetails,school:e.target.value})} id="standard-basic-school" label="Current School / College" variant="standard" />
                     <TextField  value={applicationDetails.course} onChange={e=>setApplicationDetails({...applicationDetails,course:e.target.value})} className='mt-4' id="standard-basic-course" label="Class / Course" variant="standard" />
                     <TextField  value={applicationDetails.scAddress} onChange={e=>setApplicationDetails({...applicationDetails,scAddress:e.target.value})} className='mt-4' id="standard-basic-caddress" label="School / College Address" variant="standard" />
                     <TextField  value={applicationDetails.scNumber} onChange={e=>setApplicationDetails({...applicationDetails,scNumber:e.target.value})} className='mt-4' id="standard-basic-number" label="School / College Contact Number(Optional)" variant="standard" />
                 </div>
             </div>                
                 {/* cricket */}
                 <div>
                 <h3>Cricket Information</h3>
                 <div className='row p-3'>
                 <TextField  value={applicationDetails.role} onChange={e=>setApplicationDetails({...applicationDetails,role:e.target.value})} id="standard-basic-role" label="Playing Role(Batsman / Bowler / All-Rounder / Wicketkeeper)" variant="standard" />
                 <TextField  value={applicationDetails.experience} onChange={e=>setApplicationDetails({...applicationDetails,experience:e.target.value})} className='mt-4' id="standard-basic-experience" label="Previous Experience(School,Club,College,etc.)" variant="standard" />
                 <TextField  value={applicationDetails.batch} onChange={e=>setApplicationDetails({...applicationDetails,batch:e.target.value})} className='mt-4' id="standard-basic-batch" label="Preferred Training Batch / Timing" variant="standard" />
                 </div>
             </div>                
                 {/* parent details */}
               <div>
                 <h3>Parent / Guardian Details</h3>
                 <div className='row p-3'>
                 <TextField  value={applicationDetails.parent} onChange={e=>setApplicationDetails({...applicationDetails,parent:e.target.value})} id="standard-basic-gname" label="Parent / Guardian Name" variant="standard" />
                 <TextField  value={applicationDetails.relation} onChange={e=>setApplicationDetails({...applicationDetails,relation:e.target.value})} className='mt-4' id="standard-basic-relationship" label="Relationship" variant="standard" />
                 <TextField  value={applicationDetails.paNumber} onChange={e=>setApplicationDetails({...applicationDetails,paNumber:e.target.value})} className='mt-4' id="standard-basic-pnumber" label="Contact Number" variant="standard" />
                 </div>
             </div> 
               {/* button */}
               <div className='my-3'>
             <button onClick={handleApplicationUpdate} className='btn btn-primary text-light'>UPDATE</button>
             </div>         
          </Typography>
        </Box>
      </Modal>
        </div>
    )
}

export default Edit