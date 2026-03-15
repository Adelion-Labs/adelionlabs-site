"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function AdelionLabsWebsite() {
  const [success, setSuccess] = useState(false);

  const capabilities = [
    {
      title: "User Experience Systems",
      description:
        "Design modern digital systems that improve onboarding, documentation, support, and long-term usability."
    },
    {
      title: "Cloud Infrastructure",
      description:
        "Modernize and migrate business-critical platforms to AWS, Azure, or Google Cloud with scalable architecture."
    },
    {
      title: "AI Integration",
      description:
        "Integrate intelligent assistants, automation, and workflow improvements into the systems your business relies on."
    }
  ];

  const process = ["Discover", "Architect", "Build", "Enable"];

  return (
    <main
      className="min-h-screen overflow-hidden text-white"
      style={{
        background: `
          radial-gradient(circle at 15% 10%, rgba(59,130,246,0.25), transparent 35%),
          radial-gradient(circle at 85% 25%, rgba(124,58,237,0.20), transparent 40%),
          radial-gradient(circle at 60% 90%, rgba(34,211,238,0.12), transparent 50%),
          #020617
        `
      }}
    >
      {/* HEADER */}

      <header className="relative z-30 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <Image
          src="/logo-color.png"
          alt="Adelion Labs"
          width={800}
          height={800}
          priority
          className="h-40 w-auto object-contain"
        />

        <nav className="hidden items-center gap-10 text-md text-slate-300 md:flex">
          <a href="#capabilities" className="transition hover:text-white">
            Capabilities
          </a>

          <a href="#process" className="transition hover:text-white">
            Process
          </a>

          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>

          <a
            href="#contact"
            className="ml-4 rounded-full bg-blue-500 px-6 py-3 text-md font-medium text-white transition hover:bg-blue-400"
          >
            Book a Call
          </a>
        </nav>
      </header>

      {/* HERO */}

      <section className="relative isolate border-b border-white/10">
        {/* GRID OVERLAY */}

        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px"
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-12 pt-12 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            {/* HERO GLOW */}

            <div className="relative">
              <div
                className="absolute -inset-6 opacity-40 blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(59,130,246,0.35), rgba(124,58,237,0.15), transparent 70%)"
                }}
              />

              <h1 className="relative text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
                Advancing how your business connects, operates, and grows.
              </h1>
            </div>

            <p className="mt-6 max-w-5xl text-lg text-slate-300 sm:text-xl lg:whitespace-nowrap">
              Technology that improves how your customers interact with your
              business.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-blue-500 px-8 py-4 text-base font-medium text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400"
              >
                Book a Discovery Call
              </a>

              <a
                href="#capabilities"
                className="rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base font-medium text-slate-100 transition hover:bg-white/10"
              >
                Explore Capabilities
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CAPABILITIES */}

      <section
        id="capabilities"
        className="mx-auto max-w-7xl px-6 py-20 lg:px-8"
      >
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
            Capabilities
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl lg:whitespace-nowrap">
            Focused systems for modernization, usability, and scale.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {capabilities.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="group rounded-[28px] border border-white/10 bg-white/5 p-7 shadow-lg shadow-slate-950/30 backdrop-blur transition hover:border-cyan-400/60 hover:bg-slate-900 hover:shadow-cyan-500/10"
            >
              <h3 className="text-xl font-semibold text-white transition group-hover:text-cyan-300">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS */}

      <section id="process" className="border-y border-white/10 bg-white/5">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="text-sm uppercase tracking-[0.2em] text-violet-300">
            PROCESS
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            A clear path from strategy to implementation.
          </h2>

          <div className="mt-20 grid gap-6 md:grid-cols-4">
            {[
              {
                title: "Discover",
                description:
                  "Understand goals, systems, and constraints. Identify the highest-impact opportunities for improvement."
              },
              {
                title: "Architect",
                description:
                  "Design scalable cloud infrastructure, automation layers, and experience systems aligned to business workflows."
              },
              {
                title: "Build",
                description:
                  "Implement infrastructure, integrations, and AI systems with production-ready engineering practices."
              },
              {
                title: "Enable",
                description:
                  "Deploy systems, train teams, and establish operational processes for long-term adoption and success."
              }
            ].map((step, index) => (
              <div
                key={step.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 p-7 transition-all duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                {/* LARGE NUMBER */}

                <div className="pointer-events-none absolute right-3 top-1 select-none text-[140px] font-bold text-violet-300 opacity-[0.20]">
                  {index + 1}
                </div>

                <h3 className="text-xl font-semibold text-white transition group-hover:text-cyan-300">
                  {step.title}
                </h3>

                <p className="mt-4 max-w-[260px] text-sm leading-relaxed text-slate-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-blue-500/10 via-slate-900 to-violet-500/10 p-12">
          <h2 className="text-3xl font-semibold text-white">
            Start a conversation
          </h2>

          <p className="mt-4 max-w-5xl text-slate-300">
            Tell us about your systems, goals, or challenges. We'll reach out
            to discuss how Adelion Labs can help.
          </p>

          <form
            onSubmit={async (e) => {
              e.preventDefault();

              const form = e.currentTarget;
              const formData = new FormData(form);

              const data = {
                name: formData.get("name"),
                email: formData.get("email"),
                message: formData.get("message")
              };

              const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
              });

              if (res.ok) {
                setSuccess(true);
                form.reset();

                setTimeout(() => {
                  setSuccess(false);
                }, 5000);
              }
            }}
            className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            <input
              name="name"
              type="text"
              required
              placeholder="John Doe"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 outline-none focus:border-cyan-400"
            />

            <input
              name="email"
              type="email"
              required
              placeholder="john@company.com"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 outline-none focus:border-cyan-400"
            />

            <textarea
              name="message"
              required
              placeholder="Tell us about your project..."
              rows={5}
              className="md:col-span-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 outline-none focus:border-cyan-400"
            />

            <div className="md:col-span-2">
              <button
                type="submit"
                className="rounded-full bg-blue-500 px-8 py-4 font-medium text-white transition shadow-lg shadow-blue-500/30 hover:bg-blue-400"
              >
                Send Message
              </button>

              {success && (
                <div className="mt-4 text-sm text-cyan-400">
                  ✓ Message sent successfully
                </div>
              )}
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
