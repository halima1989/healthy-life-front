"use client"
import React from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
    // Définition des styles dans une constante
    const styles = {
        wrapper: "mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8",
    };

    return <div className={styles.wrapper}>{children}</div>;
};

export default Wrapper;

// import React from "react";

// const Wrapper = ({ children }: { children: React.ReactNode }) => {
//     return (
//         <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//             {children}
//         </div>
//     );
// };
// export default Wrapper;
