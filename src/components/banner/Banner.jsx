import img1 from '../../assets/vector1.png'

const Banner = ({ isIn_Progress }) => {

    const isProgress = isIn_Progress.filter(card => card.status == "In-Progress")
    const isResolved = isIn_Progress.filter(card => card.status == "Resolved")
    
    return (
        <div className="gFont grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 md:px-0 px-2 mt-10 md:mt-16 max-w-[1450px] mx-auto">
            <div className="banner bannerImg relative">
                <img className='absolute right-0 top-0 rotate-180' src={img1} alt="" />
                <h3 className='bannertext2'>In-Progress</h3>
                <p className='bannertext1'>{isProgress.length}</p>
            </div>
            <div className="banner bannerImg2">
                <img className='absolute right-0 top-0 rotate-180' src={img1} alt="" />
                <h3 className='bannertext2'>Resolved</h3>
                <p className='bannertext1'>{isResolved.length}</p>
            </div>
        </div>
    );
};

export default Banner;