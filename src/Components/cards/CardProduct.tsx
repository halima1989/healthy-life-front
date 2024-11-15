import React from 'react';

type ProductType = {
    id: string;
    name: string;
    description: string;
    image: string;
    price: number;
    category: string;
};

const CardProduct = ({ product }: { product: ProductType }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            {/* Section image */}
            <div className="relative w-full h-56 bg-gray-100">
                <img
                    src={`http://localhost:3002/image/view/${product.image}`}
                    alt={product.name}
                    className="object-cover w-full h-full"
                />
            </div>
            {/* Détails du produit */}
            <div className="p-5">
                {/* Catégorie */}
                <span className="text-xs font-semibold text-orange-500 uppercase">{product.category}</span>
                {/* Nom */}
                <h2 className="text-lg font-bold text-gray-800 mt-2 truncate">{product.name}</h2>
                {/* Description */}
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">{product.description}</p>
                {/* Footer : prix et bouton */}
                <div className="flex items-center justify-between mt-4">
                    <span className="text-xl font-bold text-orange-600">${product.price}</span>
                    <button className="px-4 py-2 bg-orange-600 text-white text-sm font-semibold rounded-lg hover:bg-orange-700">
                        Ajouter
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardProduct;
