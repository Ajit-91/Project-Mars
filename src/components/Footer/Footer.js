import React from 'react'
import "../../css/Components/footer.css"

export default function Footer(){
    let currYear = new Date().getFullYear();
    return(
        <>
            <footer className="footer">
            <p>@ rovalien {currYear} </p>
        </footer>
        </>
    );
}
