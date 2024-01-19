import React from 'react';
import Group from './Assets/Group.png';

const Header = () => {
    return (
        <header>
            <header className={'header'}>
                <div className="container">
                    <div className="header">
                        <img src={Group} alt="logo"/>
                        <div className="menu">
                            <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="15" height="1" rx="0.5" fill="#D9D9D9"/>
                                <rect y="4" width="15" height="1" rx="0.5" fill="#D9D9D9"/>
                                <rect y="8" width="15" height="1" rx="0.5" fill="#D9D9D9"/>
                            </svg>
                            <h3>Каталог</h3>
                        </div>
                        <input className={'input'} type="text" placeholder={'Поиск'}/>
                        <div className="hed-text">
                            <h6>Добро пожаловать</h6>
                            <h3>Вход/Регистрация</h3>
                        </div>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="29" height="29" rx="14.5" fill="white" stroke="#C1C1C1"/>
                            <circle cx="15.2017" cy="11.1553" r="3.38444" stroke="#BEBEBE" stroke-width="1.0625" stroke-linecap="round" stroke-linejoin="round"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.83326 19.2468C9.83235 19.0089 9.88556 18.7739 9.98887 18.5596C10.313 17.9112 11.2272 17.5676 11.9858 17.412C12.5329 17.2952 13.0876 17.2172 13.6456 17.1785C14.6788 17.0878 15.718 17.0878 16.7513 17.1785C17.3093 17.2177 17.8639 17.2956 18.4111 17.412C19.1696 17.5676 20.0838 17.8788 20.408 18.5596C20.6158 18.9964 20.6158 19.5037 20.408 19.9406C20.0838 20.6213 19.1696 20.9325 18.4111 21.0817C17.8646 21.2033 17.3098 21.2834 16.7513 21.3216C15.9103 21.3929 15.0654 21.4059 14.2227 21.3605C14.0282 21.3605 13.8401 21.3605 13.6456 21.3216C13.0892 21.2839 12.5365 21.2037 11.9923 21.0817C11.2272 20.9325 10.3195 20.6213 9.98887 19.9406C9.88609 19.7237 9.83293 19.4868 9.83326 19.2468Z" stroke="#BEBEBE" stroke-width="1.0625" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        <svg width="1" height="30" viewBox="0 0 1 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0.5" y1="2.18557e-08" x2="0.499999" y2="30" stroke="white" stroke-opacity="0.2"/>
                        </svg>
                        <svg width="31" height="36" viewBox="0 0 31 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="5.60132" width="30" height="30" rx="15" fill="white"/>
                            <path d="M6.70667 14.0144L7.59123 14.1913C8.20021 14.3131 8.65827 14.8183 8.72007 15.4362L8.8452 16.6876M8.8452 16.6876L9.61237 23.0806C9.69758 23.7907 10.3 24.3252 11.0153 24.3252H18.1419C19.2765 24.3252 20.2656 23.553 20.5408 22.4522L21.4772 18.7066C21.7336 17.681 20.9579 16.6876 19.9008 16.6876H8.8452Z" stroke="#0063A9" stroke-width="1.05971" stroke-linecap="round"/>
                            <path d="M15.368 19.5469H11.702" stroke="#0063A9" stroke-width="1.05971" stroke-linecap="round" stroke-linejoin="round"/>
                            <circle cx="11.6708" cy="26.9982" r="1.14564" fill="#0063A9"/>
                            <circle cx="18.5444" cy="26.9982" r="1.14564" fill="#0063A9"/>
                            <circle cx="25" cy="6" r="6" fill="#DC3434"/>
                            <path d="M25.928 8H23.216V7.544L24.698 6.032C25.094 5.636 25.292 5.296 25.292 5.012C25.292 4.78 25.22 4.598 25.076 4.466C24.936 4.33 24.76 4.262 24.548 4.262C24.152 4.262 23.864 4.45 23.684 4.826L23.216 4.55C23.344 4.282 23.524 4.078 23.756 3.938C23.988 3.794 24.25 3.722 24.542 3.722C24.898 3.722 25.204 3.838 25.46 4.07C25.72 4.306 25.85 4.618 25.85 5.006C25.85 5.43 25.6 5.892 25.1 6.392L24.026 7.46H25.928V8Z" fill="white"/>
                        </svg>
                    </div>
                </div>
            </header>
        </header>
    );
};

export default Header;