import SlickSlider from 'utils/Slider/Slider';
import { TitleSlider, WraperSlider, SaleBox } from './Sale.styled';

const SaleProducts = () => {
  return (
    <SaleBox>
      <TitleSlider />
      <WraperSlider>
        <SlickSlider variant="sale" />
      </WraperSlider>
    </SaleBox>
  );
};

export default SaleProducts;
