import React from "react";
import '../../cssFile/home.css';
import ImageSlider from "../../components/imageSlider";
import UserHomeInfo from "../../components/userHomeInfo";
import ImageBoxes from "../../components/imageBoxes";
import Faq from "../../components/faq";
import Footer from "../../components/footer";

const Home = () => {
    return (
        <>      
            <ImageSlider/>
            <UserHomeInfo/>
            <ImageBoxes/>
            <Faq/>
            <Footer/>
        </>
    )
}
export default Home;