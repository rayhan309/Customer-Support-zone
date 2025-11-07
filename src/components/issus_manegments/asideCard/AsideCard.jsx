import AsideCardShow from "./asideCardShow/asideCardShow";
import ResolvedCard from "./resolvedCard/ResolvedCard";

const AsideCard = ({data, setData, isIn_Progress, setIsIn_Progress, isProgress, isResolved }) => {
    return (
        <>
        <div className="bg-gray-200 p-3 rounded-lg">
             <h2 className='text-2xl font-semibold text-gray-700'>Task Status</h2>
             <div>
                {
                    isProgress.length == 0 ? <p className="mt-3 text-gray-600">Select a ticket to add to Task Status</p> : isProgress.map(isIn_ProgressData => <AsideCardShow 
                        key={isIn_ProgressData.id} 
                        isIn_ProgressData={isIn_ProgressData} 
                        setIsIn_Progress={setIsIn_Progress} 
                        isIn_Progress={isIn_Progress}
                        data={data}
                        setData={setData}
                        ></AsideCardShow>)
                }
             </div>
        </div>
        <div className="bg-gray-200 p-3 mt-3 rounded-lg">
             <h2 className='text-2xl font-semibold text-gray-700'>Resolved Task</h2>
             <div>
                {
                    isResolved.length == 0 ? <p className="mt-3 text-gray-600">No resolved tasisProgressks yet.</p> : isResolved.map(resolvedData => <ResolvedCard key={resolvedData.id} resolvedData={resolvedData}></ResolvedCard>)
                }
             </div>
        </div>
        </>
    );
};

export default AsideCard;