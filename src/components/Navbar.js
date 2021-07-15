import Link from 'next/link';

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <ul className="navbar-nav flex-row">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link mx-4">Main page</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/blog">
                <a className="nav-link">Blog</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default Navbar
