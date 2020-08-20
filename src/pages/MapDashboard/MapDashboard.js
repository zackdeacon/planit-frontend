import React, { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom";
import { Row, Col, Button, Modal,  } from 'antd'
import NavBar from '../../components/NavBar/navbar'
import MapCard from '../../components/MapCard/mapcard'
import Chat from '../../components/Chat/chat'
import API from '../../utils/API'
import './mapdashboard.css'

export default function MapDashboard(props) {
    const [modal, setModal] = useState({
        visible: false
    })

    const switchModal = () => {
        setModal({
            visible: !modal.visible,
        });
    };

    const handleOk =()=>{
        setModal({
            visible: false
        })
    }

    const handleCancel =()=>{
        setModal({
            visible: false
        })
    }
    const [board, setBoard] = useState({
        name: "",
        creator: "",
        destinations: "",
        guests: "",
        dates: {
            start: "",
            end: ""
        }
    })
    const [categories, setCategories] = useState([])


    const { id } = useParams()

    useEffect(() => {
        API.getMapById(id).then(res => {
            console.log(res.data.name);
            const mapName = res.data.name;
            const mapCreator = res.data.creator;
            const mapDestinations = res.data.destinations;
            const mapGuests = res.data.guests;
            const mapStart = res.data.dates.start;
            const mapEnd = res.data.dates.end;
            const categoriesArr = res.data.suggestionCategories.map(item => {
                return item
            })
            setBoard({
                name: mapName,
                creator: mapCreator,
                destinations: mapDestinations,
                guests: mapGuests,
                dates: {
                    start: mapStart,
                    end: mapEnd
                }
            })
            setCategories(categoriesArr)
        }).catch(err => console.log('err', err))
    }, [])

   const array =[true, false, true];
   const newArray = array.map((value)=> 
        <li>{value}</li>
   )
    console.log("new array",newArray)
    return (
        <>
            <div className="dash-background">
                <div className="dash-filter-background">
                    <NavBar logo="/assets/logos/logotxt.png" width="80px" left="-40px" top="10px" />

                    <Row justify="center">
                        <div className="dash-title"><Link onClick={switchModal}>{board.name.toUpperCase()}</Link></div>
                        <div className="dash-sub-title"><ul>{newArray}</ul></div>
                    
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
            <Modal
                title={board.name.toUpperCase()}
                visible={modal.visible}
                onOk={handleOk}
                onCancel={handleCancel}
                okButtonProps={{ disabled: false }}
                footer={[
                    <Button key="back" onClick={handleOk}>
                      Got it!
                    </Button>
                  ]}
                >
                    <p>created by: {board.creator}</p>

                    <p>destination: {board.destinations}</p>
                    <p>guests: {board.guests}</p>
                    <p>start date: {board.dates.start}</p>
                    <p>end date: {board.dates.end}</p>
                    
            </Modal>
        </>
    )
}
