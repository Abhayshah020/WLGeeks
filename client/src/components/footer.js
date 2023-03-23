import img from "../image/WLlogo.jpg";
const Footer = () => {
    return (
        <>
            <div style={{backgroundColor:'grey',height:'20vh',margin:'20px 0 0 0',padding:'20px 0 0 0'}}>
                <div style={{display:'flex',justifyContent:'space-evenly'}}>
                    <div>
                        <img src={img} alt="logo" style={{maxWidth: "70px",borderRadius:'70px'}}/>
                    </div>
                    <div>
                        WLGeek's presents a highly coustomizable, flexiable, <br />
                        user-freindly and one of a kind website just for you!
                    </div>
                </div>
                <div style={{display:'flex',justifyContent:'space-evenly'}}>
                    <div>
                        Motto of the company is to make a wonderful and relaint website for<br/>
                        different types of company from small to large and unquie company<br/>
                        by various young talents webdevelopers of WLGeeks team.
                    </div>
                    <div>
                        <h4>abhayshah020@gmail.com</h4>
                        <h4>abhayshah020@gmail.com</h4>
                        <h4>abhayshah020@gmail.com</h4>
                    </div>
                </div>
                <div style={{display:'flex',justifyContent:'space-evenly',backgroundColor:'black',color:'white'}}>
                    <p>&copy; 2023 Programming Documentation. All rights reserved.</p>
                </div>
            </div>
        </>
    )
}
export default Footer;