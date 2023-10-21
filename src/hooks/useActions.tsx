import { useSelector } from "react-redux";
import {
  budgetAccountsType,
  selectUserActions,
  userActionsInterface,
} from "../features/user-actions-slice/actions_slice";
import useLocalStorage from "./useLocalStorage";

const useActions = () => {
  const userActions = useSelector(selectUserActions);
  const [localUserActions, setLocalUserActions] =
    useLocalStorage<userActionsInterface>("user-actions", {
      bookmarkedCryptos: [],
      cryptoExchanges: [],
      cryptoTadings: [],
      cryptoTransactions: [],
      cryptoWallet: [],
      likedCryptos: [],
      purchasedCryptoTokens: [],
      budget: {
        amount: 0,
        spent: 0,
        total_loss: 0,
        repay: 0,
        accounts: [],
        transactions: [],
      },
    });
  const AccountDetector = (
    acc_number: number
  ): budgetAccountsType & { exist: boolean } => {
    const selectedAccount = userActions.budget.accounts.find(
      (acc) => acc.account_number === acc_number
    );
    if (selectedAccount) {
      return {
        ...selectedAccount,
        exist: true,
      };
    } else {
      return {
        exist: false,
        account_number: 0,
        bgColor: "",
        cvv: 0,
        EX_date: "",
        icon: "",
      };
    }
  };
  return { localUserActions, setLocalUserActions, AccountDetector };
};

export default useActions;
