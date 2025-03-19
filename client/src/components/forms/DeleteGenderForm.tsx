import { Link } from "react-router-dom";

const DeleteGenderForm = () => {
  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">
            Delete Gender
          </label>
          <input
            type="text"
            className="form-control"
            id="gender"
            name="gender"
            readOnly
          />
        </div>
        <div className="d-flex justify-content-end">
          <Link to={"/gender/delete"} className="btn btn-secondary me-1">
            NO
          </Link>
          <button type="submit" className="btn btn-danger">
            YES
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeleteGenderForm
