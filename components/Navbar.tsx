import { Link } from "react-scroll"
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [fix, setFix] = useState<boolean>(false);

  // Nav 애니메이션
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
        <div className="nav__left">
          <div className="nav__name" onClick={() => scrollTo(0, 0)}>Yeonwoo Lee</div>
        </div>
        <div className="nav__right">
          <div className="nav__list">
            <div className="nav__list-content">
              <div className="nav__menu" onClick={() => scrollTo(0, 0)}>Home</div>
              <Link className="nav__menu" to="about" spy={true} smooth={true} duration={0}>
                <span>About Me</span>
              </Link>
              <Link className="nav__menu" to="skill" spy={true} smooth={true} duration={0}>
                <span>Skills</span>
              </Link>
              <Link className="nav__menu" to="project" spy={true} smooth={true} duration={0}>
                <span>Project</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
