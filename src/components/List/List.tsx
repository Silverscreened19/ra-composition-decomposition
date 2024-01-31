import { v4 } from "uuid";
import { IListItem, ListItem } from "./ListItem";

interface IListProps {
  items: IListItem[];
}

export const List = ({ items }: IListProps) => {
  return (
    <ul className="list">
      {items.map(({ title, icon, description }) => (
        <ListItem title={title} icon={icon} description={description} key={v4()}/>
      ))}
    </ul>
  );
};
