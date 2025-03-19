import { Link } from "react-router-dom";

const EditGenderForm = () => {
  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">
            Edit Gender
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
          <Link to={"/"} className="btn btn-secondary me-1">
            CANCEL
          </Link>
          <button type="submit" className="btn btn-primary">
            UPDATE
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditGenderForm;
