import React from "react";
import { Row, Form, Input, Button, DatePicker } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import "./mapform.css";

const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 },
    },
  };

  const formItemLayoutWithOutLabel = {
    wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 0 },
},
};

function MapCreateForm(props){
    return(
        <div className="cart-background">
        <div className="cart-buffer"></div>
        <Row justify="center">
        <Form
            name="cartographer"
            className="map-form"
            onFinish={props.handleFormSubmit}
        >
        <div className="cart-title">THE CARTOGRAPHER</div>
        <div className="form-subtitle">Create Your Planning Map</div>

            <Form.Item
                name="name"
                type="text"
                rules={[{ required: true, message: 'Please input your trip name!'}]}>
                <Input 
                    value={props.name}
                    onChange={props.handleInputChange} 
                    placeholder="Name Your Trip"
                />
            </Form.Item>
            
            <Form.Item
                name="creator"
                type="text"
                rules={[{ required: true, message: 'Please input your name!'}]}>
                <Input 
                    value={props.creator}
                    onChange={props.handleInputChange} 
                    placeholder="Trip Creator's Name"
                />
            </Form.Item>

            <Form.List name="guests">
                {(fields, { add, remove }) => {
                    return (
                        <div>
                        {fields.map((field, index) => (
                            <Row justify="center">
                            <Form.Item
                                {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                                required={false}
                                key={field.key}
                                >
                                <Form.Item
                                    {...field}
                                    className="ant-row"
                                    validateTrigger={['onChange', 'onBlur']}
                                    rules={[
                                    {
                                        required: true,
                                        whitespace: true,
                                        message: "Please input guest's email or delete this field.",
                                    },
                                    ]}
                                    noStyle
                                    >
                                    <Input 
                                        value={props.guests}
                                        onChange={props.handleInputChange} 
                                        type="email"
                                        placeholder="Guest's email" 
                                        style={{ width: '100%' }} 
                                    />
                                </Form.Item>
                                {fields.length > 1 ? (
                                    <MinusCircleOutlined
                                    className="dynamic-delete-button"
                                    style={{ margin: '0 8px' }}
                                    onClick={() => {
                                        remove(field.name);
                                    }}
                                    />
                                    ) : null}
                            </Form.Item>
                                    </Row>
                        ))}
                        <Form.Item>
                            <Row justify="center">
                                <Button
                                    type="dashed"
                                    onClick={() => {
                                        add();
                                    }}
                                    style={{color:"white", backgroundColor:"#576d65", width:'50%'}}
                                    >
                                    <PlusOutlined /> Add Guest
                                </Button>
                            </Row>
                        </Form.Item>
                        </div>
                    );
                }}
            </Form.List>
            
            <Row justify="center">
            <Form.Item>
                <DatePicker 
                name="startDate"
                value={props.startDate}
                placeholder="Start Date"
                style={{marginRight:"2px"}}
                />
            </Form.Item>
            <Form.Item>
                <DatePicker 
                name="endDate"
                value={props.endDate}
                placeholder="End Date"
                style={{marginLeft:"2px"}}
                />
            </Form.Item>
            </Row>

            <Form.Item
                name="destinations"
                type="text"
                rules={[{ required: true, message: 'Please input destination(s)!'}]}>
                <Input 
                    value={props.destinations}
                    onChange={props.handleInputChange} 
                    placeholder="Destination(s)"
                />
            </Form.Item>  

            <Form.Item>
                <Button type="primary" htmlType="submit" className="form-button">
                Create Map!
                </Button>
            </Form.Item>
        </Form>
        </Row>
        </div>
    )
}

export default MapCreateForm;


{/* <form className="map-form">
    <label>Name of Trip:</label>
    <input
        value={props.name}
        name="name"
        onChange={props.handleInputChange}
        type="text"
        placeholder="name of trip"
    />
    <label>Creator:</label>
    <input
        value={props.creator}
        name="creator"
        onChange={props.handleInputChange}
        type="text"
        placeholder="creator"
    />
    <label>Guests:</label>
    <input
        value={props.guests}
        name="guests"
        onChange={props.handleInputChange}
        type="text"
        placeholder="guests"
    />
    <label>Start Date:</label>
    <input
        value={props.startDate}
        name="startDate"
        onChange={props.handleInputChange}
        type="date"
        placeholder="start date"
    />
    <label>End Date:</label>
    <input
        value={props.endDate}
        name="endDate"
        onChange={props.handleInputChange}
        type="date"
        placeholder="end date"
    />
    <label>destination:</label>
    <input
        value={props.destinations}
        name="destinations"
        onChange={props.handleInputChange}
        type="text"
        placeholder="destinations"
    />
    <button onClick={props.handleFormSubmit}>create map</button>
</form> */}