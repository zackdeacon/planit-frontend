import React from 'react'
import NavBar from '../../components/NavBar/navbar'
import MapCard from '../../components/MapCard/mapcard'
// import Chat from '../../'
import './mapdashboard.css'

export default function MapDashboard() {
    return (
        <div className="dash-background">
        <div className="dash-filter-background">
        <NavBar logo="./assets/logos/logotxt.png" width="80px" left="-40px" top="10px"/>
        <MapCard />
        </div>
        </div>
    )
}
