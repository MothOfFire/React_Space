import React, { useState } from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
import { Outlet, } from 'react-router-dom';
import MainMenu from '@/components/MainMenu';

const { Header, Content, Footer, Sider } = Layout;
const View: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false); 
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: '100vh' }}>
        {/* 左边侧边栏 */}
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <MainMenu />
      </Sider>
      {/* 右边内容区域 */}
      <Layout>
        {/* 头部 */}
        <Header style={{ paddingLeft: '16px', background: colorBgContainer }}>
            {/* 面包屑 */}
            <Breadcrumb style={{lineHeight: '64px'}}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
        </Header>
        {/* 内容区域 */}
        <Content style={{ margin: '16px 16px 0',backgroundColor: 'red' }} >
          {/* 窗口部分 */}
          <Outlet />
        </Content>
        {/* 底部 */}
        <Footer style={{ textAlign: 'center', padding: 0, lineHeight: '48px' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default View;