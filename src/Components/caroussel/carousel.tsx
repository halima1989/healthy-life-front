// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css'; // Styles de base de Swiper
// import 'swiper/modules/navigation/navigation.css'; // Styles de navigation
// import 'swiper/modules/pagination/pagination.css'; // Styles de pagination
// import Image from 'next/image';

// const Caroussel = () => {
//     const images = [
//         '/images/Capture d’écran 2024-10-31 204244.png',
//         '/images/Capture d’écran 2024-10-31 204813.png',
//         '/images/Capture d’écran 2024-10-31 205205.png',
//         '/images/Capture d’écran 2024-10-31 205316.png',
//     ];

//     return (
//         <div className="h-80 w-full"> {/* Ajustez la hauteur ici */}
//             <Swiper
//                 modules={[Navigation, Pagination]} // Ajoutez les modules ici
//                 spaceBetween={50}
//                 slidesPerView={1}
//                 navigation
//                 pagination={{ clickable: true }}
//                 autoplay={{ delay: 3000 }}
//             >
//                 {images.map((src, index) => (
//                     <SwiperSlide key={index}>
//                         <Image
//                             src={src}
//                             alt={`Slide ${index + 1}`}
//                             layout="responsive"
//                             width={800} // Ajustez la largeur
//                             height={500} // Ajustez la hauteur
//                         />
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//     );
// };

// export default Caroussel;
