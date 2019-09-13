import React, { Component } from "react";
import HomeNav from "../components/Nav/HomeNav";
import "../assets/stylesheets/index.css";
import HomeFooterNav from "../components/Nav/HomeFooterNav";
class Homelayout extends Component {
    render() {
        return (
            <div className="section-homepage">
                <div className="container-fluid homepage__container">
                    <HomeNav />
                    {this.props.children}
                    <HomeFooterNav/>
                </div>
            </div>
        );
    }
}
export default Homelayout;
