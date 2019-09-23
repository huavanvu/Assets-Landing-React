import React, { Component } from 'react'
import '../assets/stylesheets/pages/asset-about.css';
import YouTube from 'react-youtube';
export default class AboutPage extends Component {
  constructor(props){
    super(props)
  }
  _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }
  render() {
    const opts = {
      playerVars: {
        autoplay: 1
      }
    };
    
    return (
      
      <div id="asset-about" className="p-section-top pb-3 mb-3 pb-md-5 m-md-5">
        <div className="container">
          <div className="text-center">
          <div className="iframe-container">
          <YouTube
            className="iframe"
            videoId="av1Ob5zjN-A"
            opts={opts}
            onReady={this._onReady}
          />
          </div>
          </div>
          <div className="text-center mt-5 mb-5">
            <img src="../../resources/gioithieu/Rectangle 4.png" />
          </div>
          <div className="text-justify">
          Theo nhận định của các chuyên gia, Việt Nam là một trong những thị trường mới
          nổi năng động nhất toàn cầu, với hai yếu tố nổi bật là tốc độ tăng trưởng kinh tế
          mạnh mẽ và sự gia tăng thu nhập của tầng lớp trung lưu. Cùng với đó là những lợi
          thế về dân số trẻ có học thức cao đã thúc đẩy quá quá trình đô thị hóa diễn ra một
          cách nhanh chóng. Những yếu tố này đã đưa Việt Nam thành một trong những
          quốc gia có tốc độ tăng trưởng GDP nhanh nhất thế giới và đó cũng là lý do thúc
          đẩy triển vọng của các nhà đầu tư quốc tế trong việc nhanh chóng tạo dấu ấn tại
          <strong> thị trường bất động sản </strong> vô cùng tiềm năng như Việt Nam.
          <br /> <br />
          Bên cạnh một thị trường bất động sản đầy tiềm năng thì môi giới bất động sản trở
          thành loại hình dịch vụ chính thức trên thị trường bất động sản, là cầu nối quan
          trọng tạo tiền đề cho cung - cầu bất động sản gặp được nhau thông qua những
          thông tin thu thập được để giải quyết vấn đề liên quan đến bất động sản. Chính
          vì vậy, lực lượng này trở thành một phần quan trọng, là nhân tố tạo thanh khoản
          cho thị trường bất động sản và là nhân tố đảm bảo sự phát triển của thị trường
          bất động sản theo hướng bền vững, hiệu quả.
          <div className="text-center mt-5 mb-5">
            <img src="../../resources/gioithieu/top-dbs.png" />
          </div>
          <br /> <br />
          Lâu nay, thị trường bất động sản được coi là một trong những đầu kéo chủ lực
          của nền kinh tế Việt Nam. Tuy nhiên, do các chính sách pháp lý chưa thực sự
          hoàn chỉnh và sự thiếu minh bạch trong thông tin khiến bất động sản, bên cạnh
          là thị trường đầu tư hiệu quả thì vẫn luôn được xem là thị trường tiềm ẩn nhiều rủi
          ro. Hiện tại, ở Việt Nam lĩnh vực bất động sản vẫn chưa thỏa mãn được điều kiện
          để được xem là thị trường, bởi sự hạn chế và thiếu minh bạch thông tin về pháp
          lý, quy hoạch, giá cả, diện tích, quy mô bất động sản, thủ tục giấy tờ... Các thông
          tin liên quan đến bất động sản đươc cung cấp một cách nhỏ giọt, rời rạc, thiếu
          chính xác. Người tiêu dùng khi muốn biết thông tin phải tìm hiểu qua rất nhiều
          kênh thông tin khác nhau, gây nên sự lãng phí về thời gian và chi phí, nhưng
          không mang lại tính hiệu quả cao. Điều này, vô hình trung tạo ra các bất cập trong
          việc giao dịch bất động sản, đồng thời tạo ra lỗ hổng pháp lý dẫn tới việc trục lợi
          của một số đối tượng gây thiệt hại to lớn cho người sử dụng.
          <br /> <br />
          Chính vì vậy, bài toán kiểm soát, quản lý, cũng như đảm bảo tính chính xác của
          các thông tin pháp lý của mỗi bất động sản nói riêng và thị trường bất động sản
          nói chung trong một kỷ nguyên công nghệ số 4.0 như hiện nay lại càng trở nên
          nan giải hơn bao giờ hết.
          <div className="text-center mt-5 mb-5">
            <img  src="../../resources/gioithieu/bao-ve-quyen-loi-doi-ben.png" />
          </div>
          <br /> <br />
          <span className="asset-name"> ASSET</span> ra đời với mục đích đơn giản hóa và gói gọn tất cả các thông tin về bất
          động sản minh bạch nhất và đầy đủ chỉ trong 1 phạm vi tìm kiếm. <span className="asset-name"> ASSET</span> tạo hệ
          sinh thái bất động sản sạch, với tuyên ngôn bảo vệ quyền lợi tối đa của tất cả các
          bên, từ chủ đầu tư, chủ dự án, người mua, người bán, môi giới.. xuyên suốt quá
          trình giao dịch bất động sản mà không bị tác động tiêu cực và can thiệp từ bất kì
          bên thứ ba nào.
          <br /> 
          Với định hướng xây dựng là một GOOGLE về bất động sản của người dân Việt
          Nam, <span className="asset-name"> ASSET</span> tạo ra một thị trường bất động sản online thu nhỏ nơi mà, tại đây,
          người dùng có thể tra cứu, tìm hiểu mọi thông tin liên quan đến bất động sản một
          cách dễ dàng, từ thông tin quy hoạch, định giá bất động sản, thông tin pháp lý,
          thông tin các chủ đầu tư, chủ dự án bất động sản, lịch sử giá bất động sản, lịch sử
          giao dịch mua, bán, cho thuê bất động sản, cho đến những phân tích, đánh giá
          của các chuyên gia hàng đầu trong lĩnh vực bất động sản. Tất cả sẽ được gói gọn
          trong một cú click chuột, vô cùng thuận tiện và đặc biệt người sử dụng sẽ không
          mất bất kỳ một chi phí nào. Tất cả các thông tin từ trang GOOGLE bất động sản
          <span className="asset-name"> ASSET</span> sẽ được cập nhật liên tục tương ứng với sự phát triển của thị trường. Tất
          cả các thông tin trên <span className="asset-name"> ASSET</span> đều được các chuyên gia đầu ngành, các luật sư
          <div className="text-center mt-5 mb-5">
            <img  src="../../resources/gioithieu/map.png" />
          </div>
          <div className="text-justify">
          Không chỉ để tra cứu các thông tin bất động sản, <span className="asset-name"> ASSET</span> còn là một cầu nối uy tín
          để người dùng kết nối các nhu cầu đầu tư, mua, bán hoặc cho thuê bất động sản
          đến khách hàng mục tiêu một cách nhanh chóng và an toàn tuyệt đối một cách
          tiết kiệm nhất. Các chuyên gia hàng đầu của <span className="asset-name"> ASSET</span> sẽ kiểm chứng, sàng lọc tất
          cả các thông tin giữa các bên và kết nối một cách minh bạch công khai các bên
          với nhau mà không tính bất kỳ một khoản phí phát sinh nào.
          <br /> <br />
          Với sứ mệnh “ xây dựng một thị trường bất động sản minh bạch”, chúng tôi cam
          kết trở thành một người bạn đồng hành không thể thiếu và đáng tin cậy trên
          chặng đường hoạch định, xây dựng và phát triển bất động sản của mỗi người
          dân Việt Nam, từ đó cùng nhau chung tay hướng đến thị trường bất động sản
          sạch, ngày một lớn mạnh và phát triển bền vững.
          </div>
          </div>
          <div className="text-center mt-5 mb-5">
            <img src="../../resources/gioithieu/minh-bach.png" />
          </div>
          <div className="text-center slogan-footer">
            Chúng tôi tin tưởng rằng sự ra đời của <span className="asset-name">ASSET</span> sẽ mở ra một kỷ nguyên mới,
            <br />
            kỷ nguyên của một xã hội văn minh, thịnh vượng và trường tồn, hạnh phúc.
          </div>
        </div>
      </div>
    )
  }
}
