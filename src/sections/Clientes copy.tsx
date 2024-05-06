import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay  } from 'swiper/modules';
import { CaretDown  } from '@phosphor-icons/react';

import 'swiper/css';
import 'swiper/css/autoplay';
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

const clientes = [ logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9 ];

function ClientesOld() {
  const size = useWindowSize();
  return (
    <div className='h-48 bg-blue-950 pt-2'>
      <div className='w-full flex justify-center'>
        <div className='relative w-28 px-4 py-1 text-center bg-yellow-500 font-bold text-gray-900'>
            <CaretDown className='absolute -bottom-3 left-2 text-yellow-500' size={20} weight="fill"
        />Clientes</div>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay ]}
        className='h-2/3 pt-2'
        spaceBetween={0}
        slidesPerView={size.width > 768 ? 7.5 : 2.5}
        autoplay={{ delay: 1, disableOnInteraction: false }}
        speed={5000}
        loop={true}
      >
        {clientes.map((logo, i) => (
          <SwiperSlide key={`clientsLogo${i}`} className='flex justify-center'>
            <img
              className='h-full'
              key={`client${i}`}
              src={logo}
              alt={`logo-cliente-${i}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ClientesOld;
