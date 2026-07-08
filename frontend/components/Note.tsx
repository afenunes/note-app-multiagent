type NoteProps = {
  title: string;
  content: string;
};

/**
 * Reusable note card component.
 * Frontend agents can extend this with actions (edit/delete/share) later.
 */
export default function Note({ title, content }: NoteProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <h2 className="mb-2 text-lg font-semibold">{title}</h2>
      <p className="text-slate-700">{content}</p>
    </article>
  );
}
