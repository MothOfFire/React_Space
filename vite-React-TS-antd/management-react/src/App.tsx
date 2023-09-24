// import { Outlet, Link } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';
import router from './router';

function App() {

  const outlet = useRoutes(router);

  return (
    <div className='App'>
      {/* 顶级组件
      <Button type="primary">按钮</Button>
      <FullscreenOutlined style={{ fontSize: '40px'}} /> */}
      {/* <Link to="/home">Home</Link> |
      <Link to="/about">About</Link> |
      <Link to="/user">User</Link> */}
      {/* <Outlet></Outlet> */}
      { outlet }
    </div>
  )
}

export default App;
