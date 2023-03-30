import { useSession, signIn, signOut } from "next-auth/react"


export default function Login () {
  const { data: session } = useSession()

  if (session) {

    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button 
      className="border-2 border-black p-1 rounded-md hover:bg-black hover:text-red-500 bg-slate-200"
      onClick={() => signIn()}>Sign in</button>
    </>
  )
}