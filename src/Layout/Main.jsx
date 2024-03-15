
// // import { useState } from "react";
// import DashboardLayout from "./DashboardLayout";
// import { ImWhatsapp } from "react-icons/im";
// // import Loader from "../components/Loader/Loader";

// const Main = () => {
    
//     return (
//         <>
//             <DashboardLayout></DashboardLayout>
            
//         </>
//     );
// };

// export default Main;

import React, { useState, useEffect } from "react";
import DashboardLayout from "./DashboardLayout";
import { ImWhatsapp } from "react-icons/im";
import Loader from "../components/Loader/Loader";


const Main = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            {loading ? (
                <Loader /> 
            ) : (
                <DashboardLayout />
            )}
        </>
    );
};

export default Main;
