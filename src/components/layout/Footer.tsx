export default function Footer() {
  return (
    <footer className="bg-primarylight p-4 text-text">
      <div className="container mx-auto text-center">
        <p className="text-sm">© 2024 Jayanth. All rights reserved.</p>
        <div className="mt-2 flex justify-center space-x-4">
          <a
            href="https://linkedin.com/in/jayanthh71"
            className="hover:text-background"
          >
            About Me
          </a>
          <a
            href="mailto:jayanth37069@gmail.com"
            className="hover:text-background"
          >
            Contact
          </a>
          <a
            href="https://github.com/jayanthh71/repositories"
            className="hover:text-background"
          >
            Other Projects
          </a>
        </div>
      </div>
    </footer>
  );
}
