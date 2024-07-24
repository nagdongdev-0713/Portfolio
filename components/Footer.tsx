const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__copyright">LEE YEONWOO</div>
                <div className="footer__bi">
                    <a href="https://github.com/k1k2brz" className="footer__icon"
                        target="_blank" rel="noreferrer noopener">
                        <img src="https://img.shields.io/badge/Github-000000?style=flat&logo=github&logoColor=white" alt="github" />
                    </a>
                    <a href="https://wonderfulwonder.tistory.com/" className="footer__icon"
                        target="_blank" rel="noreferrer noopener">
                        <img src="https://img.shields.io/badge/Blog-000000?style=flat&logo=tistory&logoColor=white" alt="tistory"  />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
