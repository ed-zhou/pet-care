'use client'
import React from 'react';
import '@ant-design/v5-patch-for-react-19';
import { Button, Input, Form } from 'antd'
import copy from 'copy-to-clipboard'
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
export default function Page(){
    const [link, setLink] = React.useState('')
    const [route, setRoute] = React.useState('')
    const onLinkChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        setLink(e.target.value)
    }
    const onReset = () => {
        
    };
    const onInviteCodeChange = () => {
    };
    const onCreateRoute = () => {
        //解析商品链接得到id
        const idIndex = link.indexOf('&id=')
        const priceIndex = link.indexOf('&price=')
        const length = priceIndex - idIndex
        const id = link.substring(idIndex + 4, priceIndex)
        setRoute(id)
    };
    const onCopy = () => {
        copy(route)
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
                <Form.Item label='商品链接' name='link'>
                    <Input.TextArea rows={8} onChange={onLinkChange} />
                </Form.Item>
                <Form.Item label='邀请码' name='inviteCode'>
                    <Input.TextArea onChange={onInviteCodeChange} />
                </Form.Item>
                <Form.Item label='生成路由' name='route'>
                    <Input.TextArea disabled placeholder={route} rows={5} maxLength={120} />                
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
