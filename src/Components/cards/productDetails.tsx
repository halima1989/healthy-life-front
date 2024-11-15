"use client"
import { CartContext } from "@/Context/cartContext";
import { addToCart, getMyCart } from "@/Services/cart";
import { getOneProduct } from "@/Services/product";
import { productType } from "@/Utils/types";
import React, { useContext, useEffect, useReducer, useState } from "react";

const ProductDetails = ({ id }: { id: string }) => {
    const { cart, setCart } = useContext(CartContext);
    const [product, setProduct] = useState<productType>();

    useEffect(() => {
        const oneProduct = async () => {
            const response = await getOneProduct(id);
            setProduct(response.data);
            const cartRes = await getMyCart();
            setCart(cartRes.data);
        };

        oneProduct();
    }, []);

    const addProduct = async () => {
        await addToCart(id).then((res) => {
            location.reload()
        });
    };

    return (
        <div className="min-w-screen min-h-screen bg-white flex items-center p-5 lg:p-10 overflow-hidden ">
            <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 md:text-left">
                <div className="md:flex items-center -mx-10">
                    <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                        <div className="">
                            <img
                                src={`http://localhost:3000/image/view/${product?.image}`}
                                className="h-96"
                                alt=""
                            />
                            {/* <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div> */}
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-10">
                        <div className="mb-10">
                            <h1 className="font-bold uppercase text-2xl mb-5">
                                {product?.name}
                            </h1>
                            <p className="text-sm">{product?.description}</p>
                        </div>
                        <div>
                            <div className="inline-block align-bottom mr-5">
                                <span className="text-2xl leading-none align-baseline"></span>
                                <span className="font-bold text-2xl leading-none align-baseline">
                                    $ {product?.price}
                                </span>
                            </div>

                            <div className="inline-block align-bottom">
                                <span className="text-xl leading-none align-baseline">
                                    Stock: {product?.stock}
                                </span>
                            </div>
                        </div>
                        <div className="my-20">
                            <button
                                onClick={() => {
                                    addProduct();
                                }}
                                className="bg-blue-400 hover:bg-blue-600 hover:opacity-100 text-gray-800 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"
                            >
                                <i className="mdi mdi-cart -ml-2 mr-2"></i> Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;