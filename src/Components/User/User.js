import React, { useState } from "react";

const User = (props) => {
  const { name, email, phone, picture, website } = props.user;
  const addMember = props.addMember;
  const fullName = name.first + " " + name.last;
  const [mobile, setMobile] = useState("");
  const userstyle = {
    border: "2px solid gray",
    margin: "10px",
    borderRadius: "10px",
    padding: "10px",
    display: "flex",
    width: "70%",
  };
  const showPhone = () => setMobile(phone);
  return (
    <div style={userstyle}>
      <div style={{ marginTop: "25px" }}>
        <img src={picture.large} alt="" />
      </div>
      <div style={{ marginLeft: "20px" }}>
        <h1>Name:{fullName}</h1>
        <p>Email:{email}</p>
        <p>
          <a target="_blank" href={website}>
            Learn About me
          </a>
        </p>
        <p>Phone:{mobile}</p>
        <button onClick={showPhone}>Show Phone Number</button>
        <button onClick={() => addMember(fullName)}>Add me</button>
      </div>
    </div>
  );
};

export default User;
