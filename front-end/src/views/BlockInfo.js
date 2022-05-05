import React from 'react';
import { BiUserCircle } from "react-icons/bi";
import { RiWallet3Line } from "react-icons/ri";

export default function BLockInfo(props) {
  const { address, balance } = props || {};
  return (
    <div className="block-group">
      <div className="block block--address">
        <div className="block__img">
          <BiUserCircle />
        </div>
        <div className="block__content">
          <div className="block__title">Địa Chỉ Ví</div>
          <div className="block__info">{address}</div>
        </div>
      </div>
      <div className="block block--balance">
        <div className="block__img">
          <RiWallet3Line />
        </div>
        <div className="block__content">
          <div className="block__title">Số Tiền Có Trong Ví</div>
          <div className="block__info">{balance} Coin</div>
        </div>
      </div>
    </div>
  )
}