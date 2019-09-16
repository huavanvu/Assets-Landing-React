import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import {withRouter} from 'react-router-dom';
class Homelayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuActive: null,
      isIndex: false
    }
  }

  componentWillMount() {
    if(window.location.pathname === '/') {
      this.setState({
        isIndex: true
      })
    }
    console.log(this.state);
  }

  _handleMenu = (e) => {
    console.log(e);
  }

  
  
  render() {
    return (
      <div>
        <nav
          id="asset-nav"
          className="navbar navbar-expand-lg navbar-light bg-transparent py-2 active-scroll"
        >
          <div className="container">
            <button
              className="pull-left navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#assetNavbar"
              aria-controls="assetNavbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <Link to="/" onClick={this._handleMenu}>
              <img className="logo" src="/resources/asset icon.png" alt="" />
            </Link>
            <div className="collapse navbar-collapse" id="assetNavbar">
              <ul className="navbar-nav mr-auto pl-2">
                <li className="nav-item">
                  <NavLink to="/about" activeClassName="active" className="nav-link">Giới thiệu</NavLink>
                </li>
                <li className="nav-item">
                  <a onClick={(e) => this._handleMenu(e, '#about')} className="nav-link" href="#about">
                    Asset là gì ?
                  </a>
                </li>
                <li className="nav-item">
                  <a onClick={this._handleMenu} className="nav-link" href="#advantage">
                    Ưu thế
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li onClick={this._handleMenu} className="nav-item pl-2">
                  <NavLink activeClassName="active" className="nav-link" to="/recruitment">
                    {" "}
                    Tuyển dụng
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="pt-5"> {this.props.children}</div>

        <footer className="pt-5 pb-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-md-6">
                <a href="/">
                  <img
                    className="w-25 mb-2"
                    src="/resources/asset icon.png"
                    alt=""
                  />
                </a>
                <div className="color-1C6BAE f-size-13">
                  Asset là trang thông tin về thị trường bất động sản Việt Nam
                </div>
                <div className="color-1C6BAE f-size-13">
                  Được xây dựng và phát triển bởi Công ty TNHH Giải Pháp Công
                  Nghệ Dữ Liệu Asset
                </div>
              </div>
              <div className="col-12 col-md-6 mt-3 mt-md-0">
                <div className="partner float-right color-1C6BAE">
                  ĐỐI TÁC CHIẾN LƯỢC
                </div>
                <ul className="nav justify-content-end float-right">
                  <li className="nav-item">
                    <div className="nav-link active" href="#">
                      <img
                        className="w-100"
                        src="/resources/logo doi tac chien luoc.png"
                        alt=""
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        <div
          id="social-fixed"
          className="fixed-top d-none d-xl-block"
          style={{ top: "25%", width: "50px" }}
        >
          <div className="flex-column d-inline-flex p-3 social-fixed__container">
            <span>
              <a
                className="d-inline-block mb-4"
                href="https://www.facebook.com/assetvn/"
                target="_blank"
                title="Connect Facebook With Asset"
              >
                <img
                  style={{ width: "48px" }}
                  src="./resources/facebook icon.png"
                  alt=""
                />
              </a>
            </span>
            <span>
              <a
                className="d-inline-block mb-4"
                href="https://zalo.me/2524048617738660004"
                target="_blank"
                title="Connect Zalo With Asset"
              >
                <img
                  style={{ width: "48px" }}
                  src="./resources/zalo icon.png"
                  alt=""
                />
              </a>
            </span>
            <span>
              <a
                className="d-inline-block"
                href="https://www.linkedin.com/company/assetvn/"
                target="_blank"
                title="Connect LinkedIn With Asset"
              >
                <img
                  style={{ width: "48px" }}
                  src="./resources/linkedin icon.png"
                  alt=""
                />
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Homelayout;
