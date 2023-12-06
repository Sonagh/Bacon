import {Title} from "../../Title.jsx";
import Icons from "../../../constants/index.js";
import BenefitItem from "./BenefitItem.jsx";

const Benefits = () => (
    <section className="benefits">
        <div className="container">
            <div className="w-68">
                <Title title='ԲԵՆԵՖԻթՆԵր'
                       text='Գործունեությունը սկսելով փոքր արտադրամասում` ընկերությունը ժամանակի ընթացքում ընդարձակվել է եւ այսօր գործում է ժամանակակից, միջազգային ստանդարտներին համապատասխան մասնաշենքում, որը կառուցվել է 2006թ. Ավստրիացի հայտնի մասնագետների կողմից կազմված նախագծով:'
                />
            </div>

            <div className="benefit-item-wrapper">
                <BenefitItem
                    image={Icons.BENEFIT_IMG1}
                    imageAlt="Growth"
                    text="Անսահման հնարավորություններ մասնագիտական աճի և զարգացման"
                />
                <BenefitItem
                    image={Icons.BENEFIT_IMG2}
                    imageAlt="Sun"
                    text="Անսահման հնարավորություններ մասնագիտական աճի և զարգացման"
                />
                <BenefitItem
                    image={Icons.BENEFIT_IMG3}
                    imageAlt="Heart"
                    text="Անսահման հնարավորություններ մասնագիտական աճի և զարգացման"
                />
                <BenefitItem
                    image={Icons.BENEFIT_IMG4}
                    imageAlt="Safety"
                    text="Անսահման հնարավորություններ մասնագիտական աճի և զարգացման"
                />
                <BenefitItem
                    image={Icons.BENEFIT_IMG5}
                    imageAlt="Lunch"
                    text="Անսահման հնարավորություններ մասնագիտական աճի և զարգացման"
                />
            </div>
        </div>
    </section>
);

export default Benefits;
