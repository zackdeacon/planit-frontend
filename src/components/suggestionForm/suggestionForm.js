import React from 'react';
import { Row, Form, Input, Button, Select } from 'antd';
import "./suggestionForm.css"


function SuggestionCreateForm(props) {
    const Option = Select.Option;

    return (
        <div>
            <div className="cart-buffer"></div>
            <Row justify="center">
                <Form
                    name="suggestion"
                    className="suggestion-form"
                    onFinish={props.handleSave}
                >
                    <div className="sug-title">Add A Suggestion</div>

                    <Form.Item
                        rules={[{ required: true, message: 'Please name your suggestion!' }]}>
                        <Input
                            name="title"
                            type="text"
                            value={props.formData.title}
                            onChange={props.handleChange}
                            placeholder="Name Your Suggestion"
                        />
                    </Form.Item>

                    <Form.Item
                        rules={[{ required: true, message: 'Please enter a category!' }]}>
                        <Select
                            onChange={props.handleChangeSelect}
                            placeholder="Choose a Category"
                            name="category"
                        >
                            {props.categories.map((cat, index) => {
                                return <Option key={index} value={cat}>{cat}</Option>
                            })}
                        </Select>
                    </Form.Item>

                    <Form.Item
                        rules={[{ required: false }]}>
                        <Input
                            name="link"
                            type="text"
                            value={props.formData.link}
                            onChange={props.handleChange}
                            placeholder="Add Link https://www.travel.com/"
                        />
                    </Form.Item>

                    <Form.Item
                        rules={[{ required: false }]}>
                        <Input
                            name="cost"
                            type="text"
                            value={props.formData.cost}
                            onChange={props.handleChange}
                            prefix="$"
                            placeholder="20"
                        />
                    </Form.Item>

                    <Form.Item
                        rules={[{ required: false }]}>
                        <Input.TextArea
                            name="description"
                            type="text"
                            value={props.formData.description}
                            onChange={props.handleChange}
                            placeholder="Add A Description"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="form-button">
                            Add Suggestion!
                        </Button>
                    </Form.Item>
                </Form>
            </Row>
        </div>
    )
}

export default SuggestionCreateForm;

