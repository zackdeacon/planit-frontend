import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
import {Row, Col, Modal} from 'antd';
import {UserAddOutlined} from '@ant-design/icons';


const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#6C8E98',
  fontSize: "24px",
  border: "solid",
  borderColor: "#fff"
};

const linkStyle = {
  color: "inherit",
  textDecoration: "inherit",
}

const addUserStyle = {
  position:"relative",
  bottom: "55px"
}


export default function CarouselContent(props) {
  const history = useHistory();

  const [modal, setModal] = useState({
    visible: false 
  })
  
  const [confirmed, setConfirmed] = useState({
    visible: false 
  })

  const [formObject, setFormObject] = useState({
    name:"",
    email:""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormObject({
      [name]: value
    });
  }
  
  const switchModal = () => {
    setModal({
        visible: !modal.visible,
    });
  };

  const sayConfirmed = () => {
    setConfirmed({
        visible: !confirmed.visible,
    });
  };

  const clearModals = () => {
    setModal({
      visible: !modal.visible,
    });
    setConfirmed({
      visible: !confirmed.visible,
    });
  }
  
  const addGuests = () => {

    // add API route

    
    // .then(res =>{
      console.log("Guests added");
      sayConfirmed()
    // })
  }
  
  return (
    <div>
      {props.empty ? (
        <h3 style={contentStyle}>{props.name}</h3>
      ) : (
          <>
            <h3 style={contentStyle}>
              <Link style={linkStyle} to={`/dashboard/${props.id}`}>{props.name}</Link>
              <Row justify="center" style={addUserStyle}>
                <UserAddOutlined onClick={switchModal}/>

                <Modal
                title={`Invite Guest: ${props.name}`}
                visible={modal.visible}
                onOk={addGuests}
                onCancel={switchModal}
                okButtonProps={{ disabled: false }}
                cancelButtonProps={{ disabled: false }}
                >
                  <Row justify="center" align="middle">
                    <Col xs={{span:8}}>
                      <input
                      name="email"
                      value={formObject.email}
                      onChange={handleChange}
                      placeholder="Guest's Email"
                      />
                    </Col>
                  </Row>
                
                  <Modal
                  title={`Confirmed!`}
                  visible={confirmed.visible}
                  onOk={clearModals}
                  onCancel={clearModals}
                  okButtonProps={{ disabled: false }}
                  cancelButtonProps={{ disabled: false }}
                  >
                    Guest Has Been Added.
                  </Modal>
                </Modal>
              </Row >
            </h3>
          </>
        )
      }
    </div>
  )
}
