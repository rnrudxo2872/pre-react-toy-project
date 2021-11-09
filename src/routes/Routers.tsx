import {BrowserRouter, Switch, Route} from "react-router-dom"
import Coins from "./Coins";

function Routers() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/">
                    <Coins />
                </Route>
            </Switch>
        </BrowserRouter>
    )    
}

export default Routers;