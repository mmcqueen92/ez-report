export default function RecentReportListItem (props) {
  return (
    <div className="border-2 border-rose-500 my-2 p-1">
      Perpetrator: {props.perpetrator}
      <br></br>
      Infraction: {props.infraction}
      <br></br>
      Action: {props.action}
    </div>
  )
}