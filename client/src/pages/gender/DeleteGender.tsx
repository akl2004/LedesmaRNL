import MainLayout from "../layout/MainLayout";
import DeleteGenderForm from "../../components/forms/DeleteGenderForm";

const DeleteGender = () => {
  const content = (
    <>
      <div className="d-flex justify-content-center">
        <div className="col-md-3">
          <DeleteGenderForm />
        </div>
      </div>
    </>
  );
  return <MainLayout content={content} />;
};

export default DeleteGender;
