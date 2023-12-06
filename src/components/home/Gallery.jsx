import {Title} from "../Title.jsx";
import { Swiper, SwiperSlide } from 'swiper/react';
import Icons from "../../constants";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const Gallery = () => (
  <section className="gallery">
      <div className="container-fluid">
          <div className="w-68">
              <Title title='ՊԱՏԿԵՐԱՍՐԱՀ'
                     text='Գործունեությունը սկսելով փոքր արտադրամասում` ընկերությունը ժամանակի ընթացքում ընդարձակվել է եւ այսօր գործում է ժամանակակից, միջազգային ստանդարտներին համապատասխան '
              />
          </div>

          <Swiper
              slidesPerView={4}
              navigation={true}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              modules={[Navigation]}
          >
              <SwiperSlide>
                  <img className="gallery-img" src={Icons.GALLERY_IMG1} alt="img1"/>
              </SwiperSlide>
              <SwiperSlide>
                  <img className="gallery-img" src={Icons.GALLERY_IMG2} alt="img2"/>
              </SwiperSlide>
              <SwiperSlide>
                  <img className="gallery-img" src={Icons.GALLERY_IMG3} alt="img3"/>
              </SwiperSlide>
              <SwiperSlide>
                  <img className="gallery-img" src={Icons.GALLERY_IMG4} alt="img4"/>
              </SwiperSlide>
              <SwiperSlide>
                  <img className="gallery-img" src={Icons.GALLERY_IMG1} alt="img1"/>
              </SwiperSlide>
              <SwiperSlide>
                  <img className="gallery-img" src={Icons.GALLERY_IMG3} alt="img3"/>
              </SwiperSlide>
          </Swiper>
      </div>
  </section>
);

export default Gallery;