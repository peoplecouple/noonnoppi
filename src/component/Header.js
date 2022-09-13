const Header = () => {
  const MENU = [
    { id: 1, menu: '무료체험신청', link: '/' },
    { id: 2, menu: '눈높이소개', link: '/' },
    { id: 3, menu: '콘텐츠소개', link: '/' },
    { id: 4, menu: '학습후기', link: '/' },
    { id: 5, menu: '이벤트', link: '/' },
    { id: 6, menu: '눈높이올림피아드', link: '/' },
  ]

  return (
    <header>
      <div className="Header_top">
        <div className="container">
          <div className="left_icons">
            <a href="#!" className="left">
              <i className="xi-lightbulb-o"></i>
              <p>학습자료실</p>
            </a>
            <a href="#!" className="right">
              <i className="xi-file-text-o"></i>
              <p>상담신청</p>
            </a>
          </div>
          <h1>
            <a href="#!">
              <img src={process.env.PUBLIC_URL + '/assets/images/logo.png'} alt="" />
            </a>
          </h1>
          <div className="right_icons">
            <a href="#!" className="left">
              <i className="xi-user-plus-o"></i>
              <p>회원가입</p>
            </a>
            <a href="#!" className="right">
              <i className="xi-user-o"></i>
              <p>로그인</p>
            </a>
          </div>
        </div>
      </div>
      <div className="Header_bottom">
        <div className="container">
          <nav>
            <ul className='Gnb'>
              {
                MENU.map((el, idx) => {
                  return (
                    <li key={el.id}>
                      <a href={el.link}>
                        {el.menu}
                      </a>
                    </li>
                  )
                })
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}


export default Header;