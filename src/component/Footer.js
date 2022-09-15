import { useState } from "react"

const ICON = [
  { id: 1, class: "xi-facebook", link: "https://www.facebook.com" },
  { id: 2, class: "xi-instagram", link: "https://www.instagram.com" },
  { id: 3, class: "xi-youtube-play", link: "https://www.youtube.com" },
  { id: 4, class: "xi-twitter", link: "https://www.twitter.com" },
]

const FDMT = [
  { id: 1, name: "회사소개", link: "#!" },
  { id: 2, name: "제휴문의", link: "#!" },
  { id: 3, name: "이용약관", link: "#!" },
  { id: 4, name: "사이트맵", link: "#!" },
]

const FAMILY = [
  { id: 1, name: "대교닷컴", link: "https://www.daekyo.com/kr" },
  { id: 2, name: "마카다미아", link: "https://www.macadamia.kr/" },
  { id: 3, name: "차이홍 중국어", link: "https://caihong.daekyo.com/" },
  { id: 4, name: "대교 어린이 TV", link: "https://www.kids17.net/" },
  { id: 5, name: "none", link: "" },
  { id: 6, name: "none", link: "" },
]

const Footer = () => {
  const [TOGGLE, setTOGGLE] = useState(false)
  return (
    <footer>
      <div className="top">
        <div className="container">
          <div className="left">
            {
              ICON.map((el, idx) => {
                return (
                  <a href={el.link} key={el.id} target="_blank"><i className={el.class}></i></a>
                )
              })
            }
          </div>
          <ul className="right">
            {
              FDMT.map((el, idx) => <li key={el.id}><a href={el.link}>{el.name}</a></li>)
            }
          </ul>
          <div className="family">
            <p onClick={() => { setTOGGLE(!TOGGLE) }}>FAMILY SITE <i className={'xi-angle-up' + (TOGGLE ? " on" : "")}></i></p>
            <div className={'box' + (TOGGLE ? " on" : "")}>
              <ul>
                {
                  FAMILY.map((el, idx) =>
                    <li key={el.id}><a href={el.link} target="_blank">{el.name}</a></li>
                  )
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="container">
          <div className="left">
            <h2><a href="#!"><img src={process.env.PUBLIC_URL + "/assets/images/logo_d.png"} alt="" /></a></h2>
          </div>
          <div className="middle">
            <ul className="FL">
              <li>(주)대교눈높이</li>
              <li>대표이사 : 강호준</li>
            </ul>
            <ul className="SL">
              <li>서울시 관악구 보라매로 3길 23 (보라매동 729-21) 대교타워 ㈜대교</li>
              <li><a href="tel:080-222-0909">TEL : 080-222-0909</a></li>
            </ul>
            <ul className="TL">
              <li>사업자등록번호 : 112-81-41114</li>
              <li>통신판매신고번호 : 제 2013-서울관악 0478호</li>
            </ul>
            <ul className="FOL">
              <li><a href="mailTo:mt@noonnoppi.co.kr">대표문의 E-mail : mt@noonnoppi.co.kr</a></li>
              <li><a href="mailTo:marketing@noonnoppi.co.kr">제휴문의 E-mail : marketing@noonnoppi.co.kr</a></li>
            </ul>
            <p>Copyright 2020 DAEKYO.,LTD. All Rights Reserved</p>

          </div>
          <div className="right">
            <p>고객센터</p>
            <div className="nums">
              <a href="tel:1511-1111">1511-1111</a>
              <a href="#!">ARS 번호 안내 <i className="xi-search"></i></a>
            </div>
            <ul className="time_top">
              <li>평일 &nbsp;&nbsp;&nbsp; <span>10:00 ~ 22:00</span></li>
              <li>점심시간 &nbsp;<span>12:00 ~ 13:00</span></li>
            </ul>
            <ul className="time_bottom">
              <li>토요일 <span>10:00 ~ 20:00</span></li>
              <li>일요일 / 공휴일 휴무</li>
            </ul>

          </div>
        </div>
      </div>


    </footer>
  )
}

export default Footer;