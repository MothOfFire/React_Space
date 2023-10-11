// import React,{ useEffect } from 'react';
import React from 'react';
// import initLoginBg from './init';
import styles from './login.module.scss';

const View: React.FC = () => {
    
    // 加载完组件之后，加载背景
    // useEffect(() =>{
    //     initLoginBg();
    //     //窗口发生改变时，initLoginBg 也进行初始化
    //     window.onresize = () => { initLoginBg() };
    // }, []);

    return (
        <div className={styles.loginPage}>
            {/* <canvas id='canvas' style={{display: 'block'}}></canvas> */}
            <div className={styles.loginBox}>
                <div className={styles.title}>
                    <h1>React18-TS</h1>
                    <p>String EveryDay</p>
                </div>
            </div>
        </div>
    )
};

export default View;