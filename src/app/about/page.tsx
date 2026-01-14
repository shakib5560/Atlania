import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="container mx-auto px-4 py-12 md:py-20">
            {/* Intro */}
            <section className="max-w-4xl mx-auto text-center mb-20">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">We are <span className="text-primary">Atlania.</span></h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    A diverse team of writers, thinkers, and creators dedicated to bringing you the most forward-thinking perspectives on technology, lifestyle, and the future of work.
                </p>
            </section>

            {/* Stats */}
            <section className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-border py-12 mb-20">
                <div className="text-center">
                    <div className="text-4xl font-bold mb-2">2M+</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wider">Readers</div>
                </div>
                <div className="text-center">
                    <div className="text-4xl font-bold mb-2">500+</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wider">Articles</div>
                </div>
                <div className="text-center">
                    <div className="text-4xl font-bold mb-2">50+</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wider">Writers</div>
                </div>
                <div className="text-center">
                    <div className="text-4xl font-bold mb-2">10</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wider">Countries</div>
                </div>
            </section>

            {/* Content Side by Side */}
            <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <div className="relative aspect-square rounded-2xl overflow-hidden ">
                    <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop" alt="Team" fill className="object-cover" />
                </div>
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold">Our Mission</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        We believe in the power of words to change the world. Our mission is to provide high-quality resource for professionals and enthusiasts alike.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </section>
        </main>
    );
}
