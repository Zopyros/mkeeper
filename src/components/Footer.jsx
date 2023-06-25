import React from "react";


const currentYear = new Date().getFullYear();

function Footer(){
    return (
    <footer> 
     <p>
        Copyright <span>&copy;</span> {currentYear}
    </p></footer>
    );
}

export default Footer;