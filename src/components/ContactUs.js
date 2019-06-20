import React from "react";
import Social from "./Social";

class Services extends React.Component{
    render(){
        return (
            <section id="contact" className="mapWrap">
                <div id="googleMap" style={{"width":"100%"}}></div>
                <div id="contact-area">
                    <div className="container">
                        <h2 className="block_title">Hey !!!</h2>
                        <div className="row">
                            <div className="col-xs-12">
                            </div>
                            <div className="col-sm-6">
                                <div className="moreDetails">
                                    <h2 className="con-title">More About me</h2>
                                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum animi repudiandae nihil aspernatur repellat temporibus doloremque sint ea laboriosam, excepturi iure inventore rerum voluptatibus, suscipit totam, sit necessitatibus. Rerum, blanditiis. </p>
                                    <ul className="address">
                                        <li><i className="pe-7s-map-marker"></i><span>1600 Pennsylvania Ave NW,<br />Washington, DC 20500,<br />United States</span></li>
                                        <li><i className="pe-7s-mail"></i><span>example@gmail.com</span></li>
                                        <li><i className="pe-7s-phone"></i><span>+1-202-555-0144</span></li>
                                        <li><i className="pe-7s-global"></i><span><a href="http://www.themewagon.com" target="_blank" rel="noopener noreferrer">www.themewagon.com</a></span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <h2 className="con-title">Drop us a line</h2>
                                <form>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="user_name" placeholder="Enter your name" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="your_email" placeholder="Enter your email" />
                                    </div>
                                    <div className="form-group">
                                        <textarea name="InputMessage" id="user_message" className="form-control" rows="5" required></textarea>
                                    </div>

                                    <button type="submit" className="btn medium">Let us know</button>
                                </form>   
                            </div>
                        </div>
                    </div>
                </div>
                <Social />
            </section>
        );
    }
}
export default Services;