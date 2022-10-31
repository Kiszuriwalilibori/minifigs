interface Props {
    url: string;
    name: string;
}
const Picture = (props: Props) => {
    const { url, name } = props;

    return (
        <div className="picture">
            <img src={url} alt={"Picture of " + name} />
        </div>
    );
};
export default Picture;
