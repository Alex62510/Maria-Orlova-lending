import React from "react";

/**
 * Maryia Arlova — Professional Profile Landing (React)
 * - Pure React + Tailwind classes (no external deps required)
 * - Copy-safe content for employer-facing profile
 * - No company names mentioned
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
    <span
        className="inline-flex items-center rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs sm:text-sm text-neutral-700 shadow-sm">
    {label}
  </span>
);

const Card = ({children}: { children: React.ReactNode }) => (
    <div
        className="rounded-2xl border border-neutral-200 bg-white shadow-sm">{children}</div>
);

const CardBody = ({children}: { children: React.ReactNode }) => (
    <div className="p-5 sm:p-6">{children}</div>
);

const Divider = () => <div className="h-px w-full bg-neutral-200"/>;

const ProfileHeader = () => {
    const chips = [
        "Supplier Coordination",
        "Inventory Management",
        "Logistics Support",
        "Operations Support",
    ];

    return (
        <header className="relative overflow-hidden">
            <div
                className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-50 via-white to-white"/>
            <div
                className="absolute -top-24 right-[-120px] h-72 w-72 rounded-full bg-emerald-100 blur-3xl opacity-60 -z-10"/>
            <div
                className="absolute -bottom-24 left-[-140px] h-72 w-72 rounded-full bg-emerald-100 blur-3xl opacity-50 -z-10"/>

            <Container>
                <div className="py-10 sm:py-14">
                    <div className="flex flex-col gap-8">
                        <div
                            className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                            <div className="max-w-3xl">
                                <div
                                    className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs text-neutral-700 shadow-sm">
                                    <span
                                        className="h-2 w-2 rounded-full bg-emerald-600"/>
                                    Independent Services
                                </div>

                                <h1 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight text-neutral-900">
                                    Maryia Arlova
                                </h1>
                                <p className="mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                                <span className="font-medium text-neutral-700">
                                Supply Chain &amp; Logistics Specialist
                                    </span>
                                    <span className="text-neutral-400"> — </span>
                                    Independent operations support

                                    <br/>

                                    <span className="text-neutral-500">
                                         This website provides official information about independent supply chain
                                         and logistics services offered by Maryia Arlova.
                                        </span>
                                </p>

                                <p className="mt-4 text-sm sm:text-base leading-relaxed text-neutral-600">
                                    I support international consumer goods and home décor
                                    businesses with day-to-day supply chain operations.
                                    My focus is on supplier coordination, inventory
                                    accuracy, and structured operational workflows that
                                    help
                                    teams stay organized, on time, and aligned across
                                    borders.
                                </p>

                                <p className="mt-4 text-xs sm:text-sm text-neutral-500">Remote
                                    · International · Operations &amp; Supply Chain
                                    Roles</p>

                                <div className="mt-5 flex flex-wrap gap-2">
                                    {chips.map((c) => (
                                        <Pill key={c} label={c}/>
                                    ))}
                                </div>
                            </div>
                            <div className="w-full max-w-sm">
                                <Card>
                                    <CardBody>
                                        <div className="flex items-center gap-4">
                                            {/* Replace src with your hosted image URL (Carrd/Vercel/static) */}
                                            <img
                                                src="/assets/photo_ava.jpg"
                                                alt="Maryia Arlova"
                                                className="h-46 w-46 rounded-2xl object-cover border border-neutral-200"
                                            />
                                            <div>
                                                <div
                                                    className="text-sm font-semibold text-neutral-900">Contact
                                                </div>
                                                <div
                                                    className="text-xs text-neutral-500">Business
                                                    inquiries & opportunities
                                                </div>
                                            </div>
                                        </div>

                                        <Divider/>

                                        <dl className="mt-4 grid gap-3 text-sm">
                                            <div
                                                className="grid grid-cols-[88px_1fr] gap-3">
                                                <dt className="text-neutral-500">Email</dt>
                                                <dd className="text-neutral-900 break-words">
                                                    <a className="hover:underline"
                                                       href="mailto:maria@ecomproject.com">
                                                        maria@ecomproject.com
                                                    </a>
                                                </dd>
                                            </div>
                                            <div
                                                className="grid grid-cols-[88px_1fr] gap-3">
                                                <dt className="text-neutral-500">Phone</dt>
                                                <dd className="text-neutral-900">
                                                    <a className="hover:underline"
                                                       href="tel:+375293173673">
                                                        +375 29 317 36 73
                                                    </a>
                                                </dd>
                                            </div>
                                            <div
                                                className="grid grid-cols-[88px_1fr] gap-3">
                                                <dt className="text-neutral-500">Address</dt>
                                                <dd className="text-neutral-900">
                                                    Aviachyonnaja St 13-127
                                                    <br/>
                                                    Kopische
                                                    <p>220081</p>

                                                    Belarus
                                                </dd>
                                            </div>
                                        </dl>

                                        <p className="mt-4 text-xs leading-relaxed text-neutral-500">
                                            This page provides official information about
                                            professional services offered by Maryia
                                            Arlova.
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

