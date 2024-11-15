import React from 'react'
import Image from 'next/image'  // Import Image từ next/image

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white">  
      <div className="flex items-center space-x-6">  
        <Image 
          src="https://www.asus.com/media/Odin/images/header/ROG_hover.svg" 
          alt="Logo" 
          width={32}  // Thiết lập chiều rộng (px)
          height={32} // Thiết lập chiều cao (px)
          className="w-auto h-8" // Bạn vẫn có thể sử dụng class Tailwind cho các kiểu dáng khác
        />  
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
