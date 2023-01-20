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
    <div className="flex flex-col items-center">
      <div className="text-rose-500">Recent Reports</div>
      {reportArray}
    </div>
  )
}