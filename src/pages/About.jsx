import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA, BoxRevealDemo } from "../components";
import { experiences, skills, freelance, education } from "../constants";

import "react-vertical-timeline-component/style.min.css";

import { cn } from "../../lib/utils";
import { DotPattern } from "../../components/ui/dot-pattern";

// import BoxRevealDemo from "../components";

const About = () => {
    return (
        <section className="max-container">
            <BoxRevealDemo />

            <div className="left-0 w-full h-full absolute">
                <DotPattern
                    className={cn(
                        "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
                    )}
                />
            </div>
            <div className="py-10 flex flex-col">
                <h3 className="subhead-text">My Skills</h3>
                <div className="mt-16 flex flex-wrap gap-12">
                    {skills.map((skill) => (
                        <div
                            className="block-container w-20 h-20"
                            key={skill.name}
                        >
                            <div className="btn-back rounded-xl" />
                            <div className="btn-front rounded-xl flex justify-center items-center">
                                <img
                                    src={skill.imageUrl}
                                    alt={skill.name}
                                    className="w-1/2 h-1/2 object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* <div className="mt-16 gap-16">
                <h3 className="subhead-text my-8">My Education</h3>
                {education.map((project) => (
                    <div className="w-full" key={project.name}>
                        <div className="block-container w-12 h-12">
                            <div
                                className={`btn-back rounded-xl ${project.theme}`}
                            />
                            <div className="btn-front rounded-xl flex justify-center items-center">
                                <img
                                    src={project.iconUrl}
                                    alt="threads"
                                    className="w-1/2 h-1/2 object-contain"
                                />
                            </div>
                        </div>

                        <div className="mt-5 flex flex-col">
                            <h4 className="text-2xl font-poppins font-semibold">
                                {project.name}
                            </h4>
                        </div>
                    </div>
                ))}
            </div> */}

            <div className="py-16">
                <h3 className="subhead-text">Work Experience.</h3>
                <div className="mt-5 flex flex-col gap-3 text-slate-500">
                    <p>
                        I've worked with all sorts of companies, leveling up my
                        skills and teaming up with smart people. Here's the
                        rundown:
                    </p>
                </div>

                <div className="mt-12 flex">
                    <VerticalTimeline>
                        {experiences.map((experience, index) => (
                            <VerticalTimelineElement
                                key={experience.company_name}
                                date={experience.date}
                                iconStyle={{
                                    background: experience.iconBg,
                                }}
                                icon={
                                    <div className="flex justify-center items-center w-full h-full">
                                        <img
                                            src={experience.icon}
                                            alt={experience.company_name}
                                            className="w-[70%] h-[70%] object-contain"
                                        />
                                    </div>
                                }
                                contentStyle={{
                                    borderBottom: "8px",
                                    borderStyle: "solid",
                                    borderBottomColor: experience.iconBg,
                                    boxShadow: "none",
                                }}
                            >
                                <div>
                                    <h3 className="text-black text-xl font-poppins font-semibold">
                                        {experience.title}
                                    </h3>
                                    <p
                                        className="text-black-500 font-medium text-base"
                                        style={{ margin: 0 }}
                                    >
                                        {experience.company_name}
                                    </p>
                                </div>

                                <ul className="my-5 list-disc ml-5 space-y-2">
                                    {experience.points.map((point, index) => (
                                        <li
                                            key={`experience-point-${index}`}
                                            className="text-black-500/50 font-normal pl-1 text-sm"
                                        >
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </div>

            <hr className="border-slate-200" />

            <CTA />
        </section>
    );
};

export default About;
