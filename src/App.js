import './App.css';
import Content from './component/Content';
import Header from './component/Header';
import MainVisual from './component/MainVisual';
import Side from './component/Side';
import TopBanner from './component/TopBanner';
import Why from './component/Why';

const App = () => {
  return (
    <div className='Wrap'>
      <Header />
      <MainVisual />
      <Side />
      <TopBanner />
      <Why />
      <Content />
    </div>
  );
}

export default App;
