
"use client";

import { Button, Modal, Select } from "flowbite-react";
import { useState } from "react";


const coins = [
    { symbol: 'BNB', name: 'Binance Coin', img: 'https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=035'},
    { symbol: 'BTC', name: 'Bitcoin', img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=035' },
    { symbol: 'USDT', name: 'Tether', img: 'https://cryptologos.cc/logos/tether-usdt-logo.svg?v=035' },
    { symbol: 'TON', name: 'Wrapped TON', img: 'https://cryptologos.cc/logos/toncoin-ton-logo.svg?v=035' },
];


export function Component() {
    const [openModal, setOpenModal] = useState(false);
    const [modalSize] = useState('md');
    const [selectedItem, setSelectedItem] = useState('BNB');
    
    const handleSelectCoin = (coin) => {
        setSelectedItem(coin);
        setOpenModal(false);
    }

    return (
        <>
            <div className="bg-slate-300 absolute bottom-0 right-0 m-5">
                <Button onClick={() => setOpenModal(true)}>{selectedItem ? selectedItem : 'Select a token'}</Button>
            </div>
            <Modal show={openModal} size={modalSize} onClose={() => setOpenModal(false)}>
                <Modal.Header>Select a token</Modal.Header>
                <Modal.Body>
                    <div>
                        <ul role="list">
                            {coins.map((coin, i) => (
                                <li key={i} className="flex bg-slate-200 hover:bg-slate-300 m-1 p-3 rounded-md cursor-pointer" onClick={() => {handleSelectCoin(coin.symbol)}}>
                                    <img className="rounded-full h-16 w-16 bg-slate-100" src={coin.img} alt={coin.symbol}></img>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-black">{coin.symbol}</p>
                                        <p className="text-sm font-medium text-slate-500">{coin.name}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
