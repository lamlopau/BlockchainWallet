import React, { useState, useEffect } from 'react';
import BlockInfo from './BlockInfo';
import httpBlockChain from 'api/blockChainApi'

export default function Detail() {
  const [address, setAddress] = useState();
  const [addressState, setAddressState] = useState();
  const getDetail = async () => {
    let data = await httpBlockChain.getBalance(address)
    setAddressState(data.Balance)
  }
  const miningAdmin = async () => {
    let data = await httpBlockChain.miningCoin({ address: address })
    alert(data.Result)
  }

  return (
    <div className="detail-container">
      <div className="tmp-form-group">
        <div className="tmp-form-control">
          <label className="tmp-form-control__label">Địa Chỉ Ví</label>
          <input type="text" placeholder="Nhập Địa Chỉ" onChange={e => setAddress(e.target.value)} className="tmp-form-control__input" />
        </div>
      </div>
      <button className="detail__btn" onClick={getDetail}>Lấy Thông Tin</button>
      <button className="detail__btn" onClick={miningAdmin}>mining (Admin)</button>

      <BlockInfo address={address} balance={addressState || 0} />
    </div>
  )
}