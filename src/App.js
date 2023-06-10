import React, { useState } from 'react';
import { Button } from '@mui/material';
import Loader from './Loader';
import axios from 'axios'
function App() {
  const [loading, setLoading] = useState(false);
  
  const handleAPICall = () => {
    setLoading(true);
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => {
        // Handle the API response here
        console.log(response.data);
        setLoading(false);
      })
      .catch(error => {
        // Handle any errors here
        console.error(error);
        setLoading(false);
      });
  };

  return (
    <div>
      <Button variant="contained" onClick={handleAPICall}>
        Call API
      </Button>
     <Loader loading={loading} />
      {/* Rest of your component */}
    </div>
  );
}

export default App;
