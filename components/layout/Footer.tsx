import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container mx-auto flex flex-col md:flex-row h-auto md:h-16 items-center justify-center md:justify-between gap-2 md:gap-0 px-4 py-4 md:py-0">
        <p className="text-sm text-muted-foreground text-center md:text-left">
          © {new Date().getFullYear()} Boilerplate. All rights reserved. By{" "}
          <Link
            href="https://surakiat.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:text-primary transition-colors"
          >
            Surakiat.dev
          </Link>
        </p>
        <div className="flex items-center space-x-4">
          <Link
            href="https://github.com/Surakiat7/next-feature-based-boilerplate"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}
