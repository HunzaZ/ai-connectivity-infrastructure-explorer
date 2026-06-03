import InfrastructureMap from "@/components/InfrastructureMap";
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800 p-6">
        <h1 className="text-3xl font-bold">
          AI Connectivity Infrastructure Explorer
        </h1>

        <p className="text-slate-400 mt-2">
          Infrastructure intelligence powered by AI
        </p>
      </header>

      <div className="grid grid-cols-12 gap-4 p-4">

        <aside className="col-span-2 rounded-xl bg-slate-900 p-4">
          <h2 className="font-semibold mb-4">
            Infrastructure Layers
          </h2>

          <div className="space-y-2">
            <label className="block">
              <input type="checkbox" defaultChecked />
              <span className="ml-2">Cell Towers</span>
            </label>

            <label className="block">
              <input type="checkbox" defaultChecked />
              <span className="ml-2">Fiber Routes</span>
            </label>

            <label className="block">
              <input type="checkbox" defaultChecked />
              <span className="ml-2">Data Centers</span>
            </label>

            <label className="block">
              <input type="checkbox" defaultChecked />
              <span className="ml-2">Cloud Regions</span>
            </label>
          </div>
        </aside>

        <section className="col-span-7 rounded-xl bg-slate-900 p-4">
          <div className="h-[600px] rounded-lg bg-slate-800 flex items-center justify-center">
          <InfrastructureMap />
          </div>
        </section>

        <aside className="col-span-3 rounded-xl bg-slate-900 p-4">
          <h2 className="font-semibold mb-4">
            AI Assistant
          </h2>

          <div className="bg-slate-800 rounded-lg p-3 text-sm">
            Ask questions about network coverage,
            latency, cloud regions, or infrastructure.
          </div>

          <input
            className="w-full mt-4 rounded bg-slate-800 p-2"
            placeholder="Why is latency high between SF and Tokyo?"
          />

          <button className="w-full mt-3 rounded bg-blue-600 p-2">
            Analyze
          </button>
        </aside>

      </div>

      <div className="grid grid-cols-4 gap-4 px-4 pb-4">

        <div className="rounded-xl bg-slate-900 p-4">
          <div className="text-slate-400">
            Cell Towers
          </div>

          <div className="text-3xl font-bold">
            128,540
          </div>
        </div>

        <div className="rounded-xl bg-slate-900 p-4">
          <div className="text-slate-400">
            Fiber Routes
          </div>

          <div className="text-3xl font-bold">
            1.24M km
          </div>
        </div>

        <div className="rounded-xl bg-slate-900 p-4">
          <div className="text-slate-400">
            Data Centers
          </div>

          <div className="text-3xl font-bold">
            7,842
          </div>
        </div>

        <div className="rounded-xl bg-slate-900 p-4">
          <div className="text-slate-400">
            Cloud Regions
          </div>

          <div className="text-3xl font-bold">
            132
          </div>
        </div>

      </div>
    </main>
  );
}