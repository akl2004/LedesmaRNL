import { FormEvent, ChangeEvent, useState } from "react";
import GenderService from "../../../services/GenderService";
import ErrorHandler from "../../../handler/ErrorHandler";
import GenderFieldErrors from "../../../interfaces/GenderFieldError";
import SpinnerSmall from "../../SpinnerSmall";

interface AddGenderFormProps {
  onGenderAdded: (message: string) => void;
}

const AddGenderForm = ({ onGenderAdded }: AddGenderFormProps) => {
  const [state, setState] = useState({
    loadingStore: false,
    gender: "",
    errors: {} as GenderFieldErrors,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleStoreGender = (e: FormEvent) => {
    e.preventDefault();

    setState((prevState) => ({
      ...prevState,
      loadingStore: true,
    }));

    GenderService.storeGender(state)
      .then((res) => {
        if (res.status === 200) {
          setState((prevState) => ({
            ...prevState,
            gender: "",
            errors: {} as GenderFieldErrors,
          }));

          onGenderAdded(res.data.message);
        } else {
          console.error(
            "Unexpected status error during storing gender: ",
            res.status
          );
        }
      })
      .catch((error) => {
        if (error.response.status === 422) {
          setState((prevState) => ({
            ...prevState,
            errors: error.response.data.errors,
          }));
        } else {
          ErrorHandler(error, null);
        }
      })
      .finally(() => {
        setState((prevState) => ({
          ...prevState,
          loadingStore: false,
        }));
      });
  };

  return (
    <div>
      <form onSubmit={handleStoreGender}>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">
            Add Gender
          </label>
          <input
            type="text"
            className={`form-control ${
              state.errors.gender ? "is-invalid" : ""
            }`}
            id="gender"
            name="gender"
            placeholder="Enter gender"
            value={state.gender}
            onChange={handleInputChange}
          />
          {state.errors.gender && (
            <p className="text-danger">{state.errors.gender[0]}</p>
          )}
        </div>
        <div className="d-flex justify-content-end">
          <button
            type="submit"
            className="btn btn-primary px-4"
            disabled={state.loadingStore}
          >
            {state.loadingStore ? (
              <>
                <SpinnerSmall /> Loading...
              </>
            ) : (
              "Save"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddGenderForm;
