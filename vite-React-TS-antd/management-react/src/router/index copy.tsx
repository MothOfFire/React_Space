//组件形式的路由
import App from "../App";
import Home from '../views/Home';
import About from '../views/About';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
//两种路由模式的组件：BrowserRouter（ history 模式）、HashRouter（ Hash 模式）H

// const baseRouter = () => {
//     return ()
// }

//可以简写成以下形式
const baseRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <App /> }>
                {/* 配置用户访问 / 的时候重定向到 /home 路径 */}
                <Route path="/" element={ <Navigate to='/home' /> }></Route>
                <Route path="/home" element={ <Home /> } >R</Route>
                <Route path="/about" element={ <About /> } ></Route>
            </Route>
        </Routes>
    </BrowserRouter>
)

export default baseRouter;