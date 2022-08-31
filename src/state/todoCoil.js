import { atom } from 'recoil';
// import { atom, selector } from "recoil";
// import axios from "axios";
// import { useAsync } from "react-async"

// 과제 1 메인 데이타
export const todoState = atom({
  key: 'todoState',
  default: [],
});

// 과제 2추가
export const usersState = atom({
  key: 'usersState',
  default: [],
});

export const postCommentsState = atom({
  key: 'postCommentsState',
  default: [],
});
