import React from 'react';
import './App.css';
import Header from './components/Header';
import Item from './components/Item';
import Accessories from './assets/Desktop-Accessories.jpg';
import Model3 from './assets/Desktop-Model3.jpeg';
import ModelS from './assets/Desktop-ModelS.jpeg';
import ModelX from './assets/Desktop-ModelX.jpeg';
import ModelY from './assets/Desktop-ModelY.jpeg';
import SolarPanels from './assets/Desktop-SolarPanels.jpeg';
import SolarRoof from './assets/Desktop-SolarRoof.jpeg';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="itemBlock">
        <Item backgroundImg={Model3} title="Model S" desc="Order Online for Touchless Delivery" leftBtnTxt="custom order" rightBtnTxt="existing inventory" first />
        <Item backgroundImg={ModelY} title="Model Y" desc="Order Online for Touchless Delivery" leftBtnTxt="custom order" rightBtnTxt="learn more" />
        <Item backgroundImg={ModelS} title="Model 3" desc="Order Online for Touchless Delivery" leftBtnTxt="custom order" rightBtnTxt="existing inventory" />
        <Item backgroundImg={ModelX} title="Model X" desc="Order Online for Touchless Delivery" leftBtnTxt="custom order" rightBtnTxt="existing inventory" />
        <Item backgroundImg={SolarPanels} title="Lowest Cost Solar Panels in America" desc="Money-back guarantee" leftBtnTxt="order now" rightBtnTxt="learn more" />
        <Item backgroundImg={SolarRoof} title="Solar for New Roofs" desc="Solar Roof Costs Less Than a New Roof Plus Solar Panels" leftBtnTxt="order now" rightBtnTxt="learn more" />
        <Item backgroundImg={Accessories} title="Accessories" leftBtnTxt="shop now" oneBtn />
      </div>
    </div>
  );
};

export default App;

