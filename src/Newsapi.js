import React from 'react';
import Button from '@material-ui/core/Button';


  const Newsapi = (props) => {
    return (
       <>
       
 
  
    <tr>
      <th>{props.id+1}</th>
      <td><img src={props.image} alt='image1' /></td>
      <td>{props.source}</td>
      <td>{props.author}</td>
      <td>{props.title}</td>
      <td>{props.date}</td>
      <td><Button variant="contained" color="primary" href="#contained-buttons">
      <a href={props.url} style={{color: "white"}}>URL</a>
      
</Button></td>
    </tr>



       </>
    )
}

export default Newsapi;

