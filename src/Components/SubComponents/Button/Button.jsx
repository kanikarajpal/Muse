import "./ButtonStyle.css"

export default function Button(props) {
  const { children, onClick, cls} = props;
  
  return <button onClick={onClick} className= {`btn-style ${cls}`}>{children}</button>;
}
 