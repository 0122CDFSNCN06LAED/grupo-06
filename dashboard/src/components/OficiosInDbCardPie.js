import React, { Component } from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer, Cell } from "recharts";
import BigCard from "./BigCard";
import OficiosInDb from "./OficiosInDb";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#EE82EE"];


class OficiosInDbCardPie extends Component {
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
      <BigCard title="Cantidad de Helper por Oficio">
        <div className={`row`}>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={this.state.oficios}
                dataKey="countOficios"
                nameKey="nombre_oficio"
                cx="50%"
                cy="50%"
                outerRadius={100}
                innerRadius={40}
                fill="#183153"
              >
                {this.state.oficios.map((entry, index) => (
                  <Cell fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="col-lg-6 mb-4" width="100%"></div>
        </div>
        <OficiosInDb />
      </BigCard>
    );
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:3000/api/helpers");
    const oficiosListData = await response.json();
    const data = oficiosListData.group;
    console.log(data)
    this.setState({
      oficios: data,
    });
  }
}

export default OficiosInDbCardPie;
