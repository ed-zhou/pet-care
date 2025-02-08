'use client'
import {Button, Input, Image} from 'antd'
import '@ant-design/v5-patch-for-react-19';
import { useState } from 'react';
import copy from 'copy-to-clipboard'
export default function ClientComponent(
    {invitecode, linkUrl, picUrl}: {invitecode: string, linkUrl: string, picUrl: string}){
    const [copyText, setCopyText] = useState("复制路由到剪切板")
    const title = "点击  复制路由到剪切板 -> 打开手TAO"
    const onCopy = () => {
        copy(invitecode)
        setCopyText("复制成功")
        setTimeout(() => {
            setCopyText("复制路由到剪切板")
        }, 5000);
    };
    
    const onClickOpenTaobao = () =>{
        window.location.href = linkUrl
    }
    
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <Image width={400} src={picUrl} />
            <div className="w-full mt-4">
                <p className='text-sm text-white bg-orange-700'>{title}</p>
                <Input className="w-1/2" readOnly value={invitecode} />
            </div>
            <div className='mt-4'>
                <Button color="cyan" variant="solid" size='large' onClick={onCopy} >{copyText}</Button>
                <Button className='ml-4' color="danger" variant="solid"  size='large' onClick={onClickOpenTaobao} >打开淘宝</Button>
            </div>
        </div>
    )
}