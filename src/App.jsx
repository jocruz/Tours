import { useState, useEffect } from "react";
import Tours from "./Tours";
import Loading from "./Loading";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      console.log("response was loaded");
      const data = await response.json();
      console.log("data was loaded");
      setTours(data);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  const removeTour = (idToRemove) => {
    const updatedTours = tours.filter((tour) => {
      return tour.id !== idToRemove;
    });
    setTours(updatedTours);
  };

  const refresh = () => {
    setLoading(true);
    fetchTours();
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <main>
      {loading ? (
        <div>
          <Loading />
        </div>
          
      ) : (
        
          <div className="title">
            <Tours tours={tours} removeTour={removeTour} />
          </div>
      )}

      {tours.length === 0 && loading === false ? (
        <div className="title">
          <h2>No More Tours</h2>
          <button onClick={refresh} className="btn">
            reFetch
          </button>
        </div>
      ) : (
        ""
      )}
    </main>
  );
};
export default App;
