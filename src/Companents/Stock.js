import React from 'react';
import photo1 from './Assets/photo1.png'
import photo2 from './Assets/photo2.png'
import photo3 from './Assets/photo3.png'
import photo4 from './Assets/photo4.png'
import photo5 from './Assets/photo5.png'

const Stock = () => {
    return (
        <div className={'container'}>
            <div className="png">
                <div className="">
                    <img src={photo1} alt=""/>
                    <h5>Скидки</h5>
                </div>
                <div>
                    <img src={photo2} alt=""/>
                    <h5>Акции</h5>
                </div>
                <div>
                    <img src={photo3} alt=""/>
                    <h5>Распродажа</h5>
                </div>
                <div className="div">
                    <img src={photo4} alt=""/>
                    <h5>Подарки</h5>
                </div>
                <div className="div">
                    <img src={photo5} alt=""/>
                    <h5>Подарки</h5>
                </div>
            </div>
        </div>
    );
};

export default Stock;