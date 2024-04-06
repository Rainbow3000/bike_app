import React from 'react'
import './featured.scss'
import featuredImg from './imgs/featured.png'

const Featured = () => {
  
    return (

            <div className='featured-container'>   
            
                <div className='featured'>
                    <div className='featured-img'>
                        <img  src={featuredImg} alt="" />
                    </div>

                    <div className='featured-text'>
                        <ul>
                            <li><span>Hubble</span></li>
                            <li>Bike Store</li>
                            <li>Nơi bạn có thể tìm thấy chiếc xe đạp bạn yêu thích với đa dạng thể loại xe đạp nổi tiếng hiện tại.</li>
                            <li><button>Khám phá</button></li>
                        </ul>
                    </div>
                </div>
                
            </div>
    
                
           
      


    )
}

export default Featured