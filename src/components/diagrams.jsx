import Diagram from "./diagram.jsx";
export default function Diagrams({diagrams}){
    return(
        <div className={'diagrams'}>
            {diagrams.map((e,key)=>{
                return(
                    <>
                        <Diagram key={key} diagram={e}/>
                    </>
                    )
            })}

        </div>
    )
}