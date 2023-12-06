import {Title} from "../Title.jsx";
import Icons from "../../constants";

const Team = () => (
  <section className="team">
      <div className="w-45">
          <Title title='ՄԵՐ ԹԻՄԸ'
                 text='Գործունեությունը սկսելով փոքր արտադրամասում` ընկերությունը ժամանակի ընթացքում ընդարձակվել է եւ այսօր գործում է ժամանակակից, միջազգային ստանդարտներին համապատասխան մասնաշենքում, որը կառուցվել է 2006թ. '
          />
      </div>

      <img className="team-img" src={Icons.TEAM_BG} alt='team' />
  </section>
);

export default Team;
