import Card from '../components/Card';
// import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { Link, useParams } from 'react-router-dom';
import { todoState } from '../state/todoCoil';
import { useRecoilState } from 'recoil';
import React, { useState } from 'react';
// import styled from "styled-components";
// import React, { useEffect, useState } from "react";

const Post = () => {
  const [todo, setTodo] = useRecoilState(todoState);
  const { id } = useParams();
  // console.log("아이디", useParams());

  //
  const userData = todo.filter((user, index, callback) => {
    return index === callback.findIndex((kyy) => kyy.userId === user.userId);
  });
  let testArr = [];
  for (let i = 0; i < userData.length; i++) {
    if (Number(id) === userData[i].userId) {
      testArr.push(userData[i]);
    }
  }
  //   console.log('userData', userData);
  //

  const postList = todo.filter((todo) => todo.userId == id);
  const [cardList, setCardList] = useState(postList);
  const trueList = postList.filter((cards) => cards.completed === true);
  const falseList = postList.filter((cards) => cards.completed === false);
  const tabType = [
    { tabName: 'All' },
    { tabName: 'completed' },
    { tabName: 'uncompleted' },
  ];

  console.log('cardList', cardList);
  const handleBtns = (idx) => {
    if (idx === 0) {
      setCardList(postList);
    }
    if (idx === 1) {
      setCardList(trueList);
    }
    if (idx === 2) {
      setCardList(falseList);
    }
  };
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }
  return (
    <>
      <div className="d-flex justify-content-between">
        <h1 className="mt-3 text-3xl tracking-tight text-slate-900">Post</h1>
        {/* <div>button</div> */}
      </div>
      <div className="tabs">
        <nav className="-mb-px flex space-x-8">
          {tabType.map((tab, idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  handleBtns(idx);
                }}
                // type="button"
                value={tab.tabName}
                //   className="btn btn-outline-secondary"
                className={classNames(
                  tab.current
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                  'whitespace-nowrap pb-2 pt-2 px-2 border-b-2 font-medium text-sm',
                )}
                aria-current={tab.current ? 'page' : undefined}
              >
                {tab.tabName}
              </button>
            );
          })}
        </nav>
      </div>

      {cardList.map((posts) => {
        return (
          <Card
            key={posts.id}
            // id={posts.id}
            // completed={posts.completed}
            // title={posts.title}
          >
            <Link
              className="linkBox"
              // to={{ pathname: `/Post/${id}/PostView/${posts.id}` }}
              to={{
                pathname: `/Post/${testArr[0].userId}/PostView/${posts.id}`,
              }}
            >
              {posts.id} {posts.completed}
            </Link>
            <div
              className="ftStyle"
              style={
                posts.completed === true ? { color: 'blue' } : { color: 'red' }
              }
            >
              {posts.completed === true ? 'true' : 'false'}
            </div>
          </Card>
        );
      })}
    </>
  );
};

export default Post;
