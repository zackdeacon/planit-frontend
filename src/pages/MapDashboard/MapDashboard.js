import React, { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom";
import { Row, Col, Button, Modal, Tooltip } from 'antd'
import NavBar from '../../components/NavBar/navbar'
import MapCard from '../../components/MapCard/mapcard'
import Chat from '../../components/Chat/chat'
import API from '../../utils/API'
import './mapdashboard.css'
import Avatar from 'antd/lib/avatar/avatar';
import PhotoUpload from '../../components/PhotoUpload/photoupload';



export default function MapDashboard(props) {
    const [modal, setModal] = useState({
        visible: false
    });

    const [categories, setCategories] = useState([]);

    const [board, setBoard] = useState({
        id: "",
        name: "",
        creator: "",
        destinations: "",
        guests: "",
        dates: {
            start: "",
            end: ""
        }
    });

    const { id } = useParams()


    useEffect(() => {
        API.getMapById(id).then(res => {
            // console.log(res.data.name);
            const mapId = res.data._id;
            const mapImages = res.data.images
            const mapName = res.data.name;
            const mapCreator = res.data.creator;
            const mapDestinations = res.data.destinations;
            const mapGuests = res.data.guests;
            const mapStart = res.data.dates.start;
            const mapEnd = res.data.dates.end;
            const categoriesArr = res.data.suggestionCategories;
            setBoard({
                id: mapId,
                name: mapName,
                creator: mapCreator,
                destinations: mapDestinations,
                guests: mapGuests,
                dates: {
                    start: mapStart,
                    end: mapEnd
                },
                images: mapImages
                
            })
            setCategories(categoriesArr)
           
        }).catch(err => console.log('err', err))
    }, [])

    const switchModal = () => {
        setModal({
            visible: !modal.visible,
        });
    };

    const handleOk = () => {
        setModal({
            visible: false
        })
    }

    const handleCancel = () => {
        setModal({
            visible: false
        })
    }

    const boardDestination = board.destinations
    const destinationArr = []
    for (let i = 0; i < boardDestination.length; i++) {
        destinationArr.push(<li key={i}>{boardDestination[i]}</li>)
    }
    const destinationList = destinationArr.map((name) => name)


    const boardguests = board.guests
    const guestArr = []
    for (let i = 0; i < boardguests.length; i++) {
        guestArr.push(<li>{boardguests[i]}</li>)
    }
    const guestList = guestArr.map((name) => name)


    return (
        <>
            <img src="/assets/images/charlotte-noelle-unsplash.jpg" className="dashboard-bg" />
            <div className="dash-filter-background">
                <NavBar logo="/assets/logos/logotxt.png" width="80px" left="-40px" top="10px" />

                <Row justify="center">
                    <div className="dash-title">
                        <Tooltip title="map details" placement="topRight">
                            <Link className="make-white" onClick={switchModal}>{board.name.toUpperCase()}</Link>
                        </Tooltip>
                    </div>
                </Row>

                <div className="top-buffer">
                    <Row justify="space-around" style={{ marginBottom: "50px", }}>
                        <Col lg={{ span: 14 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                            <MapCard categories={categories} />
                        </Col>
                        <div className="mid-col-buffer"></div>
                        <Col lg={{ span: 9 }} sm={{ span: 18 }} xs={{ span: 24 }}>
                            <Chat />
                        </Col>
                    </Row>
                    {/* <Row>
                        <PhotoUpload board={board}/>
                        <button>view pictures</button>
                    </Row> */}
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
                <p>Created by: {board.creator}</p>
                <p>Destination: </p> <ul>{destinationList}</ul>
                <p>Guests: </p> <ul>{guestList}</ul>
                <p>Start date: {board.dates.start}</p>
                <p>End date: {board.dates.end}</p>

            </Modal>
            {/* <Modal
                title={board.name.toUpperCase()}
                visible
            >

            </Modal> */}
        </>
    )
}
