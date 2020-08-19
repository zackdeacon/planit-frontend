import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Row, Col } from 'antd'
import NavBar from '../../components/NavBar/navbar'
import MapCard from '../../components/MapCard/mapcard'
import Chat from '../../components/Chat/chat'
import API from '../../utils/API'
import './mapdashboard.css'

export default function MapDashboard(props) {
    const [board, setBoard] = useState({
        name: ""
    })
    const [categories, setCategories] = useState([])


    const { id } = useParams()

    useEffect(() => {
        API.getMapById(id).then(res => {
            console.log(res.data.name);
            const boardName = res.data.name;
            const categoriesArr = res.data.suggestionCategories.map(item => {
                return item
            })
            setBoard({
                name: boardName
            })
            setCategories(categoriesArr)
        }).catch(err => console.log('err', err))
    }, [])


    return (
        <>
            <div className="dash-background">
                <div className="dash-filter-background">
                    <NavBar logo="/assets/logos/logotxt.png" width="80px" left="-40px" top="10px" />

                    <Row justify="center">
                        <div className="dash-title">{board.name}</div>
                    </Row>

                    <div className="top-buffer">
                        <Row justify="space-around">
                            <Col lg={{ span: 14 }} sm={{ span: 13 }} xs={{ span: 24 }}>
                                <MapCard categories={categories} />
                            </Col>
                            <div className="mid-col-buffer"></div>
                            <Col lg={{ span: 9 }} sm={{ span: 10 }} xs={{ span: 24 }}>
                                <Chat />
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>

        </>
    )
}
