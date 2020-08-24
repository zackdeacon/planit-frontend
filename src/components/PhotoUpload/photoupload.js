// import React, {useEffect, useState} from "react"
// import { Upload, message } from 'antd';
// import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
// import API from "../../utils/API";
// import { useParams } from "react-router-dom";



// export default function PhotoUpload(props) {
//     const [selectedFile, setSelectedFile] = useState({
//         file: null
//     })

//     function handleChange(event) {
//         console.log("event",event.target.files[0])
//         setSelectedFile(event.target.files[0])
//     }
        
//     console.log("Map ID: ", props.board.id)
//     uploadFile = async e => {
//         const files = e.target.files;
//         const data = new FormData();
//     ​
//         data.append("file", files[0]);
//         // this data/preset is required by cloudinary (named sick fits in the cloudinary settings)
//         data.append("upload_preset", "sickfits");
//         const res = await fetch(
//           "https://api.cloudinary.com/v1_1/dxdld6ba3/image/upload",
//           {
//             method: "POST",
//             body: data
//           }
//         );
//         const file = await res.json();
//         this.setState({
//           image: file.secure_url,
//           largeImage: file.eager[0].secure_url
//         });
//       };
//     Collapse
    
    
    
    
    
    
    
    
    
//     // function fileUploadhandler(){
//     //     console.log('selectedFile', selectedFile)
//     //     // const imageObj = {
//     //     //     images:selectedFile.file
//     //     // }
//     //     const data = new FormData;
//     //     data.append("imageObj",selectedFile)
//     //     // console.log('imageObj', imageObj)
//     //     console.log('data', data)
//     //     API.postNewImage(data, props.board.id)
//     //     .then(photo=>{
//     //         console.log("photo", photo)
//     //     })
//     // }
        
      
//     return (
//         <>
//             <input type="file" onChange={handleChange}/>
//             <button onClick={uploadFile}>upload</button>
//         </>

//     )
// }


// // function getBase64(img, callback) {
// //     const reader = new FileReader();
// //     reader.addEventListener('load', () => callback(reader.result));
// //     reader.readAsDataURL(img);
// //   }
  
// //   function beforeUpload(file) {
// //     const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
// //     if (!isJpgOrPng) {
// //       message.error('You can only upload JPG/PNG file!');
// //     }
// //     const isLt2M = file.size / 1024 / 1024 < 2;
// //     if (!isLt2M) {
// //       message.error('Image must smaller than 2MB!');
// //     }
// //     return isJpgOrPng && isLt2M;
// //   }
//   // import React from 'react'

// // class PhotoUpload extends Component {
// // //   state = {
// // //     loading: false,
// // //   };
// //     state = {
// //         selectedFile: null
// //     }

// //   handleChange = (event, info) => {
// //     this.setState({
// //         selectedFile: event.target.files[0]
// //     })
// //     console.log("event",event.target.files[0])
// //     // if (info.file.status === 'uploading') {
// //     //   this.setState({ loading: true });
// //     //   return;
// //     // }
// //     // if (info.file.status === 'done') {
// //     //   // Get this url from response in real world.
// //     //   getBase64(info.file.originFileObj, imageUrl =>
// //     //     this.setState({
// //     //       imageUrl,
// //     //       loading: false,
// //     //     }),
// //     //   );
// //     // }
    

// //   };
// //   fileUploadhandler = () =>{
// //     API.postNewImage(image, props.maps._id)
// //     .then(photo=>{
// //         console.log("photo", photo)
// //     })
// //   }

// //   render() {
// //     const uploadButton = (
// //       <div>
// //         {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
// //         <div className="ant-upload-text">Upload</div>
// //       </div>
// //     );
// //     const { imageUrl } = this.state;
// //     return (
// //         <>
// //         <input type="file" onChange={this.handleChange}/>
// //         <button onClick={this.fileUploadhandler}>upload</button>
// //       {/* <Upload
// //         name="avatar"
// //         listType="picture-card"
// //         className="avatar-uploader"
// //         showUploadList={false}
// //         action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
// //         beforeUpload={beforeUpload}
// //         onChange={this.handleChange}
// //       >
// //         {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
// //       </Upload> */}
// //       </>
// //     );
// //   }
// // }

// // export default PhotoUpload;
