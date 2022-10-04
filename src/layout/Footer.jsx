const Footer = () => {
  return (
    <footer className='page-footer teal accent-3'>
      <div className='footer-copyright'>
        <div className='container'>
          © {new Date().getFullYear()} Copyright Text
          <a className='grey-text text-lighten-4 right' href='#!'>
            Created by Dmitriy Prostakov
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
