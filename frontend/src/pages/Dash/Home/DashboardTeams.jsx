import React from "react";
import Teams from "./Teams";
import Profile from "./Profile";

export default function DashboardTeams(props) {
  const { data } = props;

  return (
    <div className="col-12 ">
      <div className="container">
        <div className="row justify-content-between gap-lg-1 gap-4">
          <Profile data={data} />
          <Teams data={data} />
        </div>
      </div>
    </div>
  );
}
