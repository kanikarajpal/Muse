import "./MenuStyle.css";
export default function Menu({title, compList}) {
  
  
  return (
    <div className="menu">
      <h2 className="main-head">{title}</h2>

      {compList.map((item, index) => {
        return <div key={index} className="sub-head">{item}</div>;
      })}

      
    </div>
  );
}
