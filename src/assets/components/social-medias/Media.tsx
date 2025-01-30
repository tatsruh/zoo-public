import styled from "styled-components";
type Props = {
    name: string;
    url: string;
}
const Media = (props: Props) => {
    return (
        <MediaContainer>
            <img src={props.url} alt={props.name} />
            <span>{props.name}</span>
        </MediaContainer>
    );
};
const MediaContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 18px;
    height: 14px;
    margin-bottom: 20px;
`
export default Media;