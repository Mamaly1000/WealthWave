import { useDispatch, useSelector } from "react-redux";
import {
  masterCardIcon,
  paypalIcon,
} from "../../../assets/dashboard/dashboardIcons";
import { useState } from "react";
import Budget_child_container from "./Budget_child_container";
import Section_Header from "./Section_Header";
import Custom_textfield from "./Custom_textfield";
import Custom_DateComponent from "./Custom_DateComponent";
import { selecttheme } from "../../../features/theme_slice/theme_slice";
import Custom_checkbox from "./Custom_checkbox";
import {
  budgetTransActionType,
  selectUserActions,
  setAccounts,
  setBudget,
} from "../../../features/user-actions-slice/actions_slice";
import { gradientGenerator } from "../../../utils/gradientGenerator";
import moment from "moment";
import useActions from "../../../hooks/useActions";
import { toast } from "react-toastify";
const banks = [
  {
    name: "mastercard",
    icon: masterCardIcon,
  },
  {
    name: "paypal",
    icon: paypalIcon,
  },
];
const AddBudgetForm = () => {
  const dispatch = useDispatch();
  const UserActions = useSelector(selectUserActions);
  const theme = useSelector(selecttheme);
  const [saveCardData, setSaveCardData] = useState(false);
  const [transactionData, setTransActionData] = useState({
    amount: "",
    card: {
      icon: "",
      name: "",
      card_number: "",
      cvv: "",
      Ex_date: Date.now(),
    },
  });
  const { AccountDetector } = useActions();
  const validation = () => {
    const savedAcc = AccountDetector(+transactionData.card.card_number);
    if (transactionData.card.card_number.length !== 16) {
      toast.error("your card-number must has 16 character");
    } else if (transactionData.card.Ex_date > Date.now()) {
      toast.error("please enter a valid date for your account card");
    } else if (transactionData.amount.length === 0) {
      toast.error("you must enter an amount ");
    } else if (+transactionData.amount <= 0) {
      toast.error("your amount is not valid");
    } else if (transactionData.card.cvv.length === 0) {
      toast.error("you must enter your card cvv");
    } else if (transactionData.card.cvv.length !== 4) {
      toast.error("your card-cvv must has 4 character");
    } else if (transactionData.card.name.length === 0) {
      toast.error("your card-bank must be entered");
    } else if (savedAcc.exist === true) {
      if (
        moment(savedAcc.EX_date).format("YYYY/MM") !==
        moment(transactionData.card.Ex_date).format("YYYY/MM")
      ) {
        toast.error("your card expiration date is not valid");
      } else if (savedAcc.cvv !== +transactionData.card.cvv) {
        toast.error("your account cvv is not valid");
      } else if (savedAcc.icon !== transactionData.card.icon) {
        toast.error("your selected bank is not valid");
      } else {
        dispatch(
          setBudget({
            transaction: {
              amount: +transactionData.amount,
              current_balance: UserActions.budget.amount,
              icon: transactionData.card.icon,
              status: ["failed", "completed", "pending", "proccessing"][
                Math.floor(Math.random() * 3)
              ],
              title: "increasing budget for further investments",
              transferedDate: new Date(Date.now()) + "",
            } as budgetTransActionType,
          })
        );
      }
    } else if (savedAcc.exist === false) {
      if (saveCardData) {
        dispatch(
          setBudget({
            transaction: {
              amount: +transactionData.amount,
              current_balance: UserActions.budget.amount,
              icon: transactionData.card.icon,
              status: ["failed", "completed", "pending", "proccessing"][
                Math.floor(Math.random() * 3)
              ],
              title: "increasing budget for further investments",
              transferedDate: new Date(Date.now()) + "",
            } as budgetTransActionType,
          })
        );
        dispatch(
          setAccounts({
            type: "add",
            account_number: +transactionData.card.card_number,
            bgColor: gradientGenerator(),
            cvv: +transactionData.card.cvv,
            EX_date: new Date(transactionData.card.Ex_date) + "",
            icon: transactionData.card.icon,
            allow_save: saveCardData,
          })
        );
      } else {
        dispatch(
          setBudget({
            transaction: {
              amount: +transactionData.amount,
              current_balance: UserActions.budget.amount,
              icon: transactionData.card.icon,
              status: ["failed", "completed", "pending", "proccessing"][
                Math.floor(Math.random() * 3)
              ],
              title: "increasing budget for further investments",
              transferedDate: new Date(Date.now()) + "",
            } as budgetTransActionType,
          })
        );
      }
    }
  };
  return (
    <Budget_child_container classname="big-container add-budget-container">
      <Section_Header text="add more invesments to your budget" />
      <section>
        <Custom_textfield
          value={transactionData.card.card_number}
          onchange={(e) => {
            if (!isNaN(+e.target.value) && e.target.value.length <= 16)
              setTransActionData({
                ...transactionData,
                card: {
                  ...transactionData.card,
                  card_number: e.target.value,
                },
              });
          }}
          type="text"
          label="Account-number"
        />
        <Custom_DateComponent
          onchange={(e) => {
            setTransActionData({
              ...transactionData,
              card: {
                ...transactionData.card,
                Ex_date: moment(e).toDate().getTime(),
              },
            });
          }}
          label="expire-date"
          value={transactionData.card.Ex_date}
        />
        <Custom_textfield
          value={transactionData.amount}
          onchange={(e) => {
            if (!isNaN(+e.target.value) && e.target.value.length <= 6)
              setTransActionData({
                ...transactionData,
                amount: e.target.value,
              });
          }}
          type="text"
          label="Transaction-Amount $"
          max={5}
        />
      </section>
      <section>
        <Custom_textfield
          value={transactionData.card.cvv}
          onchange={(e) => {
            if (!isNaN(+e.target.value) && e.target.value.length < 5)
              setTransActionData({
                ...transactionData,
                card: {
                  ...transactionData.card,
                  cvv: e.target.value,
                },
              });
          }}
          type="text"
          label="Cvv4"
        />
        <div className="bank-items-container">
          {banks.map((bank) => {
            return (
              <button
                style={{
                  background:
                    transactionData.card.name === bank.name
                      ? theme.btnColor
                      : "",
                  border: `1px solid ${theme.btnColor}`,
                }}
                key={bank.name}
                onClick={() =>
                  setTransActionData({
                    ...transactionData,
                    card: {
                      ...transactionData.card,
                      icon: bank.icon,
                      name: bank.name,
                    },
                  })
                }
                className="bank-item"
              >
                <img src={bank.icon} />
              </button>
            );
          })}
        </div>
        <Custom_checkbox
          value={saveCardData}
          onclick={() => {
            setSaveCardData((prev) => !prev);
          }}
          label="save your account data!"
        />
      </section>
      <section>
        <button
          className="submit-btn"
          onClick={() => {
            validation();
          }}
        >
          withdrawal
        </button>
        <button
          className="reset-btn"
          onClick={() => {
            setTransActionData({
              amount: "",
              card: {
                card_number: "",
                cvv: "",
                Ex_date: Date.now(),
                icon: "",
                name: "",
              },
            });
            setSaveCardData(false);
          }}
        >
          reset
        </button>
      </section>
    </Budget_child_container>
  );
};

export default AddBudgetForm;
