import React from 'react'

const NavBav = () => {
  return (
    <nav className="bg-white shadow bg-gray-100">  
  <div className="container mx-auto flex items-center justify-between p-4">  
    {/* Logo */}  
    <div className="text-lg font-bold text-gray-800">ASUS</div>  
    
    {/* Navigation Links */}  
    <div className="flex space-x-6 whitespace-nowrap"> {/* Tăng khoảng cách ở đây thành space-x-6 */}  
      {["Store", "Laptop", "Thiết bị di động", "Màn Hình / Máy Bàn", "Bo Mạch Chủ / Linh Kiện", "Thiết Bị Mạng / IoT / Servers", "Phụ Kiện", "Mua hàng", "Hỗ Trợ"].map((item) => (  
        <a key={item} href="#" className="text-sm text-gray-600 hover:text-black">  
          {item}  
        </a>  
      ))}  
    </div>  
    
    {/* Icons */}  
    <div className="flex items-center space-x-6"> {/* Tăng khoảng cách ở đây thành space-x-6 */}  
      <a href="#" className="text-gray-600 hover:text-black">  
        <i className="fas fa-search" />   
      </a>  
      <a href="#" className="text-gray-600 hover:text-black">  
        <i className="fas fa-shopping-cart" />   
      </a>  
      <a href="#" className="text-gray-600 hover:text-black">  
        <i className="fas fa-user" />   
      </a>  
    </div>  
  </div>  
</nav>
  )
}

export default NavBav
