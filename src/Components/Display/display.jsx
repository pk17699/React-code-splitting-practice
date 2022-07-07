import axios from "axios"
import React from "react";

const url="http://localhost:4000/task"

export default function Home() {
  const [book, setPost] = React.useState([]);

  React.useEffect(() => {
    axios.get(url).then((response) => {
      setPost(response.data);
    });
  },[]);

    const bookdata = book.map((ele=>{return <h1>{ele.id}). {ele.book}</h1>}))
    return(
        [bookdata]
    )
}
