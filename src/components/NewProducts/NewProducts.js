import SlickSlider from 'utils/Slider/Slider';
import { TitleSlider, WraperSlider } from './NewProducts.styled';

const NewProducts = () => {
  return (
    <WraperSlider>
      <TitleSlider> Новинки </TitleSlider>
      <SlickSlider />
    </WraperSlider>
  );
};

export default NewProducts;
