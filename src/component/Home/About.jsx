import React from "react";
import Container from "../common/Container";
import { cn } from "../../lib/utilities";

const About = () => {
    const AboutData = [
        {
            id: 1,
            img: "/images/about/a_1.png",
            text: "Households for clean and efficient home heating",
            width: "w-[3.5625rem]",
        },

        {
            id: 2,
            img: "/images/about/a_2.png",
            text: "Industries for large-scale boilers and heating systems",
            width: "w-[2.5625rem]",
        },
        {
            id: 3,
            img: "/images/about/a_3.png",
            text: "Institutions for eco-conscious heating and energy management",
            width: "w-[3.9375rem]",
        },
    ];
    return (
        <div className="relative " id="about">
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
                <div className="w-full max-w-172.5">
                    <h3 className="text-sm capitalize text-[#8C7050] font-extrabold">
                        about us
                    </h3>
                    <h1 className="md:text-5xl text-[#8C7050] text-2xl font-bold">
                        Leading the Green Energy Revolution in Africa
                    </h1>
                    <p className="md:mt-10 mt-5">
                        Hamisal Group Ltd. is committed to promoting sustainable
                        energy alternatives across Africa and beyond. We
                        specialize in producing premium-grade wood pellets
                        sourced from responsibly managed forests and natural
                        wood residues. Our production process is environmentally
                        conscious and ensures maximum energy output with minimal
                        waste.
                    </p>
                    <div className="mt-5 md:mt-10">
                        <p>Our products are tailored for:</p>
                        <div className="mt-5">
                            <div className="grid gap-7.5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                {AboutData?.map((item) => {
                                    return (
                                        <div key={item?.id} className="">
                                            <div className="h-20">
                                                <img
                                                    src={item?.img}
                                                    alt={item?.text}
                                                    className={cn(
                                                        "max-w-[57px] block mx-auto md:mx-0",
                                                        item?.width
                                                    )}
                                                />
                                            </div>
                                            <p className="md:text-left text-sm text-center mt-2">
                                                {item?.text}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <p className="mt-5 md:mt-10">
                            With a focus on innovation, sustainability, and
                            customer satisfaction, Hamisal Group is shaping the
                            future of green energy—one pellet at a time.
                        </p>
                    </div>
                </div>

                <div className="w-fit">
                    <img
                        src="/images/about/about.jpg "
                        alt="about "
                        className="rounded-[2.5rem] w-full max-w-full md:h-145.5 object-cover md:max-w-[511px]"
                    />
                </div>
            </Container>
        </div>
    );
};

export default About;
