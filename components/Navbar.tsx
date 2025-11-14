const Navbar = () => (
    <div className="container-fluid position-relative nav-bar p-0">
        <div className="container-lg position-relative p-0 px-lg-3" style={{ zIndex: 9 }}>
            <nav className="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-5">
                <a href="#" className="navbar-brand d-flex align-items-center">
                    <h1 className="m-0 font-weight-bold tracking-wide text-3xl">
                        <span className="text-dark">Trip</span>
                        <span className="text-primary ml-1">Tonic</span>
                        <span className="text-success ml-2 font-weight-bold">Safaris</span>
                    </h1>
                </a>
                <button title="Open Nav" type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
                    <div className="navbar-nav ml-auto py-0">
                        {["Home", "About", "Services", "Tour Packages", "Contact"].map((item) => (
                            <a key={item} href="#" className={`nav-item nav-link ${item === "Home" ? "active" : ""}`}>
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>
        </div>
    </div>
);
export default Navbar;
