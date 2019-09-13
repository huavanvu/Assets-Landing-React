import React, {Component } from 'react';

class HomePage extends Component {
  render(){
    return( <>
          <div id="asset-banner">
              <div className="asset-banner__bg wow slideInLeft" data-wow-duration="1900ms"><img src="resources/asset network.png" alt="" /></div>
            </div>
            <section id="about" className="scrollspy asset-section">
              <div className="asset-section__header d-flex justify-content-center flex-column align-items-center">
                <div className="asset-section__header-logo wow fadeIn pb-4">
                  <img src="/resources/icon asset nam mau.png" alt="" style={{height:'auto'}} />
                </div>
                <div className="asset-section__header-title wow fadeIn" data-wow-delay="300ms">
                  <h2 className="color-1C6BAE">CÓ GÌ ?</h2>
                </div>
              </div>
              <div className="asset-section__container">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="row">
                        <div className="col-12 col-lg-10 offset- offset-lg-1">
                          <div className="row">
                            <div className="col-6 col-lg-4 image-ads pb-45 wow fadeInDown" data-wow-duration="1200ms" data-wow-delay="0.4s" data-src-image-ads>
                              <img src="./resources/tim kiem bds.png" alt="" />
                              <div className="asset-about-have__title text-center">
                                <h2>Tìm kiếm Bất Động Sản</h2>
                              </div>
                              <div className="asset-about-have__title-description p-0">
                                Từ nhà riêng, căn hộ chung cư, đất nền, nhà phố, biệt
                                thự... cho đến các dự án bất động sản lớn, nhỏ, mọi
                                Asseter đều có thể tự do tìm kiếm tất cả mặt hàng bất
                                động sản trên thị trường. Cùng với đó là các thông tin
                                minh bạch về chủ sở hữu, nhà đầu tư của sản phẩm
                                được tìm kiếm.
                              </div>
                            </div>
                            <div className="col-6 col-lg-4 image-ads pb-45 wow fadeInDown" data-wow-duration="1200ms" data-wow-delay="0.5s" data-src-image-ads>
                              <img src="./resources/tham dinh gia bds.png" alt="" />
                              <div className="asset-about-have__title text-center">
                                <h2>Thẩm định giá Bất Động Sản</h2>
                              </div>
                              <div className="asset-about-have__title-description p-0">
                                Được đảm nhận bởi các chuyên gia thẩm định giá hàng
                                đầu của Asset, hoàn toàn miễn phí.
                              </div>
                            </div>
                            <div className="col-6 col-lg-4 image-ads pb-45 wow fadeInDown" data-wow-duration="1200ms" data-wow-delay="0.8s" data-src-image-ads>
                              <img src="./resources/thong tin bds.png" alt="" />
                              <div className="asset-about-have__title text-center">
                                <h2>Thông tin Bất Động Sản</h2>
                              </div>
                              <div className="asset-about-have__title-description p-0">
                                Quy hoạch sử dụng đất, quy hoạch giao
                                thông, quy hoạch xây dựng... pháp lý bất
                                động sản, lịch sử giá, lịch sử giao dịch và hơn
                                thế nữa.
                              </div>
                            </div>
                            <div className="col-6 col-lg-4 image-ads pb-45 wow fadeInUp" data-wow-duration="1200ms" data-wow-delay="1s" data-src-image-ads>
                              <img src="./resources/tu van phap ly.png" alt="" />
                              <div className="asset-about-have__title text-center">
                                <h2>Tư vấn pháp lý</h2>
                              </div>
                              <div className="asset-about-have__title-description p-0">
                                Phụ trách bởi công ty Luật đối tác có nhiều
                                năm kinh nghiệm trong lĩnh vực tư vấn
                                pháp lý dự án bất động sản, pháp lý đầu
                                tư...
                              </div>
                            </div>
                            <div className="col-6 col-lg-4 image-ads pb-45 wow fadeInUp" data-wow-duration="1200ms" data-wow-delay="1.2s" data-src-image-ads>
                              <img src="./resources/danh gia bds.png" alt="" />
                              <div className="asset-about-have__title text-center">
                                <h2>Đánh giá Bất Động Sản</h2>
                              </div>
                              <div className="asset-about-have__title-description p-0">
                                Mọi sản phẩm bất động sản đều sẽ đi kèm
                                với đánh giá chân thật nhất từ Asset cũng
                                như từ những người đã tiếp xúc trực tiếp
                                với sản phẩm đó.
                              </div>
                            </div>
                            <div className="col-6 col-lg-4 image-ads pb-45 wow fadeInUp" data-wow-duration="1200ms" data-wow-delay="1.4s" data-src-image-ads>
                              <img src="./resources/tin tuc bds.png" alt="" />
                              <div className="asset-about-have__title text-center">
                                <h2>Tin tức Bất Động Sản</h2>
                              </div>
                              <div className="asset-about-have__title-description p-0">
                                Cung cấp cho bạn những thông tin cập
                                nhật mới nhất về chính sách, thị trường bất
                                động sản. Từ đó, giúp bạn nhìn thấy được
                                những biến động cũng như cơ hội lớn
                                trong đầu tư nhà đất.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="what-is-asset" className="scrollspy asset-section">
              <div className="asset-section__header d-flex justify-content-center flex-column align-items-center">
                <div className="asset-section__header-logo pb-4 wow fadeIn">
                  <img src="./resources/icon asset nam mau.png" alt="" />
                </div>
                <div className="asset-section__header-title">
                  <h2 className="color-1C6BAE wow fadeIn" data-wow-delay="300ms">CÓ GÌ ĐẶC BIỆT ?</h2>
                </div>
              </div>
              <div className="asset-section__container">
                <div className="container">
                  <div className="row">
                    <div className="col-6 image-ads pb-45 wow slideInLeft fadeIn" data-wow-duration="800ms" data-src-image-ads>
                      <div className="text-center"><img className="w-75" src="./resources/thong tin duoc kiem chung.png" alt="" /></div>
                      <div className="asset-about-have__title text-center">
                        <h2>Dữ liệu khổng lồ</h2>
                      </div>
                      <div className="asset-about-have__title-description">
                        Để thể hiện một cách đầy đủ nhất toàn
                        cảnh thị trường bất động sản tại Việt Nam,
                        chúng tôi đã sử dụng một nguồn dữ liệu
                        khổng lồ bao gồm thông tin quy hoạch của
                        cả 63 Tỉnh Thành và thông tin của hơn
                        10.000.000 bất động sản trên cả nước.
                      </div>
                    </div>
                    <div className="col-6 image-ads pb-45 wow slideInRight fadeIn" data-wow-duration="800ms" data-src-image-ads>
                      <div className="text-center"><img className="w-75" src="./resources/du lieu khong lo.png" alt="" /></div>
                      <div className="asset-about-have__title text-center">
                        <h2>Thông tin được kiểm chứng</h2>
                      </div>
                      <div className="asset-about-have__title-description">
                        Mục đích lớn nhất của chúng tôi là tạo nên một thị
                        trường bất động sản minh bạch tại Việt Nam. Do đó,
                        mọi thông tin bạn tìm thấy trên Asset đều được đội
                        ngũ chuyên gia nhiều năm kinh nghiệm của chúng
                        tôi kiểm chứng kỹ càng nhất có thể.
                      </div>
                    </div>
                    <div className="col-6 image-ads pb-45 wow slideInLeft fadeIn" data-wow-duration="800ms" data-src-image-ads>
                      <div className="text-center"><img className="w-75" src="./resources/cong dong bds.png" alt="" /></div>
                      <div className="asset-about-have__title text-center">
                        <h2>Cộng đồng Bất Động Sản</h2>
                      </div>
                      <div className="asset-about-have__title-description">
                        Dù dữ liệu có lớn đến mức nào thì cũng vẫn có những
                        thông tin mà bạn chỉ có thể có được từ những người
                        quan tâm đến bất động sản giống như bạn. Do đó,
                        hãy để chúng tôi tạo nên một cầu nối trao đổi thông
                        tin giữa tất cả các Asseter để bạn có thể an tâm hơn
                        trong quá trình đầu tư của mình.
                      </div>
                    </div>
                    <div className="col-6 image-ads pb-45 wow slideInRight fadeIn" data-wow-duration="800ms" data-src-image-ads>
                      <div className="text-center"><img className="w-75" src="./resources/cap nhat 24-77.png" alt="" /></div>
                      <div className="asset-about-have__title text-center">
                        <h2>Cập nhật 24/7</h2>
                      </div>
                      <div className="asset-about-have__title-description">
                        Thị trường Bất Động Sản biến đổi hàng ngày
                        và hàng giờ. Do đó, Asset cũng sẽ liên tục
                        cập nhật thông tin trong suốt 24 giờ trong
                        một ngày, 365 ngày trong một năm để đưa
                        đến cho bạn những thông tin chân thực nhất
                        về thị trường nhà đất tại Việt Nam
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="pb-5 pt-3">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-lg-8 offset-0 offset-lg-2">
                    <img className="w-100 wow fadeIn" data-wow-duration="6300ms" src="./resources/hoan toan mien phi.png" alt="" />
                  </div>
                </div>
              </div>
            </section>
            <section id="advantage" className="scrollspy join-with-asset-team pt-3 pt-md-5 pb-3 pb-md-5">
              <div className="asset-section__container">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12 col-xl-6">
                      <div className="row">
                        <div className="col-12"><h2 className="text-center pb-3">Gia nhập <span className="color-1C6BAE">ngôi nhà chung Asset</span></h2></div>
                        <div className="col-3 text-center">
                          <div className="quanlity color-1C6BAE" data-count="8">
                            0
                          </div>
                          <div className="name-department">
                            Makerting
                          </div>
                        </div>
                        <div className="col-3 text-center">
                          <div className="quanlity color-1C6BAE" data-count="20">
                            0
                          </div>
                          <div className="name-department">
                            Web Developer
                          </div>
                        </div>
                        <div className="col-3 text-center">
                          <div className="quanlity color-1C6BAE" data-count="8">
                            0
                          </div>
                          <div className="name-department">
                            Call Center
                          </div>
                        </div>
                        <div className="col-3 text-center">
                          <div className="quanlity color-1C6BAE">
                       
                          </div>
                          <img style={{width:'52%'}} className="my-2" src="/resources/plus.png" alt="" />
                          <div className="name-department">
                            Và rất nhiều vị trí
                          </div>
                       
                        </div>
                      </div>
                      <div className="row pt-3 pt-md-5">
                        <div className="col-12 text-center">
                          <button type="button" className="btn btn-raised btn-lg join-now"><a href="/recruitment" target="_blank" rel="noopener noreferrer"><i className="fa fa-edit" />Hãy gia nhập ngay</a></button>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-xl-6 d-none d-lg-block">
                      <img className="w-100 wow fadeIn" data-wow-duration="4000ms" src="./resources/welcome.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="col-12 col-xl-6 d-block d-lg-none pb-3 pt-5">
              <img className="w-100 wow fadeIn" data-wow-duration="4000ms" src="./resources/welcome.png" alt="" />
            </div>
          
  </>
    )
  }
}

export default HomePage;