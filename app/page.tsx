"use client";

import { useSession } from "next-auth/react";
import styles from "./page.module.css";

export default function Home() {
  const { data: session } = useSession();

  console.log({ session });

  console.log(session?.user.accessToken);
  return (
    <>
      <h1>Home Page</h1>
      {/*{cookieStore.getAll().map((cookie) => (*/}
      {/*  <div key={cookie.name}>*/}
      {/*    <p>Name: {cookie.name}</p>*/}
      {/*    <p>Value: {cookie.value}</p>*/}
      {/*  </div>*/}
      {/*))}*/}
    </>
  );
}
