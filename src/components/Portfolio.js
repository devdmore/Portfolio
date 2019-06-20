import React from "react";
import { HashRouter as Router, Link } from 'react-router-dom';

class Portfolio extends React.Component{
    render(){
        return(
            <Router>
                <section id="portfolio" className="portfolio-area">
                    <div className="container">
                        <h2 className="block_title">My Works</h2>
                        <div className="row port cs-style-3">
                            <div className="col-md-4 col-sm-6 col-xs-12 item-space">
                                <figure>
                                    <img src="assets/images/portfolio1.jpg" alt="img04" />
                                    <figcaption>
                                        <h3>Settings</h3>
                                        <span>Jacob Cummings</span>
                                        <Link to="/Home" className="button">Take a look</Link>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12 item-space">
                                <figure>
                                    <img src="assets/images/portfolio2.jpg" alt="img01" />
                                    <figcaption>
                                        <h3>Camera</h3>
                                        <span>Jacob Cummings</span>
                                        <Link to="/Home" className="button" >Take a look</Link>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12 item-space">
                                <figure>
                                    <img src="assets/images/portfolio3.jpg" alt="img02" />
                                    <figcaption>
                                        <h3>Music</h3>
                                        <span>Jacob Cummings</span>
                                        <Link to="/Home" className="button" >Take a look</Link>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12 item-space">
                                <figure>
                                    <img src="assets/images/portfolio4.jpg" alt="img04" />
                                    <figcaption>
                                        <h3>Settings</h3>
                                        <span>Jacob Cummings</span>
                                        <Link to="/Home" className="button" >Take a look</Link>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12 item-space">
                                <figure>
                                    <img src="assets/images/portfolio5.jpg" alt="img01" />
                                    <figcaption>
                                        <h3>Camera</h3>
                                        <span>Jacob Cummings</span>
                                        <Link to="/Home" className="button" >Take a look</Link>
                                    </figcaption> 
                                </figure>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12 item-space">
                                <figure>
                                    <img src="assets/images/portfolio6.jpg" alt="img02" />
                                    <figcaption>
                                        <h3>Music</h3>
                                        <span>Jacob Cummings</span>
                                        <Link to="/Home" className="button" >Take a look</Link>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="col-xs-12">
                                <div className="btn-center"><Link to="/Home" className="big button">View all</Link></div>
                            </div>
                        </div>
                    </div>
                </section>
            </Router>
        );
    }
}
export default Portfolio;