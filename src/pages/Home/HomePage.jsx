import About from "../../component/Home/About";
import Eco from "../../component/Home/Eco";
import Hero from "../../component/Home/Hero";
import Products from "../../component/Home/Products";

const HomePage = () => {
    return (
        <div>
            <Hero />
            <About />
            <Products />
            <Eco />
        </div>
    );
};

export default HomePage;
