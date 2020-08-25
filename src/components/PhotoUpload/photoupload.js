import React, {useEffect, useState} from "react"
import { Upload, message, Modal, Button, Row } from 'antd';
import API from "../../utils/API";
import { useParams } from "react-router-dom";
import './photoupload.css'


export default function PhotoUpload(props) {
    const [loading, setLoading] = useState(false)
    const [image,setImage] = useState("")
    // const [imageArr, setImageArr] = useState([])
    const [modal, setModal] = useState({
        visible: false
    })
    console.log('props.board.id', props.board.id)

    const uploadImage = async e =>{
        const files = e.target.files
        const data = new FormData()
        data.append("file", files[0])
        data.append("upload_preset", "planitimages")
        setLoading(true)
        const res = await fetch("https://api.cloudinary.com/v1_1/dphsou5mr/image/upload", {
            method: "POST",
            body: data
        })

        const file = await res.json()
        console.log('file.url', file.url)
        
        setImage(file.secure_url)
        setLoading(false)
        const imgObj = {
            images: file.secure_url
        }
        console.log('imgObj', imgObj)
        console.log('props.board.id', props.board.id)
        API.postNewImage(imgObj, props.board.id)
        .then(img=>{
        console.log('img', img)        
        })
    }

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
                title="Images"
                onOk={handleOk}
                onCancel={handleCancel}
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
                        <img src={image} style={{width:"300px"}}/>
                    )}
                     <img src={props.board.images} style={{width:"300px"}}/>
            </Modal>
        
        </div>
    )
}



