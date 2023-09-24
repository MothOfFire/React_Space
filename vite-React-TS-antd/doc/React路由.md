# React 路由

## 旧项目的路由写法（React18以前）

在src目录下创建router/index.tsx

```typescript

import App from "../App";
import Home from '../views/Home';
import About from '../views/About';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
//两种路由模式的组件：BrowserRouter（ history 模式）、HashRouter（ Hash 模式）H

// const baseRouter = () => {
//     return ()
// }

//当函数组件的中间没有逻辑只是要返回时，可以省略return，并以下的形式进行简写

//可以简写成以下形式
const baseRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <App /> }>
                <Route path="/home" element={ <Home /> } ></Route>
                <Route path="/about" element={ <About /> } ></Route>
            </Route>
        </Routes>
    </BrowserRouter>
)

export default baseRouter;

```

在main.tsx中进行引入router/index.tsx的模块

```typescript

import Router from './router';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)

```

在App.tsx中引入Outlet组件

```typescript

import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div className='App'>
      <Outlet></Outlet>
    </div>
  )
}

export default App;

```

### 路由跳转

在App.tsx 中引入 Link 组件

```typescript

import { Outlet, Link } from 'react-router-dom';

function App() {

  return (
    <div className='App'>
      <Link to="/home">Home</Link> |
      <Link to="/about">About</Link>
      <Outlet></Outlet>
    </div>
  )
}

export default App;

```

### 路由重定向

在touter/index.tsx 中引入 Navgate 组件

```typescript

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

```

## React18 路由 (路由表的形式)

在router目录下创建.tsx文件

```typescript

//路由表形式
import Home from '../views/Home';
import About from '../views/About';
import { Navigate } from 'react-router-dom';

const routes = [
    {
        path: "/",
        element: <Navigate to='/home' />
    },
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/",
        element: <About />
    }
]

export default routes;

```

在main.tsx中

```typescript

import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
// import Router from './router/index copy';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <Router /> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

```

在App.tsx中

```typescript

import { useRoutes, Link } from 'react-router-dom';
import router from './router';

function App() {

  const outlet = useRoutes(router);

  return (
    <div className='App'>
      <Link to="/home">Home</Link> |
      <Link to="/about">About</Link>
      { outlet }
    </div>
  )
}

export default App;

```
