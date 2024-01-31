/**
 * Displays search block
 */

import { categoriesList } from "../../data/searchCategories";
import Categories from "./Categories";
import Form from "./Form";

const Search = () => {
  return (
    <div className="search_container">
      <div className="search_item">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Yandex_logo_ru.svg/1200px-Yandex_logo_ru.svg.png"
          alt="logo"
        />
      </div>
      <div className="search_item form">
        <Categories categories={categoriesList} />
        <Form />
      </div>
    </div>
  );
};

export default Search;
