import React from "react";
import { useRouteMatch } from "react-router-dom";

function About() {
  let match = useRouteMatch();
  return (
    <div>
      <h1>This is the about page</h1>
    </div>
  );
}

export default About;
