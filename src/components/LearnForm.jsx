import {useState} from 'react';

const LearnForm = () => {

//   const [firstName,setFirstName ] = useState("")  
//   const [lastName,setLastName ] = useState("")  
//   const handleFirstName = (e) =>{
//     setFirstName(e.target.value);
//   }
//   const handleLastName = (e) =>{
//     setLastName(e.target.value);
//   }
  const [formData,setFormData] = useState({
    'firstName':'',
    'lastName':''
  })

  const handleChange = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const handleFormSubmit = (e)=>{
    e.preventDefault()
    console.log("Submit button clicked",formData)
  }
  return (
    <div>
        <h1>Learn Form</h1>
        {/* <form action="">
            First name : <input type="text" name="firstName" id="" value={firstName} onChange={handleFirstName}/><br />
            Last name : <input type="text" name="lastName" id=""  value={lastName} onChange={handleLastName} /><br />
        </form> */}
        <form action="" onSubmit={handleFormSubmit}>
            First name : <input type="text" name="firstName" id="" value={formData.firstName} onChange={handleChange}/><br />
            Last name : <input type="text" name="lastName" id=""  value={formData.lastName} onChange={handleChange} /><br />
            <button type='submit'>Submit</button>
        </form>


    </div>
  )
}

export default LearnForm