const QuickProfile = () => {
    const items = [
        "Supply Chain & Logistics Operations",
        "Supplier Communication & Coordination",
        "Inventory Tracking & Replenishment Support",
        "Cross-functional Operational Support",
        "Detail-oriented · Process-driven · Reliable",
    ];

    return (
        <Section id="quick-profile" title="Quick Profile">
            <div className="grid gap-3 sm:grid-cols-2">
                {items.map((t) => (
                    <div
                        key={t}
                        className="rounded-2xl border border-neutral-200 bg-white p-4 text-sm text-neutral-700 shadow-sm"
                    >
                        {t}
                    </div>
                ))}
            </div>
        </Section>
    );
};

const AboutMe = () => (
    <Section id="about" title="About Me">
        <Card>
            <CardBody>
                <p className="text-sm sm:text-base leading-relaxed text-neutral-700">
                    I am a supply chain and logistics specialist with hands-on experience
                    supporting international operations. I work
                    closely with suppliers, internal teams, and external partners to
                    ensure smooth coordination of orders, inventory,
                    and logistics processes.
                </p>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-neutral-700">
                    I’m comfortable working in structured environments, handling
                    operational details, maintaining documentation, and
                    supporting ongoing workflows that keep businesses running efficiently.
                    I value clarity, accuracy, and consistency
                    in day-to-day operations.
                </p>
            </CardBody>
        </Card>
    </Section>
);

const CoreServices = () => {
    const bullets = [
        "Supplier communication, follow-ups, and coordination",
        "Purchase order and production status tracking",
        "Inventory monitoring and availability support",
        "Logistics coordination and shipment readiness tracking",
        "Operational documentation and process alignment",
        "Ongoing support for international supply chain workflows",
    ];

    return (
        <Section id="services" title="Core Services">
            <Card>
                <CardBody>
                    <ul className="grid gap-3 sm:grid-cols-2">
                        {bullets.map((b) => (
                            <li key={b}
                                className="flex gap-3 rounded-xl border border-neutral-200 bg-white/70 p-3">
                <span
                    className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-600 text-white text-xs">
                  ✓
                </span>
                                <span className="text-sm text-neutral-700">{b}</span>
                            </li>
                        ))}
                    </ul>
                </CardBody>
            </Card>
        </Section>
    );
};

const ToolsAndMethods = () => {
    const tools = [
        "Spreadsheets for inventory tracking, order monitoring, and reporting",
        "Email and messaging platforms for supplier and partner communication",
        "Cloud-based document systems for operational documentation",
        "Task and workflow tracking tools to manage ongoing processes",
        "Structured reporting and status updates for cross-team alignment",
    ];

    return (
        <Section
            id="tools"
            title="Tools & Working Methods"
            subtitle="Commonly used operational tools and a structured, documentation-first approach."
        >
            <Card>
                <CardBody>
                    <p className="text-sm sm:text-base leading-relaxed text-neutral-700">
                        I work with commonly used operational and collaboration tools to
                        support supply chain and logistics processes.
                    </p>
                    <ul className="mt-4 grid gap-3">
                        {tools.map((t) => (
                            <li key={t}
                                className="rounded-xl border border-neutral-200 bg-white/70 p-3 text-sm text-neutral-700">
                                {t}
                            </li>
                        ))}
                    </ul>
                </CardBody>
            </Card>
        </Section>
    );
};

