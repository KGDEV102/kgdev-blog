import Navbar from "../DefaultLayout/Navbar/Navbar";

function OnlyNavbar({children}) {
    return ( 
        <>
            <Navbar />
            {children}
        </>
     );
}

export default OnlyNavbar;