import { atom } from "recoil";
// import axios from "axios";

export const todoState = atom({
    key: "todoState",
    default: [],
});

// const userState = selector(
//     {
//         key: "userState",
//         get: async () =>
//             axios.get <
//             UserInfo >
//             "/https://jsonplaceholder.typicode.com/todos".then((response) => {
//                 setTodo(response.data); // setUsers를 통해서 useState에 넣음
//             }),
//     },
//     []
// );

// const userState = selector({
//     key: 'userState',
//     get: async () => axios.get<UserInfo>('/login-user-info').then((r) => r.data),
//   });

// const [todo, setTodo] = useRecoilState(todoState);
// useEffect(() => {
//     axios.get("https://jsonplaceholder.typicode.com/todos")
//     .then((response) => {
//         setTodo(response.data); // setUsers를 통해서 useState에 넣음
//     });
// }, []);

// export const todoState = atom({
//     key: "todoState",
//     default: [],
// });

// export const todoState = atom({
//     key: "todoState",
//     default: [],
// });

// export const countState = atom({
//     key: "countState",
//     default: "",
// })

// export default atom<string : undefined>({
//     key: 'firstCoil',
//     default: undefined,
// })

// const recoilCounterState = atom({
//     key: "recoilCounterState",
//     default: initialState,
// });

// export const todoState = atom({
//     key: "todosState",
//     default: 0,
// });
