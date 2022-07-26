import React, { Component } from "react";

class OficiosInDb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oficios: null,
      bgColor: "",
    };
  }

  render() {
    if (!this.state.oficios) {
      return "Cargando...";
    }

    return (
      <div className={`row ${this.state.bgColor}`}>
        {this.state.oficios.map((oficio) => {
          return (
            <div key={oficio.id} className="col-lg-6 mb-4">
              <div className="card bg-info text-white shadow">
                <div className="card-body">
                  {oficio.name}
                  <br />
                  Usa Seguro:{" "}
                  {(() => {
                    if (oficio.usa_seguro == 0) {
                      return "Si";
                    } else {
                      return "No";
                    }
                  })()}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:3000/api/oficios");
    const oficiosListData = await response.json();
    this.setState({
      oficios: oficiosListData.oficios,
    });
  }
}

export default OficiosInDb;
