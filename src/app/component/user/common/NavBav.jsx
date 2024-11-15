import React from 'react'
import Link from 'next/link'  // Import Link từ next/link

const NavBav = () => {
  return (
    <nav className=" shadow bg-gray-100">  
      <div className="container mx-auto flex items-center justify-between p-4">  
        {/* Logo */}  
        <div className="text-lg font-bold text-gray-800">ASUS</div>  

        {/* Navigation Links */}  
        <div className="flex space-x-6 whitespace-nowrap"> {/* Tăng khoảng cách ở đây thành space-x-6 */}  
          {["Store", "Laptop", "Thiết bị di động", "Màn Hình / Máy Bàn", "Bo Mạch Chủ / Linh Kiện", "Thiết Bị Mạng / IoT / Servers", "Phụ Kiện", "Mua hàng", "Hỗ Trợ"].map((item) => (  
            <Link key={item} href="#">  {/* Sử dụng Link thay vì a */} 
              <Link className="text-sm text-gray-600 hover:text-black">  
                {item}  
              </Link>  
            </Link>  
          ))}  
        </div>  

        {/* Icons */}  
        <div className="flex items-center space-x-6"> {/* Tăng khoảng cách ở đây thành space-x-6 */}  
          <Link href="#"> {/* Sử dụng Link thay vì a */} 
            <Link className="text-gray-600 hover:text-black">  
              <i className="fas fa-search" />   
            </Link>  
          </Link>  
          <Link href="#"> {/* Sử dụng Link thay vì a */} 
            <a className="text-gray-600 hover:text-black">  
              <i className="fas fa-shopping-cart" />   
            </a>  
          </Link>  
          <Link href="#"> {/* Sử dụng Link thay vì a */} 
            <Link className="text-gray-600 hover:text-black">  
              <i className="fas fa-user" />   
            </Link>  
          </Link>  
        </div>  
      </div>  
    </nav>
  )
}

export default NavBav
