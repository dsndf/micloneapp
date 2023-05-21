import React, { useEffect as uf } from "react";
import PreNavbar from "./components/PreNavbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Slider from "./components/Slider.js";
import Navbar from "./components/Navbar";
import data from "./data/data.json";
import Offers from "./components/Offers";
import Heading from "./components/Heading";
import StarProducts from "./components/StarProducts.js";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu";
import HotAccessories from "./components/HotAccessories";
import Videos from "./components/Videos";
import ProductReview from "./components/ProductReview";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navoptions from "./components/Navoptions";
const App = () => {
  return (
    <Router>
      <PreNavbar></PreNavbar>
      <Navbar></Navbar>
      <Navoptions
        miPhones={data.miPhones}
        tv={data.tv}
        redmi={data.redmiPhones}
        laptop={data.laptop}
        home={data.home}
        redmiPhones={data.redmiPhones}
        fit={data.fitnessAndLifeStyle}
        audio={data.audio}
        accessories={data.accessories}
      ></Navoptions>
      <Slider arr={data.banner.start}></Slider>
      <Offers offer_arr={data.offer}></Offers>
      <Heading text="STAR PRODUCTS"></Heading>
      <StarProducts stararr={data.starProduct}></StarProducts>
      <Heading text="HOT ACCESSORIES"></Heading>
      <HotAccessoriesMenu Hotarr={data.hotAccessories}></HotAccessoriesMenu>
      <Routes>
        <Route
          exactpath="/music"
          element={
            <HotAccessories
              music={data.hotAccessories.music}
              cover={data.hotAccessoriesCover.music}
            ></HotAccessories>
          }
        ></Route>

        <Route
          exact
          path="/smartdevice"
          element={
            <HotAccessories
              smartDevice={data.hotAccessories.smartDevice}
              cover={data.hotAccessoriesCover.smartDevice}
            ></HotAccessories>
          }
        ></Route>

        <Route
          exact
          path="/lifestyle"
          element={
            <HotAccessories
              lifeStyle={data.hotAccessories.lifeStyle}
              cover={data.hotAccessoriesCover.lifeStyle}
            ></HotAccessories>
          }
        ></Route>

        <Route
          exact
          path="/home"
          element={
            <HotAccessories
              smartDevice={data.hotAccessories.home}
              cover={data.hotAccessoriesCover.home}
            ></HotAccessories>
          }
        ></Route>

        <Route
          exact
          path="/mobileaccessories"
          element={
            <HotAccessories
              smartDevice={data.hotAccessories.mobileAccessories}
              cover={data.hotAccessoriesCover.mobileAccessories}
            ></HotAccessories>
          }
        ></Route>
      </Routes>
      <Heading text="PRODUCT REVIEWS"></Heading>

      <ProductReview reviewArr={data.productReviews}></ProductReview>

      <Heading text="VIDEOS"></Heading>
      <Videos arr={data.videos}></Videos>
      <Heading text="IN THE PRESS"></Heading>
      <Banner banner={data.banner}></Banner>

      <Footer></Footer>
    </Router>
  );
};

export default App;
