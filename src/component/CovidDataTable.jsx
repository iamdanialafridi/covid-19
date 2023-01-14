import {useEffect,useState} from 'react';
import { LoadApi } from '../lib/LoadApi'
export function ShowCovidDataTable(){
   let [record,setRecords] = useState(null);
  useEffect ( async()=>{
   
  let res=  await LoadApi('statistics');
   setRecords(res);

  },[])

  console.log('recrod',record);
return (
    <>
    <table className="table table-striped">
  <thead className="thead-dark">
    <tr>
    <th scope="col">continent Name</th>
      <th scope="col">Country Name</th>
      <th scope="col">population</th>
      <th scope="col">Cases</th>
      <th scope="col">Active Cases</th>
      <th scope="col">Date</th>
    </tr>
  </thead>

  {record  ?
  <tbody>
   {
    record.response.map(rec =>(
      
            
        
  <tr>
  
  
     <td>{rec.continent}</td>   
     <td>{rec.country}</td>   
     <td>{rec.population}</td>   
     <td>{rec.cases.new}</td> 
     <td>{rec.cases.active}</td>     
     <td>{rec.day}</td>   
     
   
  </tr>
  
   
    ))
}
  </tbody>
: ''}


</table>
{
    record ? ''
    : <h5 className='text-center  text-danger table-striped'>No Result</h5>
}
  
    </>
);


}