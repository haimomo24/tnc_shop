import React from 'react'

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white">  
    <div className="flex items-center space-x-6">  
        <img src="https://www.asus.com/media/Odin/images/header/ROG_hover.svg" alt="Logo" className="h-8 w-auto" />  
        <div className="flex space-x-6 text-gray-600">  
            <span>ProArt</span>  
            <span>ASUS IoT</span>  
        </div>  
    </div>  
    <div className="flex space-x-6 text-gray-600">  
        <span>Sự kiện</span>  
        <span>Gaming</span>  
        <span>Doanh Nghiệp</span>  
    </div>  
</div>  

  )
}

export default Header