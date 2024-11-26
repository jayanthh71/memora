export default function Footer() {
  return (
    <footer className="bg-primarylight">
      <div className="mx-auto flex h-20 max-w-7xl flex-col justify-center gap-4 text-center font-body text-text">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Jayanth. All rights reserved.
        </p>
        <nav className="flex justify-center gap-6">
          <a
            href="https://linkedin.com/in/jayanthh71"
            className="text-sm transition-colors duration-200 hover:text-background"
          >
            About Me
          </a>
          <a
            href="mailto:jayanth37069@gmail.com"
            className="text-sm transition-colors duration-200 hover:text-background"
          >
            Contact
          </a>
          <a
            href="https://github.com/jayanthh71?tab=repositories"
            className="text-sm transition-colors duration-200 hover:text-background"
          >
            Other Projects
          </a>
        </nav>
      </div>
    </footer>
  );
}
