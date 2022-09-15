import './App.css';
import BottomBanner from './component/BottomBanner';
import Content from './component/Content';
import Footer from './component/Footer';
import Header from './component/Header';
import MainVisual from './component/MainVisual';
import Review from './component/Review';
import Side from './component/Side';
import TopBanner from './component/TopBanner';
import Why from './component/Why';

const App = () => {
  return (
    <div className='Wrap'>
      <Header />
      <main>
        <MainVisual />
        <Side />
        <TopBanner />
        <Why />
        <Content />
        <Review />
        <BottomBanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
