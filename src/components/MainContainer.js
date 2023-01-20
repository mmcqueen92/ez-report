import NewReport from './NewReport';
import RecentReportsList from './RecentReportsList';

export default function MainContainer(props) {
  return (
    <div className="flex-col items-center justify-center">
      <NewReport
        setReports={props.setReports}
        reports={props.reports}
      ></NewReport>

      <RecentReportsList
        reports={props.reports}></RecentReportsList>
    </div>
  )
}