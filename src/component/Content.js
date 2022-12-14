import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper";
import { useEffect, useState } from 'react';

const SLIDE = [
  { id: 1, title: '눈높이 학습관', des: '언제 어디서나 간편하게 스마트폰과 PC를 통해 듣기 학습과 동영상 학습을 할 수 있는 온라인 학습관 입니다.' },
  { id: 2, title: '눈높이 iBT 학력진단', des: '주기적인 평가를 통해 개개인의 학습이 효과적으로 잘 이우러졌는지 진단하는 학력진단 서비스입니다. AL기반으로 평가 결과 데이터를 분석하여 앞으로의 교육 방향을 제시함으로써 기초 학력 확인과 진정한 자기주도학습 습관을 길러 줄 수 있습니다.' },
  { id: 3, title: '마카다미아', des: '자녀의 학습 결과와 정보를 마카다미아 앱을 통해 언제 어디서나 확인 가능합니다. 실시간 커뮤니케이션이 가능한 스마트한 앱으로, 대교의 다양한 서비스와 제품을 한 눈에 만나보실 수 있습니다.' },
  { id: 4, title: '마스터리카드', des: '명확한 학습과정의 인지를 통해 아이는 성취감과 공부의 재미를 느낍니다.' },
  { id: 5, title: '성장리포트', des: '3개월마다 아이의 학습과정과 역량의 변화를 보여줍니다.' },
]

const TAB = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
]

const Content = () => {

  const [IDX, setIDX] = useState()
  const [SWIPER, setSWIPER] = useState()

  useEffect(() => {
    setIDX(0)

  }, [])

  return (
    <section className="Content">
      <p>눈높이 회원을 위한</p>
      <h2>다양한 콘텐츠</h2>
      <Swiper
        className='outer'
        slidesPerView={3}
        loop={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={
          {
            rotate: 0,
            stretch: 154,
            depth: 90,
            modifier: 1,
            slideShadows: true,
          }
        }
        modules={[EffectCoverflow]}
        // onSlideChange={(e) => console.log(e)}
        onSwiper={(swiper) => setSWIPER(swiper)}
        onRealIndexChange={(e) => setIDX(e.realIndex)}
      >
        {
          SLIDE.map((el, idx) => {
            return (
              <SwiperSlide className='page' key={el.id}>
                <figure className={el.id === 2 ? "on" : ""}>
                  <div>
                    <strong>{el.title}</strong>
                    <a href="#!">바로가기</a>
                  </div>
                  <div><img src={process.env.PUBLIC_URL + "/assets/images/content" + el.id + ".png"} alt="" /></div>
                  <p>{el.des}</p>
                </figure>
              </SwiperSlide>

            )
          })
        }
      </Swiper>
      <div className="slideTab">
        <ul>
          {
            TAB.map((el, idx) => {
              return (
                <li key={el.id} onClick={() => SWIPER.slideTo(idx + 3)} className={idx === IDX ? "on" : ""}></li>
                // https://velog.io/@moonelysian/Swiperjs-%EC%82%AC%EC%9A%A9-%EC%8B%9C-%EC%99%B8%EB%B6%80%EC%97%90%EC%84%9C-Swiper-control-%ED%95%98%EB%8A%94-%EB%B2%95 참고 ref를 써서 하면 슬라이드에서 외부를 바꾸는건 되지만 외부에서 슬라이드 바꾸게하는건 안됨
              )
            })
          }
        </ul>
      </div>
    </section>
  )
}

export default Content;