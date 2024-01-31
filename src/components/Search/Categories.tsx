import { v4 } from "uuid";

interface ICategoriesProps {
    categories: string[];
}

export const Categories = ({categories}: ICategoriesProps) => {
    return (
        <div className="categories">
            {categories.map(category =>
                <a href="#" key={v4()} className="category">{category}</a>)}
        </div>
    )
}

export default Categories;
