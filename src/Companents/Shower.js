import React, { useState } from 'react';
import shower from './Assets/shower.png';

const Counter = ({ initialCount }) => {
    const [count, setCount] = useState(initialCount);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1 >= 0 ? count - 1 : 0);
    };

    return (
        <div className={'buy'}>
            <button className={'button'} onClick={handleDecrement}>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.6917 11.4005H5.18203C4.90716 11.4005 4.64355 11.5096 4.44919 11.704C4.25482 11.8984 4.14563 12.162 4.14563 12.4369C4.14563 12.7117 4.25482 12.9753 4.44919 13.1697C4.64355 13.3641 4.90716 13.4733 5.18203 13.4733H19.6917C19.9666 13.4733 20.2302 13.3641 20.4245 13.1697C20.6189 12.9753 20.7281 12.7117 20.7281 12.4369C20.7281 12.162 20.6189 11.8984 20.4245 11.704C20.2302 11.5096 19.9666 11.4005 19.6917 11.4005Z" fill="black" />
                </svg>
            </button>
            <h3>Counter: {count}</h3>
            <button className={'button'} onClick={handleIncrement}>
                <svg className={'svg'} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.3481 13.9223H13.9224V20.3481H11.7805V13.9223H5.35477V11.7804H11.7805V5.35474H13.9224V11.7804H20.3481V13.9223Z" fill="black" />
                </svg>
            </button>
        </div>
    );
};

const Shower = () => {
    const products = [
        { id: 1, name: 'Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605..', price: '1249c', available: true },
        { id: 2, name: 'Держатель для лейки BOOU PG605', price: '1249c', available: true },
        { id: 3, name: 'Держатель для лейки ', price: '1249c', available: true },
        { id: 4, name: 'Держатель для лейки BOOU PG605', price: '1249c', available: true },
        { id: 5, name: 'Держатель для лейки BOOU PG605', price: '1249c', available: true },
        { id: 6, name: 'Держатель для лейки BOOU PG605', price: '1249c', available: true },
    ];

    return (
        <>
            <div className={'container'}>
                <div className="auk">
                    <h1 className={'heat'}>Хиты продаж</h1>
                    <h3 className={'blu'}>перейти в каталог</h3>
                </div>
                <div className="row">
                    {products.map((product) => (
                        <div key={product.id} className="col-2">
                                <img src={shower} alt="" />
                                <h3>{product.name}</h3>
                                <h4 className={'h4'}>{product.price}</h4>
                                <span className={'gre-span'}>{product.available ? 'В наличии' : 'Нет в наличии'}</span>
                                <span className={'span-blu'}>
                                <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.90193" cy="3.50002" r="2.90193" fill="#3286C2"/></svg>
                                      Комплект
                                 </span>
                                <Counter initialCount={0} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Shower;