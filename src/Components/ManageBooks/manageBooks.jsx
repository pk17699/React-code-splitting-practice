import axios from "axios"
import React from "react";
import {useNavigate} from "react-router-dom"

const url="http://localhost:4000/task"

export default function ManageBooks() {
  const [book, setPost] = React.useState([]);
  let navigate = useNavigate();

  React.useEffect(() => {
    axios.get(url).then((response) => {
      setPost(response.data);
    });
  })

  const bookdata = book.map((ele=>
      {
        return(
          <table style={{marginLeft:"auto", marginRight:"auto"}}>
            <tr>
              <td><h1>{ele.id}). {ele.book}</h1></td>
              <td>&nbsp;</td>
              <td><button onClick={()=> navigate(`/manage-books/${ele.id}`,{state:{id:ele.id,name:ele.book}})}>Manage</button></td>
            </tr>
          </table> 
        )
      }
  ))

  return [bookdata]

  
}
