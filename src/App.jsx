import { Route, Routes } from "react-router";
import HomePage from "./pages/Home/HomePage";
import GlobalLayout from "./layout/GlobalLayout";
import Contact from "./pages/Contact/Contact";

function App() {
    return (
        <Routes>
            <Route path="/" element={<GlobalLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/contact" element={<Contact />} />
            </Route>
        </Routes>
    );
}

export default App;
