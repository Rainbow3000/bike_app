import React, { useEffect, useState } from 'react'
import './account.scss'
import { Link, useLocation } from 'react-router-dom'; 
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { publicRequest } from '../../requestMethod';
const UpdateAccount = () => {

    const [user,setUser] = useState([]); 
    const [isAdmin,setIsAdmin] = useState(false); 
    const [userName,setUserName] = useState("");
    const [email,setEmail] = useState(""); 
    const navigate = useNavigate(); 
    const location = useLocation(); 
    const userId = location.pathname.split('/')[3];
    const {register,handleSubmit,formState:{errors}} = useForm(); 
    const onSubmit = async (data,e)=>{
          try {
            e.preventDefault(); 
            await publicRequest.put(`/user/${userId}`,{
                userName,email,isAdmin
            })
            alert('Cập nhật tài khoản thành công !')
            navigate('/account')  
          } catch (error) {
            console.log(error); 
          }
    }

    const getUserInfo = async()=>{
        try {
            const {data} = await publicRequest.get(`/user/${userId}`); 
            console.log(data); 
            setEmail(data.email); 
            setUserName(data.userName);
            setIsAdmin(data.isAdmin); 
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        getUserInfo(); 
    },[]);

  return (
    
    <div className='register-container'>
        <div className="register-wraper">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>CẬP NHẬT TÀI KHOẢN NGƯỜI DÙNG</h1>
                <div>
                    <label htmlFor="">Tên người dùng<span>*</span></label>                   
                    <input value={userName}  name='userName' type="text" onChange={(e)=> setUserName(e.target.value)}/>

                </div>
                <div>
                      <label htmlFor="">Email<span>*</span></label>            
                      <input value={email} name='email' type="email" placeholder='Email' onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                <div>
                    
                <select value={isAdmin} style={{height:40}} onChange={(e)=> setIsAdmin(e.target.value)} name="" id="">
                    <option value={true}>Admin</option>
                    <option value={false}>Người dùng</option>
                </select>
                </div>

                <div>
                   
                    <button>CẬP NHẬT</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default UpdateAccount