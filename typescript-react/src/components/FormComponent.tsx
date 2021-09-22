
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {ChangeEvent,FormEvent, useState} from 'react'
import { RouteComponentProps } from 'react-router-dom'

interface FormComponentProps{
    //this is an interface for My own props, the ones i'm passing to FormComponent explicitely
title:string,

}
/* interface FormComponentProps extends RouteComponentProps{
    //this is an interface for My own props, the ones i'm passing to FormComponent explicitely
title:string,

} */

type MixedProps=RouteComponentProps& FormComponentProps

/* const FormComponent = ({location,history,match,title}:MixedProps) => { */
    const FormComponent = ({title,location,...restprops}:MixedProps) => {
    //{title,location,...restprops}
const [name,setName]=useState("")
const [surname,setSurName]=useState("")
const [checkbox,setCheckbox]=useState(false)

const handleInput=(value:(string | boolean), stateProperty:string)=>{
   /*  setName(e.target.value) */
   console.log(location.pathname)
   if(stateProperty=='name'){
       setName(value as string)
   }else if(stateProperty==='surname'){
       setSurName(value as string)
   }
   else if(stateProperty==='checkbox'){
       setCheckbox(value as boolean)
   }
}

const handleSubmit=(e:FormEvent)=>{
    e.preventDefault()
    const ObjectToSend={
        name,
        surname,
        checkbox,
    }
    //this is your object, you can stringify it and send it to the API
}
    return (
        <Form onSubmit={handleSubmit}>
  <Form.Group >
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e:ChangeEvent<HTMLInputElement>)=>handleInput(e.target.value,"name")} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Surname</Form.Label>
    <Form.Control type="text" placeholder="surname" value={surname} onChange={(e:ChangeEvent<HTMLInputElement>)=>handleInput(e.target.value,"surname")}/>
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Srtive student" checked={checkbox} onChange={(e:ChangeEvent<HTMLInputElement>)=>handleInput(e.target.value,"checkbox")} />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    )
}

export default FormComponent
