import {Title} from "../../Title.jsx";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {MissionItem} from "./MissionItem.jsx";
import Icons from "../../../constants";
import { Navigation } from 'swiper/modules';


export const Mission = () => (
  <section className="mission">
    <div className="container">
      <div className="w-64">
        <Title title='Բեկոնի առաքելությունը'
               text='Գործունեությունը սկսելով փոքր արտադրամասում` ընկերությունը ժամանակի ընթացքում ընդարձակվել է եւ այսօր գործում է ժամանակակից, միջազգային ստանդարտներին համապատասխան մասնաշենքում, որը կառուցվել է 2006թ. Ավստրիացի հայտնի մասնագետների կողմից կազմված նախագծով:'
        />
      </div>

      <Swiper
        spaceBetween={50}
        slidesPerView={3}
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
)