import React, { Component } from "react";

class UsersInDb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
      bgColor: "",
    };
  }

  render() {
    if (!this.state.users) {
      return "Cargando...";
    }

    return (
      <div className={`row ${this.state.bgColor}`}>
        {this.state.users.map((user) => {
          return (
            <div key={user.id} className="col-lg-6 mb-4">
              <div className="card bg-white text-primary shadow">
                <div className="card-body">
                  <img
                    src={"http://localhost:3000/" + user.user_image}
                    style={{
                      borderRadius: "10px",
                      height: "80px",
                      marginBottom: "10px",
                    }}
                  ></img>
                  <br />
                  <h5 className="center">{user.full_name}</h5>
                  <p>{user.email}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:3000/api/users");
    const usersListData = await response.json();
    this.setState({
      users: usersListData.users,
    });
  }
}

export default UsersInDb;
