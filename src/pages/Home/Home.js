import SearchBar from 'components/SearchBar/SearchBar';
import Hero from 'components/Hero/Hero';
import TopProducts from 'components/TopProducts/TopProducts';
import FilterSex from 'components/FilterSex/FilterSex';

const Home = () => {
  return (
    <div>
      <SearchBar />
      <FilterSex />
      <Hero />
      <TopProducts />
    </div>
  );
};
export default Home;
