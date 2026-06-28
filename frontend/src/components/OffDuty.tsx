import Heading from "./Heading"
import Paragraph from "./Paragraph"

export default function OffDuty() {
    return (
        <section id="off-duty" className="min-h-screen flex flex-col items-center justify-center px-6">
            <Heading variant="secondary" addedStyle="mb-8 text-center">Off Duty</Heading>
            <div className="w-full flex flex-col gap-6 text-left items-center">
                <Paragraph>
                    The code gets committed. The laptop closes. Here's what happens next.
                </Paragraph>
                <Paragraph>
                    Most days you'll find me at the gym, lifting or running, whichever my body agrees to. When the weather cooperates, I'm out hiking. Mt. Ulap is a personal favorite, worth every step. Beaches too, but the quiet kind. No crowds, just good water and zero notifications.
                </Paragraph>
                <Paragraph>
                    When I'm too tired to do anything and wanna bedrot, I'd watch series or movies, mostly medieval/historical themed, sometimes Marvel or anime. Game of Thrones has my whole heart, except season 8, which we've collectively agreed not to discuss. Also deep into Knights of the Seven Kingdoms, and House of the Dragon. Team Black, no further questions.
                </Paragraph>
                <Paragraph>
                    Also deep in Witch Hat Atelier right now, the art alone is worth it, but the story keeps you. Classics that live rent-free in my head: Fullmetal Alchemist, Attack on Titan, Jujutsu Kaisen. Finished the Demon Slayer manga because waiting for the anime is not an option. Always open to recommendations if you've got something good.
                </Paragraph>
                <Paragraph>
                    If you made it this far, we probably have something in common. Whether it's the hiking, the anime, or the very strong feelings about GOT season 8, the contact page is right there.
                </Paragraph>
            </div>

        </section>
    )
}
