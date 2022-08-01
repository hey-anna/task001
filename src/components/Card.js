import PropTypes from "prop-types";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// 업데이트 업데이트 업데이트
const Card = ({ userId, onClick, children }) => {
    //console.log(props);
    // console.log(children);
    return (
        <div className="card mb-3 d-flex cursor-pointer" onClick={onClick}>
            <div className="card-body">
                <div className="d-flex justify-content-center">
                    <div>{userId}</div>
                    {children && <div className="flex01">{children}</div>}
                </div>
            </div>
        </div>
    );
};

// justify-content-between
// 온클릭 걸었을때 온클릭 함수가 실행되는데, 이 함수를 부모 컴포넌트에서 받아오게 되어 있다 - 함수도 프롭스로 내려줄수 잇다
// L 카드 컴포넌트에서 온클릭이라는 프롭스로 함수를 설정을 해노코
// 온클릭이라는 프롭스로 넘겨주지 않을때는 이제 디폴트로 입힌 함수를 사용하도록 설정

Card.propTypes = {
    // userId: PropTypes.string.isRequired,
    userId: PropTypes.number.isRequired,
    children: PropTypes.element,
    onClick: PropTypes.func,
};

Card.defaultProps = {
    children: null,
    onClick: () => {},
};

// default 값
// Card.defaultProps = {
//     title: 'UserID: 유저아이디'
// }

export default Card;

// children && 이 있으면은 ,
// true면은 여기를 보여주고 false면은 아무것도 안보여준다

/* <div className="card mb-3">
<div className="card-body">{children}</div>
</div> */

// const Card = (props) => {
//     //console.log(props);
//     // {title: 'title'}
//     return (
//         <div className="card mb-3">
//             <div className="card-body">
//                 {props.userId}
//             </div>
//         </div>
//     );
// };

// export default Card;

// 받아올때 구조분해를 해서
// L props가 객체로 들어오고

// {props.id}
// {props.title}
// {props.completed}