const Experience = () => (
    <Section
        id="experience"
        title="Professional Experience"
        subtitle="Operations-focused supply chain support for international workflows."
    >
        <Card>
            <CardBody>
                <div className="flex flex-col gap-2">
                    <div className="text-sm text-neutral-500">Role</div>
                    <div className="text-lg font-semibold text-neutral-900">Supply Chain &
                        Logistics Management (Remote)
                    </div>
                    <p className="mt-2 text-sm sm:text-base leading-relaxed text-neutral-700">
                        Providing ongoing operational support for international consumer
                        goods businesses. Responsibilities include
                        supplier coordination, inventory support, logistics process
                        tracking, and maintaining structured operational
                        workflows.
                    </p>
                    <div className="mt-5">
                        <div className="text-sm font-semibold text-neutral-900">Key
                            responsibilities
                        </div>
                        <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                            {[
                                "Coordinating communication with suppliers and partners",
                                "Supporting inventory planning and availability monitoring",
                                "Tracking production and logistics milestones",
                                "Maintaining operational documentation and status updates",
                                "Assisting with day-to-day supply chain operations",
                            ].map((b) => (
                                <li key={b}
                                    className="rounded-xl border border-neutral-200 bg-white/70 p-3 text-sm text-neutral-700">
                                    {b}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </CardBody>
        </Card>
    </Section>
);

const IndustryFocus = () => (
    <Section id="industry" title="Industry Focus">
        <div className="flex flex-wrap gap-2">
            {[
                "Consumer goods",
                "Home décor",
                "E-commerce operations",
                "International supply chains",
                "Remote operational teams",
            ].map((t) => (
                <Pill key={t} label={t}/>
            ))}
        </div>
    </Section>
);

const WorkStyle = () => (
    <Section id="work-style" title="Work Style">
        <Card>
            <CardBody>
                <ul className="grid gap-3 sm:grid-cols-2">
                    {[
                        "Detail-oriented and process-focused",
                        "Comfortable with routine operational tasks and follow-ups",
                        "Clear written communication",
                        "Able to work independently and remotely",
                        "Reliable support for ongoing business operations",
                    ].map((b) => (
                        <li key={b}
                            className="flex gap-3 rounded-xl border border-neutral-200 bg-white/70 p-3">
              <span
                  className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-600 text-white text-xs">
                ✓
              </span>
                            <span className="text-sm text-neutral-700">{b}</span>
                        </li>
                    ))}
                </ul>
            </CardBody>
        </Card>
    </Section>
);

const Availability = () => (
    <Section id="availability" title="Availability">
        <Card>
            <CardBody>
                <p className="text-sm sm:text-base text-neutral-700">
                    Open to remote opportunities in:
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {["Supply Chain Operations", "Logistics Coordination", "Supplier Management", "Inventory Operations", "Operations Support"].map(
                        (t) => (
                            <Pill key={t} label={t}/>
                        )
                    )}
                </div>
            </CardBody>
        </Card>
    </Section>
);

const Contact = () => (
    <Section id="contact" title="Contact">
        <Card>
            <CardBody>
                <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                        <div className="text-sm font-semibold text-neutral-900">Email
                        </div>
                        <div className="mt-1 text-sm text-neutral-700">
                            <a className="hover:underline"
                               href="mailto:maria@ecomproject.com">
                                maria@ecomproject.com
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className="text-sm font-semibold text-neutral-900">Phone
                        </div>
                        <div className="mt-1 text-sm text-neutral-700">
                            <a className="hover:underline" href="tel:+375293173673">
                                +375 29 317 36 73
                            </a>
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <div className="text-sm font-semibold text-neutral-900">Address
                        </div>
                        <div className="mt-1 text-sm text-neutral-700">
                            Aviachyonnaja St 13-127
                            <br/>
                            Kopische
                            <p>  220081</p>

                            Belarus
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>

        <div className="mt-6 text-center text-xs text-neutral-500">

            Independent Professional Profile · © 2026 Maryia Arlova. All rights reserved.
            <p className={''}>This website provides official information about independent professional
                services offered by Maryia Arlova.</p>
        </div>
    </Section>
);

export default function MaryiaProfileLanding() {
    return (
        <div className="min-h-screen bg-white text-neutral-900">
            <ProfileHeader/>
            <QuickProfile/>
            <AboutMe/>
            <CoreServices/>
            <ToolsAndMethods/>
            <Experience/>
            <IndustryFocus/>
            <WorkStyle/>
            <Availability/>
            <Contact/>
        </div>
    );
}