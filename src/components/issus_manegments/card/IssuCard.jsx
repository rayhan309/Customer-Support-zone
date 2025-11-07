import Card from "./Card";

const IssuCard = ({ data, setIsIn_Progress, isIn_Progress }) => {

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 gFont">
                {
                    data.map(issu => <Card
                        key={issu.id}
                        issu={issu}                        
                        data={data}
                        setIsIn_Progress={setIsIn_Progress}
                        isIn_Progress={isIn_Progress}></Card>)
                }
            </div>
        </>
    );
};

export default IssuCard;