import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import NavigationBar from '../Pages/Shared/NavigationBar/NavigationBar'; 
import Banner from '../Pages/Shared/Banner/Banner';
import Radial from '../Pages/Radial/Radial';
import AddSection from '../Pages/Shared/AddSection/AddSection';
import Candidates from '../Pages/Candidates/Candidates';

const Main = () => {
    return (
        <div>
        <NavigationBar></NavigationBar>
        <Banner></Banner>
        <AddSection></AddSection>
            <Outlet></Outlet>
            <Candidates></Candidates>
            <Radial></Radial>
            <AddSection></AddSection>
            <Footer></Footer>
        </div>
    );
};

export default Main;