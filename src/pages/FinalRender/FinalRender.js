import React from 'react'
import NavBar from '../../components/NavBar/navbar'
import FinalRenderCard from '../../components/FinalRenderCard/FinalRenderCard'
// import Chat from '../../'
// import './mapdashboard.css'

export default function FinalRender() {
    return (
        <>
        <div className="render-background">
            <div className="render-filter-background">
                <NavBar logo="./assets/logos/logotxt.png" width="80px" left="-40px" top="10px"/>
                <FinalRenderCard />
            </div>
        </div>
        </>
    )
}
