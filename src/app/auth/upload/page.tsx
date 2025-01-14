'use client'
import React from 'react';
import { Button, Input, Form } from 'antd'
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
const onRebateChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
    console.log('Change:', e.target.value);
}

const onRouteChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
    console.log('Change:', e.target.value);
}
const onReset = () => {
    
};
  
const onCreateRoute = () => {
};

export default function Page(){
    return (
        <div style={{display:'flex', height:'100vh', alignItems:'center'}}>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 20 }}
                size='large'
                style={{margin:'auto',  width:'600px', textAlign:'center' }}
            >
                <Form.Item label='返利链接' name='rebate'>
                    <Input.TextArea rows={3} maxLength={120} onChange={onRebateChange} />
                </Form.Item>
                <Form.Item label='生成路由' name='route'>
                    <Input.TextArea rows={3}  maxLength={120} onChange={onRouteChange} />
                </Form.Item>
                <Form.Item  {...tailLayout}>
                    <Button size='large' type="primary" onClick={onCreateRoute} htmlType="button" style={{marginRight:'80px'}}>生成路由</Button>
                    <Button size='large' htmlType="button" onClick={onReset} >保存</Button>
                </Form.Item>
            </Form>
        </div>
    )
}
