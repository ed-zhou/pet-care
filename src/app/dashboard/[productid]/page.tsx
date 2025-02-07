import ClientComponent from "@/app/component/copyInvite"
export default async function InviteCode({
    params
}:{
    params: Promise<{productid: string}>
}){
    const {productid} = await params
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_API_BASE_URL}/productCodeMap?productid=${productid}`)
    const data = await res.json()
    const invitecode = data.data[0].invite_code
    const linkUrl = data.data[0].link_url
    
    // 获取图片地址
    const response = await fetch('https://api-gw.onebound.cn/taobao/item_get/?key=t5258908516&secret=20241209&num_iid='+productid+'&is_promotion=1')
    const resJson = await response.json()
    const picUrl = "https://" + resJson.item.pic_url
    return <ClientComponent invitecode={invitecode} linkUrl={linkUrl} picUrl={picUrl}/>
}