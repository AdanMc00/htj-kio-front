import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from '@material-ui/core/Button'
export default function Ideas() {
  let valor = document.cookie.split("token=");
  const [cookie] = useState(valor[1]);
  const [ideas, setideas] = useState([]);

  useEffect(() => {
    async function getIdeas() {
      const response = await axios.get(`http://localhost:8080/ideas?`)
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
        {/*{ideas.map(idea =>(*/}
        {/*  <h1 key={idea.id}>{idea.title}</h1>*/}
        {/*))}*/}
      </div>
    </div>
  );
}

