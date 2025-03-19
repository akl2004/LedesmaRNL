const GendersTable = () => {
  return (
    <table className="table table-hover table-striped text-center">
      <thead className="table-dark">
        <tr>
          <th>No.</th>
          <th>Gender</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {[
          { id: 1, gender: "Male" },
          { id: 2, gender: "Female" },
          { id: 3, gender: "Others" },
        ].map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.gender}</td>
            <td>
              <div className="d-flex justify-content-center gap-2">
                <button className="btn btn-primary btn-sm">Edit</button>
                <button className="btn btn-danger btn-sm">Delete</button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GendersTable;
