
import {Component} from 'react'
//main component is not expecting to receive any prop by default we need to give MainComponent awerness of which porops it s going to reveive
//we need to give he props object a shape, we need to create na Interface

interface MainComponentProps{
    title:string,
    subTitle?:string
}

interface MainComponentState{
    name:string| null
   /*  books:Book[] */
}
class MainComponent extends Component<MainComponentProps,MainComponentState>{
    state:MainComponentState={
        name:'elisa'
    }
 render(){
        return(
            <div>
            <h2>Im the main </h2>
            <h3>{this.props.title}</h3>
            <h3>{this.props.subTitle|| 'No subtitle prop recieved'}</h3>
            <button onClick={()=>this.setState({name:"sara"})}>{this.state.name}</button>
            </div>
        )
    }
}
export default MainComponent
   
