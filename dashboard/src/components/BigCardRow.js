import UsersInDbCard from "./UsersInDBCard";
import LastMovieInDb from "./LastMovieCard";
import OficiosInDbCard from "./OficiosInDBCard";
import HelpersInDbCard from "./HelpersInDBCard";
import LastHelperCard from "./LastHelperCard"

function BigCardRow() {
  return (
    <div className="row">
      {/* <!-- Last Movie in DB --> */}
      {/* <LastMovieInDb /> */}
      <UsersInDbCard />
      {/* <HelpersInDbCard /> */}
      <LastHelperCard />
      <OficiosInDbCard />
    </div>
  );
}

export default BigCardRow;
