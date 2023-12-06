import { Title } from "../../Title.jsx";
import { HeaderItem } from "./HeaderItem.jsx";
import Icons from "../../../constants";
import {Languages} from "../../Languages.jsx";

const Header = () => (
  <section className='header'>
    <div className="container">
      <Title title='աշխատանՔ բեկոնոիմ' />

      <div className="d-flex align-items-end">
        <div className='header-item-wrapper'>
          <HeaderItem
              number='27+'
              icon={Icons.STAR}
              text='տարի աշխատաշուկայում '
          />
          <HeaderItem
              number='10+'
              icon={Icons.GLOBAL}
              text='տարի միջազգային աշխատաշուկայում'
          />
          <HeaderItem
              number='350+'
              icon={Icons.PEOPLE}
              text='երջանիկ աշխատակից'
          />
          <HeaderItem
              number='89%'
              icon={Icons.BADGE}
              text='գործատուի առաջխաղացման ցուցանիշ'
          />
          <HeaderItem
              number='20+'
              icon={Icons.CASE}
              text='թափուր աշխատատեղ'
          />
        </div>
        <Languages />
      </div>
    </div>
  </section>
);

export default Header;
