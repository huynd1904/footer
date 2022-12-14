import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon,
} from "react-share";
import {
  faFacebookF,
  faLinkedin,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer pt-5 pb-3">
      <Container>
        <Row className="gy-3 mb-3">
          <Col lg="3">
            <p className="footer-title">THÔNG TIN LIÊN HỆ</p>
            <h3>Công ty Du Lịch Divui</h3>
            <ul>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faLocationDot} />
                  Phạm Văn Bạch, P.15, Q.Tân Bình, Tp. HCM
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faPhone} />
                  0999.999.999
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faEnvelope} />
                  email@gmail.com
                </a>
              </li>
            </ul>
          </Col>
          <Col lg="3">
            <p className="footer-title">HỖ TRỢ TƯ VẤN</p>
            <p className="footer-hotline">TEL 0999.999.999</p>
            <p className="footer-hotline">HOTLINE 0999.999.999</p>

            <ul className="footer-social-share">
              <li>
                <FacebookShareButton url="https://dulich4.dichvuweb.biz/">
                  <FacebookIcon size={32} round={true} />
                </FacebookShareButton>
              </li>
              <li>
                <TwitterShareButton url="https://dulich4.dichvuweb.biz/">
                  <TwitterIcon size={32} round={true} />
                </TwitterShareButton>
              </li>
              <li>
                <PinterestShareButton
                  url="https://dulich4.dichvuweb.biz/"
                  media="https://dulich4.dichvuweb.biz/wp-content/uploads/2017/11/khung-canh-nha-tho-da-sapa.jpg"
                >
                  <PinterestIcon size={32} round={true} />
                </PinterestShareButton>
              </li>
              <li>
                <EmailShareButton
                  onClick={(e) => e.preventDefault()}
                  openShareDialogOnClick
                  url="https://dulich4.dichvuweb.biz/"
                >
                  <EmailIcon size={32} round={true} />
                </EmailShareButton>
              </li>
              <li>
                <LinkedinShareButton url="https://dulich4.dichvuweb.biz/">
                  <LinkedinIcon size={32} round={true} />
                </LinkedinShareButton>
              </li>
            </ul>
          </Col>
          <Col lg="3">
            <p className="footer-title">THÔNG TIN CẦN BIẾT</p>
            <ul className="footer-menu">
              <li>
                <a href="#">Điều kiện điều khoản</a>
              </li>
              <li>
                <a href="#">Phương thức thanh toán</a>
              </li>
              <li>
                <a href="#">Bảo mật thông tin khách hàng</a>
              </li>
              <li>
                <a href="#">Chính sách quy định</a>
              </li>
            </ul>
          </Col>

          <Col lg="3">
            <p className="footer-title">FANPAGE FACEBOOK</p>
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=350&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=179067310933420"></iframe>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            © Bản quyền thuộc về Du Lịch 4 | Thiết kế và duy trì bởi
            Dichvuweb.biz
          </Col>
        </Row>
      </Container>
    </div>
  );
}
