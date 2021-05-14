import React,{ useState} from 'react';
import Project2 from './Project2';

const Project=()=>{
const [cList,sList]=useState("");
const[Items, setItems]=useState([]);
const listOfItems=()=>{
    setItems((oldItems)=>{return[...oldItems,cList]}); sList("");
};
const deleteItems =(id)=>{
        setItems((oldItems)=>{
            return oldItems.filter((arrElem,index)=>{
                return index !==id;
            })
        })
}
const itemEvent=(event)=>{
    sList(event.target.value);
};   return(<>
    <div className="main_div">
    <div className="center_div">
        <br/>
      <h1>To Do List</h1>
      <br/>
      <input type="text"  value={cList}onChange={itemEvent} placeholder='Add a items'></input>
      <button onClick={listOfItems} ><i className="icon" class="fa fa-plus-circle"></i></button>
     <ol>

         
         {Items.map((itemval, index)=>{
             return <Project2 key={index} 
             id={index}
             onSelect={deleteItems}
             text={itemval}/>
         })
         }

     </ol>
     <footer>copy@Shivani Verma</footer>
      </div>
    </div>
    </>)
 }
export default Project;