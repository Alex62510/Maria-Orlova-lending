
import React from "react";

/**
 * Maryia Arlova — Business Profile Landing (React)
 * - Updated for business (Payoneer-ready)
 * - Paid services / contract-based positioning
 */

const Container = ({children}: { children: React.ReactNode }) => (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
);

const Section = ({
                     id,
                     title,
                     subtitle,
                     children,
                 }: {
    id?: string;
    title: string;
    subtitle?: string;
    children: React.ReactNode;
}) => (
    <section id={id} className="py-10 sm:py-4">
        <Container>
            <div className="flex flex-col gap-2">
                <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900">
                    {title}
                </h2>
                {subtitle ? (
                    <p className="text-sm sm:text-base text-neutral-600 max-w-3xl">{subtitle}</p>
                ) : null}
            </div>
            <div className="mt-6">{children}</div>
        </Container>
    </section>
);

const Pill = ({label}: { label: string }) => (
    <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs sm:text-sm text-neutral-700 shadow-sm">
        {label}
    </span>
);

const Card = ({children}: { children: React.ReactNode }) => (
    <div className="rounded-2xl border border-neutral-200 bg-white shadow-sm">{children}</div>
);

const CardBody = ({children}: { children: React.ReactNode }) => (
    <div className="p-5 sm:p-6">{children}</div>
);

const Divider = () => <div className="h-px w-full bg-neutral-200"/>;

/* ================= HEADER ================= */

