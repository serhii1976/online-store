import { IoIosSearch } from 'react-icons/io';
import { SearchBox, Form, IconSearch, Input } from './SearchBar.styled';

const SearchBar = () => {
  const handleChange = e => {
    console.log(e.target.value);
  };

  return (
    <SearchBox>
      <Form>
        <IconSearch>
          <IoIosSearch style={{ fill: '#848484' }} />
        </IconSearch>
        <Input
          type="text"
          name="search"
          placeholder="Шукати"
          onChange={handleChange}
        />
      </Form>
    </SearchBox>
  );
};

export default SearchBar;
