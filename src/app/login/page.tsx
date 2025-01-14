'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button, Input, message, Form } from 'antd'
import axios from 'axios';
import img from '../../../public/img/login.png'
import Image from 'next/image'
import dotenv from 'dotenv';
dotenv.config();

type FieldType = {
    username?:string
    password?:string
}
export default function Page(){
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()
    const handleLogin = async ()=>{
        if(!username || !password){
            message.error(username + " "  + password)
            alert("用户名和密码不能为空")
            return
        }
        try{
            //从环境变量中获取后端接口地址，并拼接登录接口具体路径
            const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
            const response = await axios.post(`${apiBaseUrl}/login`,{
                username,
                password
            })
            if(response.data.success){                // 登录成功后，这里可以选择存储用户登录态（比如使用JWT的话，存储token），此处简单示例跳转到首页
                alert("登录成功！")
                router.push('/dashboard')
            } else{
                alert("登录失败，请检查用户名和密码是否正确！")
            }
        } catch(error){
            console.error('Error during login:', error)
            alert('登录接口调用出错，请检查日志')
        }
    }
    
    return(
        <div id='content' style={{display:'flex', height:'100vh', alignItems:'center'}}>
            <Image src={img} className='opacity:0.1' layout='fill' alt=''/>
            <Form
                id='form'
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 20 }}
                style={{maxWidth: 400, margin:'auto',  width:'600px', textAlign:'center' }}
                initialValues={{ remember: true }}
                size='large'
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    style={{ color: "red" }}
                    label={<label style={{ color: "#fff", fontFamily:"inherit", fontWeight:'bolder', fontSize:'larger' }}>Username</label>}
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input onChange={(e)=>setUserName(e.target.value)} />
                </Form.Item>
                <Form.Item<FieldType>
                    style={{ color: "red" }}
                    label={<label style={{ color: "#fff", fontFamily:"inherit", fontWeight:'bolder', fontSize:'larger' }}>Password</label>}
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password onChange={(e)=>setPassword(e.target.value)}  />
                </Form.Item>
                <Form.Item label={null}>
                    <Button type="primary" onClick={handleLogin} style={{width:'100%'}}>
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}