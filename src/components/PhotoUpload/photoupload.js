import React, {useState, useEffect} from "react"
import {message, Modal, Button, Row, Col } from 'antd';
import API from "../../utils/API";
import './photoupload.css'
import { useParams } from "react-router-dom";

export default function PhotoUpload(props) {
    const [loading, setLoading] = useState(false)
    const [image,setImage] = useState("")
    const [imageArr, setImageArr] = useState([])
    const [modal, setModal] = useState({
        visible: false
    })

    const uploadImage = async e =>{
        const files = e.target.files
        const data = new FormData()
        data.append("file", files[0])
        data.append("upload_preset", "planitimages")
        setLoading(true)
        const res = await fetch(
            "https://api.cloudinary.com/v1_1/dphsou5mr/image/upload"
            , 
            {
            method: "POST",
            body: data
        }).catch(err=>{
            console.log('err', err)
            message.error("This Photo could not be Uploaded", 3)
        })

        const file = await res.json()
        
        setImage(file.secure_url)
        setLoading(false)
        const imgObj = {
            images: file.secure_url
        }
        API.postNewImage(imgObj, props.board.id
        ).then(img=>{       
        })
        .catch(err=>{
            console.log('err', err)
            
        })
    }

    const {id} = useParams()
    
    useEffect(()=>{
        API.getAllImagesForMap(id).then(res=>{
            const imageArray = res.data
            setImageArr(imageArray)
        }).catch(err=>console.log("err",err))
    }, [image, id])

    const arrayTest = [];
    imageArr.map(item=>{
        arrayTest.push(
            <img 
            alt="trip-img"
            src={item}
            className="trip-images"
            />
        )
        return "Success"
    })

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

    const modalTitle = () => {
        return `${props.board.name} Photos`
    }
     
    return (
        <div>
            <Row className="photo-row" justify="center">
                <Button
                    className="photo-button"
                    onClick={switchModal}
                >Photo Gallery</Button>
            </Row>
            <Modal
                visible={modal.visible}
                title= {modalTitle()}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleOk}>
                        Got it!
                    </Button>
                ]}
            >
                <h3 style={{color:"grey", marginBottom:"0px"}}>Upload Photos</h3>
                <p style={{color:"grey", marginBottom:"7px"}}>(JPG & PNG files only)</p>
                <input 
                    type="file" 
                    name="file" 
                    placeholder="upload input"
                    accept="image/jpeg, image/png, image/jpg"
                    onChange={uploadImage}
                ></input>
                    {loading? (
                        <h3>loading...</h3>
                    ): (
                        <img alt="" src={image} style={{width:"100%"}}/>
                    )}
                    <hr/>
                    <h1 style={{textAlign: "center", color:"grey"}}>Photo Gallery</h1>
                    <Row gutter="1" align="middle" justify="center">
                        {arrayTest.map((item)=>{return <Col span={6}> {item} </Col>})}
                    </Row>
            </Modal>
        
        </div>
    )
}