import BigCardRow from "./BigCardRow";
import SmallCardRow from "./SmallCardRow";

function DashboardContent() {
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h2 mb-0 text-primary">Dashboard de Operaciones</h1>
      </div>
      <SmallCardRow />
      <BigCardRow />
    </>
  );
}

export default DashboardContent;
