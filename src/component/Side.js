const Side = () => {
  return (
    <div className="SideMenu">
      <div className="top">
        <img src={process.env.PUBLIC_URL + '/assets/images/model2.png'} alt="" />
        <p><span>10일</span> 무료체험</p>
        <a href="#!">신청하기</a>
      </div>
      <div className="bottom">
        <p><span>8주</span> 연장혜택 <br/>
        유료학습
        </p>
        <a href="#!">신청하기</a>
      </div>
    </div>
  )
}

export default Side;