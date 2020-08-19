import React, { useState, useEffect } from 'react'
import { Row } from 'antd'
import NavBar from '../../components/NavBar/navbar'
import FinalRenderCard from '../../components/FinalRenderCard/FinalRenderCard'
import './finalrender.css'
import API from '../../utils/API'

export default function FinalRender(props) {

    const [state, setstate] = useState()

    useEffect(() => {
        // API.getSuggestionForMap().then(res =>{

        // })
    }, [])

    return (
        <>
            <div className="render-background">
                <div className="render-filter-background">
                    <NavBar logo="/assets/logos/logotxt.png" width="80px" left="-40px" top="10px" />
                    <Row justify="center">
                        <div className="dash-title"><a className="map-link" href=" ">Bachelor Trip: New Orleans</a></div>
                    </Row>
                    <div className="top-buffer"></div>
                    <FinalRenderCard />
                </div>
            </div>
        </>
    )
}
