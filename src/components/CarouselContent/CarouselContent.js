import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Row, Col, Modal, List, Input, Button, Tooltip } from 'antd';
import { UserAddOutlined, FolderOutlined, PlusOutlined, DeleteFilled } from '@ant-design/icons';
import './carouselcontent.css';
import API from '../../utils/API';

export default function CarouselContent(props) {
  const [guestModal, setGuestModal] = useState({
    visible: false
  });

  const [categoryModal, setCategoryModal] = useState({
    visible: false
  });

  const [guestEmail, setGuestEmail] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(props.categories)
  }, [props.categories]);

  const handleGuestChange = (e) => {
    setGuestEmail(e.target.value);
  }

  const handleCategoryChange = (e) => {
    setNewCategory(e.target.value);
  }

  const switchGuestModal = () => {
    setGuestModal({
      visible: !guestModal.visible,
    });
  };

  const switchCategoryModal = () => {
    setCategoryModal({
      visible: !categoryModal.visible,
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

  function addCategory() {
    if (newCategory) {
      API.addSuggestionCategory({ mapId: props.id, newCategory: newCategory })
        .then(res => {
          console.log(res.data);
          setNewCategory("");
          setCategories(res.data.categories);
        })
    }
  }

  function removeCategory(category) {
    API.removeSuggestionCategory({ mapId: props.id, category: category })
      .then(res => {
        console.log(res.data);
        setCategories(res.data.categories);
      })
  }

  const addGuests = () => {
    // add API route
    if (guestEmail) {
      API.inviteNewGuest({
        mapId: props.id,
        guestEmail: guestEmail,
      }).then(({ data }) => {
        if (data.successful) {
          switchGuestModal();
          setGuestEmail("");
          success(data.message);
        } else {
          switchGuestModal();
          setGuestEmail("");
          error(data.message);
        }
      }).catch(err => {
        console.log(err);
      })
    }
  }

  const backColor = props.background

  return (
    <div>
      {props.empty ? (
        <div className="carouselContent" style={{ backgroundColor: backColor }}><h3>{props.name}</h3></div>
      ) : (
          <>
            <div className="carouselContent" style={{ backgroundColor: backColor }}>
              <Link className="carouselMapLink" to={`/dashboard/${props.id}`}>{props.name}</Link>
              {props.editable ?
                <>
                  <Tooltip title="Add guests" placement="topRight">
                    <UserAddOutlined className="carouselAddUser" onClick={switchGuestModal} />
                  </Tooltip>
                  <Modal
                    title={`Invite Guest: ${props.name}`}
                    visible={guestModal.visible}
                    onOk={addGuests}
                    onCancel={switchGuestModal}
                    okButtonProps={{ disabled: false }}
                    cancelButtonProps={{ disabled: false }}
                  >
                    <Row justify="center" align="middle">
                      <Col xs={{ span: 8 }}>
                        <input
                          name="email"
                          value={guestEmail}
                          onChange={handleGuestChange}
                          placeholder="Guest's Email"
                        />
                      </Col>
                    </Row>
                  </Modal>

                  <Tooltip title="Modify suggestion categories" placement="topRight">
                    <FolderOutlined onClick={switchCategoryModal} className="carouselEditCategories" />
                  </Tooltip>
                  <Modal
                    title={`Suggestion categories: ${props.name}`}
                    visible={categoryModal.visible}
                    onOk={switchCategoryModal}
                    onCancel={switchCategoryModal}
                    okButtonProps={{ disabled: false }}
                    cancelButtonProps={{ disabled: false }}
                  >
                    <Row justify="center" align="middle">
                      <Col xs={{ span: 12 }}>
                        <List>
                          {categories.map(cat => {
                            return (
                              <List.Item
                                key={cat}
                                actions={[<Button onClick={() => removeCategory(cat)} size={"small"} icon={<DeleteFilled style={{ color: "#945440" }} />}></Button>]}
                              >
                                {cat}
                              </List.Item>
                            )
                          })}
                        </List>
                        <Row justify="center" style={{ marginTop: "15px" }}>
                          <Col>
                            <Input name="category" value={newCategory} onChange={handleCategoryChange} placeholder="New category" />
                          </Col>
                          <Col>
                            <Button type="primary" onClick={addCategory} icon={<PlusOutlined />} />
                          </Col>
                        </Row>
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
