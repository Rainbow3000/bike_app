import React from 'react'
import './account.scss'
import { Link } from 'react-router-dom'; 
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { publicRequest } from '../../requestMethod';
const CreateAccount = () => {
    const {register,handleSubmit,formState:{errors}} = useForm(); 
    const navigate = useNavigate(); 
    const onSubmit = async (data,e)=>{
        e.preventDefault(); 
        const {userName,email,password,rePassword}  = data; 
        if(password === rePassword){
            await publicRequest.post('/auth/register',{
                userName,
                email,
                password
            })
            alert('Tạo tài khoản thành công !')
            navigate('/account')
       }
    }
  return (

    <div className='register-container'>
        <div className="register-wraper">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>TẠO TÀI KHOẢN NGƯỜI DÙNG</h1>
                <div>
                    <label htmlFor="">Tên người dùng<span>*</span></label>
                      <span className='register-error'>{errors.userName?.type === "required" && "Tên không được trống!"}</span>
                      <span className='register-error'>{errors.userName?.type === "minLength" && "Tên phải it nhất 8 ký tự"}</span>
                    <input name='userName' type="text" placeholder='Tên người dùng' {...register("userName",{required:true,minLength:8})}/>
                </div>
                <div>
                      <label htmlFor="">Email<span>*</span></label>
                      <span className='register-error'>{errors.email?.type === "required" && "email không được trống!"}</span>
                      <span className='register-error'>{errors.email?.type === "pattern" && "email không hợp lệ!"}</span>
                      <input name='email' type="email" placeholder='Email' {...register("email", { required: true,pattern: /^[A-Z0-9 ._%+-]+@[A-Z0-9 .-]+\.[A-Z]{2,}$/i })}/>
                </div>
                <div>
                      <label htmlFor="">Mật khẩu<span>*</span></label>
                      <span className='register-error'>{errors.password?.type === "required" && "Mật khẩu không được trống"}</span>
                      <span className='register-error'>{errors.password?.type === "minLength" && " Mật khẩu phải ít nhất 8 kí tự!"}</span>
                      <input name='password' type="password" placeholder='Mật khẩu' {...register("password",{required:true,minLength:8})}/>
                </div>
                <div>
                      <label htmlFor="">Nhập lại mật khẩu<span>*</span></label>
                      <span className='register-error'>{errors.rePassword?.type === "required" && "Mật khẩu không được trống"}</span>
                      <span className='register-error'>{errors.rePassword?.type === "minLength" && "Mật khẩu phải ít nhất 8 kí tự!"}</span>
                      <input name='rePassword' type="password" placeholder='Nhập lại mật khẩu' {...register("rePassword",{required:true,minLength:8})}/>
                </div>
                <div>
                   
                    <button>TẠO</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default CreateAccount