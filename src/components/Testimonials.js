import React from "react";

class Services extends React.Component{
    render(){
        return(
            <section id="testimonial" className="testimonial-area">
                <div className="container">
                    <h2 className="block_title">Testimonials</h2>
                    <div className="row">
                        <div className="col-xs-12">
                        </div>
                        <div id="testimonial-container" className="col-xs-12">
                            <div className="testimonila-block">
                                <img src="assets/images/testimonial.jpg" alt="clients" className="selfshot" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem sed mollitia illum! Molestiae dignissimos, hic dolorem et eius ut nobis. Corrupti totam amet aperiam aut voluptate nobis dolor at soluta.</p>
                                <strong>Monir Hossain</strong>
                                <br />
                                <small>C.E.O</small>
                            </div>
                            <div className="testimonila-block">
                                <img src="assets/images/testimonial2.jpg" alt="clients" className="selfshot" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem sed mollitia illum! Molestiae dignissimos, hic dolorem et eius ut nobis. Corrupti totam amet aperiam aut voluptate nobis dolor at soluta.</p>
                                <strong>Nur Ul Hossain</strong>
                                <br />
                                <small>Project Manager</small>
                            </div>
                            <div className="testimonila-block">
                                <img src="assets/images/testimonial3.jpg" alt="clients" className="selfshot" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem sed mollitia illum! Molestiae dignissimos, hic dolorem et eius ut nobis. Corrupti totam amet aperiam aut voluptate nobis dolor at soluta.</p>
                                <strong>Hossain Abrar</strong>
                                <br />
                                <small>Developer</small>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Services;