import React,{useState} from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import AQI from './AQI';




const Menu = () => {
  
  const [startDate, setStartDate] = useState(new Date());
  const [time,setTime]=useState('')
  const [aqiType,setAqiType]=useState('')
  const [isDisabled, setIsDisabled] = useState(false);
  const [data,setData]=useState([])
  const date=startDate.toISOString().split('T')[0];

  const URL='http://localhost:9191/measurements/all-'+aqiType+'-aqi/'+date+'T'+time;
     const onSubmit=()=>{
      fetch(URL)
      .then((res)=>{return res.json()})
      .then(d=>setData(d))
     }


   
  return (
    <div className="menu">
    <form onSubmit={onSubmit} id="form" >

      <h2>Air Quality Index <br/>
     Data Visualization</h2>
    <p>Select the AQI type</p>
     <select onChange={(e)=>{
      const selectedAQIType=e.target.value;
      setAqiType(selectedAQIType);
      if(selectedAQIType==='daily'){
       setIsDisabled(true);
      }
     }} required>
      <option value="hourly">Hourly</option>
      <option value="daily">Daily</option>
     </select>
    <br/>
    
     <div>
    <p>Select Date and Time</p>
    <DatePicker  selected={startDate} onChange={(date) => setStartDate(date)} required/>
      
    </div> 
    <select onChange={(e)=>{
     const t=e.target.value;
     setTime(t)
     }}  disabled={isDisabled} required>
      
      <option value="00:00:00">00:00:00</option>
      <option value="01:00:00">01:00:00</option>
      <option value="02:00:00">02:00:00</option>
      <option value="03:00:00">03:00:00</option>
      <option value="04:00:00">04:00:00</option>
      <option value="05:00:00">05:00:00</option>
      <option value="06:00:00">06:00:00</option>
      <option value="07:00:00">07:00:00</option>
      <option value="08:00:00">08:00:00</option>
      <option value="09:00:00">09:00:00</option>
      <option value="10:00:00">10:00:00</option>
      <option value="11:00:00">11:00:00</option>
      <option value="12:00:00">12:00:00</option>
      <option value="13:00:00">13:00:00</option>
      <option value="14:00:00">14:00:00</option>
      <option value="15:00:00">15:00:00</option>
      <option value="16:00:00">16:00:00</option>
      <option value="17:00:00">17:00:00</option>
      <option value="18:00:00">18:00:00</option>
      <option value="19:00:00">19:00:00</option>
      <option value="20:00:00">20:00:00</option>
      <option value="21:00:00">21:00:00</option>
      <option value="22:00:00">22:00:00</option>
      <option value="23:00:00">23:00:00</option>
     </select>
    <br/>
    <br /><br />
      <input type="submit"/>
    </form> 
 
    </div>
  )
}

export default Menu