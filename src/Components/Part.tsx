import { PartsItem } from "types";

interface Props {
    data: PartsItem;
}
const Part = (props: Props) => {
    const { data } = props;

    return (
        <div className="part">
            <img className="part__image" src={data.part.part_img_url} alt={"Picture of " + data.part.name}></img>
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
