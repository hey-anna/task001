import React, { useEffect } from "react";
import Card from "../components/Card";
import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { todoState } from "../state/todoCoil";
import {
    // RecoilRoot,
    //   atom,
    // selector,
    useRecoilState,
    //   useRecoilValue,
} from "recoil";

const Users = () => {
    const [todo, setTodo] = useRecoilState(todoState);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
            // console.log(response);
            setTodo(response.data); // setUsers를 통해서 useState에 넣음
        });
    }, []);

    const userData = todo.filter((user, index, callback) => {
        return index === callback.findIndex((kyy) => kyy.userId === user.userId);
    });

    return (
        <>
            <div className="d-flex justify-content-between">
                <h1>Users</h1>
                {/* <div>button</div> */}
            </div>
            {userData.map((urList) => {
                const userId = urList.userId;
                return (
                    <Card
                        key={urList.id}
                        // userId={userId}
                        completed={urList.completed}
                        title={urList.title}
                        // id={userId}
                    >
                        <Link
                            // path="/userId/:id"
                            // path="/Post/:userId"
                            className="linkBox"
                            to={{ pathname: `/Post/${urList.userId}` }}
                        >
                            {userId}
                        </Link>
                    </Card>
                );
            })}
        </>
    );
};
export default Users;
