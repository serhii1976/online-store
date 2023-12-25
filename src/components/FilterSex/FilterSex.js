import {
  WraperFilter,
  ButtonFilter,
  ListFilter,
  ItemFilter,
} from './FilterSex.styled';

const FilterSex = () => {
  const handleClick = () => {
    console.log('CLICK Filter');
  };
  return (
    <WraperFilter>
      <ListFilter>
        <ItemFilter>
          <ButtonFilter type="button" onClick={handleClick}>
            Жінка
          </ButtonFilter>
        </ItemFilter>
        <ItemFilter>
          <ButtonFilter type="button" onClick={handleClick}>
            Чоловік
          </ButtonFilter>
        </ItemFilter>
        <ItemFilter>
          <ButtonFilter type="button" onClick={handleClick}>
            Дитина
          </ButtonFilter>
        </ItemFilter>
      </ListFilter>
    </WraperFilter>
  );
};

export default FilterSex;
