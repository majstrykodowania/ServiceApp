import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import Dashboard from "./Views/Dashboard/Dashboard";
import UnassignedTasks from "./Views/UnassignedTasks/UnassignedTasks";
import TasksList from "./Views/TasksList/TasksList";
import RegisterNewTask from "./Views/RegisterNewTask/RegisterNewTask";
import Clients from "./Views/Clients/Clients";
import Store from "./Views/Store/Store";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Route exact path="/" component={Dashboard} />
        <Route path="/unassigned-tasks" component={UnassignedTasks} />
        <Route path="/tasks-list" component={TasksList} />
        <Route path="/new-task" component={RegisterNewTask} />
        <Route path="/clients" component={Clients} />
        <Route path="/store" component={Store} />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
