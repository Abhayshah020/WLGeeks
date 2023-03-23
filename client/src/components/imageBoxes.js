import img from '../image/WhyUseMern.png';

const ImageBoxes = () => {
    return (
        <>
            <div style={{display:'flex', justifyContent:'space-evenly'}}>
                <div>
                    <img src={img} alt="what is mern stack" style={{ width: "15vw", height: '25vh' }} />
                </div>
                <div>
                    <img src={img} alt="what is mern stack" style={{ width: "15vw", height: '25vh' }} />
                </div>
                <div>
                    <img src={img} alt="what is mern stack" style={{ width: "15vw", height: '25vh' }} />
                </div>
                <div>
                    <img src={img} alt="what is mern stack" style={{ width: "15vw", height: '25vh' }} />
                </div>
                <div>
                    <img src={img} alt="what is mern stack" style={{ width: "15vw", height: '25vh' }} />
                </div>
                <div>
                    <img src={img} alt="what is mern stack" style={{ width: "15vw", height: '25vh' }} />
                </div>
            </div>
        </>
    )
}

export default ImageBoxes;