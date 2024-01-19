import React from 'react';
import Group from "./Assets/Logo1.png";

const Footer = () => {
    return (
        <div className={'footer'}>
            <div className="container">
               <div className="flex">
                   <main>
                       <section>
                           <img className={'footer-img'} src={Group} alt="logo"/>
                           <p className={'p'}>Первый отечественный бренд Iskender на рынке сантехники от компании ОсОО «Стройдом.кг»</p>

                           <div className="install">
                               <svg width="144" height="46" viewBox="0 0 144 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M9.2305 45.9977C8.85906 45.9977 8.49663 45.993 8.12811 45.9848C7.36472 45.9751 6.60313 45.9096 5.84955 45.7888C5.14688 45.6694 4.46619 45.4473 3.82993 45.1298C3.19948 44.815 2.62446 44.4023 2.1269 43.9073C1.6221 43.4182 1.20182 42.8509 0.882724 42.228C0.560147 41.6009 0.336905 40.9288 0.220772 40.2351C0.0954013 39.4896 0.027589 38.7359 0.0179202 37.9803C0.0101182 37.7267 0 36.8824 0 36.8824V9.10259C0 9.10259 0.0107278 8.27115 0.0179202 8.02679C0.0272089 7.27244 0.0946551 6.51987 0.219675 5.77561C0.336036 5.07996 0.559468 4.40593 0.882236 3.77685C1.2001 3.15429 1.618 2.58657 2.11971 2.09569C2.62089 1.60015 3.19777 1.18523 3.82932 0.866077C4.46414 0.549684 5.14355 0.329199 5.8448 0.21201C6.60086 0.0900955 7.36512 0.0242118 8.13115 0.0149116L9.23111 0H134.513L135.626 0.0152724C136.385 0.0241686 137.142 0.0895323 137.891 0.210807C138.6 0.3295 139.286 0.55156 139.928 0.869685C141.193 1.51285 142.223 2.53041 142.872 3.77974C143.19 4.4045 143.41 5.07307 143.525 5.76275C143.651 6.5131 143.722 7.27156 143.737 8.03208C143.74 8.37264 143.74 8.73846 143.74 9.10259C143.75 9.55355 143.75 9.98274 143.75 10.4155V35.5833C143.75 36.0201 143.75 36.4464 143.74 36.8762C143.74 37.2673 143.74 37.6255 143.735 37.9943C143.721 38.7413 143.651 39.4862 143.527 40.2232C143.413 40.9219 143.191 41.5993 142.869 42.2314C142.547 42.8476 142.13 43.41 141.631 43.8978C141.133 44.3954 140.557 44.8106 139.925 45.1274C139.284 45.4473 138.599 45.6702 137.891 45.7886C137.138 45.91 136.376 45.9756 135.613 45.9847C135.248 45.9931 134.883 45.9974 134.519 45.9976L133.197 46L9.2305 45.9977Z" fill="black"/>
                                   <path d="M31.5111 22.2613C31.5234 21.3164 31.7778 20.3899 32.2506 19.568C32.7234 18.7461 33.3992 18.0556 34.2151 17.5606C33.6968 16.8302 33.013 16.2291 32.218 15.8051C31.423 15.381 30.5387 15.1457 29.6354 15.1178C27.7084 14.9182 25.8404 16.2554 24.8584 16.2554C23.8576 16.2554 22.3457 15.1376 20.7178 15.1707C19.6648 15.2042 18.6385 15.5063 17.739 16.0475C16.8395 16.5887 16.0974 17.3506 15.5851 18.2589C13.3658 22.0499 15.0212 27.6213 17.1472 30.6855C18.2108 32.1861 19.4537 33.8621 21.0803 33.8027C22.6719 33.7376 23.2663 32.8013 25.1876 32.8013C27.0911 32.8013 27.6488 33.8027 29.3083 33.7649C31.0162 33.7376 32.0922 32.2578 33.1185 30.743C33.8827 29.6739 34.4707 28.4922 34.8608 27.2419C33.8686 26.8278 33.0218 26.1347 32.4262 25.249C31.8305 24.3634 31.5122 23.3243 31.5111 22.2613ZM28.3766 13.1024C29.3078 11.9995 29.7666 10.5819 29.6555 9.15056C28.2328 9.29799 26.9186 9.96885 25.9748 11.0295C25.5133 11.5476 25.1599 12.1504 24.9347 12.8034C24.7095 13.4564 24.617 14.1468 24.6624 14.8351C25.374 14.8423 26.078 14.6902 26.7214 14.39C27.3647 14.0899 27.9307 13.6497 28.3766 13.1024ZM51.6305 30.0041H46.1989L44.8946 33.804H42.5939L47.7386 19.745H50.1289L55.2735 33.804H52.9337L51.6305 30.0041ZM46.7614 28.2505H51.0668L48.9444 22.0835H48.885L46.7614 28.2505ZM66.3842 28.6796C66.3842 31.8648 64.6562 33.9113 62.0486 33.9113C61.3881 33.9454 60.7311 33.7952 60.153 33.4781C59.5749 33.1609 59.099 32.6896 58.7798 32.1179H58.7304V37.1949H56.598V23.5539H58.6622V25.2588H58.7014C59.0353 24.6899 59.5192 24.221 60.1017 23.9019C60.6842 23.5828 61.3435 23.4255 62.0094 23.4467C64.6461 23.4467 66.3842 25.5031 66.3842 28.6795V28.6796ZM64.1923 28.6796C64.1923 26.6044 63.1054 25.24 61.4469 25.24C59.8175 25.24 58.7216 26.633 58.7216 28.6795C58.7216 30.7449 59.8175 32.128 61.4469 32.128C63.1054 32.128 64.1923 30.7736 64.1923 28.6795V28.6796ZM77.8187 28.6796C77.8187 31.8648 76.0908 33.9113 73.4831 33.9113C72.8226 33.9453 72.1657 33.7952 71.5876 33.4781C71.0095 33.1609 70.5336 32.6895 70.2144 32.1179H70.1651V37.1949H68.0326V23.5539H70.0967V25.2588H70.1359C70.4698 24.6899 70.9537 24.221 71.5362 23.9019C72.1187 23.5828 72.778 23.4255 73.4439 23.4467C76.0807 23.4467 77.8187 25.5031 77.8187 28.6795V28.6796ZM75.6269 28.6796C75.6269 26.6044 74.5399 25.24 72.8814 25.24C71.252 25.24 70.1561 26.633 70.1561 28.6795C70.1561 30.7449 71.252 32.128 72.8814 32.128C74.5399 32.128 75.6269 30.7736 75.6269 28.6795V28.6796ZM85.3761 29.8869C85.5341 31.281 86.9068 32.1965 88.7826 32.1965C90.58 32.1965 91.8733 31.281 91.8733 30.0239C91.8733 28.9326 91.0933 28.2793 89.2467 27.8315L87.3998 27.3926C84.7833 26.769 83.5685 25.5616 83.5685 23.6025C83.5685 21.1767 85.7111 19.5106 88.7535 19.5106C91.7645 19.5106 93.8287 21.1767 93.8981 23.6025H91.7454C91.6166 22.1995 90.4411 21.3525 88.7232 21.3525C87.0054 21.3525 85.8299 22.2095 85.8299 23.4565C85.8299 24.4506 86.5807 25.0354 88.4173 25.4831L89.9872 25.8635C92.9108 26.5456 94.1257 27.7044 94.1257 29.7607C94.1257 32.391 92.0021 34.0384 88.6246 34.0384C85.4644 34.0384 83.3309 32.4296 83.1931 29.8868L85.3761 29.8869ZM98.7279 21.1283V23.5539H100.704V25.2201H98.7279V30.8709C98.7279 31.7487 99.1234 32.1578 99.992 32.1578C100.226 32.1537 100.461 32.1375 100.693 32.1091V33.7654C100.303 33.8374 99.9061 33.8699 99.509 33.8626C97.4056 33.8626 96.5853 33.0832 96.5853 31.0953V25.2201H95.0747V23.5539H96.5853V21.1283H98.7279ZM101.848 28.6796C101.848 25.4544 103.773 23.4279 106.775 23.4279C109.787 23.4279 111.703 25.4544 111.703 28.6796C111.703 31.9135 109.797 33.9312 106.775 33.9312C103.754 33.9312 101.848 31.9135 101.848 28.6796ZM109.53 28.6796C109.53 26.4673 108.503 25.1614 106.775 25.1614C105.047 25.1614 104.02 26.4771 104.02 28.6796C104.02 30.9008 105.047 32.1965 106.775 32.1965C108.503 32.1965 109.53 30.9008 109.53 28.6796ZM113.461 23.5539H115.495V25.2985H115.545C115.682 24.7536 116.006 24.2721 116.461 23.9349C116.916 23.5976 117.475 23.4252 118.044 23.4467C118.289 23.4458 118.535 23.4721 118.774 23.5251V25.4932C118.464 25.3996 118.14 25.3567 117.816 25.366C117.506 25.3536 117.197 25.4075 116.911 25.524C116.624 25.6405 116.366 25.8168 116.155 26.0408C115.944 26.2649 115.785 26.5313 115.688 26.8219C115.591 27.1125 115.559 27.4203 115.594 27.7243V33.804H113.461V23.5539ZM128.606 30.7934C128.319 32.6542 126.483 33.9312 124.133 33.9312C121.111 33.9312 119.235 31.9334 119.235 28.7282C119.235 25.5131 121.121 23.4279 124.043 23.4279C126.918 23.4279 128.725 25.376 128.725 28.4838V29.2047H121.387V29.3318C121.354 29.7091 121.401 30.0891 121.528 30.4467C121.654 30.8042 121.856 31.1312 122.121 31.4058C122.385 31.6804 122.706 31.8964 123.061 32.0394C123.416 32.1824 123.799 32.2491 124.182 32.2352C124.686 32.2818 125.192 32.1667 125.624 31.9069C126.056 31.6471 126.392 31.2566 126.581 30.7934H128.606ZM121.398 27.7342H126.591C126.611 27.3951 126.558 27.0556 126.438 26.7372C126.318 26.4189 126.133 26.1284 125.893 25.8841C125.654 25.6398 125.366 25.447 125.048 25.3177C124.73 25.1884 124.387 25.1254 124.043 25.1327C123.696 25.1306 123.352 25.1965 123.03 25.3264C122.709 25.4563 122.417 25.6477 122.171 25.8896C121.925 26.1315 121.73 26.419 121.597 26.7356C121.465 27.0522 121.397 27.3916 121.398 27.7342ZM46.4942 9.16268C46.9413 9.13102 47.3899 9.19765 47.8077 9.35778C48.2256 9.5179 48.6021 9.76753 48.9103 10.0886C49.2185 10.4098 49.4507 10.7944 49.59 11.2147C49.7293 11.6351 49.7723 12.0807 49.7159 12.5194C49.7159 14.6775 48.5336 15.9181 46.4942 15.9181H44.021V9.16256L46.4942 9.16268ZM45.0845 14.9627H46.3754C46.6949 14.9815 47.0146 14.9298 47.3112 14.8114C47.6079 14.6929 47.8741 14.5107 48.0903 14.278C48.3066 14.0452 48.4676 13.7679 48.5615 13.466C48.6555 13.1642 48.68 12.8455 48.6333 12.5331C48.6766 12.2219 48.6496 11.9052 48.5542 11.6056C48.4589 11.3059 48.2975 11.0308 48.0817 10.7999C47.8659 10.5691 47.601 10.3881 47.306 10.2701C47.0111 10.1521 46.6933 10.0999 46.3754 10.1173H45.0845V14.9627ZM50.9172 13.3668C50.8847 13.0318 50.9235 12.6938 51.0312 12.3744C51.1389 12.0551 51.313 11.7614 51.5425 11.5124C51.7719 11.2633 52.0515 11.0643 52.3635 10.9282C52.6754 10.792 53.0128 10.7216 53.3539 10.7216C53.695 10.7216 54.0323 10.792 54.3443 10.9282C54.6562 11.0643 54.9359 11.2633 55.1653 11.5124C55.3947 11.7614 55.5689 12.0551 55.6766 12.3744C55.7842 12.6938 55.8231 13.0318 55.7906 13.3668C55.8238 13.7022 55.7855 14.0408 55.6781 14.3607C55.5708 14.6807 55.3968 14.9749 55.1673 15.2245C54.9378 15.4741 54.6579 15.6736 54.3456 15.8101C54.0333 15.9466 53.6955 16.0171 53.3539 16.0171C53.0123 16.0171 52.6745 15.9466 52.3622 15.8101C52.0499 15.6736 51.77 15.4741 51.5405 15.2245C51.311 14.9749 51.137 14.6807 51.0297 14.3607C50.9223 14.0408 50.884 13.7022 50.9172 13.3668ZM54.7418 13.3668C54.7418 12.2617 54.2386 11.6155 53.3556 11.6155C52.4692 11.6155 51.9706 12.2617 51.9706 13.3668C51.9706 14.4807 52.4693 15.122 53.3556 15.122C54.2386 15.122 54.7418 14.4763 54.7418 13.3668ZM62.2688 15.918H61.2109L60.143 12.1633H60.0623L58.999 15.918H57.9512L56.5269 10.8199H57.5612L58.4868 14.71H58.563L59.6254 10.8199H60.6036L61.666 14.71H61.7466L62.6677 10.8199H63.6875L62.2688 15.918ZM64.8853 10.82H65.867V11.6299H65.9432C66.0725 11.339 66.2905 11.0951 66.5669 10.9323C66.8433 10.7695 67.1643 10.6958 67.4852 10.7215C67.7366 10.7029 67.9891 10.7403 68.2238 10.831C68.4586 10.9217 68.6697 11.0633 68.8415 11.2454C69.0132 11.4275 69.1412 11.6454 69.2161 11.8829C69.2909 12.1205 69.3106 12.3716 69.2737 12.6177V15.9179H68.2539V12.8704C68.2539 12.0511 67.893 11.6437 67.1389 11.6437C66.9682 11.6358 66.7978 11.6645 66.6394 11.7277C66.481 11.7909 66.3383 11.8872 66.2211 12.0099C66.1039 12.1326 66.015 12.2788 65.9605 12.4386C65.9059 12.5984 65.8871 12.7679 65.9051 12.9356V15.918H64.8853V10.82ZM70.8985 8.82983H71.9182V15.918H70.8985V8.82983ZM73.3358 13.3668C73.3033 13.0317 73.3421 12.6937 73.4498 12.3743C73.5575 12.0549 73.7317 11.7612 73.9612 11.5121C74.1906 11.263 74.4703 11.064 74.7823 10.9278C75.0943 10.7916 75.4317 10.7213 75.7728 10.7213C76.114 10.7213 76.4514 10.7916 76.7634 10.9278C77.0754 11.064 77.3551 11.263 77.5845 11.5121C77.814 11.7612 77.9881 12.0549 78.0958 12.3743C78.2035 12.6937 78.2424 13.0317 78.2099 13.3668C78.2429 13.7022 78.2044 14.0406 78.097 14.3605C77.9896 14.6803 77.8155 14.9744 77.586 15.2239C77.3565 15.4734 77.0766 15.6728 76.7643 15.8093C76.4521 15.9457 76.1143 16.0162 75.7728 16.0162C75.4313 16.0162 75.0936 15.9457 74.7813 15.8093C74.4691 15.6728 74.1892 15.4734 73.9597 15.2239C73.7302 14.9744 73.5561 14.6803 73.4487 14.3605C73.3412 14.0406 73.3028 13.7022 73.3358 13.3668ZM77.1604 13.3668C77.1604 12.2617 76.6572 11.6155 75.7742 11.6155C74.8878 11.6155 74.3892 12.2617 74.3892 13.3668C74.3892 14.4807 74.8879 15.122 75.7742 15.122C76.6572 15.122 77.1604 14.4763 77.1604 13.3668ZM79.2833 14.4763C79.2833 13.5586 79.9759 13.0295 81.2052 12.9544L82.6048 12.8748V12.4347C82.6048 11.8963 82.244 11.5923 81.547 11.5923C80.9777 11.5923 80.5832 11.7984 80.4701 12.1589H79.4828C79.587 11.2832 80.4219 10.7216 81.594 10.7216C82.8894 10.7216 83.6201 11.3579 83.6201 12.4347V15.918H82.6384V15.2016H82.5577C82.394 15.4585 82.164 15.668 81.8913 15.8087C81.6187 15.9493 81.3131 16.016 81.0057 16.002C80.7888 16.0243 80.5696 16.0014 80.3622 15.935C80.1547 15.8685 79.9637 15.7599 79.8015 15.6162C79.6392 15.4724 79.5093 15.2967 79.42 15.1004C79.3308 14.9041 79.2842 14.6915 79.2833 14.4763ZM82.6048 14.0407V13.6144L81.343 13.694C80.6314 13.741 80.3086 13.9799 80.3086 14.4292C80.3086 14.8881 80.7121 15.1551 81.2668 15.1551C81.4293 15.1714 81.5935 15.1552 81.7496 15.1075C81.9057 15.0599 82.0504 14.9817 82.1752 14.8778C82.3001 14.7738 82.4024 14.6461 82.4762 14.5023C82.55 14.3585 82.5937 14.2015 82.6048 14.0407ZM84.9603 13.3668C84.9603 11.7559 85.7996 10.7355 87.1051 10.7355C87.428 10.7208 87.7485 10.7971 88.0291 10.9555C88.3097 11.1138 88.5388 11.3478 88.6897 11.6299H88.7658V8.82971H89.7855V15.9179H88.8084V15.1124H88.7278C88.5653 15.3926 88.3282 15.6236 88.0422 15.7804C87.7562 15.9372 87.4322 16.0138 87.1052 16.0019C85.7906 16.0019 84.9603 14.9814 84.9603 13.3667V13.3668ZM86.0137 13.3668C86.0137 14.448 86.5303 15.0988 87.3941 15.0988C88.2536 15.0988 88.7849 14.4387 88.7849 13.3711C88.7849 12.3087 88.2481 11.6393 87.3941 11.6393C86.5358 11.6393 86.0137 12.2943 86.0137 13.3668ZM94.0046 13.3668C93.9721 13.0318 94.0109 12.6938 94.1186 12.3744C94.2263 12.0551 94.4004 11.7614 94.6299 11.5124C94.8593 11.2633 95.1389 11.0643 95.4509 10.9282C95.7628 10.792 96.1002 10.7216 96.4413 10.7216C96.7824 10.7216 97.1198 10.792 97.4317 10.9282C97.7436 11.0643 98.0233 11.2633 98.2527 11.5124C98.4822 11.7614 98.6563 12.0551 98.764 12.3744C98.8716 12.6938 98.9105 13.0318 98.878 13.3668C98.9112 13.7022 98.8729 14.0408 98.7655 14.3607C98.6582 14.6807 98.4842 14.9749 98.2547 15.2245C98.0252 15.4741 97.7453 15.6736 97.433 15.8101C97.1207 15.9466 96.7829 16.0171 96.4413 16.0171C96.0997 16.0171 95.7619 15.9466 95.4496 15.8101C95.1373 15.6736 94.8574 15.4741 94.6279 15.2245C94.3984 14.9749 94.2244 14.6807 94.1171 14.3607C94.0097 14.0408 93.9714 13.7022 94.0046 13.3668ZM97.8292 13.3668C97.8292 12.2617 97.326 11.6155 96.443 11.6155C95.5566 11.6155 95.058 12.2617 95.058 13.3668C95.058 14.4807 95.5567 15.122 96.443 15.122C97.326 15.122 97.8292 14.4763 97.8292 13.3668ZM100.246 10.82H101.228V11.6299H101.304C101.433 11.339 101.651 11.0951 101.928 10.9323C102.204 10.7695 102.525 10.6958 102.846 10.7215C103.098 10.7029 103.35 10.7403 103.585 10.831C103.82 10.9217 104.031 11.0633 104.202 11.2454C104.374 11.4275 104.502 11.6454 104.577 11.8829C104.652 12.1205 104.671 12.3716 104.635 12.6177V15.9179H103.615V12.8704C103.615 12.0511 103.254 11.6437 102.5 11.6437C102.329 11.6358 102.159 11.6645 102 11.7277C101.842 11.7909 101.699 11.8872 101.582 12.0099C101.465 12.1326 101.376 12.2788 101.321 12.4386C101.267 12.5984 101.248 12.7679 101.266 12.9356V15.918H100.246L100.246 10.82ZM110.397 9.55078V10.8432H111.516V11.6907H110.397V14.312C110.397 14.8461 110.62 15.08 111.127 15.08C111.257 15.0795 111.387 15.0717 111.516 15.0567V15.8948C111.333 15.9271 111.147 15.9443 110.961 15.9462C109.827 15.9462 109.376 15.5525 109.376 14.5697V11.6907H108.556V10.8431H109.376V9.55089L110.397 9.55078ZM112.909 8.82983H113.92V11.6393H114.001C114.136 11.3457 114.36 11.1004 114.642 10.937C114.924 10.7736 115.25 10.6999 115.576 10.726C115.826 10.7125 116.076 10.7537 116.308 10.8466C116.54 10.9395 116.749 11.0818 116.919 11.2633C117.089 11.4449 117.216 11.6612 117.292 11.8968C117.367 12.1325 117.389 12.3817 117.356 12.6266V15.918H116.335V12.8748C116.335 12.0604 115.95 11.6481 115.23 11.6481C115.055 11.6339 114.878 11.6577 114.713 11.7178C114.548 11.7778 114.399 11.8727 114.275 11.9958C114.151 12.1189 114.056 12.2673 113.996 12.4305C113.936 12.5936 113.913 12.7677 113.929 12.9405V15.918H112.909V8.82983ZM123.301 14.5414C123.163 15.0074 122.863 15.4104 122.453 15.68C122.044 15.9497 121.552 16.0687 121.062 16.0164C120.722 16.0252 120.384 15.9609 120.071 15.8279C119.758 15.6948 119.479 15.4962 119.252 15.2458C119.025 14.9955 118.855 14.6994 118.756 14.378C118.656 14.0567 118.629 13.7179 118.676 13.385C118.63 13.0512 118.658 12.7116 118.757 12.3893C118.857 12.067 119.025 11.7695 119.251 11.5169C119.477 11.2643 119.755 11.0626 120.067 10.9254C120.379 10.7882 120.717 10.7186 121.058 10.7215C122.496 10.7215 123.363 11.6907 123.363 13.2915V13.6426H119.714V13.699C119.698 13.8861 119.722 14.0744 119.784 14.2518C119.847 14.4293 119.946 14.592 120.075 14.7295C120.205 14.867 120.362 14.9763 120.537 15.0503C120.712 15.1244 120.9 15.1615 121.091 15.1595C121.334 15.1884 121.582 15.145 121.8 15.035C122.019 14.9249 122.2 14.7531 122.32 14.5414H123.301ZM119.714 12.8985H122.324C122.337 12.7274 122.314 12.5556 122.255 12.394C122.197 12.2324 122.105 12.0847 121.985 11.9603C121.865 11.836 121.72 11.7377 121.56 11.6718C121.399 11.606 121.226 11.574 121.052 11.5779C120.876 11.5757 120.701 11.6084 120.538 11.674C120.374 11.7396 120.226 11.8368 120.101 11.9599C119.976 12.0829 119.878 12.2294 119.812 12.3906C119.745 12.5518 119.712 12.7245 119.714 12.8985Z" fill="white"/>
                               </svg>

                               <svg width="145" height="47" viewBox="0 0 145 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M9.30709 46.3793C8.93256 46.3793 8.56712 46.3746 8.19554 46.3664C7.42583 46.3565 6.65791 46.2905 5.89808 46.1687C5.18959 46.0483 4.50325 45.8244 3.86171 45.5043C3.22603 45.1868 2.64624 44.7706 2.14455 44.2716C1.63555 43.7784 1.21179 43.2065 0.890047 42.5783C0.564795 41.9461 0.3397 41.2684 0.222604 40.5689C0.0961928 39.8173 0.0278178 39.0573 0.0180689 38.2954C0.0102022 38.0397 0 37.1884 0 37.1884V9.17811C0 9.17811 0.0108168 8.33977 0.0180689 8.09339C0.0274346 7.33277 0.0954404 6.57397 0.221498 5.82353C0.338824 5.12211 0.56411 4.44248 0.889556 3.80819C1.21006 3.18046 1.63142 2.60803 2.13729 2.11307C2.64263 1.61342 3.2243 1.19507 3.86109 0.873263C4.50117 0.554244 5.18622 0.33193 5.89329 0.213769C6.65562 0.090843 7.42622 0.0244127 8.19861 0.0150353L9.3077 0H135.629L136.751 0.0153991C137.516 0.0243691 138.28 0.0902751 139.035 0.212556C139.75 0.332233 140.442 0.556136 141.089 0.876901C142.365 1.5254 143.403 2.55141 144.058 3.8111C144.378 4.44105 144.6 5.11516 144.715 5.81056C144.843 6.56713 144.914 7.33189 144.929 8.09872C144.933 8.44211 144.933 8.81096 144.933 9.17811C144.943 9.63281 144.943 10.0656 144.943 10.502V35.8785C144.943 36.319 144.943 36.7488 144.933 37.1822C144.933 37.5765 144.933 37.9377 144.928 38.3095C144.913 39.0627 144.843 39.8138 144.718 40.5569C144.603 41.2615 144.379 41.9444 144.054 42.5818C143.73 43.2031 143.309 43.7702 142.806 44.262C142.304 44.7637 141.723 45.1824 141.086 45.5018C140.44 45.8244 139.749 46.0491 139.035 46.1685C138.276 46.2909 137.508 46.357 136.738 46.3662C136.37 46.3747 136.002 46.3791 135.635 46.3792L134.302 46.3816L9.30709 46.3793Z" fill="black"/>
                                   <g clip-path="url(#clip0_1983_239)">
                                       <path d="M32.9641 28.2287C36.148 26.5037 38.562 25.1894 38.77 25.0873C39.4354 24.738 40.1228 23.8137 38.77 23.0959C38.3332 22.8702 35.9814 21.5966 32.9641 19.9545L28.7814 24.1222L32.9638 28.2287H32.9641Z" fill="#FFD900"/>
                                       <path d="M28.7875 24.1216L15.4689 37.3655C15.7813 37.4064 16.1343 37.3246 16.5506 37.0988C17.4242 36.6272 26.685 31.6371 32.9704 28.229L28.7875 24.1216Z" fill="#F43249"/>
                                       <path d="M28.7631 24.122L32.9455 19.9745C32.9455 19.9745 17.4629 11.6379 16.5259 11.146C16.1734 10.9392 15.7779 10.8781 15.424 10.9392L28.7631 24.1217V24.122Z" fill="#00EE76"/>
                                       <path d="M28.7759 24.1238L15.4366 10.9413C14.8952 11.0647 14.4377 11.5366 14.4377 12.5013V35.807C14.4377 36.6905 14.7918 37.3268 15.4571 37.3879L28.7757 24.1236L28.7759 24.1238Z" fill="#00D3FF"/>
                                       <path d="M72.2871 20.3516C69.894 20.3516 67.9168 22.1787 67.9168 24.6838C67.9168 27.1686 69.8733 29.0161 72.2873 29.0161C74.7011 29.0161 76.6573 27.189 76.6573 24.6838C76.6573 22.1787 74.7011 20.3516 72.2871 20.3516ZM72.2871 27.2922C70.9757 27.2922 69.8318 26.2036 69.8318 24.6645C69.8318 23.104 70.9766 22.0368 72.2871 22.0368C73.5975 22.0368 74.7423 23.104 74.7423 24.6645C74.7423 26.2036 73.5975 27.2922 72.2871 27.2922ZM62.7766 20.3516C60.3626 20.3516 58.4061 22.1787 58.4061 24.6838C58.4061 27.1686 60.3626 29.0161 62.7766 29.0161C65.1904 29.0161 67.1469 27.189 67.1469 24.6838C67.1469 22.1787 65.1904 20.3516 62.7764 20.3516H62.7766ZM62.7766 27.2922C61.465 27.2922 60.3214 26.2036 60.3214 24.6645C60.3214 23.104 61.4662 22.0368 62.7766 22.0368C64.088 22.0368 65.2319 23.104 65.2319 24.6645C65.2319 26.2036 64.1076 27.2922 62.7766 27.2922ZM51.4763 21.6863V23.5134H55.8878C55.7624 24.54 55.4097 25.2996 54.889 25.8133C54.2442 26.4496 53.2452 27.1481 51.4763 27.1481C48.7496 27.1481 46.6485 24.9718 46.6485 22.2819C46.6485 19.5919 48.7508 17.3745 51.4763 17.3745C52.9533 17.3745 54.0154 17.9496 54.8061 18.689L56.1165 17.395C55.0132 16.3482 53.5362 15.5476 51.4763 15.5476C47.7507 15.5476 44.6289 18.5654 44.6289 22.241C44.6289 25.9168 47.7507 28.9345 51.4763 28.9345C53.4947 28.9345 54.9936 28.2778 56.2004 27.0451C57.4281 25.8338 57.8028 24.1292 57.8028 22.7538C57.8028 22.3228 57.7615 21.9325 57.6984 21.6038L51.4763 21.6863ZM97.7178 23.1029C97.3637 22.1378 96.2406 20.3516 93.9922 20.3516C91.7441 20.3516 89.8922 22.0971 89.8922 24.6838C89.8922 27.1063 91.7441 29.0161 94.2005 29.0161C96.1982 29.0161 97.343 27.8048 97.8213 27.1063L96.3442 26.1209C95.8443 26.8399 95.1787 27.3115 94.2005 27.3115C93.2222 27.3115 92.5359 26.8806 92.0982 25.9972L97.9042 23.5953L97.7178 23.1029ZM91.8072 24.5613C91.766 22.8977 93.1188 22.0357 94.0752 22.0357C94.8453 22.0357 95.4697 22.4053 95.6982 22.9599L91.8072 24.5613ZM87.0831 28.729H88.9981V16.0397H87.0831V28.729ZM83.9622 21.3167H83.9C83.4632 20.803 82.6518 20.3516 81.6104 20.3516C79.4252 20.3516 77.4482 22.2614 77.4482 24.6838C77.4482 27.1063 79.4459 28.9959 81.6104 28.9959C82.6506 28.9959 83.4623 28.5442 83.9 28.0101H83.9622V28.6261C83.9622 30.2897 83.0667 31.1719 81.6312 31.1719C80.4656 31.1719 79.7369 30.3304 79.4459 29.6319L77.7816 30.3304C78.2597 31.4804 79.5298 32.897 81.6312 32.897C83.8784 32.897 85.7726 31.5827 85.7726 28.4004V20.6182H83.9622V21.3167ZM81.777 27.2922C80.4656 27.2922 79.3632 26.2036 79.3632 24.685C79.3632 23.1663 80.4665 22.0571 81.777 22.0571C83.0679 22.0571 84.1081 23.1663 84.1081 24.685C84.1072 26.1832 83.0667 27.2922 81.777 27.2922ZM106.646 16.04H102.067V28.729H103.982V23.924H106.646C108.769 23.924 110.849 22.4042 110.849 19.982C110.849 17.5595 108.769 16.0397 106.646 16.0397V16.04ZM106.708 22.1593H104.002V17.8055H106.708C108.123 17.8055 108.955 18.9759 108.955 19.9817C108.935 20.9673 108.124 22.1593 106.708 22.1593ZM118.487 20.3311C117.114 20.3311 115.678 20.9267 115.095 22.2819L116.781 22.9804C117.156 22.2819 117.822 22.0562 118.53 22.0562C119.529 22.0562 120.527 22.6515 120.548 23.6982V23.8219C120.194 23.6166 119.466 23.3286 118.55 23.3286C116.719 23.3286 114.866 24.3347 114.866 26.1832C114.866 27.8875 116.365 28.9754 118.03 28.9754C119.32 28.9754 120.028 28.4004 120.464 27.7232H120.527V28.7088H122.378V23.8421C122.358 21.6045 120.672 20.3309 118.487 20.3309V20.3311ZM118.259 27.2718C117.634 27.2718 116.76 26.9633 116.76 26.2045C116.76 25.2189 117.841 24.8493 118.778 24.8493C119.61 24.8493 120.006 25.0341 120.527 25.2803C120.381 26.4507 119.361 27.2718 118.259 27.2718ZM129.059 20.6193L126.874 26.1013H126.812L124.544 20.6191H122.484L125.896 28.2981L123.961 32.5896H125.958L131.182 20.6191H129.059L129.059 20.6193ZM111.911 28.729H113.826V16.0397H111.911V28.729Z" fill="white"/>
                                   </g>
                                   <defs>
                                       <clipPath id="clip0_1983_239">
                                           <rect width="116.667" height="26.0746" fill="white" transform="translate(14.4377 10.7318)"/>
                                       </clipPath>
                                   </defs>
                               </svg>
                           </div>
                       </section>
                   </main>
                   <div className="Adres">
                       <h3 className={'Ad-white ad'}>Адреса</h3>
                       <p className={'Ad-white'}>ЭлитСтрой</p>
                       <h5 className={'Ad-white h5'}>ул. Ден-Сяопина 18/1</h5>
                       <p className={'Ad-white'}>Баткен</p>
                       <h5 className={'Ad-white h5'}>ул. Льва-Толстого 19</h5>
                       <p className={'Ad-white'}>ТааТан</p>
                       <h5 className={'Ad-white h5'}>ул. Лермонтова 6</h5>
                   </div>
                   <div className="Adres">
                       <h3 className={'Ad-white ad'}>Компания</h3>
                       <p className={'Ad-white'}>Каталог</p>
                       <p className={'Ad-white'}>Избранное</p>
                       <p className={'Ad-white'}>Личный кабинет</p>
                   </div>
                   <div className="Adres">
                       <h3 className={'Ad-white ad'}>Контакты</h3>
                       <div>
                           <p className={'Ad-white'}>Email:</p>
                       <h5 className={'Ad-white h5'}>iskender.kg@gmail.com</h5>
                       </div>
                       <p className={'Ad-white'}>Телефон:</p>
                       <h5 className={'Ad-white h5'}>+996 (500) 000-104</h5>
                       <h5 className={'Ad-white h5'}>+996 (997) 000-104</h5>
                       <h5 className={'Ad-white h5'}>+996 (222) 000-104</h5>
                       <svg className={'watssap'} width="125" height="29" viewBox="0 0 125 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <rect width="125" height="29" rx="14.5" fill="white"/>
                           <path d="M48.914 19H47.052L44.28 9.2H45.974L48.032 16.858L50.258 9.2H51.742L53.954 16.858L56.012 9.2H57.706L54.934 19H53.072L51 11.846L48.914 19ZM62.2769 11.818C63.0889 11.818 63.7376 12.0793 64.2229 12.602C64.7176 13.1153 64.9649 13.8153 64.9649 14.702V19H63.4529V14.856C63.4529 14.3333 63.3129 13.932 63.0329 13.652C62.7529 13.372 62.3702 13.232 61.8849 13.232C61.3342 13.232 60.9002 13.4047 60.5829 13.75C60.2656 14.086 60.1069 14.5853 60.1069 15.248V19H58.5949V9.2H60.1069V12.896C60.5736 12.1773 61.2969 11.818 62.2769 11.818ZM72.1369 12.994V12H73.6489V19H72.1369V17.992C71.5676 18.7853 70.7509 19.182 69.6869 19.182C68.7256 19.182 67.9043 18.8273 67.2229 18.118C66.5416 17.4087 66.2009 16.536 66.2009 15.5C66.2009 14.464 66.5416 13.5913 67.2229 12.882C67.9043 12.1727 68.7256 11.818 69.6869 11.818C70.7509 11.818 71.5676 12.21 72.1369 12.994ZM68.3429 17.11C68.7629 17.53 69.2903 17.74 69.9249 17.74C70.5596 17.74 71.0869 17.53 71.5069 17.11C71.9269 16.6807 72.1369 16.144 72.1369 15.5C72.1369 14.856 71.9269 14.324 71.5069 13.904C71.0869 13.4747 70.5596 13.26 69.9249 13.26C69.2903 13.26 68.7629 13.4747 68.3429 13.904C67.9229 14.324 67.7129 14.856 67.7129 15.5C67.7129 16.1347 67.9229 16.6713 68.3429 17.11ZM79.3173 12V13.456H77.5813V16.816C77.5813 17.1053 77.6466 17.3153 77.7773 17.446C77.908 17.5673 78.0993 17.6373 78.3513 17.656C78.6126 17.6653 78.9346 17.6607 79.3173 17.642V19C78.16 19.14 77.3293 19.042 76.8253 18.706C76.3213 18.3607 76.0693 17.7307 76.0693 16.816V13.456H74.7813V12H76.0693V10.488L77.5813 10.04V12H79.3173ZM81.7869 13.932C81.7869 14.1467 81.8989 14.324 82.1229 14.464C82.3469 14.5947 82.6735 14.7207 83.1029 14.842C83.4295 14.9167 83.7142 14.996 83.9569 15.08C84.1995 15.164 84.4562 15.29 84.7269 15.458C84.9975 15.6167 85.2029 15.8313 85.3429 16.102C85.4922 16.3633 85.5622 16.6713 85.5529 17.026C85.5529 17.698 85.2915 18.2253 84.7689 18.608C84.2462 18.9907 83.5975 19.182 82.8229 19.182C82.1322 19.182 81.5395 19.0373 81.0449 18.748C80.5502 18.4587 80.1909 18.0573 79.9669 17.544L81.2689 16.788C81.5022 17.46 82.0202 17.796 82.8229 17.796C83.6162 17.796 84.0129 17.5347 84.0129 17.012C84.0129 16.6293 83.5695 16.3307 82.6829 16.116C82.3469 16.032 82.0622 15.948 81.8289 15.864C81.6049 15.78 81.3529 15.6587 81.0729 15.5C80.8022 15.3413 80.5922 15.1313 80.4429 14.87C80.3029 14.6087 80.2375 14.3053 80.2469 13.96C80.2469 13.316 80.4895 12.798 80.9749 12.406C81.4695 12.014 82.0809 11.818 82.8089 11.818C83.3875 11.818 83.9009 11.9487 84.3489 12.21C84.8062 12.462 85.1562 12.8167 85.3989 13.274L84.1249 13.988C83.8915 13.456 83.4529 13.19 82.8089 13.19C82.5102 13.19 82.2629 13.2553 82.0669 13.386C81.8802 13.5167 81.7869 13.6987 81.7869 13.932ZM95.1 19H93.364L92.678 17.026H88.506L87.82 19H86.07L89.626 9.2H91.558L95.1 19ZM90.592 11.09L89.038 15.514H92.146L90.592 11.09ZM100.018 11.818C100.97 11.818 101.791 12.1773 102.482 12.896C103.163 13.6053 103.504 14.4733 103.504 15.5C103.504 16.536 103.163 17.4087 102.482 18.118C101.8 18.8273 100.979 19.182 100.018 19.182C98.9632 19.182 98.1465 18.79 97.5678 18.006V21.8H96.0558V12H97.5678V13.008C98.1372 12.2147 98.9538 11.818 100.018 11.818ZM98.1978 17.11C98.6178 17.53 99.1452 17.74 99.7798 17.74C100.414 17.74 100.942 17.53 101.362 17.11C101.782 16.6807 101.992 16.144 101.992 15.5C101.992 14.856 101.782 14.324 101.362 13.904C100.942 13.4747 100.414 13.26 99.7798 13.26C99.1452 13.26 98.6178 13.4747 98.1978 13.904C97.7778 14.324 97.5678 14.856 97.5678 15.5C97.5678 16.1347 97.7778 16.6713 98.1978 17.11ZM108.836 11.818C109.788 11.818 110.61 12.1773 111.3 12.896C111.982 13.6053 112.322 14.4733 112.322 15.5C112.322 16.536 111.982 17.4087 111.3 18.118C110.619 18.8273 109.798 19.182 108.836 19.182C107.782 19.182 106.965 18.79 106.386 18.006V21.8H104.874V12H106.386V13.008C106.956 12.2147 107.772 11.818 108.836 11.818ZM107.016 17.11C107.436 17.53 107.964 17.74 108.598 17.74C109.233 17.74 109.76 17.53 110.18 17.11C110.6 16.6807 110.81 16.144 110.81 15.5C110.81 14.856 110.6 14.324 110.18 13.904C109.76 13.4747 109.233 13.26 108.598 13.26C107.964 13.26 107.436 13.4747 107.016 13.904C106.596 14.324 106.386 14.856 106.386 15.5C106.386 16.1347 106.596 16.6713 107.016 17.11Z" fill="#2CB742"/>
                           <g clip-path="url(#clip0_1983_216)">
                               <path d="M14 23L15.462 18.6143C14.7202 17.3666 14.2931 15.9104 14.2931 14.3534C14.2931 9.74 18.0331 6 22.6466 6C27.26 6 31 9.74 31 14.3534C31 18.9669 27.26 22.7069 22.6466 22.7069C21.2429 22.7069 19.921 22.359 18.76 21.7476L14 23Z" fill="#2CB742"/>
                               <path d="M27.976 17.1336C27.5903 16.4046 26.1679 15.571 26.1679 15.571C25.8461 15.3876 25.4577 15.367 25.2742 15.6941C25.2742 15.6941 24.812 16.2484 24.6945 16.3281C24.1575 16.6919 23.6601 16.6778 23.158 16.1757L21.9912 15.0089L20.8243 13.842C20.3222 13.3399 20.3082 12.8425 20.6719 12.3056C20.7516 12.188 21.3059 11.7258 21.3059 11.7258C21.633 11.542 21.6125 11.154 21.429 10.8321C21.429 10.8321 20.5954 9.40971 19.8665 9.02398C19.5564 8.85985 19.1756 8.91729 18.9276 9.16526L18.4124 9.68054C16.7777 11.3152 17.5826 13.1606 19.2172 14.7952L20.7112 16.2891L22.2051 17.7831C23.8398 19.4177 25.6851 20.2226 27.3198 18.5879L27.8351 18.0727C28.083 17.8241 28.1402 17.4434 27.976 17.1336Z" fill="white"/>
                           </g>
                           <defs>
                               <clipPath id="clip0_1983_216">
                                   <rect width="17" height="17" fill="white" transform="translate(14 6)"/>
                               </clipPath>
                           </defs>
                       </svg>
                   </div>
               </div>
                <div className="footer-text">
                    <h5 className={'footer-h5'}>© 2023 Iskender.kg - Отечественный бренд сантехники</h5>
                    <div className={'masange'}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2.775C15 2.775 15.36 2.78625 16.5458 2.84025C17.2593 2.84867 17.9662 2.97984 18.6353 3.228C19.1237 3.40832 19.5656 3.69588 19.9283 4.0695C20.3019 4.43218 20.5894 4.87402 20.7698 5.3625C21.0179 6.0316 21.1491 6.73841 21.1575 7.452C21.2115 8.64 21.225 9 21.225 12C21.225 15 21.2138 15.36 21.1598 16.5458C21.1513 17.2593 21.0202 17.9662 20.772 18.6353C20.5847 19.1202 20.2981 19.5606 19.9305 19.9282C19.5629 20.2958 19.1225 20.5825 18.6375 20.7698C17.9684 21.0179 17.2616 21.1491 16.548 21.1575C15.3623 21.2115 15.006 21.2228 12.0023 21.2228C8.9985 21.2228 8.64225 21.2115 7.4565 21.1575C6.74291 21.1491 6.0361 21.0179 5.367 20.7698C4.87852 20.5894 4.43668 20.3019 4.074 19.9282C3.70038 19.5656 3.41282 19.1237 3.2325 18.6353C2.98434 17.9662 2.85317 17.2593 2.84475 16.5458C2.7885 15.36 2.775 15.0037 2.775 12C2.775 8.99625 2.78625 8.64 2.84025 7.45425C2.84867 6.74066 2.97984 6.03385 3.228 5.36475C3.40898 4.87606 3.69731 4.4342 4.07175 4.07175C4.43443 3.69813 4.87627 3.41057 5.36475 3.23025C6.03385 2.98209 6.74066 2.85092 7.45425 2.8425C8.64 2.7885 9 2.775 12 2.775ZM12 0.75C8.9445 0.75 8.56125 0.76275 7.362 0.8175C6.42842 0.83728 5.5049 1.01478 4.6305 1.3425C3.88032 1.62483 3.20059 2.06707 2.6385 2.6385C2.06626 3.20037 1.62324 3.88012 1.34025 4.6305C1.01253 5.5049 0.83503 6.42842 0.81525 7.362C0.76275 8.56125 0.75 8.9445 0.75 12C0.75 15.0555 0.76275 15.4388 0.8175 16.638C0.83728 17.5716 1.01478 18.4951 1.3425 19.3695C1.62549 20.1199 2.06851 20.7996 2.64075 21.3615C3.20262 21.9337 3.88237 22.3768 4.63275 22.6597C5.50715 22.9875 6.43067 23.165 7.36425 23.1847C8.56425 23.2395 8.94675 23.2523 12.0023 23.2523C15.0578 23.2523 15.441 23.2395 16.6403 23.1847C17.5738 23.165 18.4974 22.9875 19.3718 22.6597C20.1188 22.3702 20.7972 21.928 21.3638 21.3615C21.9303 20.795 22.3724 20.1165 22.662 19.3695C22.9897 18.4951 23.1672 17.5716 23.187 16.638C23.2418 15.438 23.2545 15.0555 23.2545 12C23.2545 8.9445 23.2418 8.56125 23.187 7.362C23.1672 6.42842 22.9897 5.5049 22.662 4.6305C22.379 3.88012 21.936 3.20037 21.3638 2.6385C20.8019 2.06626 20.1221 1.62324 19.3718 1.34025C18.4974 1.01253 17.5738 0.83503 16.6403 0.81525C15.4388 0.76275 15.0555 0.75 12 0.75Z" fill="white"/>
                            <path d="M12 6.22498C10.8578 6.22498 9.74125 6.56367 8.79156 7.19824C7.84187 7.8328 7.10167 8.73474 6.66457 9.78998C6.22748 10.8452 6.11311 12.0064 6.33594 13.1266C6.55877 14.2469 7.10879 15.2759 7.91644 16.0835C8.72408 16.8912 9.75309 17.4412 10.8733 17.664C11.9936 17.8868 13.1547 17.7725 14.21 17.3354C15.2652 16.8983 16.1671 16.1581 16.8017 15.2084C17.4363 14.2587 17.775 13.1422 17.775 12C17.775 10.4684 17.1665 8.99946 16.0835 7.91643C15.0005 6.83341 13.5316 6.22498 12 6.22498ZM12 15.75C11.2583 15.75 10.5333 15.53 9.91659 15.118C9.29991 14.7059 8.81926 14.1203 8.53543 13.435C8.2516 12.7498 8.17734 11.9958 8.32203 11.2684C8.46673 10.541 8.82388 9.87277 9.34833 9.34833C9.87277 8.82388 10.541 8.46673 11.2684 8.32203C11.9958 8.17734 12.7498 8.2516 13.435 8.53543C14.1203 8.81926 14.7059 9.2999 15.118 9.91659C15.53 10.5333 15.75 11.2583 15.75 12C15.75 12.9945 15.3549 13.9484 14.6516 14.6516C13.9484 15.3549 12.9945 15.75 12 15.75Z" fill="white"/>
                            <path d="M18.0053 7.34478C18.7509 7.34478 19.3553 6.74036 19.3553 5.99478C19.3553 5.24919 18.7509 4.64478 18.0053 4.64478C17.2597 4.64478 16.6553 5.24919 16.6553 5.99478C16.6553 6.74036 17.2597 7.34478 18.0053 7.34478Z" fill="white"/>
                        </svg>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 12.0007C23.9996 9.7075 23.3422 7.46244 22.1056 5.53128C20.8689 3.60013 19.1048 2.06374 17.0221 1.10402C14.9394 0.144306 12.6254 -0.198561 10.3538 0.116016C8.08235 0.430592 5.94854 1.38944 4.20505 2.87904C2.46156 4.36864 1.18139 6.32662 0.516104 8.52117C-0.149185 10.7157 -0.171736 13.055 0.451122 15.2619C1.07398 17.4689 2.31616 19.4512 4.03061 20.9741C5.74506 22.4971 7.85999 23.4969 10.125 23.8552V15.4694H7.0785V12.0007H10.125V9.35693C10.125 6.34943 11.9167 4.68818 14.6572 4.68818C15.5573 4.70066 16.4551 4.77887 17.3438 4.92218V7.87568H15.8302C15.5723 7.84143 15.31 7.86565 15.0628 7.94656C14.8155 8.02746 14.5896 8.16297 14.4018 8.34305C14.214 8.52313 14.0691 8.74315 13.978 8.98682C13.8868 9.23049 13.8516 9.49156 13.875 9.75068V12.0007H17.2035L16.671 15.4694H13.875V23.8552C16.6978 23.4086 19.2686 21.9693 21.1248 19.7961C22.9809 17.6229 24.0005 14.8586 24 12.0007Z" fill="white"/>
                        </svg>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;