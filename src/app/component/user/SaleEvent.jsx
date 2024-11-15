import React from 'react'

const SaleEvent = () => {
  return (
    <div className="container mx-auto my-10">  
      <h1 className="text-3xl font-bold text-center">Chương trình và Sự kiện</h1>  
      <div className="flex justify-center mt-5 space-x-4">  
          {[1, 2, 3].map((item) => (  
              <a   
                  href="#"   
                  key={item}   
                  className="flex-shrink-0"  
              >  
                  <div className="bg-white shadow-lg rounded-md overflow-hidden transition-transform hover:scale-105">  
                      <img   
                          src={  
                              item === 1  
                                  ? "https://www.asus.com/media/Odin/Websites/vn/SiteSetting/20230710031437.jpg?webp"  
                                  : item === 2  
                                  ? "https://www.asus.com/media/Odin/Websites/vn/SiteSetting/20240710072838.jpg?webp"  
                                  : "https://www.asus.com/media/Odin/Websites/vn/SiteSetting/20231103064144.jpg?webp"  
                          }   
                          alt={`Image ${item}`}   
                          className="w-full h-64 object-cover"   
                      />  
                      <div className="p-4">  
                          <h2 className="font-semibold">  
                              {item === 1 && 'Review sản phẩm - Nhận quà liền tay'}  
                              {item === 2 && 'Ưu đãi ASUS Education'}  
                              {item === 3 && 'Mua Laptop ASUS nhận ngay gói Adobe Creative Cloud'}  
                          </h2>  
                      </div>  
                  </div>  
              </a>  
          ))}  
      </div>  
      <div className="text-center mt-5">  
          <a href="#" className="text-blue-500 font-bold">Xem tất cả &gt;</a>  
      </div>  
    </div>  
  )
}

export default SaleEvent