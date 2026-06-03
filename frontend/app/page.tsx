"use client";

import { useState } from "react";
import InfrastructureMap from "@/components/InfrastructureMap";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const analyzeNetwork = () => {
    if (question.toLowerCase().includes("tokyo")) {
      setAnswer(
        "Traffic to Tokyo is routed through trans-Pacific fiber infrastructure. Estimated latency is 110–140 ms."
      );
    } else if (question.toLowerCase().includes("london")) {
      setAnswer(
        "London serves as a major European interconnect with multiple Tier-1 carriers."
      );
    } else {
      setAnswer(
        "Infrastructure analysis completed. Multiple cloud regions and backbone routes are available."
      );
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800 p-6">
        <h1 className="text-3xl font-bold">
          AI Connectivity Infrastructure Explorer
        </h1>

        <p className="mt-2 text-slate-400">
          Global telecom, cloud, and data center intelligence
        </p>
      </header>

      <div className="grid grid-cols-12 gap-4 p-4">
        <aside className="col-span-2 rounded-xl bg-slate-900 p-4">
          <h2 className="mb-4 font-semibold">
            Infrastructure Layers
          </h2>

          <div className="space-y-3 text-sm">
            <label className="block">
              <input type="checkbox" defaultChecked />
              <span className="ml-2">Data Centers</span>
            </label>

            <label className="block">
              <input type="checkbox" defaultChecked />
              <span className="ml-2">Cloud Regions</span>
            </label>

            <label className="block">
              <input type="checkbox" defaultChecked />
              <span className="ml-2">Fiber Routes</span>
            </label>

            <label className="block">
              <input type="checkbox" defaultChecked />
              <span className="ml-2">Cell Towers</span>
            </label>
          </div>
        </aside>

        <section className="col-span-7 rounded-xl bg-slate-900 p-4">
          <InfrastructureMap />
        </section>

        <aside className="col-span-3 rounded-xl bg-slate-900 p-4">
          <h2 className="mb-4 font-semibold">
            AI Assistant
          </h2>

          <div className="rounded-lg bg-slate-800 p-3 text-sm">
            Ask questions about latency, coverage,
            cloud regions, or infrastructure.
          </div>

          <input
            value={question}
            onChange={(e) =>
              setQuestion(e.target.value)
            }
            placeholder="Why is latency high between SF and Tokyo?"
            className="mt-4 w-full rounded bg-slate-800 p-2"
          />

          <button
            className="mt-3 w-full rounded bg-blue-600 p-2"
            onClick={analyzeNetwork}
          >
            Analyze Network
          </button>

          {answer && (
            <div className="mt-4 rounded-lg bg-slate-800 p-3 text-sm">
              {answer}
            </div>
          )}
        </aside>
      </div>

      <div className="grid grid-cols-4 gap-4 px-4 pb-4">
        <MetricCard
          title="Data Centers"
          value="7,842"
        />

        <MetricCard
          title="Fiber Routes"
          value="1.24M km"
        />

        <MetricCard
          title="Cloud Regions"
          value="132"
        />

        <MetricCard
          title="Connected Sites"
          value="84,513"
        />
      </div>
    </main>
  );
}

function MetricCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-xl bg-slate-900 p-4">
      <div className="text-slate-400">
        {title}
      </div>

      <div className="mt-2 text-3xl font-bold">
        {value}
      </div>
    </div>
  );
}