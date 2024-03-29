import SearchBar from 'components/SearchBar/SearchBar';
import Hero from 'components/Hero/Hero';
import TopProducts from 'components/TopProducts/TopProducts';
import FilterSex from 'components/FilterSex/FilterSex';
import NewProducts from 'components/NewProducts/NewProducts';
import SaleProducts from 'components/Sale/Sale';
import Offer from 'components/Offer/Offer';
// import Footer from 'components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <SearchBar />
      <FilterSex />
      <Hero />
      <TopProducts />
      <NewProducts />
      <SaleProducts />
      <Offer />
      {/* <Footer /> */}
    </div>
  );
};
export default Home;
