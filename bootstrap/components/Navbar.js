import Link from "next/link";

const NavBar = () => (
  <nav className="navbar navbar-expand-lg bg-ligth ">
      <Link legacyBehavior href="/">
      <a className="border border-dark rounded">
          <img src="/logo.png" width="180" height="50" />
        </a>
      </Link>
    <div className="container-fluid">
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link href="/">
              <span className="nav-link active" aria-current="page">Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/blog">
              <span className="nav-link">Blog</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/github">
              <span className="nav-link">GitHub</span>
            </Link>
          </li>
         
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
);

export default NavBar;
