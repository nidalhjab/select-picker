import { useState } from "react";
import "./selectpicker.css";
import Plus from "../../assets/plus";
import Check from "../../assets/check";

const data = [
  { id: 1, name: "Budget", selected: false },
  { id: 2, name: "Food allergies", selected: false },
  { id: 3, name: "Number of people", selected: false },
  { id: 4, name: "Special restrictions", selected: false }
];
const SelectPicker = () => {
  const [items, setItems] = useState(data);
  const [searchField, setSearchField] = useState("");

  const Item = ({ item, clicked }) => {
    return (
      <div onClick={clicked} className="item">
        <p className={`item-name ${item.selected && "selected"}`}>
          {item.name}
        </p>
        {item.selected ? <Check /> : <Plus />}
      </div>
    );
  };

  const handleChange = text => {
    setSearchField(text.target.value);
  };
  const filteredData =
    searchField === ""
      ? items
      : items.filter(item => {
          if (searchField === "") {
            return item;
          } else if (
            item.name.toLowerCase().includes(searchField.toLowerCase())
          ) {
            return item;
          }
        });

  const clickedItem = clickedItem => {
    setItems(items.map((item)=> (item.id === clickedItem.id ? {...item,selected:true} : item)))
  };
  return (
    <div className="container">
      <div className="select-picker">
        <div className="select-search">
          <input
            type="text"
            value={searchField}
            onChange={handleChange}
            placeholder="Search questions"
          />
        </div>
        <div>
          {filteredData.map(item => (
            <Item clicked={() => clickedItem(item)} key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectPicker;
