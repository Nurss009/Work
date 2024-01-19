import React from 'react';
import nout from './Assets/illustration.png';

const News = () => {
    return (
        <div className={'container'}>
            <div className="auk">
                <h2>Новости</h2>
                <h3 className={'blu'}>Все</h3>
            </div>
            <div className="row">
                <div className="col-4">
                    <div className="card">
                        <div className="text-card">
                            <h6 className={'h6'}>-50%</h6>
                            <h3 className={'h3'}>На кухонную мебель</h3>
                            <button className={'but'}>Подробнее</button>
                            <svg className={'svg-c'} xmlns="http://www.w3.org/2000/svg" width="96" height="83" viewBox="0 0 96 83" fill="none">
                                <ellipse cx="39.8343" cy="55.712" rx="55.3292" ry="55.3292" fill="#D7EEFE"/>
                            </svg>
                        </div>
                        <div className="img">

                            <img src={nout} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <div className="text-card">
                            <h6 className={'h6'}>-50%</h6>
                            <h3 className={'h3'}>На кухонную мебель</h3>
                            <button className={'but'}>Подробнее</button>
                            <svg className={'svg-c'} xmlns="http://www.w3.org/2000/svg" width="96" height="83" viewBox="0 0 96 83" fill="none">
                                <ellipse cx="39.8343" cy="55.712" rx="55.3292" ry="55.3292" fill="#D7EEFE"/>
                            </svg>
                        </div>
                        <div className="img">
                            <img src={nout} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;