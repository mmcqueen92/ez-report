import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useSession, signIn } from "next-auth/react";
import getServerSideProps from '../pages/index';




export default function NewReport(props) {
  const [perpetrator, setPerpetrator] = useState("");
  const [infraction, setInfraction] = useState("");
  const [action, setAction] = useState("uninstall");
  const router = useRouter()

  const { data: session } = useSession()

  const refreshData = () => {
    console.log("running refreshData")
    router.replace(router.asPath);
  }
  // ----------------------------------------------------
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    if (session) {

      const perpetrator = event.target.perpetrator.value;
      const infraction = event.target.infraction.value;
      const action = event.target.action.value;
      const user = session.user.name;



      const state = props.reports;
      state.unshift({ perpetrator, infraction, action, user })

      // Get data from the form.
      const data = {
        perpetrator,
        infraction,
        action,
        user
      }

      // Send the data to the server in JSON format.
      const JSONdata = JSON.stringify(data)

      // API endpoint where we send form data.
      const endpoint = '/api/reports'

      // Form the request for sending data to the server.


      // Send the form data to our forms API on Vercel and get a response.
      await axios.post(endpoint, data)
        .then(setPerpetrator(""))
        .then(setInfraction(""))
        .then(props.setReports(state))
        .then(refreshData());



    } else {
      signIn()

    }

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    // const result = await response.json()
    // alert(`Is this your full name: ${result.data}`)
  }

  // ----------------------------------------------------


  return (
    <div className="flex flex-col m-2 border-2 border-rose-500 rounded-md p-2 w-2/5 bg-rose-300">
      <div className="font-semibold underline">File a Report:</div>
      <form onSubmit={handleSubmit} className="flex flex-col" action="/api/reports" method="POST">
        <div className='flex flex-row justify-between'>
          <label className="my-2" htmlFor="perpetrator">Perpetrator: </label>
          <input onChange={(event) => {
            setPerpetrator(event.target.value)
          }} value={perpetrator} className="w-1/2 rounded-md border-2 border-rose-500 my-1" type="text" id="perpetrator" name="perpetrator"></input>

        </div>
        <div className='flex flex-row justify-between'>
          <label className="my-2" htmlFor="infraction">Infraction: </label>
          <input onChange={(event) => {
            setInfraction(event.target.value)
          }} value={infraction} className="w-1/2 rounded-md border-2 border-rose-500 my-1" type="text" id="infraction" name="infraction"></input>

        </div>
        <div className="flex flex-row justify-between">
          <label className="my-2" htmlFor="action">Suggested Action: </label>
          <select onChange={(event) => {
            setAction(event.target.value)
          }} className="border-2 border-slate-500 rounded-md" name="action" id="action">
            <option value="Permaban">Permaban</option>
            <option value="Exile">Exile</option>
            <option value="The Brimpy Shpingle">The Brimpy Shpingle</option>
          </select>
        </div>
        <div className="flex justify-center">
          <button className="border-2 border-black bg-rose-500 p-1 rounded-md hover:bg-black hover:text-red-500" type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}
