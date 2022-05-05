import React, { useState, useEffect } from 'react';
import 'styles/menu.scss';
import { NavLink } from 'react-router-dom';

import { MdHistory } from "react-icons/md"
import { FiBox, FiCreditCard, FiRepeat } from "react-icons/fi";




export default function Menu() {
  return (
    <div className="menu">
      <div className="menu__list">

        <NavLink className="menu__item" to="/create" activeClassName="menu__item--active"><FiBox /> Tạo Ví</NavLink>
        <NavLink className="menu__item" to="/detail" activeClassName="menu__item--active"><FiCreditCard /> Thông Tin Ví</NavLink>
        <NavLink className="menu__item" to="/send-transaction" activeClassName="menu__item--active"><FiRepeat /> Chuyển Tiền</NavLink>
        <NavLink className="menu__item" to="/history" activeClassName="menu__item--active"><MdHistory /> Lịch Sử</NavLink>
      </div>
    </div>
  )
}