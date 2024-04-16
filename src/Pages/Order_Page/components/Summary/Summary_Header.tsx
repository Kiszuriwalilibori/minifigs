import { Picture, Name } from "components";
import { useSelector } from "react-redux";
import { getSelectedMinifig } from "reduxware/selectors";

export const SummaryHeader = () => {
    const minifig = useSelector(getSelectedMinifig);
    if (!minifig) return null;
    const { name, num_parts: num, set_img_url: url } = minifig;
    const partsInfo = `There are ${num} parts in this minifig:`;

    return (
        <div className="summary__main items">
            <h2 className="black fromLeft">Summary</h2>
            <div className="minifigCard minifigCard--no-padding">
                {name && url && <Picture name={name} imageURL={url} />}
                {name && <Name name={name} />}
            </div>
            {num && <p>{partsInfo}</p>}
        </div>
    );
};

export default SummaryHeader;
