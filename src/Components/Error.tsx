import { BasicButton } from "Components";

interface Props {
    message: string;
    handleClear: () => void;
}

const Error = (props: Props): JSX.Element => {
    const { message, handleClear } = props;
    return (
        <article className="error">
            <div className="message">
                <p className="message__general-message">Oops, something went wrong &#128549;</p>
                <hr />
                <div className="message__error-message">{message ? message : "Unknown error"}</div>
                <BasicButton className="message__hide-message button--alarm" onClick={handleClear}>
                    <svg width="24px" height="24px" viewBox="0 0 24 24" id="a2495f07-7746-4c27-a7cc-72112ecafc37" data-name="Livello 1" xmlns="http://www.w3.org/2000/svg">
                        <title>prime</title>
                        <polygon id="c8ef3de6-eeb3-441f-adf3-4bc928b83c76" data-name="clear" points="18.41 2.36 12.05 8.73 5.69 2.36 2.86 5.19 9.22 11.56 2.86 17.92 5.69 20.75 12.05 14.38 18.41 20.75 21.24 17.92 14.88 11.56 21.24 5.19 18.41 2.36" />
                    </svg>
                </BasicButton>
            </div>
        </article>
    );
};

export default Error;
