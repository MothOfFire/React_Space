//路由表形式
//路由懒加载
import React,{ lazy } from 'react';
import Home from '../views/Home';
// import About from '../views/About';
// import User from '../views/User';
import { Navigate } from 'react-router-dom';

// const About = lazy(() => import('../views/About'));
// const User = lazy(() => import('../views/User'));
const Page1 = lazy(() => import('../views/page1'));
const Page2 = lazy(() => import('../views/page2'));

//懒加载模式的组件写法，外面需要套一层 Loading 的提示加载组件

const withLoadingComponent = (comp: JSX.Element) => {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            {comp}
        </React.Suspense>
    )
}

const routes = [
    {
        path: "/",
        element: <Navigate to='/page1' />
    },
    //嵌套路由
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/page1",
                element: withLoadingComponent(<Page1 />)
            },
            {
                path: "/page2",
                element: withLoadingComponent(<Page2 />)
            }
        ]
    }
    // {
    //     path: "/home",
    //     element: <Home />
    // },
    // {
    //     path: "/about",
    //     element: withLoadingComponent(<About />)
    // },
    // {
    //     path: "/user",
    //     element: withLoadingComponent(<User />)
    // }
]

export default routes;