import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

function DefaultLayout({children}) {
    return (
        <>
            <Navbar />
            <>{children}</>
            <Footer/>
        </>
       
        
    );
}

export default DefaultLayout;