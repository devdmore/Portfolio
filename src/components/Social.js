import React from "react";
import { HashRouter as Router, Link } from 'react-router-dom';

class Social extends React.Component{
    render(){
        return (
            <Router>
                <div id="social">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <ul className="scoialinks">
                                    <li className="normal-txt">Find me on</li>
                                    <li className="social-icons"><Link className="facebook" to="/Home"></Link></li>
                                    <li className="social-icons"><Link className="twitter" to="/Home"></Link></li>
                                    <li className="social-icons"><Link className="linkedin" to="/Home"></Link></li>
                                    <li className="social-icons"><Link className="google-plus" to="/Home"></Link></li>
                                    <li className="social-icons"><Link className="wordpress" to="/Home"></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}
export default Social;