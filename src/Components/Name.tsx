interface Props {
    name: string;
}
const Name = (props: Props) => {
    const { name } = props;

    return <p className="name">{name}</p>;
};
export default Name;
