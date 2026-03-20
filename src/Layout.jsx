import {Outlet} from "react-router-dom";
import Header from "./components/Header";

const Layout = () => {
    return (
        <div id="content">

        <Outlet />

        <p>Footer</p>
        </div>

    );
};

export default Layout;