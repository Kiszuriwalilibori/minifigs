interface Props {
    text: string;
}
const Name = (props: Props) => {
    const { text } = props;

    return <p className="name">{text}</p>;
};
export default Name;
