import "./MenuStyle.css";
export default function Menu({title, compList}) {
  
  
  return (
    <div className="menu">
      <p className="main-head">{title}</p>

      {compList.map((item, index) => {
        return <div key={index} className="sub-head">{item}</div>;
      })}

      
    </div>
  );
}
