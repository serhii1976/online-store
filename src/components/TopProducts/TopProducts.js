import SlickSlider from 'utils/Slider/Slider';
import { TitleSlider, WraperSlider } from './TopProducts.styled';

const TopProducts = () => {
  return (
    <WraperSlider>
      <TitleSlider> Топ товари </TitleSlider>
      <SlickSlider />
    </WraperSlider>
  );
};

export default TopProducts;
