const ResolvedCard = ({resolvedData}) => {
    console.log(resolvedData)
    return (
        <div className="px-3 py-3 mt-4 bg-white hover:bg-gray-200 rounded-lg">
            <h2 className='text-lg font-medium text-[#001931]'>{resolvedData.title}</h2>
            <button className="text-[16px] text-white font-semibold btn bg-[#02A53B] hover:bg-[#02A53B90] w-full mt-3">Complete</button>
        </div>
    );
};

export default ResolvedCard;