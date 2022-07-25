import axios from 'axios';
import React,{ useState } from 'react';
import {  Form } from 'semantic-ui-react';


export default function Create() {
    const [id, setid] = useState('');
    const [nom, setFirstName] = useState('');
    const [surnom, setLastName] = useState('');
    const [wins, setwins] = useState('');
    const [losses, setlosses] = useState('');
    const [points_scored, setpoints_scored] = useState('');
  
  
// const postData = () => {
//     console.log(Nom);
//     console.log(Surnom);
//     console.log(wins);
//     console.log(losses);
//     console.log(points_scored);
// }


    const postData = () => {
        const article = ({ id,wins,losses,points_scored,nom,surnom, });
        axios.post("http://localhost:3001/api/v1/stats",  article)
    }
    return (
        
    <Form className='create-form'>
         <Form.Field>
        <label for="exampleInputEmail1" class="form-label">id</label>
        <input type="number" class="form-control" id="exampleInputEmail1"   onChange={(e) => setid(e.target.value)}min="0"/>
    <div id="emailHelp" class="form-text">the id</div>
        </Form.Field>
        <Form.Field>
        <label for="exampleInputEmail1" class="form-label">Nom</label>
        <input class="form-control" id="exampleInputEmail1"  onChange={(e) => setFirstName(e.target.value)} min="0"/>
    <div id="emailHelp" class="form-text">Your Name</div>
        </Form.Field>
        <Form.Field>
        <label for="exampleInputEmail1" class="form-label">Surnom</label>
        <input class="form-control" id="exampleInputEmail1"  onChange={(e) => setLastName(e.target.value)} min="0"/>
    <div id="emailHelp" class="form-text">Surnom</div>
        </Form.Field>
        <Form.Field>
        <label for="exampleInputEmail1" class="form-label">Wins</label>
        <input type="number" class="form-control" id="exampleInputEmail1"   onChange={(e) => setwins(e.target.value)}min="0"/>
    <div id="emailHelp" class="form-text">Wins</div>
        </Form.Field>
        <Form.Field>
        <label for="exampleInputEmail1" class="form-label">losses</label>
        <input type="number" class="form-control" id="exampleInputEmail1"  onChange={(e) => setlosses(e.target.value)} min="0"/>
    <div id="emailHelp" class="form-text">losses</div>
        </Form.Field>
        <Form.Field>
        <label for="exampleInputEmail1" class="form-label">points_scored</label>
        <input type="number"  class="form-control" id="exampleInputEmail1"  onChange={(e) => setpoints_scored(e.target.value)}min="0"/>
    <div id="emailHelp" class="form-text">points_scored</div>
        </Form.Field>
        
        <button class="btn btn-primary btn-lg" onClick={postData} type= 'submit' > button</button>
    </Form>


)
}