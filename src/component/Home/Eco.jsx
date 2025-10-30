import Container from "../common/Container";

const Eco = () => {
    const data = [
        "Reduced carbon footprint",
        "Cleaner air and environment",
        "Sustainable forestry practices",
        "Renewable energy development across Africa",
    ];
    return (
        <div>
            <div className="relative ">
                <Container
                    className={
                        " py-8 md:py-20 flex flex-col-reverse md:flex-row gap-5 f_btw relative "
                    }
                >
                    <img
                        src="/icons/rightCircle.png"
                        alt="icon illutration"
                        className="absolute  -top-[67px] -right-1"
                    />
                    <div className="w-fit max-w-135.75">
                        <img
                            src="/images/eco.png"
                            alt="about "
                            className=" w-full max-w-full object-cover "
                        />
                    </div>

                    <div className="w-full max-w-172.5">
                        <h3 className="text-sm capitalize text-[#8C7050] font-extrabold">
                            Eco Commitment
                        </h3>
                        <h1 className="md:text-5xl text-[#8C7050] text-2xl font-bold">
                            Sustainability at the Core
                        </h1>
                        <p className="md:mt-10 mt-5">
                            We believe that energy should power progress—not
                            pollution. Our wood pellets are made from recycled
                            wood waste, reducing deforestation and promoting a
                            circular economy. By choosing Hamisal pellets, you
                            contribute to:
                        </p>
                        <div className="mt-5">
                            <ul className="space-y-5">
                                {data.map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-4 "
                                    >
                                        <span>•</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Eco;
