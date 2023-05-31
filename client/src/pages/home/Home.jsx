import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Featured from '../../components/Featured/Featured';
import PropertyList from '../../components/PropertyList/PropertyList';
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">
          Browse by property name
        </h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties />
      </div>
    </div>
  )
}

export default Home
