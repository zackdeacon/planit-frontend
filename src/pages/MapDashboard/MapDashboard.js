import React, {useState, useEffect} from 'react'
import {Row, Col} from 'antd'
import NavBar from '../../components/NavBar/navbar'
import MapCard from '../../components/MapCard/mapcard'
import Chat from '../../components/Chat/chat'
import API from '../../utils/API'
import './mapdashboard.css'


export default function MapDashboard() {

    const [categories, setCategories] = useState([])
    const [suggestions, setSuggestions] = useState([])

    useEffect(() => {
        // API.getMapById(req.params.id)
        API.getMapById("5f3c16253264400619410260").then(res =>{
            // console.log(res);
            const categoriesArr = res.data.suggestionCategories.map(item => {
                return item
            })
            setCategories(categoriesArr)
            console.log(categoriesArr);
        }).catch(err => console.log('err', err))
    }, [])

    useEffect(()=>{
        // API.getSuggestionForMap().then(res =>{
            
        // })
    })


    return (
        <>
            <div className="dash-background">
                <div className="dash-filter-background"></div>
                <NavBar logo="./assets/logos/logotxt.png" width="80px" left="-40px" top="10px"/>
                
                <Row justify= "center">
                    <div className="dash-title">Bachelor Trip: New Orleans</div>
                </Row>
                
                <div className="top-buffer">
                    <Row justify="space-around">
                        <Col lg={{span:14}} sm={{span:13}} xs={{span:24}}>
                            <MapCard categories={categories}/>
                        </Col>
                        <div className="mid-col-buffer"></div>
                        <Col lg={{span:9}} sm={{span:10}} xs={{span:24}}>
                            <Chat />
                        </Col>
                    </Row>
                </div>
            </div>
            
        </>
    )
}
