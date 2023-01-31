import React from 'react'
import {useForm} from 'react-hook-form'

export default function Login(){
 const URL='http://localhost:9191/login';

 const {register,handleSubmit,errors}=useForm();
 const onSubmit=(data)=>{
  fetch(URL, {
   method: 'POST',
   body: JSON.stringify(data),
   headers: {'Content-Type': 'application/json'},
  })
 }

  return (
   <div id="formLogin">
   <form onSubmit={handleSubmit(onSubmit)} id="form" method="POST" >
     <fieldset>
       <h1>Log in</h1>
       <div id="form">
         <input type="text" name="username" id="username" placeholder="Enter Your Username" {...register('username', { required: true })}/>
         <input type="password" name="password" id="password" placeholder="Enter Password" {...register('password', { required: true })}/>
      
       </div>
       <br /><br />
       <input type="submit"/>
     </fieldset>
   </form>
 </div>
  )
};

