import { servises } from '../../../data';
import { NextApiRequest, NextApiResponse } from 'next';
export default (req:NextApiRequest,res:NextApiResponse)=>{
    console.log('API ' ,servises);
    res.status(200).json({servises})
}