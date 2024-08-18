

// нашел в интернете эту функцию
function check_color(color){
const new_color = new Option().style
    new_color.color = color
    return new_color.color !== ''
}

function add_diagram(diagrams,func,event){
    event.preventDefault()
    console.log(event)
    let name = event.target.name.value
    let percent = event.target.percent.value
    let color = event.target.color.value
    if (!check_color(color)){
        alert('Не существующий цвет!')
        return
    }
    if(percent >100 || percent<0){
        alert('Процентное значение вне 0-100!')
        return
    }
    let diagram = {
        name:name,
        color:color,
        percent:percent
    }
    func([...diagrams,diagram])

}
export default function CreateDiagram({diagrams, func}){
    return(
        <form action="" className={'create-diagram'} onSubmit={()=>add_diagram(diagrams,func,event)}>

            <input type={'text'} name={'name'} placeholder='name'/>
            <input type={'number'} name={'percent'} placeholder='0-100%'/>
            {/*<input type={'color'} name={'color'} placeholder='color'/> не знаю можно ли так использовать*/}
            <input type={'text'} name={'color'} placeholder='color'/>
            <button>Create flask</button>


        </form>
    )
}