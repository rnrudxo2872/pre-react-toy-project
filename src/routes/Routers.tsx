import {BrowserRouter, Switch, Route} from "react-router-dom"
import CoinDetail from "./CoinDetail";
import Coins from "./Coins";

function Routers() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path="/:id">
                    <CoinDetail />
                </Route>
                <Route path="/">
                    <Coins />
                </Route>
            </Switch>
        </BrowserRouter>
    )    
}

export default Routers;