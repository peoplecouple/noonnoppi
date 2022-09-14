const TopBanner = () => {
  return (
    <section className="TopBanner">
      <div className="container">
        <div className="bigger">
          <a href="#!">
            <div className="left">
              <p>
                눈높이<br />
                지인소개<br />
                이벤트<br />
              </p>
              <img src={process.env.PUBLIC_URL + "/assets/images/event1.png"} alt="" />
            </div>
          </a>
          <a href="#!">
            <div className="middle">
              <p>
                온라인<br />
                학습 시스템<br />
                눈높이365<br />
              </p>
              <img src={process.env.PUBLIC_URL + "/assets/images/event2.png"} alt="" />
            </div>
          </a>
          <a href="#!">
            <div className="right">
              <p>
                눈높이<br />
                스마트 앱<br />
                마카다미아<br />
              </p>
              <img src={process.env.PUBLIC_URL + "/assets/images/event3.png"} alt="" />
            </div>
          </a>

        </div>
        <div className="smaller">
          <a href="#!">
            <div className="top">
              <i className="xi-headset"></i>
              <p>선생님/상담코치 모집</p>
              <i className="xi-angle-right arrow" ></i>
            </div>
          </a>
          <a href="#!">
            <div className="bottom">
              <i className="xi-sitemap-o"></i>
              <p>제휴/단체 모집</p>
              <i className="xi-angle-right arrow"></i>
            </div>
          </a>
        </div>
      </div>
      <div className="scroll">
        <i className="xi-caret-down"></i>
      </div>
    </section>
  )
}

export default TopBanner;