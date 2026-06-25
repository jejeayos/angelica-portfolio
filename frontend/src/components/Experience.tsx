import experiences, {type Experience} from '@/data/experience';
import Heading from './Heading';

export default function Experiences() {

  const jobDescription = (descs : string[]) => descs.map((desc, index) => {
    return (
      <li key={index} className="description text-base">{desc}</li>
    );
  });

  const experienceComponent = (exp: Experience) => (
    <>
      <p className="font-heading text-2xl font-bold! text-text-primary">{exp.role}</p>
      <p className="text-lg text-text-primary mt-1">
        {exp.company}
        <span className="italic ml-2 text-text-secondary">{exp.startDate} – {exp.endDate}</span>
      </p>
      <ul className="mt-4 flex flex-col gap-2 list-disc list-outside pl-4">
        {jobDescription(exp.description)}
      </ul>
    </>
  )


  return (
    <section id="experience" className="min-h-screen flex flex-col items-center justify-center px-6">
      <Heading variant="secondary" addedStyle="mb-3">Experiences</Heading>
      {experiences.map((exp) => {
        return (<div key={exp.company + exp.role} className="w-full max-w-3xl bg-surface rounded-lg p-6 mb-6 border border-border">
          {experienceComponent(exp)}
        </div>)
      })}
    </section>
  );

};