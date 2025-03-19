import AddGenderForm from "../../components/forms/AddGenderForm";
import GendersTable from "../../components/table/GendersTable";
import MainLayout from "../layout/MainLayout";

const Genders = () => {
  return (
    <MainLayout
      content={
        <div className="row p-3">
          <div className="col-md-4">
            <div className="card p-3 shadow-sm">
              <AddGenderForm />
            </div>
          </div>
          <div className="col-md-8">
            <div className="card p-3 shadow-sm">
              <GendersTable />
            </div>
          </div>
        </div>
      }
    />
  );
};

export default Genders;
