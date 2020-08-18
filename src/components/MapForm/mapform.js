import React from "react";
import { Row, Col, Form, Input, Button} from 'antd';
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
            onFinish={props.handleSave}
        >
        <div className="cart-title">THE CARTOGRAPHER</div>
        <div className="form-subtitle">Create Your Planning Map</div>

            <Form.Item
                
                rules={[{ required: true, message: 'Please input your trip name!'}]}>
                <Input 
                name="name"
                type="text"
                value={props.formData.name}
                onChange={props.handleChange} 
                placeholder="Name Your Trip"
                />
            </Form.Item>
            
            <Form.Item
                
                rules={[{ required: true, message: 'Please input your name!'}]}>
                <Input 
                name="creator"
                type="text"
                value={props.formData.creator}
                onChange={props.handleChange} 
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
                                        value={props.formData.guests}
                                        onChange={props.handleChange} 
                                        type="email"
                                        name="guests"
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
            <Col md={{span:6}} xs={{span:10}} style={{marginLeft:"-50px", marginBottom: "25px"}}>
            <label className="date-labels">Start Date:</label>
            <input
                value={props.formData.startDate}
                name="startDate"
                onChange={props.handleChange}
                type="date"
                placeholder="start date"
            />
            <label className="date-labels">End Date:</label>
            <input
                value={props.formData.endDate}
                name="endDate"
                onChange={props.handleChange}
                type="date"
                placeholder="end date"
            />
            </Col>
            </Row>

            <Form.Item
               
                rules={[{ required: true, message: 'Please input destination(s)!'}]}>
                <Input 
                name="destinations"
                type="text"
                value={props.formData.destinations}
                onChange={props.handleChange} 
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
