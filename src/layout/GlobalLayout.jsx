import { Outlet } from "react-router";
import { Header } from "../component/common/Header";
import Footer from "../component/common/Footer";

const GlobalLayout = () => {
    return (
        <div className="layout-container">
            <Header />

            <main className="main-content">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default GlobalLayout;
