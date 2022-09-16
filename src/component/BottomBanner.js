import { useEffect, useRef } from "react"

const BottomBanner = () => {
  const TEXT = useRef("");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let sct = window.scrollY
      console.log(sct)
      sct > 2600 ? TEXT.current.classList.add('on') : TEXT.current.classList.remove('on')
    })
  }, [])

  return (
    <section className="BottomBanner">
      <p ref={TEXT}>눈높이와 함께라면<br />
        공부가 재미가 되고 습관이 됩니다.</p>
    </section>
  )
}

export default BottomBanner;