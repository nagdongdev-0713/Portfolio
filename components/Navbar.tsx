import { useState, useEffect } from 'react';

const Navbar = () => {
  const [fix, setFix] = useState<boolean>(false);

  // Nav색 변경을 위한 함수
  const setFixed = () => {
    if (window.scrollY >= 85) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", setFixed)
    return () => {
      window.removeEventListener("scroll", setFixed);
    }
  }, [])

  const scrollTo = (x: number, y: number) => {
    window.scrollTo(x, y);
  }


  return (
    <div className={fix ? 'nav__container__fixed' : 'nav__container'}>
      <div className="nav__wrapper">
        <div className="nav-left">
          <div className="nav-name" onClick={() => scrollTo(0, 0)}>Portfolio</div>
        </div>
        <div className="nav-right">
          <div className="nav-list">
            <ul>
              <li className="nav-menu" onClick={() => scrollTo(0, 0)}>Home</li>
              <li className="nav-menu">About Me</li>
              <li className="nav-menu">Skills</li>
              <li className="nav-menu">Project</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
