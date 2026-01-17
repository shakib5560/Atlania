export default function SecurityPage() {
    return (
        <div className="space-y-10">
            <div>
                <h1 className="text-4xl font-black tracking-tight mb-4">Security Overview</h1>
                <p className="text-muted-foreground font-medium">How we protect your data at Atlania.</p>
            </div>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold border-b border-border pb-4">Infrastructure Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                    Atlania is built on modern, secure cloud infrastructure. We utilize multi-layer security protocols including firewalls, intrusion detection systems, and automated security monitoring to identify and prevent potential threats.
                </p>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold border-b border-border pb-4">Data Protection</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="border border-border p-6 rounded-2xl">
                        <h3 className="font-bold mb-2">Encryption in Transit</h3>
                        <p className="text-sm text-muted-foreground">All data transmitted between your device and our servers is encrypted using industry-standard TLS protocols.</p>
                    </div>
                    <div className="border border-border p-6 rounded-2xl">
                        <h3 className="font-bold mb-2">Encryption at Rest</h3>
                        <p className="text-sm text-muted-foreground">Sensitive data, including user credentials and private content, is encrypted before being stored in our databases.</p>
                    </div>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold border-b border-border pb-4">Vulnerability Disclosure</h2>
                <p className="text-muted-foreground leading-relaxed">
                    We appreciate the help of security researchers in identifying potential vulnerabilities. If you believe you have found a security issue on our Platform, please report it to us immediately at <strong>security@atlania.studio</strong>.
                </p>
            </section>

            <div className="bg-primary/5 border border-primary/20 p-8 rounded-[2.5rem] mt-12">
                <h3 className="text-xl font-black mb-4 flex items-center gap-3 text-primary">
                    Trusted by developers worldwide.
                </h3>
                <p className="text-muted-foreground font-medium leading-relaxed">
                    We continuously audit our security practices and update our systems to defense against new threats. Your trust is our priority.
                </p>
            </div>
        </div>
    );
}
