import React, { useEffect, useState } from 'react'
import Home from './Components/Home/Home';

function App() {

    let [weatherdata, updatewaetherdata] = useState(null);

    let [location, updatelocation] = useState("mumbai");

    async function getdata(string) {
        updatewaetherdata(null)
        try {

            // any response  returned by the  respective backend
            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${string.toLowerCase()}&appid=9202cdd3bbcd3836224793b27b4882c3`)


            // console.log(response);


            let result = await response.json();


            // status code returned the backend
            // console.log(response.status);
            // console.log(result);
            // 
            if (result.cod == 200) {
                updatewaetherdata(result)

            } else {

            }

        } catch (error) {
            // console.log(error);
        }
    }

    // getdata()    
    let useEfferctCallback = () => {
        getdata(location)
    }
    let useEffectDependancyList = []
    useEffect(useEfferctCallback, useEffectDependancyList);
    return (
        <>
            <header>
                <h1>WEATHER WEBSITE</h1>
            </header>

            <input type="text" name="location" id="location" onChange={(event) => {
                updatelocation(event.target.value)
                getdata(event.target.value)
            }} value={
                location
            } placeholder='Enter location' />
            {
                !!weatherdata ? (
                    <>
                        <Home data={weatherdata} />
                    </>
                ) : (
                    <>
                        <aside>
                            <div>¯\_(ツ)_/¯</div>
                            <div>No Result Found For '{location}'</div>
                        </aside>
                    </>
                )
            }

            <footer> ALL RIGHTS ARE RESERVED </footer>

        </>
    )
}

export default App