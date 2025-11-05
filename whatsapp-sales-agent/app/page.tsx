export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[-20%] h-96 w-96 rounded-full bg-emerald-500/20 blur-[150px]" />
        <div className="absolute right-[-15%] top-[10%] h-[28rem] w-[28rem] rounded-full bg-emerald-400/10 blur-[160px]" />
        <div className="absolute bottom-[-15%] left-[25%] h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      <header className="sticky top-0 z-30 border-b border-white/10 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <span className="text-lg font-semibold tracking-tight">
            PulseFlow AI
          </span>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#features" className="transition hover:text-emerald-300">
              Features
            </a>
            <a href="#playbook" className="transition hover:text-emerald-300">
              Playbook
            </a>
            <a href="#pricing" className="transition hover:text-emerald-300">
              Pricing
            </a>
            <a href="#resources" className="transition hover:text-emerald-300">
              Resources
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="hidden rounded-full border border-white/15 px-4 py-2 text-sm font-medium transition hover:border-emerald-300/60 hover:text-emerald-300 md:inline-flex"
            >
              View Docs
            </a>
            <a
              href="#pricing"
              className="rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </header>

      <main className="relative flex-1">
        <section className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 pb-24 pt-28 text-center md:items-start md:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white/70">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            AI WhatsApp Sales Suite
          </div>
          <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] md:items-center md:gap-16">
            <div className="space-y-8">
              <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                Convert WhatsApp chats into qualified revenue on autopilot.
              </h1>
              <p className="text-lg text-white/70 md:text-xl">
                PulseFlow AI engages every inbound WhatsApp lead in real-time,
                qualifies intent, books meetings, and syncs outcomes with your
                CRM while keeping humans in the loop for high-impact moments.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-8 py-3 text-base font-semibold text-slate-950 transition hover:bg-emerald-300"
                >
                  Book a Live Demo
                </a>
                <a
                  href="#playbook"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3 text-base font-semibold text-white transition hover:border-emerald-300/60 hover:text-emerald-300"
                >
                  See the Playbook
                </a>
              </div>
              <div className="flex flex-col gap-3 text-left text-sm text-white/60 sm:flex-row sm:items-center sm:gap-6">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="h-8 w-8 rounded-full border border-slate-900 bg-gradient-to-br from-emerald-400 to-emerald-600" />
                    <div className="h-8 w-8 rounded-full border border-slate-900 bg-gradient-to-br from-cyan-400 to-cyan-600" />
                    <div className="h-8 w-8 rounded-full border border-slate-900 bg-gradient-to-br from-purple-400 to-purple-600" />
                  </div>
                  <span className="font-medium text-white">
                    1,200+ sales teams onboard
                  </span>
                </div>
                <div>
                  <span className="font-medium text-white">3.5x</span> faster
                  lead response • <span className="font-medium text-white">40%</span>{" "}
                  more meetings booked
                </div>
              </div>
            </div>
            <div className="relative hidden h-full w-full rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_80px_-30px_rgba(16,185,129,0.7)] md:flex">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/20" />
              <div className="relative flex w-full flex-col gap-4 rounded-2xl border border-white/10 bg-slate-950/80 p-6 backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300">
                    💬
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Incoming Lead</p>
                    <p className="font-semibold text-white">Sofia (Founder)</p>
                  </div>
                </div>
                <div className="rounded-2xl bg-white/5 p-4 text-left text-sm text-white/80">
                  <p className="font-semibold text-emerald-300">PulseFlow AI</p>
                  <p className="mt-1">
                    Hi Sofia! Saw you downloaded our WhatsApp playbook. Want me
                    to outline how teams like NovoB2B close 42% more deals with
                    real-time automations?
                  </p>
                </div>
                <div className="ml-auto rounded-2xl bg-emerald-400/10 p-4 text-left text-sm text-white/80">
                  <p className="font-semibold text-emerald-300">Sofia</p>
                  <p className="mt-1">
                    Absolutely. Can you also check if it syncs with HubSpot?
                  </p>
                </div>
                <div className="rounded-2xl bg-white/5 p-4 text-left text-sm text-white/80">
                  <p className="font-semibold text-emerald-300">PulseFlow AI</p>
                  <p className="mt-1">
                    Already connected. I&apos;ve reserved a 20-minute strategy
                    session with Maya tomorrow at 10:30 AM and pushed the details
                    to HubSpot for your team.
                  </p>
                </div>
                <div className="rounded-2xl bg-emerald-400/20 p-4 text-left text-sm text-white">
                  <p className="font-semibold text-slate-950">Outcome</p>
                  <p className="mt-1 text-slate-950/90">
                    Qualified, meeting booked, CRM updated, human notified
                    instantly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="relative mx-auto max-w-6xl px-6 pb-24 text-white"
        >
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
                Why PulseFlow
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                Automations tuned for WhatsApp-first pipelines.
              </h2>
            </div>
            <p className="max-w-xl text-base text-white/70">
              From first touch to closed won, PulseFlow orchestrates personalized,
              human-like conversations while qualifying intent, verifying data,
              and surfacing insights straight into your stack.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Conversational Playbooks",
                description:
                  "Deploy pre-trained AI agents that mirror your top sellers, adapt tone, and qualify leads in seconds.",
                icon: "🧠",
              },
              {
                title: "CRM + Calendar Sync",
                description:
                  "Push enriched context into HubSpot, Salesforce, or Pipedrive and book meetings without toggling tabs.",
                icon: "📅",
              },
              {
                title: "Revenue Intelligence",
                description:
                  "Surface health scores, objections, and buying signals across every WhatsApp thread in real time.",
                icon: "📈",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 transition hover:border-emerald-300/60 hover:shadow-[0_30px_80px_-40px_rgba(16,185,129,0.6)]"
              >
                <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                  <div className="absolute left-0 top-0 h-32 w-32 rounded-full bg-emerald-400/20 blur-[80px]" />
                </div>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-2xl">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm text-white/70">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="playbook"
          className="relative mx-auto max-w-6xl px-6 pb-24 text-white"
        >
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                Conversational Blueprint
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                Designed to plug into your sales motions in under a week.
              </h2>
            </div>
            <p className="max-w-xl text-base text-white/70">
              Launch a high-performing WhatsApp agent without the lift. Each step
              is orchestrated with transparent guardrails so your team can trust the
              AI to represent your brand.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Train",
                copy: "Import playbooks, brand tone, and FAQ. PulseFlow builds a tailored voice in minutes.",
              },
              {
                step: "02",
                title: "Integrate",
                copy: "Connect WhatsApp Business API, HubSpot, Calendly, Slack, and your CRM in one flow.",
              },
              {
                step: "03",
                title: "Launch",
                copy: "Start routing inbound leads instantly. Human override with 1-click for high-value prospects.",
              },
              {
                step: "04",
                title: "Optimize",
                copy: "Review analytics on response time, funnel leakage, and revenue lift to keep iterating.",
              },
            ].map((stage) => (
              <div
                key={stage.step}
                className="relative flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/[0.03] p-6"
              >
                <span className="text-sm font-semibold uppercase tracking-[0.4em] text-white/40">
                  {stage.step}
                </span>
                <h3 className="text-lg font-semibold text-white">{stage.title}</h3>
                <p className="text-sm text-white/70">{stage.copy}</p>
                <div className="mt-auto h-px w-full bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              </div>
            ))}
          </div>
        </section>

        <section
          id="analytics"
          className="relative mx-auto max-w-6xl px-6 pb-24 text-white"
        >
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
                Command Center
              </p>
              <h2 className="text-3xl font-semibold md:text-4xl">
                Every conversation, insight, and pipeline signal in one dashboard.
              </h2>
              <p className="text-base text-white/70">
                Monitor conversations, trigger playbooks, and unlock revenue metrics
                built for WhatsApp-first teams. PulseFlow provides granular control
                with real-time status and human takeover at any moment.
              </p>
              <ul className="grid gap-3 text-sm text-white/70 sm:grid-cols-2">
                {[
                  "Smart routing based on ICP, personas, or campaign source",
                  "Sentiment + intent scoring to prioritize human follow-up",
                  "Auto-enrichment via Clearbit, Apollo, and custom data sources",
                  "Compliance guardrails with full audit trails and approvals",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 rounded-xl border border-white/10 bg-white/5 p-3"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_80px_-40px_rgba(15,118,110,0.8)]">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-slate-900/80" />
              <div className="relative space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/60">Pipeline Impact</p>
                    <p className="text-2xl font-semibold text-emerald-300">
                      +$420k
                    </p>
                  </div>
                  <div className="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/60">
                    Live
                  </div>
                </div>
                <div className="grid gap-3 rounded-2xl border border-white/10 bg-slate-950/70 p-5">
                  <div className="grid gap-2 text-sm">
                    <div className="flex items-center justify-between text-white/70">
                      <span>Leads engaged</span>
                      <span className="font-semibold text-white">1,648</span>
                    </div>
                    <div className="flex items-center justify-between text-white/70">
                      <span>Avg. response time</span>
                      <span className="font-semibold text-white">4.2 sec</span>
                    </div>
                    <div className="flex items-center justify-between text-white/70">
                      <span>Meetings booked</span>
                      <span className="font-semibold text-white">392</span>
                    </div>
                    <div className="flex items-center justify-between text-white/70">
                      <span>Handoffs to humans</span>
                      <span className="font-semibold text-white">46</span>
                    </div>
                  </div>
                  <div className="h-32 rounded-xl bg-gradient-to-r from-emerald-400/40 via-emerald-500/20 to-transparent" />
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/10 p-4 text-sm text-white/70">
                  ⭐️ “PulseFlow AI gave us 12 days of rep time back every month.
                  Our SDRs now spend time closing, not chasing.”
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="relative mx-auto max-w-6xl px-6 pb-24 text-white"
        >
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Pricing
            </p>
            <h2 className="mt-5 text-3xl font-semibold md:text-4xl">
              Plans that scale with your pipeline.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/70">
              Start with a guided launch, then unlock advanced orchestration as your
              WhatsApp revenue channel matures.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Launch",
                price: "$449",
                cadence: "per month",
                highlight: "Perfect for early-stage sales teams and agencies.",
                benefits: [
                  "Up to 2 WhatsApp numbers",
                  "Pre-built qualification flows",
                  "HubSpot or Salesforce sync",
                  "Shared inbox with human takeover",
                  "Live onboarding specialist",
                ],
              },
              {
                name: "Scale",
                price: "$890",
                cadence: "per month",
                highlight: "Automation depth with unlimited playbooks and routing.",
                popular: true,
                benefits: [
                  "All Launch features",
                  "Unlimited WhatsApp numbers",
                  "Advanced routing + lead scoring",
                  "Custom CRM objects + webhooks",
                  "Analytics + revenue attribution",
                ],
              },
              {
                name: "Enterprise",
                price: "Let’s talk",
                cadence: "annual agreements",
                highlight: "For global teams needing compliance and high volume.",
                benefits: [
                  "Dedicated AI success architect",
                  "24/7 priority response SLAs",
                  "SOC2 + regional data residency",
                  "Custom model guardrails",
                  "On-prem connector options",
                ],
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-6 ${
                  plan.popular
                    ? "shadow-[0_30px_80px_-40px_rgba(56,189,248,0.7)] md:-translate-y-2"
                    : ""
                }`}
              >
                {plan.popular && (
                  <span className="absolute right-6 top-6 rounded-full bg-emerald-400 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-950">
                    Most popular
                  </span>
                )}
                <div>
                  <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                  <p className="mt-2 text-sm text-white/70">{plan.highlight}</p>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-semibold text-white">
                    {plan.price}
                  </span>
                  <span className="text-sm text-white/60">{plan.cadence}</span>
                </div>
                <ul className="space-y-3 text-sm text-white/70">
                  {plan.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${
                    plan.popular
                      ? "bg-emerald-400 text-slate-950 hover:bg-emerald-300"
                      : "border border-white/20 text-white hover:border-emerald-300/60 hover:text-emerald-300"
                  }`}
                >
                  {plan.name === "Enterprise" ? "Talk to sales" : "Start trial"}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section
          id="resources"
          className="relative mx-auto max-w-6xl px-6 pb-24 text-white"
        >
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
                Trusted by Revenue Leaders
              </p>
              <h2 className="text-3xl font-semibold md:text-4xl">
                Teams see measurable pipeline lift within the first 30 days.
              </h2>
              <div className="space-y-6">
                {[
                  {
                    quote:
                      "PulseFlow AI handles 86% of our WhatsApp volume with accurate qualification. Meetings doubled without adding headcount.",
                    name: "Layla Quinn",
                    role: "VP Revenue, NovaScale",
                  },
                  {
                    quote:
                      "The AI keeps brand tone perfect and triggers human handoff for enterprise prospects instantly. It feels like magic.",
                    name: "Arjun Patel",
                    role: "Head of Sales Ops, VertexLabs",
                  },
                ].map((testimonial) => (
                  <div
                    key={testimonial.name}
                    className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-sm text-white/80"
                  >
                    <p className="text-base text-white">
                      “{testimonial.quote}”
                    </p>
                    <p className="mt-4 font-semibold text-emerald-300">
                      {testimonial.name}
                    </p>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                      {testimonial.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6">
                <h3 className="text-lg font-semibold text-white">
                  WhatsApp Revenue Playbook
                </h3>
                <p className="mt-2 text-sm text-white/70">
                  A tactical guide covering scripts, automations, KPIs, and reporting
                  frameworks for modern sales teams.
                </p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition hover:text-emerald-200"
                >
                  Download the playbook →
                </a>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-lg font-semibold text-white">Live Workshop</h3>
                <p className="mt-2 text-sm text-white/70">
                  Join our weekly teardown where we rebuild WhatsApp funnels from
                  world-class revenue teams.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-white/60">
                  <span className="rounded-full border border-white/15 px-3 py-1">
                    Thursdays
                  </span>
                  <span className="rounded-full border border-white/15 px-3 py-1">
                    10:00 AM PT
                  </span>
                  <span className="rounded-full border border-white/15 px-3 py-1">
                    Limited seats
                  </span>
                </div>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center justify-center rounded-full bg-emerald-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
                >
                  Reserve my spot
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="font-semibold text-white">PulseFlow AI</span>{" "}
            © {new Date().getFullYear()} All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="transition hover:text-emerald-300">
              Security
            </a>
            <a href="#" className="transition hover:text-emerald-300">
              Privacy
            </a>
            <a href="#" className="transition hover:text-emerald-300">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
