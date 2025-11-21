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
        <div className='container'>
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