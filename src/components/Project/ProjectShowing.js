import React from "react";
import {PortfolioWebsite} from "./ProjectPetComponent/PortfolioWebsite";
import {LoremIpsum} from "./ProjectPetComponent/LoremIpsum";
import {Route, Switch} from "react-router-dom";

export class ProjectShowing extends React.Component{
  render (){
    return(
      <div id="projectShowing">
        <Switch>
          <Route path="/projectpets/portfolioWebsite" component={PortfolioWebsite}/>
          <Route path="/projectpets/LoremIpsum1" component={LoremIpsum}/>
          <Route path="/projectpets/LoremIpsum2" component={LoremIpsum}/>
          <Route path="/projectpets/LoremIpsum3" component={LoremIpsum}/>
        </Switch>
      </div>
    )
  }
}
