import img1 from '../../assets/vector1.png'
const Banner = ({ isIn_Progress }) => {

    const isProgress = isIn_Progress.filter(card => card.status == "In-Progress")
    const isResolved = isIn_Progress.filter(card => card.status == "Resolved")
    
    return (
        <div className="grid grid-cols-2 gap-5 mt-16 max-w-[1450px] mx-auto">
            <div className="banner bannerImg relative">
                <img className='absolute right-0 top-0 rotate-180' src={img1} alt="" />
                <h3 className='text-center mt-18 text-white text-2xl font-normal'>In-Progress</h3>
                <p className='text-[60px] font-semibold mt text-white text-center'>{isProgress.length}</p>
            </div>
            <div className="banner bannerImg2">
                <img className='absolute right-0 top-0 rotate-180' src={img1} alt="" />
                <h3 className='text-center mt-18 text-white text-2xl font-normal'>Resolved</h3>
                <p className='text-[60px] font-semibold mt text-white text-center'>{isResolved.length}</p>
            </div>
        </div>
    );
};

export default Banner;