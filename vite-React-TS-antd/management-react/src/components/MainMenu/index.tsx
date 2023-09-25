import React, { useState } from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import {  Menu} from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';


type MenuItem = Required<MenuProps>['items'][number];

// function getItem(
//   label: React.ReactNode,
//   key: React.Key,
//   icon?: React.ReactNode,
//   children?: MenuItem[],
// ): MenuItem {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   } as MenuItem;
// }

// const items: MenuItem[] = [
//   getItem('Option 1', '/page1', <PieChartOutlined />),
//   getItem('Option 2', '/page2', <DesktopOutlined />),
//   getItem('User', 'sub1', <UserOutlined />, [
//     getItem('Tom', '3'),
//     getItem('Bill', '4'),
//     getItem('Alex', '5'),
//   ]),
//   getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//   getItem('Files', '9', <FileOutlined />),
// ];

// 登录请求数据后，就可以跟 items 数组进行匹配
const items: MenuItem[] = [
    {
        label: 'Option 1',
        key: '/page1',
        icon: <PieChartOutlined />
    },
    {
        label: 'Option 2',
        key: '/page2',
        icon: <DesktopOutlined />
    },
    {
        label: 'option 3',
        key: 'page3',
        icon: <UserOutlined />,
        children: [ 
            {  
                label: 'page301',
                key: '/page3/page301'
            },
            {  
                label: 'page302',
                key: '/page3/page302'
            },
            {  
                label: 'page303',
                key: '/page3/page303'        
            }
        ]
    },
    {       
        label: 'Team',
        key: 'page4',
        icon: <TeamOutlined />,
        children: [
            {  
                label: 'page 401',
                key: '/page4/page401'
            }, 
            {
                label: 'page 402',   
                key: '/page4/page402'
            }
        ]
    },
    {
        label: 'Files',
        key: '/page5',  
        icon: <FileOutlined />
    }
];

const Comp: React.FC = () => {
    const navigateTo = useNavigate();
    // 侧边栏的点击事件
    const menuClick = (e: {key: string}) => {
        // console.log('点击了菜单', e.key);
        // 点击跳转到对应的路由  编程式导航跳转 利用到一个hook
        navigateTo(e.key); //e.key 是 items 的 getItem 的第二个参数的值
    }

    let firstOpenKey: string = '';
    // 获取修改defaultSelectedKeys的值
    const currentRoute = useLocation();
    function findKey(obj: {key: string}) {
        return obj.key === currentRoute.pathname;
    }
    for(let i = 0; i < items.length; i++) {
        if(items[i]!['children'] && items[i]!['children'].length > 0 && items[i]!['children'].find(findKey)) {
            firstOpenKey = items[i]!.key as string;
            break;
        }
    }
    const [openKeys, setOpenKeys] = useState([firstOpenKey]);
    
    //菜单栏收缩：展开或者回收某项菜单的时候执行
    const handleOpenChange = (keys: string[]) => {
      // keys 记录当前哪一项是展开的
    //   console.log(openKeys); 
      setOpenKeys([keys[keys.length - 1]])
    }

    return (
        <Menu 
            theme="dark" 
            defaultSelectedKeys={[currentRoute.pathname]} 
            mode="inline" 
            //菜单项数据
            items={items} 
            onClick={menuClick} 
            //菜单展开或者回收时的回调函数
            onOpenChange={handleOpenChange}
            //当前展开项的key数组
            openKeys={openKeys}
        />
    )
}

export default Comp;