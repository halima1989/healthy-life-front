// 'use client';
// import React, { useEffect, useState } from "react";
// import ProductCard from "./cards/productCard";
// import { productType } from "@/Utils/types";
// import { getAllProducts } from "@/Services/product";

// // Typage des props du composant
// interface ProductListProps {
//     products: productType[];
// }

// const ProductList = ({ products }: ProductListProps) => {
//     return (
//         <div className="flex flex-col justify-between items-center">
//             <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
//                 {products.map((product: productType) => (
//                     <ProductCard key={product.id} product={product} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ProductList;
