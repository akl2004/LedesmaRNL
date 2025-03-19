const AddGenderForm = () => {
  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">
            Add Gender
          </label>
          <input
            type="text"
            className="form-control"
            id="gender"
            name="gender"
            placeholder="Enter gender"
          />
        </div>
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-primary px-4">
            SAVE
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddGenderForm;
