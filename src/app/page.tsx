"use client";
import { useAppSelector } from "@/redux/store";
import LogIn from "./log-in";

export default function Home() {
  const username = useAppSelector((state) => state.authReducer.value.username);
  const IsModerator = useAppSelector(
    (state) => state.authReducer.value.isModerator
  );
   const isAuth = useAppSelector((state) => state.authReducer.value.isAuth);
  
   
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LogIn />
      {isAuth && (
        <h1>User Name : {username}</h1>
      )}
      
      <h1>{IsModerator}</h1>
      {IsModerator && (
        <div>
          <h1>This User is a Moderator {IsModerator}</h1>
        </div>
      )}
    </main>
  );
}
