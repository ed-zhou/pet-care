'use client'
import {Button, Input} from 'antd'
import '@ant-design/v5-patch-for-react-19';
import { useState } from 'react';
import copy from 'copy-to-clipboard'
export default function ClientComponent({invitecode}: {invitecode: string}){
    const [copyText, setCopyText] = useState("复制路由到剪切板")
    const onCopy = () => {
        copy(invitecode)
        setCopyText("复制成功")
        setTimeout(() => {
            setCopyText("复制路由到剪切板")
        }, 5000);
    };
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <div className="w-1/2">
                <Input className="w-1/2" disabled placeholder={invitecode} />
            </div>
            <div className='mt-4'>
                <Button onClick={onCopy} >{copyText}</Button>
            </div>
        </div>
    )
}