"use client";

import CardProduct from '@/Components/cards/CardProduct';
import React, { useEffect, useState } from 'react';

type ProductType = {
    id: string;
    name: string;
    description: string;
    image: string;
    price: number;
    category: string;
};

export default function ProductGrid() {
    const [products, setProducts] = useState<ProductType[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:3002/product/all');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des produits', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <main className="bg-gray-50 min-h-screen py-10">
            <div className="max-w-screen-xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">Nos Produits</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {products.length > 0 ? (
                        products.map((product) => (
                            <CardProduct key={product.id} product={product} />
                        ))
                    ) : (
                        <p className="text-gray-700 text-center col-span-full">
                            Aucun produit disponible pour le moment.
                        </p>
                    )}
                </div>
            </div>
        </main>
    );
}
