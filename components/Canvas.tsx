
const Canvas = () => {

    return (
        <div className="cav-container">
            <div className="cav__wrapper container__default">
                <div className="cav__content">
                    <p className="cav__p">안녕하세요🖐️</p>
                    <p className="cav__bold cav__p">저는 <a href="https://instagram.com/salm0n_lee">salm0n_lee</a>입니다!</p>
                    <p className="cav__p">부산에 있는 <a href="https://school.busanedu.net/nagdong-e/">낙동초등학교</a>에 재학 중이에요</p>
                </div>
                <div className='cav__img-container'>
                    <img src="/profile/profile.jpg" alt="profile" className="cav__photo" />
		    
                </div>
            </div>
        </div>
    )
}

export default Canvas;
