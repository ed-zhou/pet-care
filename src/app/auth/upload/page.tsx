'use client'
import React from 'react';
import '@ant-design/v5-patch-for-react-19';
import { Button, Input, Form } from 'antd'
import copy from 'copy-to-clipboard'
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
export default function Page(){
    const [url, setUrl] = React.useState('')
    const onLinkChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        console.log('Change:', e.target.value);
    }
    const onReset = () => {
        
    };
    const onInviteCodeChange = () => {
    };
    const onCreateRoute = () => {
        setUrl(url+'123456')
        console.log(url);
    };
    const onCopy = () => {
        copy(url)
    };
    return (
        <div style={{display:'flex', height:'100vh', alignItems:'center'}}>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 20 }}
                size='large'
                style={{margin:'auto',  width:'600px', textAlign:'center' }}
            >
                <Form.Item label='商品链接' name='rebate'>
                    <Input.TextArea rows={3} maxLength={120} onChange={onLinkChange} />
                </Form.Item>
                <Form.Item label='邀请码' name='inviteCode'>
                    <Input.TextArea maxLength={120} onChange={onInviteCodeChange} />
                </Form.Item>
                <Form.Item label='生成路由' name='route'>
                    <Input.TextArea disabled placeholder={url} rows={5} maxLength={120} />                
                </Form.Item>
                <Form.Item  {...tailLayout}>
                    <Button className='mx-2' size='large' type="primary" onClick={onCreateRoute} htmlType="button">生成路由</Button>
                    <Button className='mx-2' size='large' htmlType="button" onClick={onReset} >保存</Button>
                    <Button className='mx-2' size='large' htmlType="button" onClick={onCopy} >复制到剪切板</Button>
                </Form.Item>
            </Form>
        </div>
    )
}
