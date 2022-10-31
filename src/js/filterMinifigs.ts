import { Minifig } from "types/types";

const filterMinifigs = (figs: Minifig[], str: string) => {
    const result = figs.filter(item => {
        return item.name.toLowerCase().includes(str.toLowerCase()) && item.set_img_url;
    });
    return result;
};

export default filterMinifigs;
