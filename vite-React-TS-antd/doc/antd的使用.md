# antd的使用

## 安装antd

```bash

npm install antd --save

# 安装antd图标
npm install --save @ant-design/icons

```

## 引入

```typescript

// 按需引入antd组件
import {Button} from 'antd';
// 按需引入antd图标
import {FullscreenOutlined } from '@ant-design/icons';

//全局引入css，5.0以后的antd不用引入
import 'antd/dist/antd.css'

```

## 配置antd样式自动按需引入（5.0以下的）

由于5.0+的版本已经实现自动引入，所以该步骤是5.0以下的

```bash

#安装插件
npm install vite-plugin-style-import@1.4.1 -D

# 需要安装less
npm install less@2.7.1 -D

```

在vite.config.ts中进行配置

```typescript

import styleImport,{ AntdResolve } from 'vite-plugin-style-import';

export default defineConfig({
  plugins: [
    react(),
    styleImport({
        resolves: [
            AntdResolve()
        ],
    }),
    ],
  resolve: {
    alias:{
      "@": path.resolve(__dirname,'./src')
    }
  }
})

```
