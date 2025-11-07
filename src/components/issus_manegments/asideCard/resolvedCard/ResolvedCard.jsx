const ResolvedCard = ({resolvedData}) => {

    const nowDate = new Date();

    return (
        <div className="px-3 gFont py-3 mt-4 bg-white hover:bg-gray-200 rounded-lg">
            <h2 className='text-lg font-medium text-[#001931]'>{resolvedData.title}</h2>
            <div className="flex justify-between items-center mr-4 mt-3">
                <h4 className="text-[14px] font-medium text-[#00ff73]"><i class="fa-regular fa-circle-check"></i> Complited</h4>
                <p className="text-[14px] font-normal text-gray-700">{`${nowDate.toLocaleTimeString()}`}</p>
            </div> 
        </div>
    );
};

export default ResolvedCard;