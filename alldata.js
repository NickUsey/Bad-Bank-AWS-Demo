function UserDataCard({ submission }) {
  return (
    <div className="card bg-primary text-white">
      <div className="card-body">
        <p className="card-text">
          <strong>Name:</strong> {submission.name}
        </p>
        <p className="card-text">
          <strong>Email:</strong> {submission.email}
        </p>
        {/* Add more fields as needed */}
        <hr />
      </div>
    </div>
  );
}

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
          <div className="row">
            {userSubmissions.map((submission, index) => (
              <div className="col-md-4 mb-3" key={index}>
                <UserDataCard submission={submission} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
