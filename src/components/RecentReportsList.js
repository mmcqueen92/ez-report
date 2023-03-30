import RecentReportListItem from "./RecentReportListItem";

export default function RecentReports (props) {
  const reporples = props.reports.reverse();

  const reportArray = reporples.map((report) => {
    
    const key = (Math.random() + 1).toString(36).substring(7);
    return (
      <RecentReportListItem
      id={key}
      key={key}
      perpetrator={report.perpetrator}
      infraction={report.infraction}
      action={report.action}
      user={report.user}
      ></RecentReportListItem>
    )
  })

  return (
    <div className="flex flex-col items-center border-2 border-rose-500 rounded-md p-5 bg-rose-300 w-2/5">
      <div className="font-bold text-xl underline">Recent Reports</div>
      {reportArray}
    </div>
  )
}