import React, { Component } from "react";
import { Row, Col, Menu, Drawer, Button, Icon } from 'antd';

class HomeNav extends Component {
    state = { visible: false };
    showDrawer = () => {
        this.setState({
          visible: true,
        });
    };
    onClose = () => {
        this.setState({
          visible: false,
        });
    };
    render() {
        return (
            <div className="HomeNav">
                
                <Row>
                    <Col xs={4} md={0}>
                        <div className="hamburger-button">
                            <Icon type="menu" onClick={this.showDrawer}>
                            </Icon>
                            <Drawer
                                title="Asset"
                                placement="left" 
                                closable={false}
                                onClose={this.onClose}
                                visible={this.state.visible}
                            >
                                <p>Giới thiệu</p>
                                <p>Ưu thế</p>
                                <p>Asset là gì?</p>
                                <p>Tuyển dụng</p>
                            </Drawer>
                        </div>
                    </Col>
                    <Col xs={20} md={4}>
                        <div className="logo">
                            <img src="/Images/asset icon.png"/>
                        </div>
                    </Col>
                    <Col xs={0} md={4}>
                        <div className="header-intro">
                            Giới thiệu
                        </div>
                    </Col>
                    <Col xs={0} md={4}>
                    <div className="header-strong">
                        Ưu thế
                    </div>
                    </Col>
                    <Col xs={0} md={5}>
                        <div className="header-infor">
                            Asset là gì?
                        </div>
                    </Col>
                    <Col xs={0} md={7}>
                        <div className="header-hiring">
                            Tuyển dụng
                        </div>
                    </Col>
                   
                </Row>
                
                
            </div>

        );
    }
}

export default HomeNav