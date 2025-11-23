import React from 'react'
import UserInputs from '../components/UserInputs'
import Preview from '../components/Preview'


function UserForm() {
    const [applicationDetails,setApplicationDetails] = React.useState({
      username:"",
      age:"",
      dob:"",
      gender:"",
      address:"",
      city:"",
      state:"",
      pin:"",
      moNumber:"",
      email:"",
      school:"",
      course:"",
      scAddress:"",
      scNumber:"",
      role:"",
      experience:"",
      batch:"",
      parent:"",
      relation:"",
      paNumber:""
    })
    
    return (
        <div className='my-1' style={{height:'450px',width:'100%',backgroundImage:'url("https://static.vecteezy.com/system/resources/thumbnails/040/507/040/small/white-cricket-ball-on-wooden-racket-concept-sport-equipment-competitive-sport-a-cricket-ball-is-made-with-a-core-of-cork-covered-by-a-leather-case-with-a-slightly-raised-sewn-seam-photo.JPG")',width:'100%',backgroundPosition:'top',backgroundSize:'cover'}}>
            <div className="row p-5">
                <div >
                    <UserInputs applicationDetails={applicationDetails} setApplicationDetails={setApplicationDetails}/>
                </div>
                <div className="col-lg-6">
                  
                    {/* <Preview applicationDetails={applicationDetails}  /> */}
                </div>
            </div>
        </div>
    )
}

export default UserForm