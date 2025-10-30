import { useState } from "react";
import Container from "./Container";
import { cn } from "../../lib/utilities";
import { BsMenuButton } from "react-icons/bs";
import Button from "./Button";
import { CgMenu } from "react-icons/cg";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-md  border-b border-b-black/10 h-19  ">
            <div className="border-b border-b-black/10 py-5  fixed top-0 bg-white w-full z-50">
                <Container className="flex items-center justify-between w-full ">
                    <div className={""}>
                        {/* Replace with your logo */}
                        <img src="/images/logo.png" alt="Logo" />
                    </div>

                    {/* Hamburger menu for mobile */}

                    {/* Navigation menu */}
                    <nav
                        className={cn(
                            isMenuOpen
                                ? "border-t border-t-black/10"
                                : "hidden",
                            "md:block"
                        )}
                    >
                        <ul className=" absolute bg-white   right-0 left-0 top-19 md:relative md:top-0 md:left-0 md:flex items-center justify-center gap-10">
                            <li className=" hover:bg-black/70 hover:md:bg-transparent hover:text-white hover:md:text-[#8C7050] text-[#333333] px-5">
                                <a href="/#about" className="py-4 block">
                                    About
                                </a>
                            </li>
                            <li className=" hover:bg-black/70 hover:md:bg-transparent hover:text-white hover:md:text-[#8C7050] text-[#333333] px-5">
                                <a href="/#products" className="py-4 block">
                                    Products
                                </a>
                            </li>
                            <li className=" hover:bg-black/70 hover:md:bg-transparent hover:text-white hover:md:text-[#8C7050] text-[#333333] px-5">
                                <a href="#" className="py-4 block">
                                    Sustainability
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <button
                        className={"block md:hidden  text-2xl w-fit"}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <CgMenu />
                    </button>

                    {/* CTA Button */}
                    <a href="/contact" className="hidden md:block   ">
                        <Button className={cn("px-10.5")} variant="outline">
                            Get in Touch
                        </Button>
                    </a>
                </Container>
            </div>
        </header>
    );
};
