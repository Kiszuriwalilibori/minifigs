import uuid from "react-uuid";

import { useLazyAxios } from "use-axios-client";
import { useEffect, useRef } from "react";

import LoadingIndicator from "Components/LoadingIndicator";
import { PartsItem } from "types";

import { Part } from "Components";

interface Props {
    setNumber: string;
}

interface Results {
    results: { part: { part_num: string; name: string; part_img_url: string; part_url: string } }[];
}

// interface Part {
//     part: {
//         part_num: string;
//         name: string;
//     };
// }

export const Parts = (props: Props) => {
    const { setNumber } = props;
    const ref = useRef<any>(null as any);

    const URL =
        "https://rebrickable.com/api/v3/lego/minifigs/" +
        setNumber +
        "/parts/?key=" +
        "8e442d7f1155bab4074dbff1e76bc680";

    const [getData, { data, error, loading: isLoading }] = useLazyAxios({
        url: URL,
    });

    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (isLoading) return <LoadingIndicator />;
    if (error) return <div>It seems that Dementors sucked all parts &#128549;</div>;
    if (data && (data as unknown as Results).results.length > 0) {
        ref.current = (data as unknown as Results).results;
    }

    return ref.current && ref.current.length > 0 ? (
        <div className="parts">
            {ref.current.map((partData: PartsItem) => {
                return <Part data={partData} key={uuid()} />;
            })}
        </div>
    ) : (
        <div>It seems that Dementors sucked all the parts &#128553;</div>
    );
};

// https://rebrickable.com/api/v3/lego/minifigs/fig-006052/parts/?key=8e442d7f1155bab4074dbff1e76bc680
