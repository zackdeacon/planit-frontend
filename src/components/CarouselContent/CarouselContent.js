import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { Row, Col, Modal } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import './carouselcontent.css';
import API from '../../utils/API';

export default function CarouselContent(props) {
  const [modal, setModal] = useState({
    visible: false
  })

  const [guestEmail, setGuestEmail] = useState("")

  const handleChange = (e) => {
    console.log(e.target.value);
    setGuestEmail(e.target.value);
  }

  const switchModal = () => {
    setModal({
      visible: !modal.visible,
    });
  };

  function success(message) {
    Modal.success({
      content: message,
    });
  }

  function error(message) {
    Modal.error({
      content: message,
    });
  }


  const addGuests = () => {
    // add API route
    API.inviteNewGuest({
      mapId: props.id,
      guestEmail: guestEmail,
    }).then(({ data }) => {
      console.log(data);
      if (data.successful) {
        switchModal();
        success(`Invitation sent to ${data.newGuest}!`);
      } else {
        switchModal();
        error(`${data.newGuest} has already been invited.`);
      }
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <div>
      {props.empty ? (
        <div className="carouselContent"><h3>{props.name}</h3></div>
      ) : (
          <>
            <div className="carouselContent">
              <Link className="carouselMapLink" to={`/dashboard/${props.id}`}>{props.name}</Link>
              {props.editable ?
                <>
                  <UserAddOutlined className="carouselAddUser" onClick={switchModal} />
                  <Modal
                    title={`Invite Guest: ${props.name}`}
                    visible={modal.visible}
                    onOk={addGuests}
                    onCancel={switchModal}
                    okButtonProps={{ disabled: false }}
                    cancelButtonProps={{ disabled: false }}
                  >
                    <Row justify="center" align="middle">
                      <Col xs={{ span: 8 }}>
                        <input
                          name="email"
                          value={guestEmail.email}
                          onChange={handleChange}
                          placeholder="Guest's Email"
                        />
                      </Col>
                    </Row>
                  </Modal>
                </>
                : ""
              }
            </div>
          </>
        )
      }
    </div >
  )
}
