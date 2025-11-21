import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link, useNavigate } from 'react-router-dom';
import { addApplicationAPI } from "../services/allAPI"

const steps = ['Personal Details', 'Academic Details', 'Cricket Information','Parent / Guardian Details','Declaration'];


function UserInputs({applicationDetails,setApplicationDetails}) {
    const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const navigate = useNavigate()
  // creating state for storing details
// const [applicationDetails,setApplicationDetails] = React.useState({
//   username:"",
//   age:"",
//   dob:"",
//   gender:"",
//   address:"",
//   city:"",
//   state:"",
//   pin:"",
//   moNumber:"",
//   email:"",
//   school:"",
//   course:"",
//   scAddress:"",
//   scNumber:"",
//   role:"",
//   experience:"",
//   batch:"",
//   parent:"",
//   relation:"",
//   paNumber:""
// })

console.log(applicationDetails)


  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const renderSteps = (stepCount)=>{
    switch(stepCount){
        case 0 : return (
            <div>
                <h3>Personal Details</h3>
                <div className="row p-3">
                    <div className="col-md-6">
                    <TextField value={applicationDetails.username} onChange={e=>setApplicationDetails({...applicationDetails,username:e.target.value})} className='me-5' id="standard-basic-name" label="Full Name" variant="standard" />
                    <TextField  value={applicationDetails.age} onChange={e=>setApplicationDetails({...applicationDetails,age:e.target.value})} className='ms-2' id="standard-basic-age" label="Age" variant="standard" />
                    <TextField  value={applicationDetails.address} onChange={e=>setApplicationDetails({...applicationDetails,address:e.target.value})} className=' mt-4 me-4' id="standard-basic-address" label="Address" variant="standard" />
                    <TextField  value={applicationDetails.city} onChange={e=>setApplicationDetails({...applicationDetails,city:e.target.value})} className=' mt-4 ms-4' id="standard-basic-city" label="City" variant="standard" />
                    <TextField  value={applicationDetails.moNumber} onChange={e=>setApplicationDetails({...applicationDetails,moNumber:e.target.value})} className='mt-4 ' id="standard-basic-mnumber" label="Mobile Number" variant="standard" />
                    </div>
                    <div className="col-md-6">
                    <TextField  value={applicationDetails.dob} onChange={e=>setApplicationDetails({...applicationDetails,dob:e.target.value})} id="standard-basic-dob" label="DOB" variant="standard" />
                    <TextField  value={applicationDetails.gender} onChange={e=>setApplicationDetails({...applicationDetails,gender:e.target.value})} className='ms-5' id="standard-basic-gender" label="Gender" variant="standard" />
                    <TextField  value={applicationDetails.state} onChange={e=>setApplicationDetails({...applicationDetails,state:e.target.value})} className='mt-4'  id="standard-basic-state" label="State" variant="standard" />
                    <TextField  value={applicationDetails.pin} onChange={e=>setApplicationDetails({...applicationDetails,pin:e.target.value})} className='mt-4 ms-5'  id="standard-basic-pin" label="Pin" variant="standard" />
                    <TextField  value={applicationDetails.email} onChange={e=>setApplicationDetails({...applicationDetails,email:e.target.value})} className='mt-4' id="standard-basic-email" label="Email Id" variant="standard" />
                    </div>
                </div>
            </div>
        )
        case 1 : return (
            <div>
                <h3>Academic Details</h3>
                <div className='row p-3'>
                    <TextField  value={applicationDetails.school} onChange={e=>setApplicationDetails({...applicationDetails,school:e.target.value})} id="standard-basic-school" label="Current School / College" variant="standard" />
                    <TextField  value={applicationDetails.course} onChange={e=>setApplicationDetails({...applicationDetails,course:e.target.value})} className='mt-4' id="standard-basic-course" label="Class / Course" variant="standard" />
                    <TextField  value={applicationDetails.scAddress} onChange={e=>setApplicationDetails({...applicationDetails,scAddress:e.target.value})} className='mt-4' id="standard-basic-caddress" label="School / College Address" variant="standard" />
                    <TextField  value={applicationDetails.scNumber} onChange={e=>setApplicationDetails({...applicationDetails,scNumber:e.target.value})} className='mt-4' id="standard-basic-number" label="School / College Contact Number(Optional)" variant="standard" />
                </div>
            </div>
        )
        case 2 : return (
            <div>
                <h3>Cricket Information</h3>
                <div className='row p-3'>
                <TextField  value={applicationDetails.role} onChange={e=>setApplicationDetails({...applicationDetails,role:e.target.value})} id="standard-basic-role" label="Playing Role(Batsman / Bowler / All-Rounder / Wicketkeeper)" variant="standard" />
                <TextField  value={applicationDetails.experience} onChange={e=>setApplicationDetails({...applicationDetails,experience:e.target.value})} className='mt-4' id="standard-basic-experience" label="Previous Experience(School,Club,College,etc.)" variant="standard" />
                <TextField  value={applicationDetails.batch} onChange={e=>setApplicationDetails({...applicationDetails,batch:e.target.value})} className='mt-4' id="standard-basic-batch" label="Preferred Training Batch / Timing" variant="standard" />
                </div>
            </div>
        )
        case 3 : return (
            <div>
                <h3>Parent / Guardian Details</h3>
                <div className='row p-3'>
                <TextField  value={applicationDetails.parent} onChange={e=>setApplicationDetails({...applicationDetails,parent:e.target.value})} id="standard-basic-gname" label="Parent / Guardian Name" variant="standard" />
                <TextField  value={applicationDetails.relation} onChange={e=>setApplicationDetails({...applicationDetails,relation:e.target.value})} className='mt-4' id="standard-basic-relationship" label="Relationship" variant="standard" />
                <TextField  value={applicationDetails.paNumber} onChange={e=>setApplicationDetails({...applicationDetails,paNumber:e.target.value})} className='mt-4' id="standard-basic-pnumber" label="Contact Number" variant="standard" />

                </div>
            </div>
        )
        case 4 : return (
            <div>
                <h3>Declaration</h3>
                <FormGroup className='mt-4'>
                <FormControlLabel required control={<Checkbox />} label="“I hereby declare that all information provided is true, and I agree to abide by the rules and regulations of the academy.” " />
                </FormGroup>
            </div>
        )
        default : return null
    }
  }

  const handleAddApplication = async ()=>{
    const {username,age,dob,gender,address,city,state,pin,moNumber,email} = applicationDetails
    if(!username && !age && !dob && !gender && !address && !city && !state && !pin && !moNumber && !email){
      alert("Please fill the form Completely!!")
    }else{
      console.log("Api Call");
      try{
        const result = await addApplicationAPI(applicationDetails)
        console.log(result);
        if(result.status==201){
          alert("Details Added Successfully!!")
          const {id} = result.data
          navigate(`/application/${id}/view`)
        }
        
      }catch(error){
        console.log(error);
      }
    }
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption"></Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 5, mb: 3 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}></Button>
            <Link to={'/application/:id/view'}><Button className='bg-primary text-white mt-5 mb-5'>View Your Application</Button></Link>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          {/* render contents according to step */}
          <Box>
            {renderSteps(activeStep)}
          </Box>



          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
              </Button>
            )}
            {activeStep === steps.length - 1 ? <Button onClick={handleAddApplication}>Finish</Button> : <Button onClick={handleNext}>Next</Button>}
            
            
            
          </Box>
        </React.Fragment>
      )}
    </Box>
    
  );
}

export default UserInputs
