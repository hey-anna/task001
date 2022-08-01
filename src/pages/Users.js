import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
// import { object } from "prop-types";
// import { useHistory } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Post from "./Post";
import { Link } from "react-router-dom";
//import UserList from "../components/UserList";
// L pages폴더에 있어서 한단계 위로 올라가서 줘야 해서 점 두번 찍음 *****

// 특정 데이터 가져오고 싶을 때 useParams를 react-router-dom에서 import한 다음에 여기서 id를 빼옵니다.

const Users = () => {
    // const history = useHistory();
    const [users, setUsers] = useState([]); // 받다온 정보를 useState에 담기
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
            // console.log(response);
            setUsers(response.data); // setUsers를 통해서 useState에 넣음
        });
    }, []);

    return (
        <>
            <div className="d-flex justify-content-between">
                <h1>Users</h1>
                {/* <div>button</div> */}
            </div>

            {users.map((post) => {
                {
                    /* return (
                    <Card
                        key={post.id}
                        userId={post.userId}

                        // 이거 동일 묶 onClick={post.title}
                        // onClick={() => "/pages/Post"}
                        // onClick={() => history.push("/pages/Post")}
                    />
                ); */
                }
                return (
                    <Card key={post.id}>
                        <Link className="linkBox" to={`/users/${post.id}`}>
                            {post.userId}
                        </Link>
                    </Card>
                );
            })}
        </>
    );
};

{
    /* <div className="user_id card mb-2" key={post.id}>
<div className="card-body p-3">
    <Link to={`/users/${post.id}`}>{post.userId}</Link>
</div>
</div> */
}

// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) => <li key={number.toString()}>{number}</li>);
//     return <ul>{listItems}</ul>;
// }

// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(<NumberList numbers={numbers} />, document.getElementById("root"));

// const array = ["userId"];
// console.log([...new Set(array)]);

// const array = [userId]
// const listItems = numbers.map((number)) =>
// <li>{number}</li>

export default Users;

// Card에는 onClick을 사용할 수  없기 때문에
// Card 컴포넌트로 들어가서 젤위에 있는 div를 선택했을 때 클릭이벤트를 발생할 수 있도록 한다

// const arr = [{Users}];
// users.filter((object) => {
//     return object.userId !== 1;
// });
