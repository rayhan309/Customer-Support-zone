const ResolvedCard = ({resolvedData}) => {

    const nowDate = new Date();

    return (
        <div className="px-3 py-3 mt-4 bg-white hover:bg-gray-200 rounded-lg">
            <h2 className='text-lg font-medium text-[#001931]'>{resolvedData.title}</h2>
            <div className="flex justify-between items-center mr-4">
                <h4 className="text-[14px] font-medium text-[#00ff73]">Complited</h4>
                <p className="text-[14px] font-normal text-gray-700">{`${nowDate.toLocaleTimeString()}`}</p>
            </div>
            {/* <button className="text-[16px] text-white font-semibold btn bg-[#02A53B] hover:bg-[#02A53B90] w-full mt-3">Complete</button> */}
        </div>
    );
};

export default ResolvedCard;