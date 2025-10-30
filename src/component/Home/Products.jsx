import React from "react";
import Container from "../common/Container";

const Products = () => {
    const data = [
        {
            id: 1,
            title: "15kg (2.5mm | 3mm | 4mm | 6mm | 8mm)",
            des: "Perfect for household stoves and small-scale boilers.",
        },
        {
            id: 2,
            title: "50kg (2.5mm | 3mm | 4mm | 6mm | 8mm)",
            des: "Suitable for commercial or institutional heating.",
        },
        {
            id: 3,
            title: "1000kg (2.5mm | 3mm | 4mm | 6mm | 8mm)",
            des: "Designed for industrial use and large facilities.",
        },
        {
            id: 1,
            title: "Custom kg (2.5mm | 3mm | 4mm | 6mm | 8mm)",
            des: "Tailored to fit specific customer requirements.",
        },
    ];
    return (
        <div id="products">
            <div className="relative bg-[#8C7050] text-white pt-10 md:pt-20 z-10">
                <img
                    src="/icons/leftCircle.png"
                    alt="icon illutration"
                    className="absolute top-0  -left-1"
                />
                <Container
                    className={
                        "  flex flex-col-reverse md:flex-row gap-5 f_btw relative "
                    }
                >
                    <div className="w-full max-w-172.5">
                        <h3 className="text-sm capitalize  font-extrabold">
                            our products
                        </h3>
                        <h1 className="md:text-5xl  text-2xl font-bold">
                            Best African Wood Pellets
                        </h1>
                        <p className="mt-3 md:mt-10">
                            We manufacture and supply eco-friendly wood pellets
                            that combine performance, sustainability, and
                            affordability. Our pellets are made from compressed
                            organic materials — including sawdust, forestry
                            residues, and agricultural by-products — ensuring a
                            100% renewable and carbon-neutral energy source.
                        </p>

                        <p className="mt-5 md:mt-10 font-medium md:text-lg">
                            Available Packaging Sizes:
                        </p>
                    </div>
                </Container>

                <div className=" mt-5 md:mt-10 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 ">
                    {data?.map((item, i) => {
                        return (
                            <div className="relative group max-h-81 overflow-hidden">
                                <img
                                    src={`/images/wood/w_${i + 1}.jpg`}
                                    alt=""
                                    className=" h-81 object-cover group-hover:scale-105 transition-all"
                                />
                                <div
                                    className="absolute left-0 top-0 right-0 bottom-0 flex items-end p-4"
                                    style={{
                                        background:
                                            "linear-gradient(180deg, rgba(1, 1, 1, 0) 49.98%, #010101 88.98%)",
                                    }}
                                >
                                    <div className="text-[#F8F8F8]">
                                        <h3 className="font-medium">
                                            {item?.title}
                                        </h3>
                                        <p className="mt-1.25 text-sm">
                                            {item?.des}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Products;
