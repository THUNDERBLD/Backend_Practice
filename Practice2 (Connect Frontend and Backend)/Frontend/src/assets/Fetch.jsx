import { useState, useEffect } from 'react';
import axios from 'axios';

function Fetch() {
  const [data, setData] = useState(null); // Initialize data state as null

  useEffect(() => {
    axios.get('http://localhost:3000/api/objData')
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }, []); // Empty dependency array to run once after component mounts

  return (
    <div>
      <div style={{"color":"white"}}>
        <div>
          {data ? data.name : 'Loading...'}
        </div>
        THUNDER BLOOD
        <div>
          Total users: {Array.isArray(data) ? data.length : 0}
        </div>
      </div>
      <div>
        {Array.isArray(data) ? (
          data.map((e, i) => (
            <div key={i}>
              <h1 className='' style={{"color": "green"}}>{e.name}</h1>
              <h1>{e.age}</h1>
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
}

export default Fetch;
