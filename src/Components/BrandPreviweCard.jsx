

const BrandPreviweCard = ({data}) => {
    const {title,description,icon} = data
    return (
        <div>
            <img className="mx-auto" src={icon} alt="" />
            <h1 className="my-3 font-bold text-xl">{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default BrandPreviweCard;