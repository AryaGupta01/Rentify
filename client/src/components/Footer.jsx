const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center pb-4 pt-24 font-semibold text-slate-400">
      <p>&copy; {currentYear} Rentify. All rights reserved &copy; Arya</p>
    </footer>
  );
};

export default Footer;
