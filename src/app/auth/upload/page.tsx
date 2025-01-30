'use client'
import React from 'react';
import '@ant-design/v5-patch-for-react-19';
import { Button, Input, Form, notification } from 'antd'
import copy from 'copy-to-clipboard'
import type { NotificationArgsProps } from 'antd';
import axios from 'axios'
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
export default function Page(){
    const [link, setLink] = React.useState('')
    const [inviteCode, setInviteCode] = React.useState('')
    const [route, setRoute] = React.useState('')
    let id = ''
    const onLinkChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        setLink(e.target.value)
    }
    const onSave = async () => {
        try{
            const data = {product_id: id, invite_code: inviteCode}
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/productCodeMap`, data)
            console.log('CREATED DOCUMENT');
            console.log(res, 'res');
        }catch(error){
            console.log(error);
        }
    };
    
    const [api, contextHolder] = notification.useNotification();
    type NotificationPlacement = NotificationArgsProps['placement'];
    const openNotification = (id: string, placement: NotificationPlacement) => {
        api.success({
          message: '商品ID',
          description: `${id}`,
          placement
        });
      };
      
    const onInviteCodeChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInviteCode(e.target.value)
    };
    const onCreateRoute = () => {
        //解析商品链接得到id
        const idIndex = link.indexOf('&id=')
        const priceIndex = link.indexOf('&price=')
        id = link.substring(idIndex + 4, priceIndex)
        openNotification(id, 'top')
    };
    const onCopy = () => {
        copy(route)
    };
    return (
        <div style={{display:'flex', height:'100vh', alignItems:'center'}}>
            {contextHolder}
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
                    <Button className='mx-2' size='large' htmlType="button" onClick={onSave} >保存</Button>
                    <Button color="cyan" variant="solid" className='mx-2' size='large' htmlType="button" onClick={onCopy} >复制路由到剪切板</Button>
                </Form.Item>
            </Form>
        </div>
    )
}
