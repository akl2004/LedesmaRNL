import { useState } from "react";
import AlertMessage from "../../components/AlertMessage";
import AddGenderForm from "../../components/forms/AddGenderForm";
import GendersTable from "../../components/table/GendersTable";
import MainLayout from "../layout/MainLayout";

const Genders = () => {
  const [refreshGenders, setRefreshGenders] = useState(false);

  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleShowAlertMessage = (
    message: string,
    isSuccess: boolean,
    isVisible: boolean
  ) => {
    setMessage(message);
    setIsSuccess(isSuccess);
    setIsVisible(isVisible);
  };

  const handleCloseAlertMessage = () => {
    setMessage("");
    setIsSuccess(false);
    setIsVisible(false);
  };

  const content = (
    <>
      <AlertMessage
        message={message}
        isSuccess={isSuccess}
        isVisible={isVisible}
        onClose={handleCloseAlertMessage}
      />
      <div className="row p-3">
        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <AddGenderForm
              onGenderAdded={(message) => {
                handleShowAlertMessage(message, true, true);
                setRefreshGenders(!refreshGenders);
              }}
            />
          </div>
        </div>
        <div className="col-md-8">
          <div className="card p-3 shadow-sm">
            <GendersTable refreshGenders={refreshGenders} />
          </div>
        </div>
      </div>
    </>
  );
  return <MainLayout content={content} />;
};

export default Genders;
