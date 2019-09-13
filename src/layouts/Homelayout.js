import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Homelayout extends Component {
    render() {
        return (
            <div>
            <nav id="asset-nav" className="navbar navbar-expand-lg navbar-light bg-transparent">
              <div className="container">
                <button className="pull-left navbar-toggler" type="button" data-toggle="collapse" data-target="#assetNavbar" aria-controls="assetNavbar" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
               
                </button>
                <a className="navbar-brand pr-5" href="/"><img className="logo" src="resources/asset icon.png" /></a>
                <div className="collapse navbar-collapse" id="assetNavbar">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                      <a className="nav-link" href="#about">Giới thiệu</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#advantage">Ưu thế</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#what-is-asset">Asset là gì ?</a>
                    </li>
                  </ul>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link" href="/recruitment">Tuyển dụng</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            {this.props.children}
            <footer className="pt-5 pb-3">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <img className="w-25 mb-2" src="./resources/asset icon.png" alt="" />
                    <div className="color-1C6BAE f-size-13">Asset là trang thông tin về thị trường bất động sản Việt Nam</div>
                    <div className="color-1C6BAE f-size-13">Được xây dựng và phát triển bởi Công ty TNHH Giải Pháp Công Nghệ Dữ Liệu Asset</div>
                  </div>
                  <div className="col-12 col-md-6 mt-3 mt-md-0">
                    <div className="partner float-right color-1C6BAE">
                      ĐỐI TÁC CHIẾN LƯỢC
                    </div>
                    <ul className="nav justify-content-end float-right">
                      <li className="nav-item">
                        <div className="nav-link active" href="#"><img className="w-100" src="./resources/logo doi tac chien luoc.png" alt="" /></div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </footer>
            <div id="social-fixed" className="fixed-top d-none d-xl-block" style={{top: '25%', left: '2%', width: '50px'}}>
              <div className="flex-column d-inline-flex">
                <span><a className="d-inline-block mb-4" href="https://www.facebook.com/assetvn/" target="_blank"><img style={{width: '48px'}} src="./resources/facebook icon.png" alt="" /></a></span>
                <span><a className="d-inline-block mb-4" href="https://zalo.me/2524048617738660004" target="_blank"><img style={{width: '48px'}} src="./resources/zalo icon.png" alt="" /></a></span>
                <span><a className="d-inline-block mb-4" href="https://www.linkedin.com/company/assetvn/" target="_blank"><img style={{width: '48px'}} src="./resources/linkedin icon.png" alt="" /></a></span>
              </div>
            </div>
          </div>
          
        );
    }
}

export default Homelayout;