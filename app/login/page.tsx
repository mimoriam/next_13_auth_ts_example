// {
//     "email": "john@gmail.com",
//     "password": "123456"
// }

"use client";

import { backendURL } from "@/constants/constants";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const onSubmit = async () => {
    // const result = await signIn("credentials", {
    //   email: "john@gmail.com",
    //   password: "123456",
    //   redirect: true,
    //   callbackUrl: "http://localhost:3001/",
    // });
    // console.log(result);
  };

  return (
    <div>
      {/*<button onClick={onSubmit}>Login</button>*/}
      <button
        onClick={() =>
          signIn("email-login", { email: "john@gmail.com", password: "123456" })
        }
      >
        Login
      </button>
    </div>
  );
}
