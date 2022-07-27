import UsersInDbCard from "./UsersInDBCard";
import OficiosInDbCard from "./OficiosInDBCard";
import HelpersInDbCard from "./HelpersInDBCard";
import LastHelperCard from "./LastHelperCard"

function BigCardRow() {
  return (
    <div className="row">
      <UsersInDbCard />
      {/* <HelpersInDbCard /> */}
      <LastHelperCard />
      <OficiosInDbCard />
    </div>
  );
}

export default BigCardRow;
