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
      <div className={`row ${this.state.bgColor}`}>
        {this.state.helpers.map((helper) => {
          return (
            <div key={helper.id} className="col-lg-6 mb-4">
              <div className="card bg-gray-600 text-white shadow">
                <div className="card-body">
                  <h5 style={{ paddingBottom: "5px" }}>{helper.full_name}</h5>
                  <p style={{ marginBottom: "2px" }}>
                    {helper.nombre_oficio} | ${helper.tarifa}/h
                  </p>
                  <p>Experiencia: {helper.anos_de_experiencia} años</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:3000/api/helpers");
    const helperListData = await response.json();
    this.setState({
      helpers: helperListData.helper,
    });
  }
}

export default HelpersInDb;
