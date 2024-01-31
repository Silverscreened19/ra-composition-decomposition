/**
 * Displays news block
 */

import Currencies from "./Currencies";
import NewsHeaders from "./NewsHeader";
import { List } from "../List/List";
import { currencies } from "../../data/currencies";
import { news } from "../../data/news";
import { newsHeaders } from "../../data/newsHeaders";
import Ad from "./Ad";

const News = () => {
  return (
    <div className="news_container">
      <div className="news_item">
        <NewsHeaders headers={newsHeaders} />
        <List items={news} />
        <Currencies array={currencies} />
      </div>
      <div className="ad_item" style={{ width: "18rem" }}>
        <Ad img="https://img.freepik.com/free-vector/blooming-white-flowers_53876-93708.jpg?w=1800&t=st=1706693365~exp=1706693965~hmac=ba84be3fd53bd2d0f201b810f830bcd3c4b740e9af0a03b91c710e54d83d508d">
          <h5 className="ad_header">Рекламный заголовок</h5>
          <p className="ad_text">Рекламный текст </p>
        </Ad>
      </div>
    </div>
  );
};

export default News;
