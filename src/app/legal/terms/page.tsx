export default function TermsOfService() {
    return (
        <div className="space-y-10">
            <div>
                <h1 className="text-4xl font-black tracking-tight mb-4">Terms of Service</h1>
                <p className="text-muted-foreground font-medium">Last Updated: January 17, 2026</p>
            </div>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold border-b border-border pb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                    By accessing and using Atlania (the "Platform"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Platform. We reserve the right to modify these terms at any time, and your continued use of the Platform after such changes signifies your acceptance.
                </p>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold border-b border-border pb-4">2. User Accounts</h2>
                <p className="text-muted-foreground leading-relaxed">
                    To access certain features, you must create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
                </p>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold border-b border-border pb-4">3. Content Ownership</h2>
                <p className="text-muted-foreground leading-relaxed">
                    Writers retain all ownership rights to the content they publish on Atlania. However, by publishing content, you grant Atlania a non-exclusive, worldwide, royalty-free license to use, display, and distribute your content for the purpose of operating the Platform.
                </p>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold border-b border-border pb-4">4. Prohibited Conduct</h2>
                <p className="text-muted-foreground leading-relaxed">
                    You agree not to use the Platform for any unlawful purpose or in any way that could harm, disable, overburden, or impair the Platform. This includes but is not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-muted-foreground font-medium">
                    <li>Harassing or threatening other users</li>
                    <li>Publishing spam or deceptive content</li>
                    <li>Attempting to bypass security measures</li>
                    <li>Scraping content without permission</li>
                </ul>
            </section>
        </div>
    );
}