const ProfileHeader = () => {
    const chips = [
        "Supplier Coordination",
        "Inventory Management",
        "Logistics Support",
        "Operations Support",
    ];

    return (
        <header className="relative overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-50 via-white to-white"/>
            <div className="absolute -top-24 right-[-120px] h-72 w-72 rounded-full bg-emerald-100 blur-3xl opacity-60 -z-10"/>
            <div className="absolute -bottom-24 left-[-140px] h-72 w-72 rounded-full bg-emerald-100 blur-3xl opacity-50 -z-10"/>

            <Container>
                <div className="py-10 sm:py-14">
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                            <div className="max-w-3xl">

                                <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs text-neutral-700 shadow-sm">
                                    <span className="h-2 w-2 rounded-full bg-emerald-600"/>
                                    Independent Service Provider · Paid Services
                                </div>

                                <h1 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight text-neutral-900">
                                    Maryia Arlova
                                </h1>

                                <p className="mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                                    <span className="font-medium text-neutral-700">
                                        Supply Chain & E-commerce Operations Specialist
                                    </span>
                                    <span className="text-neutral-400"> — </span>
                                    Contract-based business services
                                    <br/>
                                    <span className="text-neutral-500">
                                        This website provides information about paid, independent supply chain
                                        and logistics services offered by Maryia Arlova.
                                    </span>
                                </p>

                                <p className="mt-4 text-sm sm:text-base leading-relaxed text-neutral-600">
                                    I provide paid services to international consumer goods and e-commerce
                                    businesses, supporting supplier coordination, inventory accuracy,
                                    and structured operational workflows that help teams stay organized
                                    and aligned across markets.
                                </p>

                                <p className="mt-4 text-xs sm:text-sm text-neutral-500">
                                    Remote · International · Contract-based Services
                                </p>

                                <div className="mt-5 flex flex-wrap gap-2">
                                    {chips.map((c) => (
                                        <Pill key={c} label={c}/>
                                    ))}
                                </div>
                            </div>

                            {/* PHOTO BLOCK НЕ ТРОГАЕМ */}
                            <div className="w-full max-w-sm">
                                <Card>
                                    <CardBody>
                                        <div className="flex items-center gap-4">
                                            <img
                                                src="/assets/photo_ava.jpg"
                                                alt="Maryia Arlova"
                                                className="h-46 w-46 rounded-2xl object-cover border border-neutral-200"
                                            />
                                            <div>
                                                <div className="text-sm font-semibold text-neutral-900">Contact</div>
                                                <div className="text-xs text-neutral-500">
                                                    Business inquiries & opportunities
                                                </div>
                                            </div>
                                        </div>

                                        <Divider/>

                                        <dl className="mt-4 grid gap-3 text-sm">
                                            <div className="grid grid-cols-[88px_1fr] gap-3">
                                                <dt className="text-neutral-500">Email</dt>
                                                <dd className="text-neutral-900 break-words">
                                                    <a href="mailto:maria@ecomproject.com">
                                                        maria@ecomproject.com
                                                    </a>
                                                </dd>
                                            </div>
                                            <div className="grid grid-cols-[88px_1fr] gap-3">
                                                <dt className="text-neutral-500">Phone</dt>
                                                <dd>
                                                    <a href="tel:+375293173673">
                                                        +375 29 317 36 73
                                                    </a>
                                                </dd>
                                            </div>
                                            <div className="grid grid-cols-[88px_1fr] gap-3">
                                                <dt className="text-neutral-500">Address</dt>
                                                <dd>
                                                    Aviachyonnaja St 13-127<br/>
                                                    Kopische<br/>
                                                    220081<br/>
                                                    Belarus
                                                </dd>
                                            </div>
                                        </dl>

                                        <p className="mt-4 text-xs text-neutral-500">
                                            Independent service provider. All services are provided on a paid basis.
                                        </p>
                                    </CardBody>
                                </Card>
                            </div>

                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
};

/* ================= NEW BLOCK ================= */

const BusinessActivity = () => (
    <Section id="business" title="Business Activity">
        <Card>
            <CardBody>
                <p className="text-neutral-700">
                    This website represents my business activity as an independent service provider.
                    I provide paid, contract-based services in supply chain operations,
                    logistics coordination, and e-commerce support.
                </p>
                <p className="mt-4 text-neutral-700">
                    Services are offered directly to product-based businesses requiring operational
                    support in international and online commerce environments.
                </p>
                <p>My business activity consists of providing paid services to clients in e-commerce and supply chain operations.</p>
            </CardBody>
        </Card>
    </Section>
);

/* ================= ORIGINAL BLOCKS ================= */

const QuickProfile = () => {
    const items = [
        "Supply Chain & Logistics Operations",
        "Supplier Communication & Coordination",
        "Inventory Tracking & Replenishment Support",
        "Cross-functional Operational Support",
    ];

    return (
        <Section id="quick-profile" title="Quick Profile">
            <div className="grid gap-3 sm:grid-cols-2">
                {items.map((t) => (
                    <div key={t} className="rounded-2xl border p-4 text-sm">
                        {t}
                    </div>
                ))}
            </div>
        </Section>
    );
};

const AboutMe = () => (
    <Section id="about" title="Operations Overview">
        <Card>
            <CardBody>
                <p>
                    I provide operational support for international supply chain and e-commerce workflows,
                    working with suppliers, teams, and partners to ensure efficient coordination of
                    inventory, orders, and logistics processes.
                </p>
            </CardBody>
        </Card>
    </Section>
);

const CoreServices = () => {
    const bullets = [
        "Paid supplier communication and coordination",
        "Inventory tracking and replenishment support",
        "Logistics coordination and shipment tracking",
        "Purchase order and production monitoring",
        "Operational documentation and reporting",
        "Contract-based supply chain support",
    ];

    return (
        <Section id="services" title="Core Services">
            <Card>
                <CardBody>
                    <ul>
                        {bullets.map((b) => <li key={b}>{b}</li>)}
                    </ul>
                </CardBody>
            </Card>
        </Section>
    );
};

const Experience = () => (
    <Section id="experience" title="Professional Experience">
        <Card>
            <CardBody>
                Providing paid, contract-based services in supply chain coordination, logistics operations, and e-commerce support for international clients.
            </CardBody>
        </Card>
    </Section>
);

const IndustryFocus = () => (
    <Section id="industry" title="Industry Focus">
        <div className="flex flex-wrap gap-2">
            {["E-commerce", "Consumer goods", "Supply chains"].map((t) => (
                <Pill key={t} label={t}/>
            ))}
        </div>
    </Section>
);

const WorkStyle = () => (
    <Section id="work-style" title="Work Style">
        <Card>
            <CardBody>
                Reliable · Structured · Detail-oriented · Remote collaboration
            </CardBody>
        </Card>
    </Section>
);

const Availability = () => (
    <Section id="availability" title="Availability">
        <Card>
            <CardBody>
                Available for paid projects and contract-based services.
            </CardBody>
        </Card>
    </Section>
);

const Clients = () => (
    <Section id="clients" title="Who I Work With">
        <div className="flex flex-wrap gap-2">
            {[
                "E-commerce sellers",
                "Product-based brands",
                "Online retailers",
                "Small and medium-sized businesses",
            ].map((t) => (
                <Pill key={t} label={t}/>
            ))}
        </div>
    </Section>
);

const Contact = () => (
    <Section id="contact" title="Contact">
        <Card>
            <CardBody>
                <a href="mailto:maria@ecomproject.com">
                    maria@ecomproject.com
                </a>
                <p className="mt-4 text-xs text-neutral-500">
                    This is a service-based business operated by an independent professional.
                    All services are provided on a paid basis.
                </p>
            </CardBody>
        </Card>
    </Section>
);

/* ================= MAIN ================= */

export default function PayoneerBusinessLandingPage() {
    return (
        <div className="min-h-screen bg-white text-neutral-900">
            <ProfileHeader/>
            <BusinessActivity/>
            <QuickProfile/>
            <AboutMe/>
            <CoreServices/>
            <Experience/>
            <IndustryFocus/>
            <WorkStyle/>
            <Availability/>
            <Clients/>
            <Contact/>
        </div>
    );
}