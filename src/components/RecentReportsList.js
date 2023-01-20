import RecentReportListItem from "./RecentReportListItem";

export default function RecentReports (props) {
  const reporples = props.reports.reverse();

  const reportArray = reporples.map((report) => {
    return (
      <RecentReportListItem
      key={report.id}
      perpetrator={report.perpetrator}
      infraction={report.infraction}
      action={report.action}
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