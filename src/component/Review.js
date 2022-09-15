import { useState } from "react"

const IMG = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
]

const TXT = [
  { id: 1, grade: "1학년", name: "김수하 부모님", title: "역시 눈높이네요!", content: " 월간부터 주간까지, 학습 분석을 한 눈에 볼 수 있는데 지난 달에는 무려 18시간이나 학습을 했더라고요! 주말, 공휴일은 쉬라고 아이에게 따로 학습을 권하지 않았는데, 이정도면 정말 잘했다 싶어서 아이에게 칭찬을 더욱 많이 해주었어요 ^^" },
  { id: 2, grade: "3학년", name: "박연수 부모님", title: "수행평가 대비는 눈높이에게!", content: "초등학교에서 시험이 없어져 엄마인 저조차도 아이의 학습 수준이나 레벨을 정확하게 가늠하기가 힘들더라고요. 그래서 눈높이의 시험 대비 평가를 통해 아이의 학습 상태를 체크하고 있어요. 아직은 저학년이라 과목 수가 적지만, 4학년이 되면서부터는 과목 수가 훨씬 더 늘어난다고 하니 아이 수행평가 대비는 눈높이에게 맡겨야 할 것 같아요 ^^" },
  { id: 3, grade: "5학년", name: "김동하 부모님", title: "눈높이 덕에 걱정 뚝이에용", content: "공부를 할 때 중요한 건 아는 것과 모르는 것을 깨닫고 실수를 줄이며 오답의 원인을 파악해 완벽하게 이해하는 거라고 생각해요. 눈높이의 모든 평가 문제는 공통적으로 '문제를 푼다 → 오답을 확인한다 → 틀린문제만 다시 푼다 → 보충 문제를 푼다' 의 시스템을 갖고 있어요. 걱정없습니당^^" },
  { id: 4, grade: "4학년", name: "최민수 부모님", title: "천군만마를 얻은 기분이에요", content: "고학년이 되면서 모든 과목이 어려워지기 시작해 어떻게 학교 공부를 시켜야 하나 고민하던 중 형을 따라서 눈높이를 시작했어요. 워낙 노는 것을 좋아해서 오늘의 학습을 잘 따라가려나~ 걱정했는데 걱정한 게 무색할 정도로 2~3일 학습을 끝내놓기까지 합니다^^" },
  { id: 5, grade: "1학년", name: "김아연 부모님", title: "눈높이 선생님, 정말 감사해요~", content: "유치원 땐 잘 따라오던 아이가 1학년 2학기에 접어들면서 툴툴거림이 많아졌어요. 원래도 수학을 어려워하긴 했는데, 분수를 배우면서 더 힘들어하는 것 같아요. 그나마 눈높이 수업을 따라가며 예습 복습을 꾸준히 하고 있어서 어려운 고비들을 잘 이겨내고 있네요!" },
  { id: 6, grade: "2학년", name: "박민훈 부모님", title: "모르는 문제도 완벽히 내 것으로!", content: "눈높이를 하니까 따로 교재를 구입하지 않고서도 시험 대비를 해줄 수 있어서 만족스러웠어요. 그냥 문제집으로 공부했다면 한 번 풀고 끝나버려 다시 공부하기 힘들었을텐데, 눈높이 학습관을 통해서 해당 문제들을 이해할 때까지 계속해서 학습할 수 있다는 점이 정말 좋았어요." },
  { id: 7, grade: "4학년", name: "이수철 부모님", title: "단원평가 100점 받았답니다!!", content: "학교 공부가 완벽하게 연계되어 있다보니 여러가지 평가로 테스트를 해볼 수 있고,다양한 문제 유형을 연습할 수 있답니다. 초등 입학 이후로 눈높이로 쭉~ 공부 중인데 수학 단원평가 100점을 받았어요! 짝짝!" },
]

const Review = () => {

  const [NUM, setNUM] = useState(1)
  return (
    <section className="Review">
      <div className="container">
        <p>눈높이 회원의</p>
        <h2>생생한 후기</h2>
        <div className="box">
          {
            IMG.map((el, idx) =>
              <div
                className={el.id === NUM ? "on" : ""}
                key={el.id}
                onClick={() => setNUM(idx + 1)}
              >
                <img src={process.env.PUBLIC_URL + "/assets/images/Screenshot" + el.id + ".png"} alt="" />
              </div>
            )
          }
        </div>
        <div className="text">
          {
            TXT.map((el, idx) => {
              return (
                <div className={el.id === NUM ? "on" : ""} key={el.id}>
                  <span>{el.grade}</span>
                  <span>{el.name}</span>
                  <div className="inner">
                    <h3>{el.title}</h3>
                    <p>{el.content}</p>
                  </div>

                </div>
              )
            })
          }
        </div>
      </div>

    </section>
  )
}

export default Review;