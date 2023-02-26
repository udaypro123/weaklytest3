
import './App.css';
import Bodypart from './components/body/Bodypart';
import Bodypart2 from './components/bodypart2/Bodypart2';
import Bodypart3 from './components/bodypart3/Bodypart3';
import Bodypart4 from './components/bodypart4/Bodypart4';
import Greenbgpart from './components/greebgpart/Greenbgpart';
import Header from './components/header/Header';
import Ratingpart from './components/ratingpart/Ratingpart';
import Windowpeak from './components/windowpeak/Windowpeak';



function App() {
  return (
    <div className="App">
      {/* <div className='appsubpart'> */}
        <Header />
        <Bodypart />
        <Bodypart2 bgcolor="https://web-images.credcdn.in/_next/assets/images/home-page/deserve-more-bg.jpg" />
        <Bodypart3 />
  
        <Bodypart2 bgcolor="https://web-images.credcdn.in/_next/assets/images/home-page/money-matters-bg.jpg" />
        <Bodypart4 />

        <Windowpeak />

        <Bodypart2 bgcolor="https://web-images.credcdn.in/_next/assets/images/home-page/security-bg.jpg" />
        <Greenbgpart />
        <Ratingpart />
      </div>
    // </div>
  );
}

export default App;
