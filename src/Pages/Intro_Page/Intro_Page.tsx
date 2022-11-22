import { useCallback, useEffect, useRef, useMemo } from "react";
import { useHistory } from "react-router-dom";

import fetchData from "functions/fetchData";
import fetchCategories from "functions/fetchCategories";
import useDispatchAction from "hooks/useDispatchAction";
import createRedirect from "functions/createRedirect";
import { BasicButton, Error, LoadingIndicator, Teaser } from "components";
import { Category } from "types";

const initialURL = "https://rebrickable.com/api/v3/lego/minifigs/?key=" + process.env.REACT_APP_MINIFIGS_KEY;
const initialCategoryURL = "https://rebrickable.com/api/v3/lego/themes/?key=" + process.env.REACT_APP_MINIFIGS_KEY;

interface Props {
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;
    categories: Category[];
}

export const Intro_Page = (props: Props) => {
    const { isError, isLoading, errorMessage, categories } = props;
    const history = useHistory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const redirect = useMemo(createRedirect(history), []);
    const { clearError } = useDispatchAction();

    const refButton = useRef<HTMLButtonElement>(null);
    console.log("categories from intropage", categories);

    useEffect(() => {
        refButton.current && refButton.current.focus();
        fetchCategories(initialCategoryURL);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleClear = useCallback(() => {
        clearError();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div className="intro">
                <div className="intro__content-box">
                    <h1> LEGO MINIFIGS MYSTERY BOX</h1>
                    <BasicButton className="button uppercased" ref={refButton} onClick={() => fetchData(initialURL, redirect)}>
                        Lets'go
                    </BasicButton>
                </div>
                <Teaser />
            </div>
            {isLoading && <LoadingIndicator />}
            {isError && <Error message={errorMessage} handleClear={handleClear} />}
        </>
    );
};
