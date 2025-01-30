import { NextRequest, NextResponse } from 'next/server'
import {supabase} from '../../utils/supabase'

export async function POST(req:NextRequest){
    const reqBody = await req.json()
    try{
        if(req.method === 'POST'){
            const {data, error} = await supabase.from('product_code_map').insert(reqBody)
            if(error){
                console.error('Error fetching data:', error)
            } else{
                console.log(data, 'data');
            }
            return NextResponse.json({
                message: "successfully",
                success: true
            })
        } else{
            throw new Error(`Unsupported HTTP method: ${req.method}`);
        }
    } catch(err){
        console.log(err);
        return NextResponse.json({error: err}, {status: 500})
    }
}
