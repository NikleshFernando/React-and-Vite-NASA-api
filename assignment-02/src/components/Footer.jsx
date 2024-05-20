import { IoMdInformationCircle } from "react-icons/io";

export default function Footer(props) {
  const { showModel, handleToggleModel, data } = props;
  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h1>APOD project</h1>
        <h2>{data?.title}</h2>
      </div>
      <button onClick={handleToggleModel}>
        <i className="fa-solid fa-circle-info">
          <IoMdInformationCircle />
        </i>
      </button>
    </footer>
  );
}
