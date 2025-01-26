import { BoxReveal } from "../../components/ui/box-reveal";

const BoxRevealDemo = () => {
    return (
        <div className="size-full items-center justify-center overflow-hidden pt-8">
            <BoxReveal boxColor={"#00c6ff"} duration={0.5}>
                <h1 className="head-text flex">
                    Hello, I'm{" "}
                    <span className="blue-gradient_text font-semibold drop-shadow">
                        {" "}
                        Kaustubh
                    </span>{" "}
                    👋
                </h1>
            </BoxReveal>

            <BoxReveal boxColor={"#0072ff"} duration={0.5}>
                <div className="mt-5 flex flex-col gap-3 text-black-500">
                    <p>
                        Software Engineer based in Dublin, specializing in
                        Full-Stack Development through hands-on learning and
                        building applications.
                    </p>
                </div>
            </BoxReveal>
        </div>
    );
};

export default BoxRevealDemo;
