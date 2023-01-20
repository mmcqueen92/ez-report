import { NextPage } from 'next'
import Head from 'next/head'
import LoginForm from '../components/LoginForm'

export default function Login() {
  return (
    <div>
      <Head>
        <title>Login Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <LoginForm/>
      </main>
    </div>
  )
}
