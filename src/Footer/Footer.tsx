export const Footer = () => {
  return (
    <footer className="footer-container">
      <ul className="flex justify-center space-x-8">
        <li>
          <a
            href="http://mein-verbundenes-zuhause.de/datenschutz/"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Datenschutz
          </a>
        </li>
        <li>
          <a
            href="http://mein-verbundenes-zuhause.de/impressum/"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Impressum
          </a>
        </li>
      </ul>
      <p className="mt-4">© 2024 All rights reserved</p>
    </footer>
  );
};
