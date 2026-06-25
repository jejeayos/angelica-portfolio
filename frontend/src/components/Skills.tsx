import skills from "@/data/skills"; 
import Heading from "./Heading";

export default function Skills() {

    const skillsComponent = (skillsArr : string[]) => skillsArr.map((skill, index) => {
    return (
        <span key={index} className="px-3 py-1 rounded-full bg-surface border border-border text-sm text-text-secondary">
            {skill}
        </span>

    );
  });

    return (
        <section id="skills" className="min-h-screen flex flex-col items-center justify-center px-6">
        <Heading variant="secondary" addedStyle="mb-3">Skills</Heading>
        {skills.map((skillCategory) => {
            return (
            <div key={skillCategory.category} className="w-full max-w-3xl bg-surface rounded-lg p-6 mb-6 border border-border">
                <p className="category font-heading text-2xl font-bold! text-text-primary mb-2">{skillCategory.category}</p>
                <div className="flex flex-wrap gap-2">
                    {skillsComponent(skillCategory.skills)}
                </div>
            </div>)
        })}
        </section>
    );

};