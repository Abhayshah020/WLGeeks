import Footer from "../../components/footer";

const Demo = () => {
    var code = "npm i"
    return (
        <>
            <div style={{ backgroundColor: "black", color: 'white', width: '50vw', borderRadius: '4px' }}>
                {code}
            </div>

            <Footer />
        </>
    )
}
export default Demo;