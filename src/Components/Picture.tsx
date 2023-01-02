import React from "react";
import { ReactEventHandler } from "react";

interface Props {
    url: string;
    name: string;
    loadHandler?: ReactEventHandler<HTMLImageElement>;
}
const Picture = (props: Props) => {
    const { url, name, loadHandler } = props;

    return (
        <div className="picture">
            <img src={url} alt={"Picture of " + name} onLoad={loadHandler} onError={loadHandler} />
        </div>
    );
};
export default React.memo(Picture);
