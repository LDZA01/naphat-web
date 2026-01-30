export default function Footer() {
  return (
    <footer className="py-8 px-6 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto max-w-6xl text-center">
        <p className="text-slate-600 dark:text-slate-400">
          © {new Date().getFullYear()} Naphat Chartwanchai. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
