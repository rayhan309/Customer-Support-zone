import calender from '../../../assets/calender.png'

const Card = ({ issu }) => {
console.log(issu);

    const { customer: name, description, priority, status, title: userIssu, id, createdAt } = issu;

    return (
            <div className='bg-white p-3 rounded-lg shadow-lg'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-lg font-medium text-[#001931]'>{userIssu}</h2>
                    <h5 className={`text-[16px] font-medium px-3 rounded-2xl py-1 mt-5 ${status == "Open" ? 'bg-[#B9F8CF] text-[#02A53B]' : 'bg-[#F8F3B9] text-[#9C7700]'}`}>{status}</h5>
                </div>
                <h3 className='text-[16px] font-normal text-[#627382]'>{description}</h3>
                <div className='flex justify-between items-center mt-3'>
                    <div className='flex items-center gap-3'>
                        <p className='text-[14px] font-medium text-[#627382]'>#{id}</p>
                        <p className={`text-[14px] font-medium ${priority == "HIGH PRIORITY" ? 'text-red-500' : 'text-[#FEBB0C]'}`}>{priority}</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <p className='text-[14px] font-normal text-[#627382]'>{name}</p>
                        <img src={calender} alt="Clender" />
                        <p className='text-[14px] font-normal text-[#627382]'>{createdAt}</p>
                    </div>
                </div>
            </div>
    );
};

export default Card;