import React, {useState, useEffect} from "react"
import {message, Modal, Button, Row, Col, Upload } from 'antd';
// import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
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
        // console.log('file.url', file.url)
        
        setImage(file.secure_url)
        setLoading(false)
        const imgObj = {
            images: file.secure_url
        }
        // console.log('imgObj', imgObj)
        // console.log('props.board.id', props.board.id)
        API.postNewImage(imgObj, props.board.id
            // userId
            )
        .then(img=>{
        // console.log('img', img)        
        })
        .catch(err=>{
            console.log('err', err)
            
        })
    }

    const {id} = useParams()
    console.log('id', id)

    useEffect(()=>{
        API.getAllImagesForMap(id).then(res=>{
            const imageArray = res.data
            setImageArr(imageArray)
        }).catch(err=>console.log("err",err))
    }, [image])

    console.log('imageArr', imageArr)

    const arrayTest = [];
    imageArr.map(item=>{
        console.log('item', item)
        arrayTest.push(
            <img 
            src={item}
            className="trip-images"
            />
        )
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
     
    return (
        <div>
            <Row className="photo-row" justify="center">
                <Button
                    className="photo-button"
                    onClick={switchModal}
                >Upload Photos</Button>
            </Row>
            <Modal
                visible={modal.visible}
                title="Upload Trip Photos"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleOk}>
                        Got it!
                    </Button>
                ]}
            >
                <input 
                    type="file" 
                    name="file" 
                    placeholder="upload input"
                    onChange={uploadImage}
                ></input>
                    {loading? (
                        <h3>loading...</h3>
                    ): (
                        <img src={image} style={{width:"100%"}}/>
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



//ant design image upload 
{/* <Upload 
        type="file" 
        name="avatar" 
        listType="picture-card"
        className="avatar-uploader"
        placeholder="upload input"
        onChange={uploadImage}
    ></Upload>
        {loading ? <LoadingOutlined /> : <PlusOutlined />} */}
        {/* {arrayTest.map(item=>{return item})} */}