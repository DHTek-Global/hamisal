import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import Container from "./Container";
import Button from "./Button";

// Social data
const socials = [
    {
        icon: <FaFacebook />,
        href: "https://facebook.com/hamisalgroup",
        label: "Facebook",
    },
    {
        icon: <BsInstagram />,
        href: "https://instagram.com/hamisalgroup",
        label: "Instagram",
    },
    {
        icon: <LiaLinkedin />,
        href: "https://linkedin.com/company/hamisalgroup",
        label: "LinkedIn",
    },
];

// Phone data (you can add more if needed)
const phones = [
    {
        id: 1,
        text: "+234 906 213 3781",
        url: "tel:2349062133781",
    },
    {
        id: 2,
        text: "+234 750 779 316",
        url: "tel:234750779316",
    },
    {
        id: 3,
        text: "+234 790 4627",
        url: "tel:2347904627",
    },
    {
        id: 4,
        text: "+234 802 025 257",
        url: "tel:234802025257",
    },
];

export default function Footer() {
    return (
        <footer className="bg-white py-8 border-t border-gray-200">
            <Container className=" 8">
                {/* Top Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Logo + Socials + Email */}
                    <div className="flex flex-col ">
                        <a href="/" className="">
                            <img
                                src="/images/logo.png"
                                alt="logo"
                                className="w-23.5"
                            />
                        </a>

                        {/* Social Icons (mapped) */}
                        <div className="flex space-x-4 mt-5">
                            {socials.map(({ icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="text-gray-600 hover:text-amber-700 transition-colors"
                                >
                                    <Button
                                        variant="outline"
                                        className="w-12 h-8 p-0 m-0 f_center"
                                    >
                                        <div size={20}>{icon}</div>
                                    </Button>
                                </a>
                            ))}
                        </div>

                        <a
                            href="mailto:info@hamisalgroup.com.ng"
                            className=" text-[#8C7050] hover:text-amber-700 mt-2.5"
                        >
                            info@hamisalgroup.com.ng
                        </a>
                    </div>

                    {/* Navigation */}
                    <nav className="flex gap-10 justify-center ">
                        {[
                            { id: 1, text: "About", url: "/#about" },
                            { id: 2, text: "Products", url: "/#products" },
                            {
                                id: 3,
                                text: "Sustainability",
                                url: "#",
                            },
                        ].map(({ id, text, url }) => (
                            <a
                                key={id}
                                href={url}
                                className="block hover:text-[#8c7050] transition-colors h-fit"
                            >
                                {text}
                            </a>
                        ))}
                    </nav>

                    {/* Address + Phones */}
                    <div className="flex text-left md:text-right flex-col space-y-3  text-[#010101]">
                        <p>
                            Km 15 Old Oyo-Iseyin Road,
                            <br />
                            Oopeole Goat Farm Centre,
                            <br />
                            Fasola Village, Oyo, Oyo State, Nigeria
                        </p>

                        {/* Phone Links (mapped with tel:) */}
                        <div className="flex gap-1 md:justify-end ">
                            {phones?.slice(0, 2)?.map(({ text, url }) => (
                                <a
                                    key={text}
                                    href={url}
                                    className="block hover:text-[#8c7050] group transition-colors"
                                >
                                    {text}{" "}
                                    <span className="hidden group-first:inline">
                                        |
                                    </span>
                                </a>
                            ))}
                        </div>
                        <div className="flex gap-1 md:justify-end ">
                            {phones?.slice(2, 4)?.map(({ text, url }) => (
                                <a
                                    key={text}
                                    href={url}
                                    className="block hover:text-[#8c7050] group transition-colors"
                                >
                                    {text}{" "}
                                    <span className="hidden group-first:inline">
                                        |
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
            <div className="">
                <hr className="my-6 border-gray-200" />

                {/* Bottom Row */}
                <Container className="flex flex-col md:flex-row justify-between items-center text-sm ">
                    <div className="flex space-x-4 mb-2 md:mb-0">
                        <a href="#" className="hover:text-amber-700">
                            Cookie settings
                        </a>
                        <span>•</span>
                        <a href="#" className="hover:text-amber-700">
                            Privacy Policy
                        </a>
                        <span>•</span>
                        <a href="#" className="hover:text-amber-700">
                            Legal
                        </a>
                    </div>
                    <p>© Copyright 2025 – Hamisal Group LTD</p>
                </Container>
            </div>
        </footer>
    );
}
