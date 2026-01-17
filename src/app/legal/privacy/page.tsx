export default function PrivacyPolicy() {
    return (
        <div className="space-y-10">
            <div>
                <h1 className="text-4xl font-black tracking-tight mb-4">Privacy Policy</h1>
                <p className="text-muted-foreground font-medium">Last Updated: January 17, 2026</p>
            </div>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold border-b border-border pb-4">1. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed">
                    At Atlania, we are committed to protecting your privacy. We collect information you provide directly to us (e.g., when you create an account, subscribe to a newsletter, or contact support) and information collected automatically (e.g., usage data, device information, and cookies).
                </p>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold border-b border-border pb-4">2. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                    We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-muted-foreground font-medium">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Personalize your experience on the Platform</li>
                    <li>Send you technical notices and support messages</li>
                    <li>Communicate with you about features, news, and updates</li>
                </ul>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold border-b border-border pb-4">3. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                    We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.
                </p>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold border-b border-border pb-4">4. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed">
                    Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your data. You can exercise these rights through your account settings or by contacting us.
                </p>
            </section>
        </div>
    );
}
