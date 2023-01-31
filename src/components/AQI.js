import React,{useState} from 'react'
import {MapContainer, TileLayer} from 'react-leaflet'
import { CircleMarker,Popup } from 'react-leaflet'
import './css/map.css'
import 'leaflet/dist/leaflet.css'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import L from "leaflet";



const AQI= () => {
  const [startDate, setStartDate] = useState(new Date());
  const [localTime,setLocalTime]=useState('')
  const [aqiType,setAqiType]=useState('hourly')
  const [isDisabled, setIsDisabled] = useState(false);
  const [markers,setMarkers]=useState([])

  // console.log(startDate.toISOString().substring(0,10));
  const date=startDate.toISOString().substring(0,10);
  console.log(date)
  var URL='http://localhost:9191/measurements/all-'+aqiType+'-aqi/'+date;
  console.log(localTime)
   if(aqiType==='hourly'){
    URL=URL+'T'+localTime;
 }
  // console.log(URL)

 const position=[29.772882, -95.348739];



  
 const onSubmit= (e)=>{
  e.preventDefault();
        fetch(URL)
     .then(response=>response.json())
 .then(data=>setMarkers(data))}

 console.log(URL);

 	//determines colors of the bubbles according to AQI breakpoints
   const getColor=(aqi)=> {
		return aqi>300?'Maroon':
		       aqi>200?'Purple':
					 aqi>150?'Red':
					 aqi>100?'Orange':
					 aqi>50?'Yellow':
					        'Green';
	}


  return (
    <div className='container'>
     
     <div className="menu">
     <form onSubmit={onSubmit} id="form" >
 
       <h2>Air Quality Index <br/>
      Data Visualization</h2>
     <p>Select the AQI type</p>
      <select className='dropdown' onChange={(e)=>{
       const selectedAQIType=e.target.value;
       setAqiType(selectedAQIType);
        selectedAQIType==='daily'?setIsDisabled(true):setIsDisabled(false);
     
      }} required>
       <option value="hourly">Hourly</option>
       <option value="daily">Daily</option>
      </select>
     <br/>
     
      <div>
     <p>Select Date and Time</p>
     <DatePicker className='dropdown' selected={startDate} onChange={(date) => setStartDate(date)} required/>
       
     </div> 
     <div>
     <select className='dropdown' onChange={(e)=>{
      const time=e.target.value;
      setLocalTime(time)
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
      </div>
     
     <br />
       <input type="submit"/>
     </form> 
  
     </div>
   <div className="leaflet-map">
    
   
 <MapContainer center={position} zoom={11} scrollWheelZoom={false}>
 
  <TileLayer
     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />

  {markers.map((marker) =>(
   <CircleMarker center={[marker.latitude,marker.longitude]} fillOpacity={1} color={getColor(marker.aqi)} radius={marker.aqi*0.2}>
    <Popup>{marker.aqi}</Popup>
  </CircleMarker>
  ))}
</MapContainer>
{/* const legend = L.control({ position:"bottomright" }); */}



 </div> 


 
     </div>
  )
}


export default AQI