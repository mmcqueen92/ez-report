export default function RecentReportListItem(props) {

  return (
    <div key={props.id} className="border-2 border-slate-900 my-2 p-1 w-full rounded-md bg-slate-300">
      <div className="flex flex-row justify-between">
        <div className="flex font-semibold underline text-slate-900">
          Perpetrator:
        </div>
        <div className="font-semibold text-red-600 underline">
          {props.perpetrator}
        </div>
      </div>
      
      <div className="flex flex-row justify-between">
      <div className="flex font-semibold underline text-slate-900">
        Infraction:
        </div>
        <div className="font-semibold text-red-600 underline">
          {props.infraction}
        </div>
      </div>

      <div className="flex flex-row justify-between">
      <div className="flex font-semibold underline text-slate-900">
        Suggested Disciplinary Action:
        </div>
        <div className="font-semibold text-red-600 underline">
          {props.action}
        </div>
      </div>

      <div className="flex flex-row justify-between">
      <div className="flex font-semibold underline text-slate-900">
        Reported by:
        </div>
        <div className="text-slate-900">
          {props.user || "A anonymous concerned citizen"}
        </div>
      </div>
      

    </div>
  )
}