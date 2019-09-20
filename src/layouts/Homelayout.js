import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import $ from 'jquery'
class Homelayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollPy: null,
      isIndex: false
    }
  }

  _handleMenu = async(e, path, isScrollPy) => {
    if(path) {
      await this.setState({isIndex: true, scrollPy: path})
      let el = document.getElementById(path).offsetTop;
      window.scrollTo({
        top: el,
        behavior: 'smooth'
      })
      window.addEventListener('scroll', function (param) { 

      }) 
    } else {
      await this.setState({isIndex: false, scrollPy: null})
      window.scrollTo(0, 0)
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }
  handleScroll(e) {
    if(window.location.pathname ==='/') {
      let oTop = $('#advantage').offset().top - window.innerHeight;
      let start = 0
      if (start == 0 && $(window).scrollTop() > oTop) {
        setTimeout(() => {
          $('#advantage .quanlity.counter').each(function() {
            let $this = $(this),
              countTo = $this.attr('data-count');
            $({
              countNum: $this.text()
            }).animate({
                countNum: countTo
              },
              {
                duration: 1500,
                easing: 'swing',
                step: function() {
                  $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                  $this.text(this.countNum);
                }
              });
          });
          start = 1;
        }, 300)
      }
    }
  }
  
  _homePage = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  
  render() {
    const {isIndex, scrollPy} = this.state;
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
            <Link onClick={this._homePage} to="/">
              <img className="logo" src="/resources/asset icon.png" alt="" />
            </Link>
            <div className="collapse navbar-collapse" id="assetNavbar">
              <ul className="navbar-nav mr-auto pl-2">
                <li className="nav-item">
                  <NavLink onClick={(e) => this._handleMenu(e, false)} to="/about" activeClassName="active" className="nav-link">Giới thiệu</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink onClick={(e) => this._handleMenu(e, 'about-asset')} className={"nav-link " + (scrollPy === 'about-asset' ? 'active' : '')} to={isIndex ? '#about-asset' : '/#about-asset'}>
                    Asset là gì ?
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink onClick={(e) => this._handleMenu(e, 'what-is-asset')} className={"nav-link " + (scrollPy === 'what-is-asset' ? 'active' : '')} to={isIndex ? '#what-is-asset' : '/#what-is-asset'}>
                    Ưu thế
                  </NavLink>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li  className="nav-item pl-2">
                  <NavLink onClick={(e) => this._handleMenu(e, false)} activeClassName="active" className="nav-link" to="/recruitment">
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
                  src="/resources/facebook icon.png"
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
                  src="/resources/zalo icon.png"
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
                  src="/resources/linkedin icon.png"
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
