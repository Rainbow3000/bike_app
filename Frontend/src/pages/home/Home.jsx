import React from 'react'
import './home.scss'
import Feature from '../../components/feature/Feature'
import Featured from '../../components/featured/Featured'
import Horizontal from '../../components/horizontal/Horizontal'
import ProductList from '../../components/productList/ProductList'
import NewsLetter from '../../components/newsletter/NewsLetter'
import FilterProduct from '../../components/filterProduct/FilterProduct'
import Category from '../../components/category/Category'
const Home = () => {
    return <>
         <Featured/> 
         <ProductList/>
         <NewsLetter/>
    </> 

        
}

export default Home