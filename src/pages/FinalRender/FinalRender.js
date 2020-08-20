import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Row } from 'antd'
import NavBar from '../../components/NavBar/navbar'
import FinalRenderCard from '../../components/FinalRenderCard/FinalRenderCard'
import './finalrender.css'
import API from '../../utils/API'

export default function FinalRender(props) {
    const [categories, setCategories] = useState([])
    const [board, setBoard] = useState({
        name: ""
    })
    const { id } = useParams()

    useEffect(() => {
        // API.getMapById(req.params.id)
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
            // console.log(categoriesArr);
        }).catch(err => console.log('err', err))
    }, [])
    
    return (
        <>
            <div className="render-background">
                <div className="render-filter-background">
                    <NavBar logo="/assets/logos/logotxt.png" width="80px" left="-40px" top="10px" />
                    <Row justify="center">
                        <div className="dash-title"><a className="map-link" href=" ">{board.name}</a></div>
                    </Row>
                    <div className="top-buffer"></div>
                    <FinalRenderCard />
                </div>
            </div>
        </>
    )
}
