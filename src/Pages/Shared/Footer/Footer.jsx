const Footer = () => {
  return (
    <footer className="footer lg:px-20 px-4 py-10 bg-[#ebd6b5]  mt-20">
      <aside>
        <h3 className="text-3xl font-bold">Travel-BD</h3>
        <p>
          Book your trip in minute, get full <br /> Control for much longer.
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About</a>
        <a className="link link-hover">Careers</a>
        <a className="link link-hover">Mobile</a>
      </nav>
      <nav>
        <h6 className="footer-title">Contact</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
