import SmallCard from "./SmallCard";
import SmallCardUserCount from "./SmallCardUserCount"
import SmallCardOficioCount from "./SmallCardOficioCount"

// const statistics = [
//   {
//     title: "Users in database",
//     value: 21,
//     icon: "fa-user",
//     color: "primary",
//   },
//   {
//     title: "Total awards",
//     value: 79,
//     icon: "fa-award",
//     color: "success",
//   },
//   {
//     title: "Actors quantity",
//     value: 49,
//     icon: "fa-user",
//     color: "warning",
//   },
// ];

function SmallCardRow() {
  return (
    <div className="row">
      {/* {statistics.map((stat) => {
        return <SmallCard key={stat.title} {...stat} />;
      })} */}
      <SmallCardUserCount />
      <SmallCardOficioCount />
    </div>
  );
}

export default SmallCardRow;
