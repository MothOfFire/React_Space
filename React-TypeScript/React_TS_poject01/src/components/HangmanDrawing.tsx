//形成的小人图像div
//头
const HEAD = (
    <div style={{
        width: '50px',
        height: '50px',
        borderRadius: '100%',
        border: '10px solid black',
        position: 'absolute',
        top: "50px",
        right: "-30px"
    }}></div>
)

//身体
const BODY = (
    <div style={{
        width: '10px',
        height: '100px',
        backgroundColor: 'black',
        position: 'absolute',
        top: "110px",
        right: 0
    }}></div>
)

//右臂
const RIGHT_ARM = (
    <div style={{
        width: '100px',
        height: '10px',
        backgroundColor: 'black',
        position: 'absolute',
        top: "150px",
        right: "-100px",
        rotate: '-30deg',//设置旋转角度
        transformOrigin: 'left bottom',//设置旋转中心为左下角
    }}></div>
)

//左臂
const LEFT_ARM = (
    <div style={{
        width: '100px',
        height: '10px',
        backgroundColor: 'black',
        position: 'absolute',
        top: "150px",
        right: "10px",
        rotate: '30deg',//设置旋转角度
        transformOrigin: 'right bottom',//设置旋转中心为左下角
    }}></div>
)

//右腿
const RIGHT_LEG = (
    <div style={{
        width: '100px',
        height: '10px',
        backgroundColor: 'black',
        position: 'absolute',
        top: "200px",
        right: "-90px",
        rotate: '60deg',//设置旋转角度
        transformOrigin: 'left bottom',//设置旋转中心为左下角
    }}></div>
)

//左腿
const LEFT_LEG = (
    <div style={{
        width: '100px',
        height: '10px',
        backgroundColor: 'black',
        position: 'absolute',
        top: "200px",
        right: 0,
        rotate: '-60deg',//设置旋转角度
        transformOrigin: 'right bottom',//设置旋转中心为左下角
    }}></div>
)

const BODY_PARTS = [HEAD,BODY, LEFT_ARM, RIGHT_ARM, LEFT_LEG, RIGHT_LEG];

type HangmanDrawingProps = {
    numberOfGuesses: number
}

export function HangmanDrawing( { numberOfGuesses }: HangmanDrawingProps ){
    return (
        <div style={{ position: 'relative' }}>
            {BODY_PARTS.slice(0, numberOfGuesses)}
            <div style={{
                height: '50px',
                width: '10px',
                backgroundColor: "black",
                position:'absolute',
                top: 0,
                right: 0,
            }}></div>
            <div style={{
                height: '10px',
                width: '200px',
                backgroundColor: "black",
                marginLeft: '120px',
            }}></div>
            <div style={{
                height: '400px',
                width: '10px',
                backgroundColor: "black",
                marginLeft: '120px',
            }}></div>
            <div style={{
                height: '10px',
                width: '250px',
                backgroundColor: "black"
            }}></div>
        </div>
    )
}