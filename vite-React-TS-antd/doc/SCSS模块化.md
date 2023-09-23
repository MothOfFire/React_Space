# SCSS模块化

## scss模块化引入

创建compontents包，在包内创建Comp1/index.tsx后，在Comp1下创建comp1.module.scss
在Comp1/index.tsx

```typescript

//import './comp1.scss' //全局引入不能这样引入会导致其他的样式发生改变

//模块化引入
import Styles from "./comp1.module.scss";

const Comp = () => {
    return (
        <div className={Styles.box}>
            <p>这是Comp1里面的内容</p>
        </div>
    )
}

export default Comp;

```
