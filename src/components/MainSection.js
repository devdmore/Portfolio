import React from "react";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import ContactUs from "./ContactUs";


class Header extends React.Component{
    render(){
        return(
            <main>
                <Services />
                <Portfolio />
                <Testimonials />
                <ContactUs />
            </main>

        );
    };
}
export default Header;