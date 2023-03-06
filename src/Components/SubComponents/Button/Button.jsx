import "./ButtonStyle.css";

export default function Button(props) {
  const { children, onClick, cls, type } = props;

  return (
    <button onClick={onClick} className={`btn-style ${cls}`} type={type}>
      {children}
    </button>
  );
}
