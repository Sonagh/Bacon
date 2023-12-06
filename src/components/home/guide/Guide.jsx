import {Title} from "../../Title.jsx";
import React from "react";
import GuideItem from "./GuideItem.jsx";
import Icons from "../../../constants";

const Guide = () => (
  <section className="guide">
      <div className="container">
          <Title title='ԲԵկոն դիմելու ուղեցույց'/>

          <ul className="guide-item-wrapper">
              <li>
                <GuideItem
                    image={Icons.GUIDE_IMG1}
                    imageAlt="mrk"
                    text="ՄՌԿ հարցազրույց"
                />
              </li>
              <li>
                  <GuideItem
                      image={Icons.GUIDE_IMG2}
                      imageAlt="mrk"
                      text="Մասնագիտական հարցազրույց"
                  />
              </li>
              <li>
                  <GuideItem
                      image={Icons.GUIDE_IMG3}
                      imageAlt="mrk"
                      text="Առաջադրանք՝ ըստ անհրաժեշտության"
                  />
              </li>
              <li>
                  <GuideItem
                      image={Icons.GUIDE_IMG4}
                      imageAlt="mrk"
                      text="Հարցազրույց գործադիր տնօրենի հետ՝ ըստ անհրաժեշտության"
                  />
              </li>
              <li>
                  <GuideItem
                      image={Icons.GUIDE_IMG5}
                      imageAlt="mrk"
                      text="Աշխատանքի առաջարկ"
                  />
              </li>
          </ul>
      </div>
  </section>
);

export default Guide;
