
export default function Diagram({diagram}){
    return(
        <div className={'diagram'}>
            <div className={'flask'}
            style={{
                    backgroundColor: diagram.color
                }}>
                <div className={'water'}
                style={{
                    backgroundColor: "white",
                    height:3 * (100 - diagram.percent)
                }}
                >

                </div>
            </div>
            <p>{diagram.name}</p>
        </div>
    )
}
