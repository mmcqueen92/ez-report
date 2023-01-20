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

  const handleNewReport = async ({  perpetrator, infraction, action  }) => {
    const state = props.reports;
    state.unshift({perpetrator, infraction, action})
    const { data  } = await axios.post('/api/reports', {
      perpetrator,
      infraction,
      action
    })
    .then(setPerpetrator(""))
    .then(setInfraction(""))
    .then(props.setReports(state))
    .then(refreshData())
  }




  
  return (
    <div className="flex flex-col m-2 border-2 border-rose-500 rounded-md p-2">
      <div className="font-semibold underline">File a Report:</div>
      <label className="my-2">Perpetrator: </label>

      <input className="rounded-md border-2 border-rose-500" type="text" id="new-report-perpetrator" onChange={(event) => {
        setPerpetrator(event.target.value)
      }} value={perpetrator}></input>

      <label className="my-2">Infraction: </label>

      <input className="rounded-md border-2 border-rose-500 my-2" type="text" id="new-report-infraction" onChange={(event) => {
        setInfraction(event.target.value)
      }} value={infraction}></input>

      <div className="flex flex-row justify-between">
        <label className="my-2">Suggested Disciplinary Action: </label>
        <select className="border-2 border-slate-500 rounded-md" name="suggested-action" id="suggested-action" onChange={(event) => {
          setAction(event.target.value)}}>
          <option value="Permaban">Permaban</option>
          <option value="Exile">Exile</option>
          <option value="The Brimpy Shpingle">The Brimpy Shpingle</option>
        </select>
      </div>
      <div className="flex justify-center">
        <button type="submit" className="border-2 bg-rose-500 p-1 rounded-md hover:bg-black hover:text-red-500" onClick={() => {handleNewReport({perpetrator, infraction, action})}}>Submit</button>
      </div>
    </div>
  )
}
