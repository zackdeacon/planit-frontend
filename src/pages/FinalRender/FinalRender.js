import React, { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom";
import { Row, Modal, Button, Form, Input } from 'antd'
import Aos from "aos"
import NavBar from '../../components/NavBar/navbar'
import FinalRenderCard from '../../components/FinalRenderCard/FinalRenderCard'
import './finalrender.css'
import API from '../../utils/API'

export default function FinalRender() {
    const [categories, setCategories] = useState([])
    const [board, setBoard] = useState({
        name: ""
    })
    const [modal, setModal] = useState({
        visible: false
    })
    const [formSplitCost, setFormSplitCost] = useState({
        price: 0,
        splitValue: 0,
        costSplit: 0
    })
    const { id } = useParams()

    useEffect(() => {
        // API.getMapById(req.params.id)
        API.getMapById(id).then(res => {
            const boardName = res.data.name;
            const categoriesArr = res.data.suggestionCategories;
            setBoard({
                name: boardName
            })
            setCategories(categoriesArr)
        }).catch(err => console.log('err', err))
    }, [])

    const switchModal = () => {
        setModal({
            visible: !modal.visible,
        });
    };
    function handleInputCost(event) {
        const { name, value } = event.target;
        setFormSplitCost({ ...formSplitCost, [name]: value })

    }

    function handleCostSplit(event) {
        // add logic for calculator
        event.preventDefault();

        // answer = (formSplitCost.price / formSplitCost.splitValue);
        setFormSplitCost({ ...formSplitCost, costSplit: ((formSplitCost.price / formSplitCost.splitValue).toFixed(2)) })

    }

    return (
        <>
            <img src="/assets/images/andrew-neel-unsplash.jpg" className="render-background" />
            <div className="render-filter-background">
                <NavBar logo="/assets/logos/logotxt.png" width="80px" left="-40px" top="10px" />
                <Row justify="center">
                    <div className="dash-title">
                        <Link className="map-link" to={`/dashboard/${id}`}>{board.name}</Link>
                    </div>
                </Row>
                <FinalRenderCard />
                <Row justify="center" className="btn-buffer">
                    <Button className="btn-split" onClick={switchModal}>
                        Split Cost Calculator
                    </Button>
                </Row>
                <Modal
                    title="Cost Split Calculator"
                    visible={modal.visible}
                    onOk={switchModal}
                    onCancel={switchModal}
                    footer={[
                        <Button key="back" onClick={switchModal} className="split-cost-exit">
                            Got it!
                        </Button>
                    ]}

                >
                    <Form
                        name="Cost Split Calculator"
                        layout="vertical"
                    >
                        <div>Cost Split Calculator</div>
                        <Form.Item
                            name="price"
                            rules={[{ required: true, message: 'Enter total price!' }]}>
                            <Input
                                prefix="$"
                                name="price"
                                value={formSplitCost.price}
                                onChange={handleInputCost}
                                placeholder="75.50" />

                        </Form.Item>
                        <Form.Item
                            name="splitValue"
                            rules={[{ required: true, message: 'Split cost how many ways!' }]}>
                            <Input
                                // prefix={<LockOutlined className="site-form-item-icon" />}
                                name="splitValue"
                                type="number"
                                value={formSplitCost.splitValue}
                                onChange={handleInputCost}
                                placeholder="i.e. 4"
                            />
                        </Form.Item>
                        <Form.Item >
                            <Button onClick={handleCostSplit} htmlType="submit" className="split-cost-btn">
                                Split Cost
                            </Button>
                            <Row justify="center">
                                <h1>$ {formSplitCost.costSplit}</h1>
                            </Row>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        </>
    )
}
