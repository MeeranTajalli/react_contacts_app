import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar
        img="https://i.guim.co.uk/img/media/5742c0b971dd3c0a87bc24b2171515b34464a63f/131_0_1701_1021/master/1701.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0e01e2386a1ce998e40d96a90b8927db"
        alt="avatar_img"
      />
      />
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
