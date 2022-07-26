import React, { Component } from "react";


class OficiosInDbCount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Oficios in database",
      value: null,
      icon: "fa-briefcase",
      color: "warning",
    };
  }

  render() {
    if (!this.state.value) {
      return "Cargando...";
    }

    return (
      <div className="col-md-4 mb-4">
        <div
          className={`card border-left-${this.state.color} shadow h-100 py-2`}
        >
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div
                  className={`text-xs font-weight-bold text-${this.state.color} text-uppercase mb-1`}
                >
                  {this.state.title}
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  {this.state.value}
                </div>
              </div>
              <div className="col-auto">
                <i className={`fas ${this.state.icon} fa-2x text-gray-300`}></i>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:3000/api/oficios");
    const oficiosListData = await response.json();
    this.setState({
      value: oficiosListData.count,
    });
  }
}

export default OficiosInDbCount;
