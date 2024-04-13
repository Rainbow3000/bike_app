import React from 'react'
import { Box ,Typography,List,ListItem,ListItemButton,ListItemIcon,ListItemText } from '@mui/material'
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import FilterFramesOutlinedIcon from '@mui/icons-material/FilterFramesOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CategoryIcon from '@mui/icons-material/Category';
import {Link} from "react-router-dom"
const Sidebar = () => {
  return (
      <Box sx={{ width: "15%", backgroundColor:'#333',height:"100vh",color:"white",position:'fixed',top:0,left:0}}>
        <Box>
            <Box>
                <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',':hover':{
                    cursor:'pointer'
                }}}>
                    <HomeOutlinedIcon sx={{ color: "white",fontSize:40}} />
                    <Typography variant="h4" sx={{fontWeight:"400",textAlign:'center',padding:5}}>Quản Trị</Typography>
                </Box>
                <nav>
                    <List>

                    <ListItem sx={{':hover':{
                            backgroundColor:'gray'
                        }}}>
                              <ListItemButton>
                                  <ListItemIcon sx={{color:"white"}}><AccountCircleOutlinedIcon /></ListItemIcon>
                                  <Link to="/account"><ListItemText primary="Tài khoản" /></Link>
                              </ListItemButton>
                          </ListItem>
                     
                          <ListItem sx={{':hover':{
                            backgroundColor:'gray'
                        }}}>
                              <ListItemButton>
                                  <ListItemIcon sx={{color:"white"}}><Inventory2OutlinedIcon /></ListItemIcon>
                                  <Link to="/"><ListItemText primary="Sản Phẩm" /></Link>
                              </ListItemButton>
                          </ListItem>

                          <ListItem sx={{':hover':{
                            backgroundColor:'gray'
                        }}}>
                              <ListItemButton>
                                  <ListItemIcon sx={{color:"white"}}><CategoryIcon /></ListItemIcon>
                                  <Link to="/category"><ListItemText primary="Danh Mục" /></Link>
                              </ListItemButton>
                          </ListItem>

                          <ListItem sx={{':hover':{
                            backgroundColor:'gray'
                        }}}>
                              <ListItemButton>
                                  <ListItemIcon sx={{color:"white"}}><FilterFramesOutlinedIcon /></ListItemIcon>
                                  <Link to="/order"><ListItemText primary="Đơn Hàng" /></Link>
                              </ListItemButton>
                          </ListItem>
                
            
                    </List>
                </nav>
            </Box>
        </Box>
    </Box>
  )
}

export default Sidebar