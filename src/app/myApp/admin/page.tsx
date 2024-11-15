
import React from "react";
import Header from "../../../Components/header/header";
import Footer from "../../../Components/footer/footer";

const page = () => {
    return (
        <div className="flex flex-col">
            <Header />
            <div className="flex flex-col justify-between lg:flex-row gap-2">
                <h1>admin</h1>
            </div>
            <Footer />
        </div>
    );
};

export default page;