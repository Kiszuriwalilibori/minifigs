import { Minifig } from "types/index";
import { Picture, Name } from "components";
import { useSelector } from "react-redux";
import { getSelectedMinifig } from "reduxware/reducers/selectedMinifigSlice";

export const Summary_Header = () => {
    const fig = useSelector(getSelectedMinifig);
    const { name, num_parts: num, set_img_url: url } = fig as Minifig;
    const partsInfo = `There are ${num} parts in this minifig:`;

    return (
        <div className="summary__main items">
            <h2 className="black fromLeft">Summary</h2>
            <div className="image image--no-padding">
                {name && url && <Picture name={name} url={url} />}
                {name && <Name text={name} />}
            </div>
            {num && <p>{partsInfo}</p>}
        </div>
    );
};
