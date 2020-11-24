import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from '@material-ui/core/Button'

export default function Ideas({allIdeas}) {
  let valor = document.cookie.split("token=");
  const [cookie] = useState(valor[1]);
  const [ideas, setideas] = useState([]);
console.log(cookie)
  useEffect(() => {
    async function getIdeas() {
      const response = await axios.get(`http://localhost:8080/ideas?access_token=${cookie}`)
      setideas(response.data)
    };
    getIdeas()
  },[cookie]);

  return (
    <div>

      <h1>Ideas</h1>
      <Button> GetIdeas </Button>
      <div>{cookie}</div>
      <div>
        {allIdeas.map(idea =>(
          <h1 key={idea.id}>{idea.title}</h1>
        ))}
      </div>
    </div>
  );
}

