import {Title} from "../../Title.jsx";
import { Swiper, SwiperSlide } from 'swiper/react';
import {MissionItem} from "./MissionItem.jsx";
import Icons from "../../../constants";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Mission = () => (
  <section className="mission">
    <div className="mission-inner">
      <div className="w-68">
        <Title title='Բեկոնի առաքելությունը'
               text='Գործունեությունը սկսելով փոքր արտադրամասում` ընկերությունը ժամանակի ընթացքում ընդարձակվել է եւ այսօր գործում է ժամանակակից, միջազգային ստանդարտներին համապատասխան մասնաշենքում, որը կառուցվել է 2006թ. Ավստրիացի հայտնի մասնագետների կողմից կազմված նախագծով:'
        />
      </div>

      <Swiper
        spaceBetween={65}
        slidesPerView={3.8}
        navigation={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <MissionItem
            bgImage={Icons.MISSION_BG1}
            image={Icons.MISSION_ICON1}
            text="Անսահման հնարավորություններ մասնագիտական աճի և զարգացման"
          />
        </SwiperSlide>
        <SwiperSlide>
          <MissionItem
            bgImage={Icons.MISSION_BG2}
            image={Icons.MISSION_ICON2}
            text="Լինել պատասխանատու հասարակության բոլոր շերտերի առաջ` գիտակցելով արտադրանքի կարևորությունը ողջ հասարակության համար"
          />
        </SwiperSlide>
        <SwiperSlide>
          <MissionItem
            bgImage={Icons.MISSION_BG3}
            image={Icons.MISSION_ICON3}
            text="Աշխատել արտադրանքի որակի կատարելագործման համար"
          />
        </SwiperSlide>
        <SwiperSlide>
          <MissionItem
            bgImage={Icons.MISSION_BG4}
            image={Icons.MISSION_ICON4}
            text="Լինել նորարար և հասնել միայն ամենաբարձր ցուցանիշներին` ձգտելով նպաստել մսամթերքի հայկական շուկայի զարգացմանը"
          />
        </SwiperSlide>
        <SwiperSlide>
          <MissionItem
            bgImage={Icons.MISSION_BG2}
            image={Icons.MISSION_ICON2}
            text="Լինել պատասխանատու հասարակության բոլոր շերտերի առաջ` գիտակցելով արտադրանքի կարևորությունը ողջ հասարակության համար"
          />
        </SwiperSlide>
        <SwiperSlide>
          <MissionItem
            bgImage={Icons.MISSION_BG4}
            image={Icons.MISSION_ICON4}
            text="Լինել նորարար և հասնել միայն ամենաբարձր ցուցանիշներին` ձգտելով նպաստել մսամթերքի հայկական շուկայի զարգացմանը"
          />
        </SwiperSlide>
      </Swiper>

    </div>

  </section>
);

export default Mission;
