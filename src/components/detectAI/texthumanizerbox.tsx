import { cva } from 'class-variance-authority';

const boxStyles = cva('p-6 border rounded-lg shadow-lg mb-12 bg-gray-50', {
    variants: {
        status: {
            aiGenerated: 'border-red-600',
            humanWritten: 'border-green-600',
        },
    },
});

export function Texthumanizerbox({ text, status }: { text: string; status: 'aiGenerated' | 'humanWritten' }) {
    return (
        <section className={boxStyles({ status })}>
            <header className="mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Text Analysis</h2>
            </header>
            <p className="text-gray-600 leading-relaxed">
                <span className="underline bg-red-100">The Border Collie is a highly intelligent and versatile breed</span> known for its exceptional herding abilities. 
                <span className="underline bg-red-100">Originating from the border region between England and Scotland this</span>, this breed has been recognized as one of the most skilled working dogs in the world. 
                With their distinctive appearance and remarkable intelligence, Border Collies have become a popular choice for both working and companion dogs. 
                Physically, Border Collies are medium-sized dogs with a well-proportioned body and a strong, agile build. 
                <span className="underline bg-red-100">They have a dense double coat that comes in a variety of colors, including black and white, red and white, and tricolor</span>. 
                Their expressive eyes, usually brown but sometimes blue, are one of their most striking features, reflecting their intelligence and eagerness to please. 
                <span className="underline bg-red-100">These dogs require regular mental and physical stimulation to thrive</span>, making them ideal for active owners who can dedicate time to training and exercise.
                <span className="underline bg-red-100">Without proper engagement, they may develop behavioral issues due to boredom</span>, highlighting the importance of an enriched environment.
            </p>
            <footer className="mt-4">
                <span
                    className={`inline-block px-4 py-2 text-sm font-medium rounded-full ${
                        status === 'aiGenerated' ? 'bg-red-200 text-red-700' : 'bg-green-200 text-green-700'
                    }`}
                >
                    {status === 'aiGenerated' ? 'AI Generated' : 'Human Written'}
                </span>
            </footer>
        </section>
    );
}