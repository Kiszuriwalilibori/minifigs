import React from "react";
import { ReactEventHandler } from "react";

interface Props {
    imageURL: string;
    name: string;
    loadHandler?: ReactEventHandler<HTMLImageElement>;
}
const Picture = (props: Props) => {
    const { imageURL, name, loadHandler } = props;

    return (
        <div className="picture">
            <img src={imageURL} alt={name} onLoad={loadHandler} onError={loadHandler} />
        </div>
    );
};
export default React.memo(Picture);
