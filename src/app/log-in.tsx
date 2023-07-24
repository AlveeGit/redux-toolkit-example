"use client";

import { useState } from "react";
import { login, logOut, toggleModerator } from "@/redux/features/auth-slice";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";

export default function LogIn() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const isAuth = useAppSelector((state) => state.authReducer.value.isAuth);

  const onClickLogIn = () => {
    dispatch(login(username));
    // console.log("🚀 ~ file: log-in.tsx:15 ~ onClickLogIn ~ username:", username)
  };

  const onClickToggle = () => {
    dispatch(toggleModerator());
  };

  const onClickLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <input type="text" onChange={(e) => setUsername(e.target.value)} />
      <br />
      <button
        onClick={onClickLogIn}
        className="
            "
      >
        Log In
      </button>
      <br />
      <button onClick={onClickLogOut}>Log Out</button>
      <br />
      {isAuth && (
        <button onClick={onClickToggle}>Toggle Moderator Status</button>
      )}
    </div>
  );
}
