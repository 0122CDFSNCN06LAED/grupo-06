import UsersInDbCard from "./UsersInDBCard";
import OficiosInDbCard from "./OficiosInDBCard";
import HelpersInDbCard from "./HelpersInDBCard";
import LastHelperCard from "./LastHelperCard";
import OficiosInDbCardPie from "./OficiosInDbCardPie";
function BigCardRow() {
  return (
    <div className="row">
      <UsersInDbCard />
      {/* <HelpersInDbCard /> */}
      <LastHelperCard /> 
      <OficiosInDbCardPie />
    </div>
  );
}

export default BigCardRow;
