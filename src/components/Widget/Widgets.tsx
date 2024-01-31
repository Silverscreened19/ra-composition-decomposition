import { broadcast } from "../../data/broadcast";
import { popular } from "../../data/popular";
import { tvShows } from "../../data/tvshows";
import { List } from "../List/List";

import Widget from "./Widget";
import { FaCloudShowersHeavy } from "react-icons/fa";

const Widgets = () => {
  return (
    <div className="widgets_container">
      <div className="widget_card">
        <Widget title="Погода">
          <div className="widget-weather">
            <div>
              <FaCloudShowersHeavy size={30} />
              <span className="current_temp">+17°</span>
            </div>
            <span className="day_temp">
              Утром +17,
              <br />
              днем +20
            </span>
          </div>
        </Widget>
      </div>

      <div className="widget_card">
        <Widget title="Посещаемое">
          <List items={popular} />
        </Widget>
      </div>

      <div className="widget_card">
        <Widget title="Карта Санкт-Петербурга">
          <a href="#">Расписания</a>
        </Widget>
      </div>

      <div className="widget_card">
        <Widget title="Телепрограмма">
          <List items={tvShows} />
        </Widget>
      </div>

      <div className="widget_card">
        <Widget title="Эфир">
          <List items={broadcast} />
        </Widget>
      </div>
    </div>
  );
};

export default Widgets;
