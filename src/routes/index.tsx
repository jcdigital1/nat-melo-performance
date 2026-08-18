import { createFileRoute } from "@tanstack/react-router";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  Award,
  BadgeCheck,
  Dumbbell,
  Flame,
  GraduationCap,
  Instagram,
  Rocket,
  ShieldCheck,
  Smartphone,
  Timer,
  TrendingUp,
  Zap,
} from "lucide-react";

import { Header } from "@/components/site/Header";
import { Reveal } from "@/components/site/Reveal";
import { WhatsappFab } from "@/components/site/WhatsappFab";
import { WhatsappIcon } from "@/components/site/WhatsappIcon";
import { INSTAGRAM_URL, LOGO_URL, WHATSAPP_URL } from "@/lib/site";

const TITLE = "Natã Melo | Personal Trainer e Preparador Físico";
const DESCRIPTION =
  "Personal Trainer, Preparador Físico e Consultoria Online. Treinamento focado em evolução, condicionamento e performance.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: LOGO_URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: LOGO_URL },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Natã Melo — Personal Trainer e Preparador Físico",
          description: DESCRIPTION,
          image: LOGO_URL,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Uberlândia",
            addressRegion: "MG",
            addressCountry: "BR",
          },
          sameAs: [INSTAGRAM_URL],
        }),
      },
    ],
  }),
});

function CtaButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-glow hover:shadow-[0_22px_50px_-16px_rgba(255,122,0,0.85)] ${className}`}
    >
      {children}
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.32em] text-primary">
      <span className="h-px w-8 bg-primary" />
      {children}
    </span>
  );
}

const services = [
  {
    icon: Dumbbell,
    title: "Personal Trainer",
    text: "Treinamentos personalizados de acordo com seus objetivos e sua evolução.",
  },
  {
    icon: Activity,
    title: "Preparador Físico",
    text: "Preparação direcionada às exigências físicas e ao desempenho no futebol.",
  },
  {
    icon: Smartphone,
    title: "Consultoria Online",
    text: "Planejamento e acompanhamento para quem busca orientação profissional mesmo à distância.",
  },
];

const credentials = [
  { icon: ShieldCheck, title: "CREF 061924-G/MG", text: "Registro profissional ativo" },
  { icon: Award, title: "Licença B — Preparador Físico", text: "Formação em preparação física" },
  { icon: GraduationCap, title: "CBF Academy", text: "Preparação física para o futebol", featured: true },
  { icon: BadgeCheck, title: "Professor — Praia Clube", text: "Uberlândia / MG" },
];

const performanceCards = [
  { icon: Dumbbell, title: "Força", text: "Construa uma base física mais forte." },
  { icon: Activity, title: "Condicionamento", text: "Prepare seu corpo para suportar novos desafios." },
  { icon: Timer, title: "Velocidade", text: "Desenvolva capacidades importantes para a performance esportiva." },
  { icon: Zap, title: "Potência", text: "Transforme força em desempenho." },
  { icon: Rocket, title: "Agilidade", text: "Trabalhe movimentos rápidos e eficientes." },
  { icon: TrendingUp, title: "Evolução", text: "Treine com planejamento e acompanhe seu desenvolvimento." },
];

const steps = [
  { n: "01", t: "Entendemos seu objetivo" },
  { n: "02", t: "Planejamos sua estratégia" },
  { n: "03", t: "Você começa seus treinos" },
  { n: "04", t: "Acompanhamos sua evolução" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsappFab />

      <main>
        {/* HERO */}
        <section id="inicio" className="relative overflow-hidden pb-20 pt-28 sm:pt-32 lg:pb-28 lg:pt-36">
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="animate-pulse-glow absolute -top-40 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-primary/25 blur-[130px]" />
            <div className="absolute bottom-0 right-[-10%] h-80 w-80 rounded-full bg-primary-glow/10 blur-[110px]" />
            <div
              className="absolute inset-0 opacity-[0.35]"
              style={{
                backgroundImage:
                  "linear-gradient(115deg, transparent 0 48%, rgba(255,122,0,0.10) 49% 50%, transparent 51%), linear-gradient(65deg, transparent 0 68%, rgba(255,255,255,0.04) 69% 70%, transparent 71%)",
              }}
            />
          </div>

          <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-6">
            <Reveal>
              <img
                src={LOGO_URL}
                alt="Logomarca oficial Natã Melo"
                className="mx-auto h-auto w-full max-w-[17rem] object-contain drop-shadow-[0_18px_60px_rgba(255,122,0,0.35)] sm:max-w-sm lg:max-w-md"
              />
            </Reveal>

            <Reveal delay={120}>
              <h1 className="mt-8 text-5xl uppercase sm:text-7xl lg:text-8xl">
                Natã <span className="text-gradient-orange">Melo</span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mx-auto mt-5 max-w-2xl text-lg font-semibold text-foreground sm:text-2xl">
                Performance não acontece por acaso.{" "}
                <span className="text-primary">Ela é construída.</span>
              </p>
              <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
                Personal Trainer e Preparador Físico focado em evolução, desempenho e resultados.
              </p>
            </Reveal>

            <Reveal delay={280}>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <CtaButton className="w-full sm:w-auto">
                  <WhatsappIcon className="h-4 w-4" />
                  Quero minha consultoria
                </CtaButton>
                <a
                  href="#servicos"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-foreground transition-all duration-300 hover:border-primary hover:text-primary sm:w-auto"
                >
                  Conhecer o trabalho
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={360}>
              <p className="mt-10 text-[0.62rem] font-bold uppercase tracking-[0.28em] text-muted-foreground sm:text-xs">
                Personal Trainer <span className="text-primary">•</span> Preparação Física{" "}
                <span className="text-primary">•</span> Consultoria Online
              </p>
              <ArrowDown className="animate-bounce-arrow mx-auto mt-10 h-5 w-5 text-primary" aria-hidden="true" />
            </Reveal>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="relative py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <Reveal className="max-w-3xl">
              <SectionLabel>Sobre</SectionLabel>
              <h2 className="mt-5 text-4xl uppercase sm:text-6xl">
                Muito além <span className="text-gradient-orange">do treino.</span>
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                <p>
                  Treinar é mais do que executar exercícios. É entender o objetivo, desenvolver
                  estratégia e construir evolução.
                </p>
                <p>
                  Natã Melo atua como Personal Trainer e Preparador Físico, trabalhando com
                  treinamento individualizado, condicionamento físico e desenvolvimento de
                  performance.
                </p>
                <p>
                  Professor no Praia Clube, em Uberlândia/MG, une conhecimento técnico,
                  acompanhamento e planejamento para ajudar cada aluno ou atleta a alcançar um novo
                  nível de desempenho.
                </p>
              </div>
            </Reveal>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s, i) => (
                <Reveal key={s.title} delay={i * 110}>
                  <article className="surface-card group h-full rounded-2xl p-7 hover:-translate-y-1 hover:border-primary/40">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <s.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-2xl uppercase">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CREDENCIAIS */}
        <section className="relative overflow-hidden border-y border-border bg-card/40 py-20 lg:py-28">
          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
          <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
            <Reveal className="text-center">
              <SectionLabel>Credenciais</SectionLabel>
              <h2 className="mx-auto mt-5 max-w-3xl text-4xl uppercase sm:text-5xl">
                Conhecimento aplicado à <span className="text-gradient-orange">performance</span>
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {credentials.map((c, i) => (
                <Reveal key={c.title} delay={i * 90}>
                  <article
                    className={`surface-card h-full rounded-2xl p-6 hover:-translate-y-1 ${
                      c.featured ? "glow-ring border-primary/50" : ""
                    }`}
                  >
                    <c.icon className={`h-6 w-6 ${c.featured ? "text-primary-glow" : "text-primary"}`} />
                    <h3 className="mt-4 text-lg uppercase leading-tight">{c.title}</h3>
                    <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">
                      {c.text}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SERVIÇOS — DOIS CAMINHOS */}
        <section id="servicos" className="py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <Reveal className="text-center">
              <SectionLabel>Serviços</SectionLabel>
              <h2 className="mx-auto mt-5 max-w-3xl text-4xl uppercase sm:text-5xl">
                Dois caminhos, um objetivo: <span className="text-gradient-orange">evoluir</span>
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <Reveal>
                <article className="surface-card h-full rounded-3xl p-7 sm:p-10">
                  <Dumbbell className="h-7 w-7 text-primary" />
                  <h3 className="mt-5 text-3xl uppercase sm:text-4xl">Personal Trainer</h3>
                  <p className="mt-3 text-base font-semibold text-primary">
                    Transforme seu corpo com estratégia.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Treinamento pensado de acordo com seu nível, rotina e objetivos.
                  </p>
                  <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
                    {[
                      "Desenvolvimento de força",
                      "Condicionamento físico",
                      "Evolução corporal",
                      "Melhora de performance",
                      "Treinamento individualizado",
                      "Acompanhamento profissional",
                    ].map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <CtaButton className="mt-9 w-full sm:w-auto">Começar minha evolução</CtaButton>
                </article>
              </Reveal>

              <Reveal delay={140}>
                <article className="surface-card relative h-full overflow-hidden rounded-3xl p-7 sm:p-10">
                  <div
                    className="pointer-events-none absolute inset-0 opacity-25"
                    aria-hidden="true"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,122,0,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,122,0,0.10) 1px, transparent 1px)",
                      backgroundSize: "64px 64px",
                    }}
                  />
                  <div
                    className="pointer-events-none absolute -right-16 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full border border-primary/25"
                    aria-hidden="true"
                  />
                  <div className="relative">
                    <Flame className="h-7 w-7 text-primary" />
                    <h3 className="mt-5 text-3xl uppercase sm:text-4xl">
                      Preparação física para futebol
                    </h3>
                    <p className="mt-3 text-base font-semibold text-primary">
                      Prepare seu corpo para as exigências do jogo.
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      Treinamento direcionado para atletas que querem desenvolver sua capacidade
                      física e elevar sua performance dentro de campo.
                    </p>
                    <ul className="mt-7 flex flex-wrap gap-2">
                      {[
                        "Força",
                        "Potência",
                        "Velocidade",
                        "Agilidade",
                        "Resistência",
                        "Condicionamento",
                        "Performance esportiva",
                      ].map((b) => (
                        <li
                          key={b}
                          className="rounded-full border border-primary/30 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary"
                        >
                          {b}
                        </li>
                      ))}
                    </ul>
                    <CtaButton className="mt-9 w-full sm:w-auto">
                      Quero evoluir meu desempenho
                    </CtaButton>
                  </div>
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CONSULTORIA */}
        <section id="consultoria" className="py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <Reveal>
              <div className="glow-ring relative overflow-hidden rounded-[1.75rem] border border-primary/40 bg-card/60 p-7 sm:p-12 lg:p-16">
                <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-[110px]" />
                <div className="relative text-center">
                  <SectionLabel>Consultoria Online Natã Melo</SectionLabel>
                  <h2 className="mx-auto mt-5 max-w-3xl text-4xl uppercase sm:text-6xl">
                    Seu treino. Sua rotina.{" "}
                    <span className="text-gradient-orange">Seu objetivo.</span>
                  </h2>
                  <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    Tenha orientação profissional para treinar com mais estratégia e propósito. A
                    consultoria online é uma opção para quem deseja seguir um planejamento
                    direcionado aos seus objetivos, com a praticidade de poder treinar onde estiver.
                  </p>
                </div>

                <ol className="relative mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {steps.map((s, i) => (
                    <Reveal key={s.n} delay={i * 110}>
                      <li className="surface-card h-full rounded-2xl p-6">
                        <span className="font-display text-4xl text-primary/70">{s.n}</span>
                        <p className="mt-3 text-sm font-semibold uppercase tracking-wide">{s.t}</p>
                      </li>
                    </Reveal>
                  ))}
                </ol>

                <div className="mt-12 text-center">
                  <CtaButton className="w-full text-sm sm:w-auto sm:px-10 sm:py-5">
                    <WhatsappIcon className="h-5 w-5" />
                    Falar com Natã no WhatsApp
                  </CtaButton>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CARROSSEL PERFORMANCE */}
        <section id="performance" className="overflow-hidden py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <Reveal>
              <SectionLabel>Performance</SectionLabel>
              <h2 className="mt-5 max-w-2xl text-4xl uppercase sm:text-5xl">
                Capacidades que constroem <span className="text-gradient-orange">resultado</span>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:px-6 lg:mx-auto lg:max-w-6xl">
              {performanceCards.map((c) => (
                <article
                  key={c.title}
                  className="surface-card w-[15.5rem] shrink-0 snap-center rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1.5 hover:border-primary/40 sm:w-[17rem]"
                >
                  <c.icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-5 text-2xl uppercase">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                </article>
              ))}
            </div>
          </Reveal>
          <p className="mx-auto mt-2 max-w-6xl px-5 text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground sm:px-6">
            Arraste para o lado →
          </p>
        </section>

        {/* FRASE DE IMPACTO */}
        <section className="relative overflow-hidden border-y border-border py-24 lg:py-32">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,122,0,0.10),transparent_65%)]" />
          <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-6">
            <Reveal>
              <h2 className="text-5xl uppercase leading-[0.95] sm:text-7xl">
                <span className="text-gradient-orange">Resultado</span> exige
                <br />
                <span className="text-primary">Disciplina.</span>{" "}
                <span className="text-primary">Estratégia.</span>
                <br />
                <span className="text-primary">Constância.</span>
              </h2>
              <p className="mx-auto mt-7 max-w-lg text-sm text-muted-foreground sm:text-base">
                O próximo nível começa com a decisão de começar.
              </p>
              <CtaButton className="mt-9">Começar agora</CtaButton>
            </Reveal>
          </div>
        </section>

        {/* CTA FINAL */}
        <section id="contato" className="py-20 lg:py-28">
          <div className="mx-auto max-w-4xl px-5 text-center sm:px-6">
            <Reveal>
              <SectionLabel>Contato</SectionLabel>
              <h2 className="mt-5 text-4xl uppercase sm:text-6xl">
                Pronto para começar sua <span className="text-gradient-orange">evolução?</span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Seja para transformar seu treinamento, melhorar seu condicionamento ou desenvolver
                sua performance no futebol, dê o primeiro passo.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <CtaButton className="w-full sm:w-auto">
                  <WhatsappIcon className="h-4 w-4" />
                  Quero falar com o Natã
                </CtaButton>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] transition-all duration-300 hover:border-primary hover:text-primary sm:w-auto"
                >
                  <Instagram className="h-4 w-4" />
                  Siga Natã Melo no Instagram
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-card/40 py-14">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="flex flex-col items-center gap-6 text-center">
            <img
              src={LOGO_URL}
              alt="Logomarca Natã Melo"
              className="h-auto w-full max-w-[11rem] object-contain"
            />
            <div>
              <p className="font-display text-3xl uppercase">Natã Melo</p>
              <p className="mt-1 text-xs uppercase tracking-[0.22em] text-primary">
                Coach • Personal Trainer • Preparador Físico
              </p>
            </div>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>CREF 061924-G/MG</p>
              <p>Licença B — Preparador Físico | CBF Academy</p>
              <p>Praia Clube • Uberlândia/MG</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors hover:border-primary hover:text-primary"
              >
                <Instagram className="h-4 w-4" /> Instagram
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors hover:border-primary hover:text-primary"
              >
                <WhatsappIcon className="h-4 w-4" /> WhatsApp
              </a>
            </div>
            <p className="pt-4 text-xs text-muted-foreground">
              © Natã Melo — Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
