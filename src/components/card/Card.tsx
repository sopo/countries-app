import "./Card.css";


export default function Card({children}) { 
  return (
    <div className='card'>
      {children}
    </div>
  );
}

{/* <div className="card border-radius-xl padding-xl">

</div> */}