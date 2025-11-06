import Card from "./Card";

const IssuCard = ({ issus }) => {

    return (
        <>
            <div className="grid grid-cols-2 gap-3">
                {
                    issus.map(issu => <Card key={issu.id} issu={issu}></Card>)
                }
            </div>
        </>
    );
};

export default IssuCard;