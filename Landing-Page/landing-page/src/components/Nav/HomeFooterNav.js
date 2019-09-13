import React, { Component } from "react";
import { Row, Col, Divider } from 'antd';
class HomeFooterNav extends Component {

    render() {
        return (
            <div className="HomeFooterNav">
                <Row>
                    <Col md={12} xs={24}>
                        <div className="logo-footer">
                            <img src="/Images/asset icon.png"/>
                            <div className="intro">
                                Asset là trang thông tin về thị trường bất động sản Việt Nam
                                 được xây dựng và phát triển bởi Công ty TNHH Giải Pháp Công Nghệ Dữ Liệu Asset
                            </div>
                        </div>

                    </Col>
                    <Col md={12} xs={24}>
                        <div className="partner">
                            <div className="footer-intro">
                                ĐỐI TÁC CHIẾN LƯỢC
                            </div>
                            <img src="/Images/logo doi tac chien luoc.png"/>

                        </div>
                    </Col>
                </Row>
                <Divider/>
            </div>

        );
    }
}

export default HomeFooterNav