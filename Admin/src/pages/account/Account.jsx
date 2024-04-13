import React, { useEffect, useState } from 'react'
import { publicRequest } from '../../requestMethod';
import AddIcon from '@mui/icons-material/Add';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {Link} from 'react-router-dom'
import UserChart from '../../components/chart/UserChart';
const Account = () => {

  const [accounts,setAccount] = useState([]); 
  
  const getAccountList = async()=>{
    try {
        const {data} = await publicRequest.get('/user'); 

        const isSupperAdmin = JSON.parse(localStorage.getItem('user')).isSupperAdmin; 
        if(!isSupperAdmin){
            const filterData = data.filter(item => item.isAdmin === false); 
            setAccount(filterData); 
            return; 
        }

        setAccount(data.filter(item => item.isSupperAdmin === false && item.isAdmin === false)); 
    } catch (error) {
        console.log(error); 
    }
  }

  const handleDeleteUser = async(id)=>{
    try {
        await publicRequest.delete(`/user/${id}`);
        alert('Xóa người dùng thành công !'); 
        getAccountList(); 
    } catch (error) {
        console.log(error); 
    }
  }

  useEffect(()=>{
    getAccountList(); 
  },[])
  
  return (
    <div style={{marginTop:100}} className='acc-container'>
        <div  className='account-list'>
        <table style={{marginTop:0}} id="customers">
  <tr>
    <th>Tên người dùng</th>
    <th>Email</th>
    <th>Quyền</th>
    <th>Trạng thái</th>
    <th>Thao tác</th>
  </tr>

  {
        accounts && accounts.map(item =>{
            return (
                <tr>
                    <td>{item.userName}</td>
                    <td>{item.email}</td>
                    <td>
                        {item.isAdmin === false && 'Người dùng'}
                        {item.isAdmin === true && 'Admin'}
                    </td>
                    <td>{item.status === 'Active' && 'Đang hoạt động'}</td>
                    <td style={{display:'flex',justifyContent:'center',alignItems:'center', border:'none'}}>
                        <Link to="/account/create" className='link'><button style={{color:'green',display:'flex',justifyContent:'center',alignItems:'center',margin:'0 5px',cursor:'pointer'}}> <AddIcon/></button></Link>
                        <Link to={`/account/update/${item._id}`}>
                        <button style={{color:'blue',display:'flex',justifyContent:'center',alignItems:'center',margin:'0 5px',cursor:'pointer'}}> <ModeEditOutlinedIcon/></button>
                        </Link>
                        <button onClick={()=> handleDeleteUser(item._id)} style={{color:'red',display:'flex',justifyContent:'center',alignItems:'center',margin:'0 5px',cursor:'pointer'}}> <DeleteOutlineIcon/></button>
                    </td>
                </tr>
            )
        })
  }
  
</table>
        </div>

        <div className='account-chart'>
            <UserChart/>
        </div>
    </div>
  )
}

export default Account