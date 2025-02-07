'use client'
import React, { useState } from 'react';
import '@ant-design/v5-patch-for-react-19';
import { Button, Input, Form, notification, message, Typography } from 'antd'
import copy from 'copy-to-clipboard'
import type { NotificationArgsProps } from 'antd';
import axios from 'axios'
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
const {Title} = Typography
export default function Page(){
    const [link, setLink] = React.useState('')
    const [inviteCode, setInviteCode] = React.useState('')
    const [route, setRoute] = React.useState('')
    const [productID, setproductID] = React.useState('')
    const [api, contextHolder] = notification.useNotification();
    const [messageApi, contextMsgHolder] = message.useMessage()
    const [copyText, setCopyText] = useState("复制路由到剪切板")
    const onLinkChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        setLink(e.target.value)
    }
    const onSave = async () => {
        try{
            const httpsIndex = link.indexOf('https')
            const tempStr = link.substring(httpsIndex, link.length)
            const spaceIndex = tempStr.indexOf(' ')
            // 获得淘口令链接
            const taoUrl = tempStr.substring(0, spaceIndex)
            if(productID != "" || productID != null || productID != undefined){
                const data = {product_id: productID, invite_code: inviteCode, link_url: taoUrl}
                console.log(data, 'data');
                const res = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/productCodeMap`, data)
                console.log('CREATED DOCUMENT');
                if(res.status === 200 && res.data.message === "success"){
                    console.log(res, 'res');
                    messageApi.success({
                        content: '保存成功',
                        duration: 2
                    })
                }
            } else{
                api.warning({
                    message: '商品ID为空，请稍后再试',
                    description: ``,
                  });
            }
        }catch(error){
            console.log(error);
        }
    };
    
    type NotificationPlacement = NotificationArgsProps['placement'];
    const openNotification = (productID: string, placement: NotificationPlacement) => {
        api.success({
          message: '商品ID',
          description: `${productID}`,
          placement
        });
      };
      
    const onInviteCodeChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInviteCode(e.target.value)
    };
    const onCreateRoute = async () => {
        // 通过淘口令获得淘宝真实URL taoUrl
        const response = await fetch('https://api-gw.onebound.cn/taobao/item_password/?key=t5258908516&secret=20241209&word=urlencode('+link+')&title=no')
        const resJson = await response.json()
        if(resJson.item){
            // 解析商品链接得到id
            const idIndex = resJson.item.url.indexOf('id=')
            const tempStr = resJson.item.url.substring(idIndex, resJson.item.url.length)
            const firstCharIndex = tempStr.indexOf('&')
            const id = tempStr.substring(3, firstCharIndex)
            setproductID(id)
            openNotification(id, 'top')
            const createdRoute = `${process.env.NEXT_PUBLIC_DASHBOARD_URL}/${id}`
            setRoute(createdRoute)
        }
    };
    const onCopy = () => {
        copy(route)
        setCopyText("复制成功")
        setTimeout(() => {
            setCopyText("复制路由到剪切板")
        }, 5000);
    };
    return (
        <div style={{display:'flex', height:'100vh', alignItems:'center'}}>
            {contextHolder},{contextMsgHolder}
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 20 }}
                size='large'
                style={{margin:'auto',  width:'600px', textAlign:'center' }}
            >
                <Title className='text-center font-bold'>Pet Care</Title>
                <Form.Item label='商品链接' name='link'>
                    <Input.TextArea rows={8} onChange={onLinkChange} />
                </Form.Item>
                <Form.Item label='邀请码' name='inviteCode'>
                    <Input.TextArea onChange={onInviteCodeChange} />
                </Form.Item>
                <Form.Item label='生成路由' name='route'>
                    <Input.TextArea placeholder={route} rows={5} maxLength={120} />                
                </Form.Item>
                <Form.Item  {...tailLayout}>
                    <Button className='mx-2' size='large' type="primary" onClick={onCreateRoute} htmlType="button">生成路由</Button>
                    <Button className='mx-2' color="default" variant="solid" size='large' htmlType="button" onClick={onSave} >保存</Button>
                    <Button color="cyan" variant="solid" className='mx-2' size='large' htmlType="button" onClick={onCopy} >{copyText}</Button>
                </Form.Item>
            </Form>
        </div>
    )
}
