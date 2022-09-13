import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const SLIDE = [
  { id: 1, content: <div>온라인 눈높이학습관에서<br />더 효과적으로 학습해요</div>, sub: '신나는 온라인 학습으로 보충해요!', link: '/', tab: '온라인학습관' },
  { id: 2, content: <div>눈높이 올림피아드로<br />학업성취도를 평가해요</div>, sub: '수상자에게는 장학금을 지급해요!', link: '/', tab: '올림피아드' },
  { id: 3, content: <div>눈높이국어 퀴즈 이벤트<br />한가위, 따뜻한 마음을 나눠요</div>, sub: '나와 소중한 지인 모두에게 선물을 드려요!', link: '/', tab: '퀴즈이벤트' }
]

const MainVisual = () => {
  const [IDX, setIDX] = useState();
  useEffect(() => {
    setIDX(0)
  }, [])

  const mainSlide = useRef(null)

  var settings = {
    slideToshow: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: index => {
      setIDX(index)
    }
  }

  return (
    <section className="MainVisual">
      <Slider {...settings} ref={mainSlide}>
        {SLIDE.map((el, idx) => {
          return (
            <figure className={`itm0${el.id} ${idx === IDX ? "on" : ""}`} key={el.id}>
              <div className="container">
                <h2>{el.content}</h2>
                <p>{el.sub}</p>
                <a href={el.link}>자세히보기</a>
              </div>
            </figure>
          )
        })}
      </Slider>
      <ul className="slideTab">
        {
          SLIDE.map((el, idx) => {
            return (
              <li key={el.id} className={idx === IDX ? "on" : ""}
                onClick={() => { mainSlide.current.slickGoTo(idx) }}
              >
                {el.tab}</li>
            )
          })
        }
      </ul>
 
      <div className="control">
        <i className="xi-pause" onClick={() => { mainSlide.current.slickPause() }}></i>
        <i className="xi-play" onClick={() => { mainSlide.current.slickPlay() }}></i>
      </div>
    </section>
  )
}

export default MainVisual;