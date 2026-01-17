export default function CookiePolicy() {
    return (
        <div className="space-y-10">
            <div>
                <h1 className="text-4xl font-black tracking-tight mb-4">Cookie Policy</h1>
                <p className="text-muted-foreground font-medium">Last Updated: January 17, 2026</p>
            </div>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold border-b border-border pb-4">1. What are cookies?</h2>
                <p className="text-muted-foreground leading-relaxed">
                    Cookies are small text files that are stored on your device when you visit a website. They help us remember your preferences, understand how you use our site, and improve your overall experience.
                </p>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold border-b border-border pb-4">2. Types of Cookies We Use</h2>
                <div className="grid gap-6">
                    <div className="bg-secondary/20 p-6 rounded-2xl">
                        <h3 className="text-lg font-bold mb-2">Essential Cookies</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Required for the website to function properly. They enable basic features like page navigation and secure areas.</p>
                    </div>
                    <div className="bg-secondary/20 p-6 rounded-2xl">
                        <h3 className="text-lg font-bold mb-2">Analytics Cookies</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Help us understand how visitors interact with our website by collecting and reporting information anonymously.</p>
                    </div>
                    <div className="bg-secondary/20 p-6 rounded-2xl">
                        <h3 className="text-lg font-bold mb-2">Functional Cookies</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Allow the website to remember choices you make (such as your user name or language) and provide enhanced features.</p>
                    </div>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold border-b border-border pb-4">3. Managing Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                    Most web browsers allow you to control cookies through their settings. However, please note that disabling cookies may affect the functionality of our website.
                </p>
            </section>
        </div>
    );
}
