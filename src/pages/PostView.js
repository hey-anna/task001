import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { todoState, postCommentsState } from '../state/todoCoil';
import { useParams, useNavigate } from 'react-router-dom';
import Card from '../components/Card';

const PostView = () => {
  const [todo, setTodo] = useRecoilState(todoState);
  const [postComments, setPostComments] = useRecoilState(postCommentsState);
  const { id } = useParams();
  let postView = todo.filter((td) => td.id == id);
  const currentComments = postComments.filter(
    (postComments) => postComments.postId == id,
  );

  console.log('currentComments', currentComments);

  const navigate = useNavigate();
  const prevBtn = () => {
    navigate(`/Post/${postView[0].userId}/PostView/${postView[0].id - 1}`);
  };
  const nextBtn = () => {
    navigate(`/Post/${postView[0].userId}/PostView/${postView[0].id + 1}`);
  };

  const prevTit = todo.filter((td) => {
    return postView[0].id === 1
      ? td.id === Number(id)
      : td.id == Number(id) - 1;
  });
  const nextTit = todo.filter((td) => {
    return postView[0].id === todo.length
      ? td.id === Number(id)
      : td.id == Number(id) + 1;
  });

  const [disable, setDisable] = useState(false);
  useEffect(() => {
    if (todo.length === Number(id)) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [id]);

  const prevTitBtn = () => {
    navigate(`/Post/${prevTit[0].userId}/PostView/${prevTit[0].id}`);
  };
  const nextTitBtn = () => {
    navigate(`/Post/${nextTit[0].userId}/PostView/${nextTit[0].id}`);
  };

  return (
    <>
      <div className="d-flex justify-content-between">
        <h1 className="mt-3 text-3xl tracking-tight text-slate-900">
          PostView
        </h1>
        <div className="stBox">
          <div
            className="st"
            style={
              postView[0].completed === true
                ? { color: 'blue' }
                : { color: 'red' }
            }
          >
            {JSON.stringify(postView[0].completed)}
          </div>

          <div className="st">pageNum : {JSON.stringify(postView[0].id)}</div>
        </div>
      </div>
      <Card>
        <div className="linkBox">
          {postView[0].title}
          <div className="pageLink">
            <button disabled={postView[0].id === 1} onClick={prevBtn}>
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button disabled={disable} onClick={nextBtn}>
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </Card>
      <div className="btnStyle">
        <button
          className="mt-2 max-w-4xl text-sm text-gray-500"
          disabled={postView[0].id === 1}
          onClick={prevTitBtn}
        >
          {prevTit[0].title}
        </button>
        <button
          className="mt-2 max-w-4xl text-sm text-gray-500"
          disabled={disable}
          onClick={nextTitBtn}
        >
          {nextTit[0].title}
        </button>
      </div>
      <div>
        <div className="allComments mb-2">
          <p className="inline-flex rounded-full bg-green-100 py-2 px-3 text-xs font-semibold leading-5 text-green-800">
            ??? ?????? ?????? :{' '}
            {currentComments.length === 0
              ? '?????? ??????'
              : currentComments.length}
          </p>
        </div>
        <ul
          role="list"
          className="divide-y divide-gray-200 overflow-hidden bg-white shadow sm:rounded-md"
        >
          {currentComments.map((postsView) => {
            return (
              <li className="flex items-center px-4 py-4 sm:px-6">
                <div key={postsView.id}>
                  <div className="commentsTitle mt-4">
                    <h3 className=" grid grid-cols-[1fr,auto] items-center">
                      id : {postsView.id}
                    </h3>
                    <p className="truncate text-sm font-medium text-indigo-600">
                      {postsView.name}
                    </p>
                  </div>
                  <div className="mb-3">
                    <p className="mt-2 flex items-center text-sm text-gray-500">
                      {postsView.body}
                    </p>
                    <p className="email mt-2 flex items-center text-sm text-gray-500">
                      <i className="fa-solid fa-envelope mr-2 "></i>
                      {postsView.email}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default PostView;
