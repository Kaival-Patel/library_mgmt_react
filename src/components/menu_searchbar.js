import {Input} from 'antd';
import React from "react";
import "./menu_searchbar.css";
function MenuSearchBar() {
  const {Search} = Input;
  return (
    <div>
      <div className="scaffold">
        <Search placeholder="Books,AudioBooks,Podcasts" className='searchbar' />
      </div>
    </div>
  );
}

export default MenuSearchBar;
