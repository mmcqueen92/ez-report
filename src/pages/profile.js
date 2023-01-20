import { useSession, signIn, signOut } from "next-auth/react"
import {  unstable_getServerSession } from "next-auth/next"
import {  authOptions } from "./api/auth/[...nextauth]"

export default function Component() {
  const { data: session } = useSession()

  if (session) {
    console.log("session.user: ", session.user)
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
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context.req, context.res, authOptions)

  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin",
        permanent: false,
      }
    }
  }

  return {
    props: {
      session,
    },
  }
}