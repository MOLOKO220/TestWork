import { Link } from "react-router-dom";
import "./CompLink.scss";

function CompLink(props) {
  return (
    <>
      <Link className={"where-who-what " + props.className} to={props.url}>
        {props.content}
        <div></div>
      </Link>
    </>
  );
}

export default CompLink;
