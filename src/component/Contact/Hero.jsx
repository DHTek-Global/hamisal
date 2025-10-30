import React from "react";
import Container from "../common/Container";

const Hero = () => {
    return (
        <div
            className="min-h-110 h-full pt-5 
             bg-cover bg-top bg-[url(/images/contactHero.jpg)] relative"
        >
            <div
                className=" absolute z-10 top-0 bottom-0 right-0 b left-0 flex items-end pb-7.5"
                style={{
                    background:
                        "linear-gradient(180deg, rgba(1, 1, 1, 0) 19.96%, #010101 94.44%)",
                }}
            >
                <Container className={""}>
                    <div className="max-w-153.5 z-20 ">
                        <h1 className="text-[1.3rem] sm:text-[1.5rem] md:text-[3.375rem] text-[#FFD700] font-bold leading-tight">
                            Get in Touch
                        </h1>

                        <p className="mt-3 text-white ">
                            If your query is urgent please contact us via the
                            phone number{" "}
                            <a className="font-bold" href="tel:+2349062133787">
                                +234 906 2133 787
                            </a>{" "}
                            |{" "}
                            <a className="font-bold" href="tel:+447501795136">
                                +44 750 1795 136
                            </a>{" "}
                            |{" "}
                            <a className="font-bold" href="tel:+32479044627">
                                +32479044627
                            </a>{" "}
                            |{" "}
                            <a className="font-bold" href="tel:+37068702557">
                                +37068702557
                            </a>{" "}
                            for the fastest response. Alternatively fill in the
                            form below and we will contact you asap.
                        </p>
                        <p className="mt-3 text-[#FFD700]">
                            *Indicates required fields
                        </p>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Hero;
