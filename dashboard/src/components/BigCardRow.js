import UsersInDbCard from "./UsersInDBCard";
import LastMovieInDb from "./LastMovieCard";
import OficiosInDbCard from "./OficiosInDBCard";

function BigCardRow() {
  return (
    <div className="row">
      {/* <!-- Last Movie in DB --> */}
      {/* <LastMovieInDb /> */}
      <UsersInDbCard />
      <OficiosInDbCard />
    </div>
  );
}

export default BigCardRow;
