import React from "react";
import Container from "../common/Container";
import Button from "../common/Button";

const Hero = () => {
    return (
        <div className="z-20 w-full lg:h-[600px] relative overflow-hidden">
            <div
                className="w-full absolute h-full"
                style={{
                    background:
                        "linear-gradient(180deg, rgba(1, 1, 1, 0) 0%, #010101 100%)",
                }}
            >
                <Container className=" absolute bottom-0 top-0 flex md:items-end md:pb-[60px] ">
                    <div className=" max-w-184.5 mt-3 ">
                        <h1 className="text-[1.3rem] sm:text-[1.5rem] md:text-[3.375rem] text-[#FFD700] font-bold leading-tight">
                            Best ECO-Friendly Domestic & Industrial Heating
                            Solutions
                        </h1>
                        <p className=" mt-2 md:mt-5 text-sm md:text-base md:font-medium text-white text-">
                            At Hamisal Group Ltd., we provide sustainable and
                            high-performance African wood pellets. Your perfect
                            choice for clean, efficient , and renewable energy.
                            <span className="md:inline hidden">
                                Our mission is to deliver ecofriendly heating
                                systems that meet both domestic and industrial
                                needs, helping you reduce carbon emissions while
                                maintaining excellent heating efficiency.
                            </span>
                        </p>
                        <p className="text-sm md:text-base mt-2 md:mt-10 text-[#FFD700]">
                            Go Green. Stay Warm. Choose Hamisal.
                        </p>

                        <Button
                            className="px-8.5 mt-2 md:mt-5 md:py-2.5 md:px-8.5 text-sm py-1 z-10 text-[#FFD700] border-[#FFD700]"
                            variant="outline"
                        >
                            Get in Touch
                        </Button>
                    </div>
                </Container>
            </div>
            <video loop autoPlay muted className="">
                <source src={"/video/hero.mp4"} type="video/mp4" />
            </video>
        </div>
    );
};

export default Hero;
