function AllData() {
  const [userSubmissions, setUserSubmissions] = React.useState([]);
  
  React.useEffect(() => {

    const fetchData = async () => {
      try {

        const response = await fetch('https://api.example.com/user-submissions');
        const data = await response.json();
        setUserSubmissions(data);
      } catch (error) {
        console.error('Error fetching user submissions:', error);
      }
    };
    
    fetchData();
  }, []);

  return (
    <div className="col-md-5 mb-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">All Data</h5>
          <ul>
            {userSubmissions.map((submission, index) => (
              <li key={index}>
                {/* Display user submission data here */}
                <p>Name: {submission.name}</p>
                <p>Email: {submission.email}</p>
                {/* Add more fields as needed */}
                <hr />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
