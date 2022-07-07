import React from "react";
import { useLocation } from "react-router-dom";
import {deleteTask} from "../../Services/taskService";
import {useNavigate} from "react-router-dom"
function ManageBookId(){
    const location = useLocation();
    let navigate = useNavigate();
    return(
        <table style={{marginLeft:"auto", marginRight:"auto"}}>
            <tr>
                <td><h1>{location.state.id}). {location.state.name}</h1></td>
                <td>&nbsp;</td>
                <td><button onClick={e => {deleteTask(location.state.id, e); navigate('/manage-books')}}>delete</button></td>
            </tr>
        </table>
    )
}
export default ManageBookId