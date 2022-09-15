import { useEffect, useRef } from "react"

const CONTENT = [
  { id: 1, desc: '눈높이 전문 교사 수', num: <p><span>11,000</span>명</p> },
  { id: 2, desc: '브랜드 파워 24년 연속', num: <p><span>1위</span></p> },
  { id: 3, desc: '누적 눈높이 회원 수', num: <p><span>1200만</span>명</p> },
]

const Why = () => {
  const DATA = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let sct = window.scrollY
      console.log(sct)
      sct > 380 ? DATA.current.classList.add('on') : DATA.current.classList.remove('on')
    })
  }, [])
  return (
    <section className="Why">
      <div className="container">
        <h2>
          대한민국 학부모님들을 <br />
          왜 <span>눈높이학습</span>을 선택했을까?
        </h2>
        <p>*1200만(실제 누적 눈높이 회원 수 2022년 9월 기준)</p>
        <p className="last">*1위 (브랜드파워 초등 교육 부분 24년 연속, 유아 교육 부분 13년 연속) </p>
        <div ref={DATA} className="box">
          {
            CONTENT.map((el, idx) => {
              return (
                <div key={el.id}>
                  <p>{el.desc}</p>
                  {el.num}
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Why;