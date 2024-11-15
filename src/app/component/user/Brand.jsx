import React from 'react'
import Image from 'next/image'  // Import Image từ next/image

const Brand = () => {
    const logos = [  
        { src: 'https://www.tncstore.vn/media/brand/22.png', alt: 'ASUS' },  
        { src: 'https://www.tncstore.vn/media/brand/23.jpg', alt: 'Intel' },  
        { src: 'https://www.tncstore.vn/media/brand/13.png', alt: 'AMD' },  
        { src: 'https://www.tncstore.vn/media/brand/11.png', alt: 'Acer' },  
        { src: 'https://www.tncstore.vn/media/brand/78.jpg', alt: 'Sony' },  
        { src: 'https://www.tncstore.vn/media/brand/28.png', alt: 'LG' },  
    ]; 

    return (
        <div className="flex justify-center mt-[30px] mb-[30px] items-center space-x-6 p-4 bg-white">  
            {logos.map((logo, index) => (  
                <Image  
                    key={index}  
                    src={logo.src}  
                    alt={logo.alt}  
                    width={80}  // Đặt chiều rộng cho ảnh
                    height={40} // Đặt chiều cao cho ảnh
                    className="object-contain" // Đảm bảo ảnh không bị vỡ hoặc méo
                />  
            ))}  
        </div>  
    )
}

export default Brand
