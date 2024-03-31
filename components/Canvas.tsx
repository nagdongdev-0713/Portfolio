
const Canvas = () => {

    return (
        <div className="cav-container">
            <div className="cav__wrapper container__default">
                <div className="cav__content">
                    <p className="cav__p">Hello🖐️</p>
                    <p className="cav__bold cav__p">Im Developer!</p>
                    <p className="cav__p">Attending <a href="https://school.busanedu.net/nagdong-e/">Nagdong Elementry School</a> in Busan</p>
                </div>
                <div className='cav__img-container'>
                    <img src="/profile/profile.jpg" alt="profile" className="cav__photo" />
		    
                </div>
            </div>
        </div>
    )
}

export default Canvas;
