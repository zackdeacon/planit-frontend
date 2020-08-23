import React, {useEffect, useState} from "react"
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import API from "../../utils/API";
import { useParams } from "react-router-dom";



export default function PhotoUpload(props) {
    const [selectedFile, setSelectedFile] = useState({
        file: null
    })

    const {id} = useParams()

    function handleChange(event) {
        console.log("event",event.target.files[0])
        setSelectedFile({...selectedFile, file:event.target.files[0]})
    }
        
    console.log("Map ID: ", props.board.id)
        function fileUploadhandler(){
        const imageObj = {
            image:selectedFile
        }
        API.postNewImage(imageObj, props.board._id)
        .then(photo=>{
            console.log("photo", photo)
        })
    }
        
      
    return (
        <>
            <input type="file" onChange={handleChange}/>
            <button onClick={fileUploadhandler}>upload</button>
        </>

    )
}


// function getBase64(img, callback) {
//     const reader = new FileReader();
//     reader.addEventListener('load', () => callback(reader.result));
//     reader.readAsDataURL(img);
//   }
  
//   function beforeUpload(file) {
//     const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
//     if (!isJpgOrPng) {
//       message.error('You can only upload JPG/PNG file!');
//     }
//     const isLt2M = file.size / 1024 / 1024 < 2;
//     if (!isLt2M) {
//       message.error('Image must smaller than 2MB!');
//     }
//     return isJpgOrPng && isLt2M;
//   }
  // import React from 'react'

// class PhotoUpload extends Component {
// //   state = {
// //     loading: false,
// //   };
//     state = {
//         selectedFile: null
//     }

//   handleChange = (event, info) => {
//     this.setState({
//         selectedFile: event.target.files[0]
//     })
//     console.log("event",event.target.files[0])
//     // if (info.file.status === 'uploading') {
//     //   this.setState({ loading: true });
//     //   return;
//     // }
//     // if (info.file.status === 'done') {
//     //   // Get this url from response in real world.
//     //   getBase64(info.file.originFileObj, imageUrl =>
//     //     this.setState({
//     //       imageUrl,
//     //       loading: false,
//     //     }),
//     //   );
//     // }
    

//   };
//   fileUploadhandler = () =>{
//     API.postNewImage(image, props.maps._id)
//     .then(photo=>{
//         console.log("photo", photo)
//     })
//   }

//   render() {
//     const uploadButton = (
//       <div>
//         {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
//         <div className="ant-upload-text">Upload</div>
//       </div>
//     );
//     const { imageUrl } = this.state;
//     return (
//         <>
//         <input type="file" onChange={this.handleChange}/>
//         <button onClick={this.fileUploadhandler}>upload</button>
//       {/* <Upload
//         name="avatar"
//         listType="picture-card"
//         className="avatar-uploader"
//         showUploadList={false}
//         action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
//         beforeUpload={beforeUpload}
//         onChange={this.handleChange}
//       >
//         {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
//       </Upload> */}
//       </>
//     );
//   }
// }

// export default PhotoUpload;
