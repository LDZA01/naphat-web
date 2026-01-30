export default function Footer() {
  return (
    <footer className="py-8 px-6 bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto max-w-6xl text-center">
        <p className="text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Naphat Chartwanchai. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
