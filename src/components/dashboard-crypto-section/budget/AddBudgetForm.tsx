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
  budgetAccountsType,
  budgetTransActionType,
  selectUserActions,
  setBudget,
} from "../../../features/user-actions-slice/actions_slice";
import { gradientGenerator } from "../../../utils/gradientGenerator";
import moment from "moment";
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
  return (
    <Budget_child_container classname="big-container add-budget-container">
      <Section_Header text="add more invesments to your budget" />
      <section>
        <Custom_textfield
          value={transactionData.card.card_number}
          onchange={(e) => {
            if (!isNaN(+e.target.value) && e.target.value.length <= 12)
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
                account: {
                  account_number: +transactionData.card.card_number,
                  bgColor: gradientGenerator(),
                  cvv: +transactionData.card.cvv,
                  EX_date: new Date(transactionData.card.Ex_date) + "",
                  icon: transactionData.card.icon,
                  allow_save: saveCardData,
                } as budgetAccountsType,
              })
            );
          }}
        >
          add it to budget{" "}
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
