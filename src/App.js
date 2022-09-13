import './App.css';
import Header from './component/Header';
import MainVisual from './component/MainVisual';
import Side from './component/Side';

const App = () => {
  return (
    <div className='Wrap'>
      <Header />
      <MainVisual />
      <Side />
    </div>
  );
}

export default App;
