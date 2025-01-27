export default function Footer() {
  return (
    <footer className="bg-primarylight">
      <div className="font-body text-text mx-auto flex h-20 max-w-7xl flex-col justify-center gap-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Jayanth. All rights reserved.
        </p>
        <nav className="flex justify-center gap-6">
          <a
            href="https://linkedin.com/in/jayanthh71"
            className="hover:text-background text-sm transition-colors duration-200"
          >
            About Me
          </a>
          <a
            href="mailto:jayanth37069@gmail.com"
            className="hover:text-background text-sm transition-colors duration-200"
          >
            Contact
          </a>
          <a
            href="https://github.com/jayanthh71?tab=repositories"
            className="hover:text-background text-sm transition-colors duration-200"
          >
            Other Projects
          </a>
        </nav>
      </div>
    </footer>
  );
}
