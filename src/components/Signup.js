import React from 'react'
import './css/signup.css';
import {useForm} from 'react-hook-form'

export default function Signup (){
 const URL='http://localhost:9191/signup'
 const {register,handleSubmit,errors}=useForm();
  const onSubmit=(data)=>{
   fetch(URL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
   })
  }

  return (      
    <div id="formSignUp">
  <form onSubmit={handleSubmit(onSubmit)} id="form" method="POST" >

    <fieldset>
    <h1>Sign Up</h1>
      <div id="form">
       
<input type="text" name="username" id="username" placeholder="Enter Your Username" {...register('username', { required: true },{minLength:8})} />
        <input type="email" name="email" id="email" placeholder="Email Address" {...register('email', { required: true })} />
        <input type="password" name="password" id="password" placeholder="Enter Password" {...register('password', { required: true },{minLength:8})} />
        {/* <input type="password" name="confirmpassword" id="confirmpassword" placeholder="Confirm Password" {...register('test', { required: true },{minLength:8})} /> */}
        <input type="tel" name="phone" id="phone" placeholder="Telephone Number" {...register('phoneNumber', { required: true })} />
        <input type="address" name="streetAddress" id="address" placeholder="Enter Street Address" {...register('streetAddress', { required: true })} />
        <input type="text" name="city" id="city" placeholder="Enter City" {...register('city', { required: true })} />
        <input type="text" name="zipCode" id="zipcode" placeholder="Enter Zipcode" {...register('zipCode', { required: true },{minLength:5},{maxLength:8})}/>
        <input type="text" name="state" id="state" placeholder="Enter State" {...register('state', { required: true })} />

         {/* <label>
          Select Role:
          <select {...register("roles", { required: true })}>
         <option value="Sensor Owner">Sensor Owner</option>
        <option value="Subscriber">Subscriber</option> 
       </select> 
             </label>  */}
 
      </div>
      <br /><br />
      <input type="submit"/>
    </fieldset>
  </form>
</div>
)

     
}
