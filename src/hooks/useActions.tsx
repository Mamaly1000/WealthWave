import { userActionsInterface } from "../features/user-actions-slice/actions_slice";
import useLocalStorage from "./useLocalStorage";

const useActions = () => {
  const [localUserActions, setLocalUserActions] =
    useLocalStorage<userActionsInterface>("user-actions", {
      bookmarkedCryptos: [],
      cryptoExchanges: [],
      cryptoTadings: [],
      cryptoTransactions: [],
      cryptoWallet: [],
      likedCryptos: [],
      purchasedCryptoTokens: [],
    });
  return { localUserActions, setLocalUserActions };
};

export default useActions;
