import ProductDetails from "@/Components/cards/productDetails";
import React from "react";

const page = ({ params }: { params: any }) => {
    return (
        <div className="relative">
            <ProductDetails id={params.id} />
        </div>
    );
};

export default page;