import { ReactEventHandler } from "react";
import { PartsItem } from "types";

interface Props {
    data: PartsItem;
    loadHandler?: ReactEventHandler<HTMLImageElement>;
}
const Part = (props: Props) => {
    const { data, loadHandler } = props;

    return (
        <div className="part">
            <img className="part__image" src={data.part.part_img_url} alt={data.part.name} onLoad={loadHandler} onError={loadHandler}></img>
            <div className="part__text-items">
                <div className="part__item part__name">{data.part.name}</div>
                <a className="part__item part__code" href={data.part.part_img_url} target="blank">
                    {data.part.part_num}
                </a>
            </div>
        </div>
    );
};

export default Part;
