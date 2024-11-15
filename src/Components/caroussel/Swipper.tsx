// "use client";

// import React, { Fragment, useEffect, useState } from "react";
// import { Slide } from "react-slideshow-image";
// import "react-slideshow-image/dist/styles.css";
// import { ProductProps, productType } from "../../Utils/types";
// import { getAllProducts } from "../../Services/product";
// import CarouselCard from "./carouselCard";

// const Swipper = () => {
//     const [productListCarousel, setProductListCarousel] = useState<productType[]>([]);

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const res = await getAllProducts();
//                 setProductListCarousel(res.data);
//             } catch (error) {
//                 console.error("Erreur lors de la récupération des produits", error);
//             }
//         };

//         fetchProducts();
//     }, []);

//     return (
//         <div className="w-full lg:w-1/2 bg-white m-auto">
//             <h1 className="bg-white text-xl font-bold text-center p-5">
//                 Nos derniers produits
//             </h1>
//             <Slide cssClass="bg-white">
//                 {productListCarousel.length > 0 ? (
//                     productListCarousel.slice(0, 3).map((product) => (
//                         <Fragment key={product.id}>
//                             <CarouselCard card={product} />
//                         </Fragment>
//                     ))
//                 ) : (
//                     <p className="text-center">Chargement des produits...</p>
//                 )}
//             </Slide>
//         </div>
//     );
// };

// export default Swipper;
