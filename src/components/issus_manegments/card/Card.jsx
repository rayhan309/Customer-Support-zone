import { toast } from 'react-toastify';
import calender from '../../../assets/calender.png'

const Card = ({ issu, data, setIsIn_Progress, isIn_Progress }) => {
    // console.log(issu);

    const { customer: name, description, priority, status, title: userIssu, id, createdAt } = issu;
    
    const cartHanler = () => {
        
        const findData = data.find(cardData => cardData.id == issu.id)
        
        // const tos = `${<i class="fa-regular `In Progress Done!` fa-circle-check"></i>`Your Issu Already Done!`}`

        if (issu.status == 'Open') {
            findData.status = "In-Progress";
            toast(
                <div className='flex gap-2 items-center text-[#02A53B]'>
                    <i class="fa-regular fa-circle-check"></i>
                    <p>In Progress Done!</p>
                </div>
            );
        } else {
            toast(
                <div className='flex gap-2 items-center text-red-500'>
                    <i class="fa-solid fa-xmark"></i>
                    <p>Your Issu Already Shear in In-Progress!</p>
                </div>
            );
            return;
        }

        setIsIn_Progress([...isIn_Progress, findData])

    }

    return (
        <div onClick={cartHanler} className='bg-gray-100 hover:bg-gray-200 p-3 rounded-lg shadow-lg cursor-pointer gFont'>
            <div className='flex justify-between items-center'>
                <h2 className='text-lg font-medium text-[#001931]'>{userIssu}</h2>
                <h5 className={`text-xs md:text-[16px] font-medium px-3 rounded-2xl py-1 mt-5 flex items-center gap-2 ${status == "Open" ? 'bg-[#B9F8CF] text-[#02A53B]' : 'bg-[#F8F3B9] text-[#9C7700]'}`}><div className={`${status == "Open" ? 'bg-[#02A53B]' : 'bg-[#9C7700]'} w-3 h-3 rounded-full`}></div> {status}</h5>
            </div>
            <h3 className='text-[16px] font-normal text-[#627382]'>{description}</h3>
            <div className='flex justify-between items-center mt-3'>
                <div className='flex items-center gap-2 md:gap-3'>
                    <p className='text-xs md:text-[14px] font-medium text-[#627382]'># {id}</p>
                    <p className={`text-xs md:text-[14px] font-medium ${priority == "HIGH PRIORITY" ? 'text-red-500' : 'text-[#FEBB0C]'}`}>{priority}</p>
                </div>
                <div className='flex items-center gap-3'>
                    <p className='text-xs text-[14px] font-normal text-[#627382]'>{name}</p>
                    <img src={calender} alt="Clender" />
                    <p className='text-xs text-[14px] font-normal text-[#627382]'>{createdAt}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;