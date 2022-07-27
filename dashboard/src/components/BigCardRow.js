import UsersInDbCard from "./UsersInDBCard";
import LastMovieInDb from "./LastMovieCard";
import OficiosInDbCard from "./OficiosInDBCard";
import HelpersInDbCard from "./HelpersInDBCard";

function BigCardRow() {
  return (
    <div className="row">
      {/* <!-- Last Movie in DB --> */}
      {/* <LastMovieInDb /> */}
      <UsersInDbCard />
      <HelpersInDbCard />
      <OficiosInDbCard />
    </div>
  );
}

export default BigCardRow;
