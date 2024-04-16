import { Minifigs } from "types";

const filterMinifigs = (minifigs: Minifigs, str: string) => {
    const result = minifigs.filter(item => {
        return item.name.toLowerCase().includes(str.toLowerCase()) && item.set_img_url;
    });

    return result;
};

export default filterMinifigs;
