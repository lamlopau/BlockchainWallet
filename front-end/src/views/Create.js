import React, { useState, useEffect } from 'react';
import 'styles/create.scss';
import icLogin from 'assets/login.svg';
import httpBlockChain from 'api/blockChainApi'

export default function Register() {
  const [address, setAddress] = useState()
  const register = async () => {

    let data = await httpBlockChain.createwallet()
    setAddress(data.Address)
  }

  return (
    <div className="login">
      <div className="login__wrapper">

        <div className="login__title">Tạo Ví Của Bạn ~ ~</div>
        <div className="login__footer">
          <button onClick={register} className="login__btn">Tạo Ví Mới</button>
        </div>
        {address && <div className="login__wallet">
          <span>Địa Chỉ Ví Của Bạn: </span>
          <p>{address}</p>
        </div>}
      </div>
    </div>
  )
}