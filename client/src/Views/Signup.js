import "./App.css";
import { useState } from "react";

//import { Formik, Form, Field } from "formik";
//import * as Yup from "yup";

const Signup = ()=>{
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    if(localStorage.getItem("token")){
        window.location.href = "/home";
    }
/*
    const signupSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, "Name must be 3 characters at minimum")
            .required("Name is required"),
        phoneNumber: Yup.string()
            .min(11,11, "Phone number must be 3 characters at minimum")
            .required("Phone number is required"),
        email: Yup.string()
          .email("Invalid email address format")
          .required("Email is required"),
        password: Yup.string()
          .min(3, "Password must be 3 characters at minimum")
          .required("Password is required"),
      });
*/

    const handleSubmit = event => {
      event.preventDefault(); 
      console.log(name,phoneNumber,email,password);
      setName('');
      setPhoneNumber('');
      setEmail('');
      setPassword('');
      window.location.href = "/login";
    };



return (
  <>
<div className='App-header'>
        <div className="card">
        <form onSubmit={handleSubmit}>
          <label>Name</label><br/>
            <input class="input" type="text" value={name} onChange={(e)=>setName(e.target.value)}/><br/>
        <label>Phone number </label><br/>
            <input class="input" type="text" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/><br/>
        <label>Email</label><br/>
            <input class="input" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
        <label>Password</label><br/>
            <input class="input" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
            <button type="submit" class="button">Submit</button>
            <a href="/login" class="button">Have account?</a>

        </form>
        </div>
    </div>
</>    
);

}
export default Signup;

