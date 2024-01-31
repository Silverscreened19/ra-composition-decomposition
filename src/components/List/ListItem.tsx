import React from "react";

export interface IListItem {
  title: string;
  icon?: React.ReactNode;
  description?: string;
}

export const ListItem: React.FC<IListItem> = ({ title, description, icon }) => {
  return (
    <li className="list_item">
      <div>
        <span className="list_item_icon">{icon}</span>
        <a href="#">{title}</a>
        <span className="list_item_description">{description}</span>
      </div>
    </li>
  );
};
