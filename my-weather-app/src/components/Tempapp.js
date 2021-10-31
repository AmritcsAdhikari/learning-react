//https://openweathermap.org/api

import React, {useState, useEffect} from "react";
import "./css/style.css";


const Tempapp = ()=>{


    
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("dallas");

    useEffect(()=>{
       const fetchAPI = async () => {
           const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=3270ad10c116928ed2064315d77fea9e`;
           const response = await fetch(url);
           const resJson = await response.json();


           setCity(resJson.main);
       };


        fetchAPI();
    },[search] )
    return (
        <>
            <div className="box">
            <h1>React Weather App</h1>
                <div className="inputData">
                    <input type="search" name="" value={search} className="inputField" onChange= {(event)=>{
                       setSearch(event.target.value);
                    }}/>
                </div>
            
{
    !city? (
        <p>No data Found!</p>
    ) : (
<div>
<div className="info">
<h2 className="location">
<i className="fas fa-cloud-sun-rain"> {search}</i>
</h2>
<h1 className="temp">
    {city.temp}
</h1>
<h3 className="tempmin_max">Min: {city.temp_min} degree Cel  | Max: {city.temp_max} degree Cel</h3>
</div>       
<div className="wave-one"> </div>
<div className="wave-two"> </div>
<div className="wave-three"> </div>
</div>
    )
}

                
            </div>  
        </>
    )
}

export default Tempapp;