import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const ProductCarousel = ({ products }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
      };
    
    return (
        <Slider {...settings}>
          {products.map((product, index) => (
            <div key={index}>
              {/* Renderize o componente de card de produto aqui */}
              {/* Exemplo: <ProductCard product={product} /> */}
            </div>
          ))}
        </Slider>
    );
};