import React from 'react';
 
import { useNavigate } from 'react-router-dom';


export default function Table({TableData}) {
   const navigate = useNavigate();
   console.log(TableData, "hello")
// const Data = Object.keys(props.TableData[0]);
    const backToHome = () => {
        navigate('/');
    }
    const toGraph = () => {
        navigate('/graph');
    }
  return (
    <div>
         <h2 style={{color:'blue'}}>Student Details</h2>
      <table>
       
         
          <thead className='heading'>
            
                <tr>
                    <th>Name</th>
                    <th>Telugu</th>
                    <th>English</th>
                    <th>Hindi</th>
                    <th>Maths</th>
                    <th>Science</th>
                    <th>Social</th>
                </tr>
                 
                     
            
             
            </thead>
        
        <tbody>
          {TableData !== undefined && TableData.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.NAME }</td>
                <td>{user.Telugu}</td>
                <td>{user.English}</td>
                <td>{user.Hindi}</td>
                <td>{user.Maths}</td>
                <td>{user.Science}</td>
                <td>{user.Social}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={()=>backToHome()}>Back To Home</button>
      <button onClick={()=>toGraph()}>To Graph</button>
    </div>
  );
}
