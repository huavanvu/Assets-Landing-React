import React, { Component } from "react";
import { Row, Col, Divider } from 'antd';
class HomePage extends Component {
  render() {
    return (
      
      <div className="body-container">
        <div className="devider-top">
        <Divider/>
        </div>
        
        <div className="body">
        <div className="intro-image">
          <img src="/Images/asset network.png" />
        </div>
        <div className="body-logo-what">
          <img src="/Images/icon asset nam mau.png" />
          <div className="body-logo-what-text">
            CÓ GÌ?
          </div>
        </div>
        <div className="body-main-feature" >
          <div className="desktop-display-main-feature">
          <Row>
            <Col md={8}>
                <div className="box-what">
                  <img src="/Images/tim kiem bds.png" />
                <div className="text">
                  Tìm kiếm Bất Động Sản
                </div>
                <div className="content">
                  Từ nhà riêng, căn hộ chung cư, đất nền, nhà phố, biệt thự... cho đến các dự án bất động sản lớn, nhỏ, mọi Asseter đều có thể tự do tìm kiếm tất cả mặt hàng bất 
                  động sản trên thị trường. Cùng với đó là các thông tin minh bạch về chủ sở hữu, nhà đầu tư của sản phẩm được tìm kiếm
                </div>
              </div>
              </Col>
              <Col md={8}>
              <div className="box-what">
                <img src="/Images/tham dinh gia bds.png" />
                <div className="text">
                  Thẩm định giá Bất Động Sản
                </div>
                <div className="content">
                  Được đảm nhận bởi các chuyên gia thẩm định giá hàng 
                  
                  đầu của Asset, hoàn toàn miễn phí
                
                </div>
              </div>
              </Col>
              <Col md={8}>
              <div className="box-what">
              <div>
                <img src="/Images/thong tin bds.png" />
                </div>
                <div className="text">
                  Thông tin Bất Động Sản
                </div>
                <div className="content">
                  Quy hoạch sử dụng đất, quy hoạch giao thông, quy hoạch xây dựng... pháp lý 
                  
                  bất động sản, lịch sử giá, lịch sử giao dịch và hơn 
                  
                  thế nữa...
                  
                </div>
              </div>
              </Col>
              </Row>
              <Row>
              <Col md={8}>
              <div className="box-what">
                <img src="/Images/tu van phap ly.png" />
                <div className="text">
                  Tư vấn pháp lý
                </div>
                <div className="content">
                  Phụ trách bởi công ty Luật đối tác có nhiều 
                 
                  năm kinh nghiệm trong lĩnh vực tư vấn 
               
                  pháp lý dự án bất động sản, pháp lý đầu 

                  tư...
                </div>
              </div>
              </Col>
              <Col md={8}>
              <div className="box-what">
                <img src="/Images/danh gia bds.png" />
                <div className="text">
                  Đánh giá Bất Động Sản
                </div>
                <div className="content">
                  Mọi sản phẩm bất động sản đề sẽ đi kèm 
                  
                  với đánh giá chân thật nhất từ Asset cũng 
                  
                  như từ những người đã tiếp xúc trực tiếp 
                  
                  với sản phẩm đó.
                </div>
              </div>
              </Col>
            <Col md={8}>
              
              <div className="box-what">
                <img src="/Images/tin tuc bds.png" />
                <div className="text">
                  Tin tức Bất Động sản
                </div>
                <div className="content">
                  Cung cấp cho bạn những thông tin cập 
                  
                  nhập mới nhất về chính sách, thị trường bất động sản. Từ đó, giúp bạn nhìn thấy được 
                  
                  những biến động cũng như cơ hội lớn 
                  
                  trong đầu tư nhà đất 
                </div>
              </div>
            </Col>
          </Row>
          </div>
          <div className="moblie-display-main-feature">
            <Row>
              <Col xs={12}>
              <div className="box-what">
                <img src="/Images/tim kiem bds.png" />
                <div className="text">
                  Tìm kiếm Bất Động Sản
                </div>
                <div className="content">
                  Từ nhà riêng, căn hộ chung cư, đất nền, nhà phố, biệt thự... cho đến các dự án bất động sản lớn, nhỏ, mọi Asseter đều có thể tự do tìm kiếm tất cả mặt hàng bất 
                  động sản trên thị trường. Cùng với đó là các thông tin minh bạch về chủ sở hữu, nhà đầu tư của sản phẩm được tìm kiếm
                </div>
              </div>
              </Col>
              <Col xs={12}>
              <div className="box-what">
                <img src="/Images/tham dinh gia bds.png" />
                <div className="text">
                  Thẩm định giá Bất Động Sản
                </div>
                <div className="content">
                  Được đảm nhận bởi các chuyên gia thẩm định giá hàng 
                  
                  đầu của Asset, hoàn toàn miễn phí

                </div>
              </div>
              </Col>
              </Row>
              <Row>
              <Col xs={12}>
              <div className="box-what">
                <img src="/Images/tu van phap ly.png" />
                <div className="text">
                  Tư vấn pháp lý
                </div>
                <div className="content">
                  Phụ trách bởi công ty Luật đối tác có nhiều 
                 
                  năm kinh nghiệm trong lĩnh vực tư vấn 
               
                  pháp lý dự án bất động sản, pháp lý đầu 

                  tư...
                 
                </div>
              </div>
              </Col>
              <Col xs={12}>
              <div className="box-what">
                <img src="/Images/danh gia bds.png" />
                <div className="text">
                  Đánh giá Bất Động Sản
                </div>
                <div className="content">
                  Mọi sản phẩm bất động sản đề sẽ đi kèm 
                  
                  với đánh giá chân thật nhất từ Asset cũng 
                  
                  như từ những người đã tiếp xúc trực tiếp 
                  
                  với sản phẩm đó.
                </div>
              </div>
              </Col>
              </Row>
              <Row>
              <Col xs={12}>
              <div className="box-what">
                <img src="/Images/thong tin bds.png" />
                <div className="text">
                  Thông tin Bất Động Sản
                </div>
                <div className="content">
                  Quy hoạch sử dụng đất, quy hoạch giao thông, quy hoạch xây dựng... pháp lý 
                  
                  bất động sản, lịch sử giá, lịch sử giao dịch và hơn 
                  
                  thế nữa...
             
                </div>
              </div>
              </Col>
              <Col xs={12}>
              
              
              <div className="box-what">
                <img src="/Images/tin tuc bds.png" />
                <div className="text">
                  Tin tức Bất Động sản
                </div>
                <div className="content">
                  Cung cấp cho bạn những thông tin cập 
                  
                  nhập mới nhất về chính sách, thị trường bất động sản. Từ đó, giúp bạn nhìn thấy được 
                  
                  những biến động cũng như cơ hội lớn 
                  
                  trong đầu tư nhà đất 
                </div>
              </div>
              </Col>
              </Row>
              
          </div>
        </div>
        <div className="body-special">
          <img src="/Images/icon asset nam mau.png" />
          <div className="body-special-text">
            CÓ GÌ ĐẶC BIỆT?
          </div>
        </div>
        <div className="special">
          <Row>
            <Col span={12}>
              <div className="box-what">
                <img src="/Images/thong tin duoc kiem chung.png" />
                <div className="text">
                  Thông tin được kiểm chứng
                </div>
                <div className="content">
                  Mục đích lớn nhất của chúng tối là tạo nên một thị trường bất động sản
                  minh bạch tại Việt Nam. Do đó, mọi thông tin bạn tìm thấy trên Asset đều được đội ngũ chuyên gia
                  nhiều năm kinh nghiệm của chúng tôi kiểm chứng kỹ càng nhất có thể
                </div>
              </div>
              </Col>
              <Col span={12}>
              <div className="box-what">
                <img src="/Images/du lieu khong lo.png" />
                <div className="text">
                  Dữ liệu khổng lồ
                </div>
                <div className="content">
                  Để thể hiện một cách đầy đủ nhất toàn cảnh thị trường bất động sản tại Việt Nam, chúng tôi
                  đã sử dụng một nguồn dữ liệu khổng lồ bao gồm thông tin quy hoạch của cả 63 Tỉnh Thành và thông
                  tin của hơn 10.000.000 bất động sản trên cả nước.
                </div>
            </div>
              </Col>
              </Row>
              <Row>
              <Col span={12}>
              <div className="box-what">
                <img src="/Images/cong dong bds.png" />
                <div className="text">
                  Cộng đồng Bất Động Sản
                </div>
                <div className="content">
                  Dữ liệu có lớn đến mức nào thì cũng vẫn có những thông tin mà bạn chỉ có thể có được từ những
                  người quan tâm đến bất động sản giống như bạn. Do đó, hãy để chúng tôi tạo nên một cầu nối trao đổi thông tin giữa
                  tất cả các Asseter để bạn có thể an tâm hơn trong quá trình đầu tư của mình.
                </div>
              </div>
              </Col>
              <Col span={12}>
            
            <div className="box-what">
                <img src="/Images/cap nhat 24-77.png" />
                <div className="text">
                  Cập nhập 24/7
                </div>
                <div className="content">
                  Thị trường Bất Động Sản biến đổi hàng ngày và hàng giờ. Do đó, Asset cũng sẽ liên tục cập nhật thông tin trong suốt 24h trong một
                  ngày, 365 ngày trong một năm để đưa đến cho bạn những thông tin chân thực nhất về thị trường nhà đất tại Việt Nam.
                </div>
            </div>
            </Col>
              </Row>
              
            
        </div>
        <div className="free-to-use">
          <img src="/Images/hoan toan mien phi.png" />
        </div>
      </div>
      <div className="hiring">
        <Row>
          <Col md={12} xs={24}>
            <div className="count-down">

            </div>
          </Col>
          <Col md={12} xs={24}>
            <div className="welcome">
              <img src="/Images/welcome.png" />
            </div>
          </Col>
        </Row>
      </div>
      <Divider/>
      </div>
    );
  }
}
export default HomePage;