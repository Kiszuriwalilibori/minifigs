interface Props {
    message: string;
}

const Error = (props: Props): JSX.Element => {
    const { message } = props;
    return (
        <article className="error">
            <div className="message">
                <p className="message__general-message">Hi, &#128512;</p>
                <hr />
                <div className="message__error-message">{message ? message : ""}</div>
            </div>
        </article>
    );
};

export default Error;
