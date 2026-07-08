import Note from "../components/Note";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="mb-6 text-3xl font-bold">Multi-Agent Note App</h1>
      <p className="mb-8 text-slate-600">
        Starter homepage for collaborative frontend and backend delivery.
      </p>
      <Note title="Welcome note" content="Your first note is ready for iteration." />
    </main>
  );
}
