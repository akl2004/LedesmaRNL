import { FormEvent, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import GenderService from "../../../services/GenderService";
import ErrorHandler from "../../../handler/ErrorHandler";
import Spinner from "../../Spinner";
import SpinnerSmall from "../../SpinnerSmall";

interface DeleteGenderFormProps {
  onDeleteGender: (message: string) => void;
}

const DeleteGenderForm = ({ onDeleteGender }: DeleteGenderFormProps) => {
  const { gender_id } = useParams();
  const [state, setState] = useState({
    loadingGet: true,
    loadingDestroy: false,
    gender_id: 0,
    gender: "",
  });

  const handleGetGender = (genderId: number) => {
    GenderService.getGender(genderId)
      .then((res) => {
        if (res.status === 200) {
          setState((prevstate) => ({
            ...prevstate,
            gender_id: res.data.gender.gender_id,
            gender: res.data.gender.gender,
          }));
        } else {
          console.error(
            "Unexpected status error while getting gender: ",
            res.status
          );
        }
      })
      .catch((error) => {
        ErrorHandler(error, null);
      })
      .finally(() => {
        setState((prevState) => ({
          ...prevState,
          loadingGet: false,
        }));
      });
  };

  const handleDestroyGender = (e: FormEvent) => {
    e.preventDefault();

    setState((prevState) => ({
      ...prevState,
      loadingDestroy: true,
    }));

    GenderService.destroyGender(state.gender_id)
      .then((res) => {
        if (res.status === 200) {
          onDeleteGender(res.data.message);
        } else {
          console.error(
            "Unexpected status error while detroying gender: ",
            res.status
          );
        }
      })
      .catch((error) => {
        console.error(error, null);
      })
      .finally(() => {
        setState((prevState) => ({
          ...prevState,
          loadingDestroy: false,
        }));
      });
  };

  useEffect(() => {
    if (gender_id) {
      const parsedGenderId = parseInt(gender_id);
      handleGetGender(parsedGenderId);
    } else {
      console.error("Invalid gender_id: ", gender_id);
    }
  }, [gender_id]);

  return (
    <>
      {state.loadingGet ? (
        <div className="text-center mt-5">
          <Spinner />
        </div>
      ) : (
        <div>
          <form onSubmit={handleDestroyGender}>
            <h3>Are you sure you want to delete this gender?</h3>
            <div className="mb-3">
              <label htmlFor="gender" className="form-label">
                Delete Gender
              </label>
              <input
                type="text"
                className="form-control"
                id="gender"
                name="gender"
                value={state.gender}
                readOnly
              />
            </div>
            <div className="d-flex justify-content-end">
              <Link
                to={"/"}
                className={`btn btn-secondary me-1 ${
                  state.loadingDestroy ? "disabled" : ""
                }`}
              >
                Back
              </Link>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={state.loadingDestroy}
              >
                {state.loadingDestroy ? (
                  <>
                    <SpinnerSmall /> Deleting...
                  </>
                ) : (
                  "Yes"
                )}
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default DeleteGenderForm;
