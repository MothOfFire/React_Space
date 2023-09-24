import { Outlet, Link } from 'react-router-dom';

function App() {

  return (
    <div className='App'>
      {/* 顶级组件
      <Button type="primary">按钮</Button>
      <FullscreenOutlined style={{ fontSize: '40px'}} /> */}
      <Link to="/home">Home</Link> |
      <Link to="/about">About</Link>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
