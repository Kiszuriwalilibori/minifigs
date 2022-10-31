import { SelectedDetails, SelectedMinifig, Results, PartsItem } from "types";

export const initialState = {
    selectedMinifig: {} as SelectedMinifig,
    selectedDetails: {} as SelectedDetails,
    withParts: {} as { part: { part_num: string; name: string; part_img_url: string; part_url: string } }[],
};
/**
 * todo w powyższym array a przypisywana jako obiekt
 */
