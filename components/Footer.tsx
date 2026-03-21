export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[var(--stroke)] bg-[rgba(255,255,255,0.45)] backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl text-center">
        <p className="text-[var(--ink-soft)]">
          © {new Date().getFullYear()} Naphat Chartwanchai. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
