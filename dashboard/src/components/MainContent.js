import { Route, Switch } from "react-router-dom";
import DashboardContent from "./DashboardContent";
import Footer from "./Footer";
import UsersInDbCard from "./UsersInDBCard";
import OficiosInDbCard from "./OficiosInDBCard";
import HelpersInDbCard from "./HelpersInDBCard";
import TopBar from "./TopBar";

function MainContent() {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <TopBar />

        <div className="container-fluid">
          <Switch>
            <Route path="/" exact component={DashboardContent} />
            <Route path="/users" component={UsersInDbCard} />
            <Route path="/oficios" component={OficiosInDbCard} />
            <Route path="/helpers" component={HelpersInDbCard} />
          </Switch>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default MainContent;
