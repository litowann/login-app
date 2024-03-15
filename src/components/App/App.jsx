import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Login} from "../Login";
import {ForgotPassword} from "../ForgotPassword";
import {ResetPassword} from "../ResetPassword";
import {Logo} from "../../assets/svg";
import {ROUTES} from "../../helpers/constants";

import "./App.scss";

const App = () => (
    <div className="wrapper">
        <Logo/>
        <Router>
            <div className="container">
                <Routes>
                    <Route exact path={ROUTES.LOGIN} element={<Login/>}/>
                    <Route
                        exact
                        path={ROUTES.FORGOT_PASSWORD}
                        element={<ForgotPassword/>}
                    />
                    <Route
                        exact
                        path={ROUTES.RESET_PASSWORD}
                        element={<ResetPassword/>}
                    />
                </Routes>
            </div>
        </Router>
    </div>
);

export default App;