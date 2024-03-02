import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import SliderPortion from './components/SliderPortion';

function App() {
  return (
    <div className="">
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SliderPortion />
    </div>
  );
}

export default App;