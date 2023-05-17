import { useState, useEffect } from "react";
import classes from "./HomeCard.module.css";
import { getUser } from "../../api/backend/user/user.service";
import { User } from "../../api/backend/user/user";
import Card from "../shared/Card";

const HomeCard = ({ setView }: any) => {
  const [user, setUser] = useState<User | undefined>(undefined);

  const getCardUser = async () => {
    const result = await getUser();
    if (result) {
      setUser(result.data);
    }
  };
  useEffect(() => {
    getCardUser();
    console.log(user);
  }, []);
  return (
    <Card>
      <h1>#USER {user?.id}</h1>
      <h1>{user?.name} Ncib</h1>
      <div className={classes.userInfo}>
        <div>
          <h4>Age:</h4>
          <h4>Profession:</h4>
          <h4>Account number:</h4>
          <h4>Current credit:</h4>
          <h4>Eligible for loan:</h4>
        </div>
        <div>
          <h4>{user?.age}</h4>
          <h4>{user?.profession}</h4>
          <h4>{user?.accountNumber}</h4>
          <h4>{user?.credit}</h4>
          <h4>{user?.eligibleForLoan ? "Yes" : "No"}</h4>
        </div>
      </div>
      {!user?.eligibleForLoan && (
        <button
          className={classes.button}
          onClick={() => {
            setView("loanApplication");
          }}
        >
          Apply for a loan
        </button>
      )}
    </Card>
  );
};

export default HomeCard;
