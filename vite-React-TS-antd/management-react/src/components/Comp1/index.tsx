//import './comp1.scss' //全局引入不能这样引入会导致其他的样式发生改变

//模块化引入
import Styles from "./comp1.module.scss";

function Comp() {
    return (
        <div className={Styles.box}>
            <p>这是Comp1里面的内容</p>
        </div>
    )
}

export default Comp;