import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function NewReport(props) {
  const [perpetrator, setPerpetrator] = useState("");
  const [infraction, setInfraction] = useState("");
  const [action, setAction] = useState("uninstall");
  const router = useRouter()

  const refreshData = () => {
    router.replace(router.asPath);
  }
// ----------------------------------------------------
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()
    
    const perpetrator= event.target.perpetrator.value
    const infraction= event.target.infraction.value
    const action= event.target.action.value

    const state = props.reports;
    state.unshift({perpetrator, infraction, action})

    // Get data from the form.
    const data = {
      perpetrator,
      infraction,
      action
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
    .then(refreshData())

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    // const result = await response.json()
    // alert(`Is this your full name: ${result.data}`)
  }

// ----------------------------------------------------


  return (
    <div className="flex flex-col m-2 border-2 border-rose-500 rounded-md p-2">
      <div className="font-semibold underline">File a Report:</div>
      <form onSubmit={handleSubmit} className="flex flex-col" action="/api/reports" method="POST">
        <label className="my-2" htmlFor="perpetrator">Perpetrator: </label>
        <input onChange={(event) => {
        setPerpetrator(event.target.value)
      }} value={perpetrator} className="rounded-md border-2 border-rose-500 my-2" type="text" id="perpetrator" name="perpetrator"></input>
        <label className="my-2" htmlFor="infraction">Infraction: </label>
        <input onChange={(event) => {
        setInfraction(event.target.value)
      }} value={infraction} className="rounded-md border-2 border-rose-500 my-2" type="text" id="infraction" name="infraction"></input>
        <div className="flex flex-row justify-between">
          <label className="my-2" htmlFor="action">Suggested Action: </label>
          <select onChange={(event) => {
          setAction(event.target.value)}} className="border-2 border-slate-500 rounded-md" name="action" id="action">
            <option value="Permaban">Permaban</option>
            <option value="Exile">Exile</option>
            <option value="The Brimpy Shpingle">The Brimpy Shpingle</option>
          </select>
        </div>
        <div className="flex justify-center">
          <button className="border-2 bg-rose-500 p-1 rounded-md hover:bg-black hover:text-red-500" type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}
