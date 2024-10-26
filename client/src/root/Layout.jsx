import { Outlet } from "react-router-dom";


const Layout = () => {
    return (
        <div>
            {/* header */}

            {/* outlet */}
            <Outlet />
            {/* footer */}
        </div>
    );
};

export default Layout;