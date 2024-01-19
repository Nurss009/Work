import React from 'react';
import Header from "./Companents/Heder";
import Stock from "./Companents/Stock";
import Kategories from "./Companents/Сategories";
import Shower from "./Companents/Shower";
import News from "./Companents/News";
import Auction from "./Companents/Auction";
import Adres from "./Companents/Adres";
import Footer from "./Companents/Footer";

const App = () => {
    return (
       <>
           <Header/>
           <Stock/>
           <Kategories/>
           <Shower/>
           <News/>
           <Auction/>
           <Adres/>
           <Footer/>
           </>
    );
};

export default App;