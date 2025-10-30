import { cn } from "../../lib/utilities";

const Container = ({ className, children, ...props }) => {
    return (
        <div
            {...props}
            className={cn(
                "w-full max-w-[1540px] mx-auto px-5 md:px-20",
                className
            )}
        >
            {children}
        </div>
    );
};

export default Container;
