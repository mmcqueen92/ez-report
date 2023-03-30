import { useSession, signIn, signOut } from "next-auth/react";
import Login from "./Login";

export default function Navbar(props) {

  const { data: session } = useSession();
  return (
    <div className="flex row justify-between p-2 px-10 bg-red-500">
      <div className="font-bold text-xl underline text-red-600 border-4 border-slate-900 p-1 rounded-sm bg-slate-300">EZ-REPORT</div>
      <Login></Login>
    </div>
  )
}