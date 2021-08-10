import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';


const Footer = () => {
    const ourAddress = [
        {name: "New York - 101010 Hudson" , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},
       
    ]
    
    const services = [
        {name: "Web Development" , link: "/emergency"},
        {name: "Mobile Development" , link: "/checkup"},
        {name: "UI/UX Design" , link: "/personal-treatment"},        
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"></a></li>
                            <li className="list-inline-item"><a href="//google.com"></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">+2025550295</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;