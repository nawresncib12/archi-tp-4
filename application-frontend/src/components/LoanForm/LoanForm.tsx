import classes from "./LoanForm.module.css";
import Card from "../shared/Card";
import { submitLoanRequest } from "../../api/loanManagement/loanManagement.service";

const LoanForm = ({ setView }: any) => {
  const submitLoanApplication = async () => {
    const result = await submitLoanRequest("nawres ncib 12123 200");
    if (result) {
      alert(result?.data?.loanStatus);
      return;
    }
    alert("Application rejected");
  };

  return (
    <Card>
      <div className={classes.loanFormContainer}>
        <form className={classes.loanForm}>
          <h1>Please upload your files</h1>
          <input type="text" />
          <input type="file" />
          <div className={classes.buttons}>
            <button type="button" onClick={submitLoanApplication}>
              submit
            </button>
            <button
              type="button"
              onClick={() => {
                setView("home");
              }}
              className={classes.secondary}
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </Card>
  );
};

export default LoanForm;
