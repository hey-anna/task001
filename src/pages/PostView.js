import React from "react";
import Card from "../components/Card";
import { useParams, useNavigate } from "react-router-dom";
import { todoState } from "../state/todoCoil";
import { useRecoilState } from "recoil";
// import React, { useEffect, useState } from "react";

const PostView = () => {
    const [todo, setTodo] = useRecoilState(todoState);
    const { id } = useParams();
    let postView = todo.filter((todo) => todo.id == id);
    // let prevTit = todo.filter((todo) => todo.id == Number(id) - 1);
    // const nextTit = todo.filter((todo) => todo.id == Number(id) + 1);
    const prevTit = todo.filter((todo) => {
        return postView[0].id === 1 ? todo.id == Number(id) : todo.id == Number(id) - 1;
    });
    const nextTit = todo.filter((todo) => {
        return postView[0].id === 200 ? todo.id == Number(id) : todo.id == Number(id) + 1;
    });
    console.log(id, "useParams");
    console.log(postView, "postView");
    console.log(todo, "todo");
    console.log(prevTit, "prevTit");
    console.log(nextTit, "nextTit");

    const navigate = useNavigate();

    const prevBtn = () => {
        navigate(`/Post/${postView[0].userId}/PostView/${postView[0].id - 1}`);
    };
    const nextBtn = () => {
        navigate(`/Post/${postView[0].userId}/PostView/${postView[0].id + 1}`);
    };
    const prevTitBtn = () => {
        navigate(`/Post/${prevTit[0].userId}/PostView/${prevTit[0].id}`);
    };
    const nextTitBtn = () => {
        navigate(`/Post/${nextTit[0].userId}/PostView/${nextTit[0].id}`);
    };

    // let postView2 = [];
    // for (let i = 0; i < todo.length; i++) {
    //     console.log("tt", postView[0].userId);
    //     if (postView[0].userId === todo[i].userId) {
    //         postView2.push(todo[i]);
    //     }
    // }

    return (
        <>
            <div className="d-flex justify-content-between">
                <h1>PostView</h1>
                <div
                    className="st"
                    style={postView[0].completed === true ? { color: "blue" } : { color: "red" }}
                >
                    {JSON.stringify(postView[0].completed)}
                </div>
            </div>
            <Card>
                <div className="linkBox">
                    {postView[0].title}
                    <div className="pageLink">
                        <button disabled={postView[0].id === 1} onClick={prevBtn}>
                            <i className="fa-solid fa-chevron-left"></i>
                        </button>
                        <button disabled={postView[0].id === 200} onClick={nextTitBtn}>
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </Card>
            <div className="btnStyle">
                <button disabled={postView[0].id === 1} onClick={prevTitBtn}>
                    {prevTit[0].title}
                </button>
                <button disabled={postView[0].id === 200} onClick={nextBtn}>
                    {nextTit[0].title}
                </button>
            </div>
        </>
    );
};
export default PostView;

// title을 보여주는데 1번일때는 onClick작동안되게

// 1번이거나 200번이면 -1페이지로가지않고 false 되게
// 만약에
