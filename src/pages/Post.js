import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";

import { render } from "@testing-library/react";
// import {setUsers} from "./Users";
import { users } from "./Users";

// import { useParams } from "react-router-dom";

// const Post = () => {
//     // return <h1>Post</h1>;

// }


render() {
    let { monsters } = this.props;
    console.log("CardList props : ", monsters);
    return (
      <div className="card-list">
        {monsters.map((card) => {
          return (
            <Card
              key={card.id}
              name={card.name}
              email={card.email}
              id={card.id}
            />
          );
        })}
      </div>
    );}
  

// render() {
//     const { users } = this.props;
//     console.log("userList props : ", users)

//     return (
//       <div className="user-list">
//         {monsters.map((card) => {
//       return (
//         <Card
//           key={card.id}
//           userId={card.userId}
//           title={card.title}
//           completed={card.completed}
//         />
//       )

//     })}
//     </div>

//     );

// };

export default Post;

// key={post.id}
// userId={post.userId}
// onClick={() => "/pages/Post"}
// onClick={() => history.push("/pages/Post")}
