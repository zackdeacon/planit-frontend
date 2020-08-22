import React, { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom";
import { Row } from 'antd'
import NavBar from '../../components/NavBar/navbar'
import FinalRenderCard from '../../components/FinalRenderCard/FinalRenderCard'
import './finalrender.css'
import API from '../../utils/API'

export default function FinalRender() {
    const [categories, setCategories] = useState([])
    const [board, setBoard] = useState({
        name: ""
    })
    const { id } = useParams()

    useEffect(() => {
        // API.getMapById(req.params.id)
        API.getMapById(id).then(res => {
            const boardName = res.data.name;
            const categoriesArr = res.data.suggestionCategories;
            setBoard({
                name: boardName
            })
            setCategories(categoriesArr)
        }).catch(err => console.log('err', err))
    }, [])

    return (
        <>
            <img src="/assets/images/andrew-neel-unsplash.jpg" className="render-background" />
            <div className="render-filter-background">
                <NavBar logo="/assets/logos/logotxt.png" width="80px" left="-40px" top="10px" />
                <Row justify="center">
                    <div className="dash-title">
                        <Link className="map-link" to={`/dashboard/${id}`}>{board.name}</Link>
                    </div>
                </Row>
                <FinalRenderCard categores={categories} />
            </div>
        </>
    )
}
