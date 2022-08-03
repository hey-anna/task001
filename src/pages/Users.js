import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
// import { object } from "prop-types";
// import { useHistory } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Post from "./Post";
import { Link } from "react-router-dom";
// import { number } from "prop-types";
// import { element } from "prop-types";
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
            {/* 여기에서 필터하기  */}

            {/* 그리고 맵 */}
            {users
                .filter(
                    (arr, index, callback) =>
                        index === callback.findIndex((kyy) => kyy.userId === arr.userId)
                ) // filter에는 3번째 인자로 callback이 들어가는데 배열의 값을 callback 함수로 전달하여 해당값들이callback 함수에 정의된 기준에 부합하는지 검사하고, true만 모아서 리턴해준다
                .map((post) => {
                    //let emptyuserId = [];
                    const userId = post.userId;

                    /* const id = post.id;
                    const title = post.title;
                    const completed = post.completed; */

                    return (
                        <Card key={post.id}>
                            <userList className="linkBox" users={this.state.users} />
                            {/* <Link className="linkBox" to={`/users/${post.id}`}>
                                {userId}
                            </Link> */}
                        </Card>
                    );
                })}
        </>
    );
};

export default Users;

// to={{`/users/${post.id}`}

/* const count = 0;
for (let i = 0; i < userId.length; i++) {
    if (userId[i] === userId) {
        count++;
    }
}
console.log(count); // 개수구하기 */

// const result = post.userId.filter((item) => item === number);
// console.log(result);
// console.log(`count : ${result.length}`);

// let emptyuserId = [];
// const userId = post.userId;
// _.uniqBy(users, "userId");
//let ID = post.userId;

/* const groupBy = _.groupBy(users, (item) => item.userId);
const result = _.map(groupBy, (group) => ({ ...group[0], count: group.length }));
console.log(result); */

/* {userId.filter((item, index) => {
                                return userId.indexOf(item) !== index;
                            })} 
                            {/* {userId.filter((item) => {
                                return emptyuserId.hasOwnProperty(item)
                                    ? false
                                    : (emptyuserId[item] = true);
                            })} */

// .filter((item, i) => {
//     return (
//         userId.findIndex((item2, j) => {
//             return item.userId === item2.userId;
//         }) === i
//     );
// })
