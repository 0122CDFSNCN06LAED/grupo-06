import BigCard from "./BigCard";

import React, { Component } from "react";

class HelpersInDb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      helpers: null,
      bgColor: "",
    };
  }

  render() {
    if (!this.state.helpers) {
      return "Cargando...";
    }

    return (
      <BigCard title="Último Helper registrado">
        <div className="text-center">
          <img
            className="img-fluid px-3 px-sm-4 mt-3 mb-4"
            style={{
              width: "40rem",
            }}
            src={"http://localhost:3000/" + this.state.helpers[0].user_image}
            alt=" Star Wars - Mandalorian "
          />
        </div>
        <h4>{this.state.helpers[0].full_name}</h4>
        <h5>
          {this.state.helpers[0].nombre_oficio} | $
          {this.state.helpers[0].tarifa} /h
        </h5>
        <p>{this.state.helpers[0].descripcion}</p>
        <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">
          Ver detalle
        </a>
      </BigCard>
    );
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:3000/api/helpers/last");
    const helperListData = await response.json();
    this.setState({
      helpers: helperListData.helper,
    });
  }
}

export default HelpersInDb;


// export default function LastMovieInDb() {
//   return (
//     <BigCard title="Last movie in database">
//       <div className="text-center">
//         <img
//           className="img-fluid px-3 px-sm-4 mt-3 mb-4"
//           style={{
//             width: "40rem",
//           }}
//           src="/mandalorian.jpg"
//           alt=" Star Wars - Mandalorian "
//         />
//       </div>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
//         consequatur explicabo officia inventore libero veritatis iure voluptate
//         reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem
//         culpa citationem ratione aperiam voluptatum non corporis ratione aperiam
//         voluptatum quae dolorem culpa ratione aperiam voluptatum?
//       </p>
//       <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">
//         View movie detail
//       </a>
//     </BigCard>
//   );
// }
