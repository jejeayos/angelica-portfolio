import Paragraph from "./Paragraph";
import Heading from "./Heading";

export default function About() {
    return (
        <section id="about" className="min-h-screen flex flex-col items-center justify-center px-6">
            <Heading variant="secondary">About</Heading>
            <Paragraph>
                I'm a developer based in the Philippines who stumbled into code completely by accident, needed math subjects for engineering, ended up in Computer Science, and honestly? Best accidental decision I've ever made.
            </Paragraph>
            <Paragraph>
                I stayed because I love the puzzle of it. Debugging a tricky issue, simplifying something overcomplicated, finding a cleaner solution, that's the good stuff. I also care deeply about making things look as good as they work, which is probably why I ended up in frontend before going full stack.
            </Paragraph>
            <Paragraph>
                When I'm not coding, I'm either running (fun runs, casual runs, any runs), at the gym, hiking, at the beach, or starting yet another side project because I saw a new tech I wanted to try. My friends say I talk too much. My code says otherwise, clean, concise, no unnecessary lines.
            </Paragraph>
        </section>
    )
}