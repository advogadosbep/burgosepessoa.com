import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CaretDown } from '@phosphor-icons/react';
import logo1 from '../asserts/clientes/1.png';
import logo2 from '../asserts/clientes/2.png';
import logo3 from '../asserts/clientes/3.png';
import logo4 from '../asserts/clientes/4.png';
import logo5 from '../asserts/clientes/5.png';
import logo6 from '../asserts/clientes/6.png';
import logo7 from '../asserts/clientes/7.png';
import logo8 from '../asserts/clientes/8.png';
import logo9 from '../asserts/clientes/9.png';
import useWindowSize from '@/hooks/useWindowSize';

const clientes = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9];

function ClientesNew() {
  const size = useWindowSize();

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: size.width > 768 ? 8 : 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    pauseOnHover: false,
  };

  return (
    <div className="h-56 bg-blue-950 pt-2">
      <div className="w-full px-5 flex md:justify-center">
        <div className="relative w-32 px-4 py-1 mt-8 text-center bg-yellow-500 font-bold text-gray-900">
          <CaretDown className="absolute -bottom-3 left-2 text-yellow-500" size={20} weight="fill" />
          Clientes
        </div>
      </div>
      <div className="h-2/3 pt-2">
        <Slider {...settings}>
          {clientes.map((logo, i) => (
            <div key={`clientsLogo${i}`} className="flex justify-center h-28">
              <img className="h-full" key={`client${i}`} src={logo} alt={`logo-cliente-${i}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ClientesNew;
