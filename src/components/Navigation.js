import React from "react";
import { HashRouter as Router, Link } from 'react-router-dom';

class Navigation extends React.Component{
    render(){
        return(
            <Router>
                <section id="navigation">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-10">
                                <div className="logo">
                                    <Link data-scroll to="/Home" className="logo-text">Devendra More</Link>
                                </div>
                            </div>
                            <div className="col-xs-2">
                                <div className="outer-menu">
                                    <input className="checkbox-toggle" type="checkbox" />
                                    <div className="hamburger">
                                        <div></div>
                                    </div>
                                    <div className="menu">
                                        <div>
                                        <div>
                                            <ul className="menubar">
                                                <li><Link to="/Home" data-scroll>Home <i className="pe-7s-home"></i></Link><span className="menu-effect"></span></li>
                                                <li><Link to="/services" data-scroll>Service <i className="pe-7s-config"></i></Link><span className="menu-effect"></span></li>
                                                <li><Link to="/portfolio" data-scroll>Portfolio <i className="pe-7s-glasses"></i></Link><span className="menu-effect"></span></li>
                                                <li><Link to="/testimonial" data-scroll>Testimonial <i className="pe-7s-comment"></i></Link><span className="menu-effect"></span></li>
                                                <li><Link to="/contactus" data-scroll>Contact <i className="pe-7s-help1"></i></Link><span className="menu-effect"></span></li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>            
                </section>
            </Router>
        );
    }
}
export default Navigation;