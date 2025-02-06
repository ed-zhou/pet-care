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
    console.log(invitecode, 'invitecode');
    return <ClientComponent invitecode={invitecode} />
}

const styles = `
  .custom-card {
    @apply bg-white shadow-lg rounded-lg p-6;
  }
`;
if (typeof document !== 'undefined') {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
}