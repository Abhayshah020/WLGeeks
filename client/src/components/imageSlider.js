import { useState } from 'react';
import img1 from '../image/MERN.jpg';
import img2 from '../image/WhyUseMern.png';
import img3 from '../image/Customer.jpg';
import '../cssFile/home.css'
// CSS of this page is not in the Home.css file for now******************************************************

const ImageSlider = () => {
    const [sliderIndex, setsliderIndex] = useState(0);
    const slidesImage = [
        img1,
        img2,
        img3
    ]
    setTimeout(function() {
        if (sliderIndex === (slidesImage.length - 1)) {
            setsliderIndex(0)
        } else {
            setsliderIndex(sliderIndex + 1);
        }
    }, 5000);

    const slideLeft = () => {
        if (sliderIndex === 0) {
            setsliderIndex(slidesImage.length - 1)
        } else {
            setsliderIndex(sliderIndex - 1);
        }
    }
    const slideRight = () => {
        if (sliderIndex === (slidesImage.length - 1)) {
            setsliderIndex(0)
        } else {
            setsliderIndex(sliderIndex + 1);
        }
    }
    const rightArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -70%)",
        right: "32px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
        backgroundColor: "rgba(255,255,255,0.3)",
        padding:'10px',
        borderRadius:'3px',   
    };

    const leftArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -70%)",
        left: "32px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
        backgroundColor: "rgba(255,255,255,0.3)",
        padding:'10px',
        borderRadius:'3px',
    };
    return (
        <>
            <div>
                <div>
                    <div onClick={() => slideLeft()} className="leftButton" style={leftArrowStyles}>
                        ❰
                    </div>
                    <div onClick={() => slideRight()} className="rightButton" style={rightArrowStyles}>
                        ❱
                    </div>
                </div>
            </div>
            <img src={slidesImage[sliderIndex]} style={{ width: '100vw', height: '70vh' }} alt="logo" />
        </>
    );
};

export default ImageSlider;