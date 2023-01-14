
import {ShowCovidDataTable} from './component/CovidDataTable';
function App() {

  return (
  <div className='container'>
  <h2 className='text-center text-danger'>Summary of Coronavirus COVID19 Updated(2023)</h2>
  <h5 className='text-center text-info'>API Resource https://rapidapi.com/api-sports/api/covid-193/</h5>
  <div className="container mt-5">
  <ShowCovidDataTable></ShowCovidDataTable>
  </div>
  </div>
  );
}

export default App;
