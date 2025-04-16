import Graybg from "../components/Graybg";
import Grid from "../components/Grid";
import Grid2 from "../components/Grid2";
import Header1 from "../components/Header1";
import ImageRowComponent from "../components/ImageRowComponent";
import ImageSlider from "../components/ImageSlider";
import ImageWithTextComponent from "../components/ImageWithTextComponent";
import Nav from "../components/Nav";
import Nav2 from "../components/Nav2";
import AllbirdsApproach from "../components/allbirdsapproach";
import FooterData from "../components/FooterData";
import TwoImages from "../components/TwoImages";
const Home = () => {
    return(<>
        <div>
            <Header1 />
            <Nav />
            <Nav2 />
            <ImageSlider />
            <ImageRowComponent />
            <ImageWithTextComponent />
            <Grid />
            <TwoImages />
            <Grid2 />
            <Graybg />
            <AllbirdsApproach />
            <FooterData />
        </div>
    </>)
}
export default Home;
