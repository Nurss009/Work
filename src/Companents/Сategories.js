import React from 'react';
import rec1 from './Assets/rec1.png'
import rec2 from './Assets/rec2.png'
import rec3 from './Assets/rec3.png'
import rec4 from './Assets/rec4.png'
import rec5 from './Assets/rec5.png'
import rec6 from './Assets/rec6.png'
import rec7 from './Assets/rec7.png'
import img1 from './Assets/img1.png'
import img2 from './Assets/img2.png'
import img3 from './Assets/img3.png'
import img4 from './Assets/img4.png'
import img5 from './Assets/img5.png'
import img6 from './Assets/img6.png'
import img7 from './Assets/img7.png'


const Kategories = () => {
    return (
        <div className={'container'}>
            <h1 className={'Category'}>Категории</h1>
            <div className="row">
                <div className="col-1">
                    <div className="box">
                        <h3>Ванны</h3>
                        <span>3000 товаров</span>
                        <img className={'img'} src={rec1} alt=""/>
                    </div>
                </div>
                <div className="col-1">
                    <div className="box">
                        <h3>Смесители</h3>
                        <span>3000 товаров</span>
                        <img className={'img'} src={rec2} alt=""/>
                    </div>
                </div>
                <div className="col-1">
                    <div className="box">
                        <h3>Вытяжки для кухни</h3>
                        <span>3000 товаров</span>
                        <img className={'img'} src={rec3} alt=""/>
                    </div>
                </div>
                <div className="col-1">
                    <div className="box ">
                        <h3>Кухонные мойки</h3>
                        <span>3000 товаров</span>
                        <img className={'img'} src={rec4} alt=""/>
                    </div>
                </div>
                <div className="col-1">
                    <div className="box">
                        <h3>Другие</h3>
                        <span>3000 товаров</span>
                        <img className={'img'} src={rec5} alt=""/>
                    </div>
                </div>
                <div className="col-1">
                    <div className="box ">
                        <h3>Унитазы</h3>
                        <span>3000 товаров</span>
                        <img className={'img'} src={rec6} alt=""/>
                    </div>
                </div>
                <div className="col-1">
                    <div className="box ">
                        <h3>Вытяжки для кухни</h3>
                        <span>3000 товаров</span>
                        <img className={'img'} src={rec7} alt=""/>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-1">
                    <div className="box">
                        <h3>Умывальники</h3>
                        <span>3000 товаров</span>
                        <img className={'img'} src={img1} alt=""/>
                    </div>
                </div>
                <div className="col-1">
                    <div className="box">
                        <h3>Полотенцесушители</h3>
                        <span>3000 товаров</span>
                        <img className={'img'} src={img2} alt=""/>
                    </div>
                </div>
                <div className="col-1">
                    <div className="box">
                        <h3>Водонагреватели</h3>
                        <span>3000 товаров</span>
                        <img className={'img'} src={img3} alt=""/>
                    </div>
                </div>
                <div className="col-1">
                    <div className="box ">
                        <h3>Душевые</h3>
                        <span>3000 товаров</span>
                        <img className={'img'} src={img4} alt=""/>
                    </div>
                </div>
                <div className="col-1">
                    <div className="box">
                        <h3>Водонагреватели</h3>
                        <span>3000 товаров</span>
                        <img className={'img'} src={img5} alt=""/>
                    </div>
                </div>
                <div className="col-1">
                    <div className="box ">
                        <h3>Водонагреватели</h3>
                        <span>3000 товаров</span>
                        <img className={'img'} src={img6} alt=""/>
                    </div>
                </div>
                <div className="col-1">
                    <div className="box ">
                        <h3>Полотенцесушители</h3>
                        <span>3000 товаров</span>
                        <img className={'img'} src={img7} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Kategories;