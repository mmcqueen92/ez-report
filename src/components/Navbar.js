import { useSession, signIn, signOut } from "next-auth/react";
import Login from "./Login";

export default function Navbar(props) {

  const { data: session } = useSession();
  return (
    <div className="flex row justify-between p-2 bg-rose-800 sticky">
      <div className="font-bold underline text-yellow-50">EZ-REPORT</div>
      <Login></Login>
    </div>
  )
}