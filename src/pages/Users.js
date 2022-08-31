import React, { useEffect } from 'react'; // useState
import Card from '../components/Card';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { todoState, usersState, postCommentsState } from '../state/todoCoil';
// import { useAsync } from "react-async";
import {
  // RecoilRoot,
  //   atom,
  // selector,
  useRecoilState,
  //   useRecoilValue,
} from 'recoil';

const Users = () => {
  const [todo, setTodo] = useRecoilState(todoState);
  const [users, setUsers] = useRecoilState(usersState);
  const [postComments, setPostComments] = useRecoilState(postCommentsState);

  useEffect(() => {
    axios
      .all([
        axios.get('https://jsonplaceholder.typicode.com/users'),
        axios.get('https://jsonplaceholder.typicode.com/todos'),
        axios.get('https://jsonplaceholder.typicode.com/comments'),
      ])
      .then(
        axios.spread((res1, res2, res3) => {
          const data1 = res1.data;
          const data2 = res2.data;
          const data3 = res3.data;
          // const res = [...data1, ...data2];
          // setTodo(res);
          setUsers(data1);
          setTodo(data2);
          setPostComments(data3);
          console.log('5555', data1);
          console.log('7777', data2);
          console.log('8888', data3);
        }),
      )
      .catch((err) => console.log(err));
  }, []);

  console.log('todo', todo);
  console.log('users', users);
  console.log('postComments', postComments);

  const userData = todo.filter((user, index, callback) => {
    return index === callback.findIndex((kyy) => kyy.userId === user.userId);
  });

  console.log('userData', userData);

  return (
    <div className="wrap">
      <div className="d-flex justify-content-between">
        <h1 className="mt-3 text-3xl tracking-tight text-slate-900">Users</h1>
        {/* <div>button</div> */}
      </div>
      <div className="content">
        <div className="nameCardStyle">
          <ul
            role="list"
            className="username mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 "

            // completed={urName.completed}
            // title={urName.title}
            // name={urName.name}
          >
            {users.map((urName) => {
              return (
                <li
                  key={urName.id}
                  className="col-span-1 flex rounded-md shadow-sm"
                >
                  <div className="namestyle01 flex-shrink-0 flex items-center justify-center w-16 bg-600 text-white text-sm font-medium rounded-l-md">
                    {urName.id !== 10 ? '0' + urName.id : urName.id}{' '}
                  </div>
                  <div className="namestyle02 flex-1 truncate px-4 py-2 text-sm">
                    {urName.name}
                    {console.log(urName, 'urName')}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="userIdCardStyle">
          <h2 className="mt-3 text-3xl tracking-tight text-slate-900">
            UserList
          </h2>
          <ul
            role="list"
            className="grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
          >
            {userData.map((urList) => {
              const userId = urList.userId;
              const name = urList.name;
              console.log(userId, 'userId');
              return (
                <li>
                  <Card
                    key={urList.id}
                    // userId={userId}
                    completed={urList.completed}
                    title={urList.title}
                    name={urList.name}
                    // id={urList.id}
                    // name={name}
                    // id={userId}
                  >
                    <Link
                      // path="/userId/:id"
                      // path="/Post/:userId"
                      className="linkBox col-span-1 flex rounded-md shadow-sm "
                      to={{ pathname: `/Post/${urList.userId}` }}
                    >
                      {/* <div>{todo.userId}</div> */}
                      {/* <div>{users.name}</div> */}
                      ID : {userId}
                      {/* {userId === undefined ? "0: userId 없음" : userId} */}
                    </Link>
                  </Card>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Users;
