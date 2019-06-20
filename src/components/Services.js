import React from "react";

class Services extends React.Component{
    render(){
        return(
            <section id="services" className="service-area">
                <div className="container">
                    <h2 className="block_title">Services</h2>
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="services">
                                <div className="service-wrap">    
                                    <i className="pe-7s-science pe-dj pe-va"></i>
                                    <h3>Creative Idea</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, commodi.</p>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="services">
                                <div className="service-wrap">
                                    <i className="pe-7s-monitor pe-dj pe-va"></i>
                                    <h3>Responsive Design</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, commodi.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="services">
                                <div className="service-wrap">
                                    <i className="pe-7s-edit pe-dj pe-va"></i>
                                    <h3>Clean &amp; Nice</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, commodi.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="services">
                                <div className="service-wrap">
                                    <i className="pe-7s-config pe-dj pe-va"></i>
                                    <h3>Support</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, commodi.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Services;