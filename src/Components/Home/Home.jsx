import React from 'react'

import '../../Styles/Home/home.css'

function Home(object) {
    // console.log(object);
    return (
        <>
            <section>
                <div className='sun'></div>
                <div className="animation1">
                    <div className="circle1"></div>
                    <div className="circle2"></div>
                    <div className="circle3"></div>
                    <div className="circle4"></div>
                </div>
                <div className="animation">
                    <div className="circle1"></div>
                    <div className="circle2"></div>
                    <div className="circle3"></div>
                    <div className="circle4"></div>
                </div>


                <div className='left'>

                    <h1 className='location'>
                        <i class="fas fa-map-marker-alt" style={{ margin: 30 }}></i>
                        {
                            object.data.name
                        }
                    </h1>
                    <div className="time">
                        {
                            new Date().toString().substring(0, 25)
                        }
                    </div>
                    <div className="temp">

                        <img src={`https://openweathermap.org/img/w/${object.data.weather[0].icon}.png`} alt="" />

                        <h1>
                            {
                                (object.data.main.temp - 273.15).toFixed(2)
                            }<sup>o</sup> C
                        </h1>


                    </div>

                    <div className="other">
                        <div className="wind">
                            <h2>Wind</h2>
                            <div>
                                <i class="fas fa-water"></i>
                                <span>

                                    {
                                        object.data.wind.speed
                                    } m/s
                                </span>
                            </div>
                        </div>

                        <div className="humidity">
                            <h2>Humidity</h2>
                            <div>
                                <i class="fas fa-tint"></i>
                                <span>

                                    {
                                        object.data.main.humidity
                                    } %
                                </span>
                            </div>

                        </div>
                    </div>

                </div>

                <div className='right'>
                    <div className='position'><i class="fas fa-crosshairs"></i>
                        <span>Longitude: {object.data.coord.lon} </span>
                        <i class="fas fa-crosshairs"></i>
                        <span> Latitude: {object.data.coord.lat} </span>
                    </div>

                    <div className='cloud'>
                        <span><i class="fas fa-cloud"></i> Cloud: {object.data.clouds.all} %</span>
                    </div>

                    <div className='temperature'>
                        <span> <i class="fas fa-temperature-high"></i> Max Temprature:
                            {(object.data.main.temp_max - 273.15).toFixed(2)} <sup>o</sup>C
                        </span>

                        <span><i class="fas fa-temperature-low"></i> Min Temprature:
                            {(object.data.main.temp_min - 273.15).toFixed(2)} <sup>o</sup>C
                        </span>
                    </div>

                    <div className='cards'>

                        {

                            object.data.weather.map((value, index) => {
                                return (
                                    <div className='card'>
                                        <img src={`https://openweathermap.org/img/w/${value.icon}.png`} alt="" />
                                        <h3>{value.main}</h3>
                                        <p>{value.description}</p>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </section>
            <footer> ALL RIGHTS ARE RESERVED </footer>
        </>
    )
}

export default Home