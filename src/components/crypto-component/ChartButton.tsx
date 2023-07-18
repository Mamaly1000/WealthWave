import useCrypto, { IcryptoData } from "../../hooks/useCrypto";
import { useDispatch } from "react-redux";
import { setCryptoChart } from "../../features/crypto_slice/crypto_slice";
import { toast } from "react-toastify";
type propsType = {
  coin: IcryptoData;
};
const ChartButton = ({ coin }: propsType) => {
  const { chartLists } = useCrypto();
  const dispatch = useDispatch();
  const { data, refetch } = chartLists(
    coin.id,
    (data) => {
      dispatch(setCryptoChart({ id: coin.id, data: data.data }));
    },
    () => {
      toast.error(`failed to get ${coin.id} chart data`);
    },
    false,
    false,
    false,
    0
  );

  return (
    <button
      onClick={() => {
        refetch();
      }}
    >
      <img style={{ width: "10px", height: "10px" }} src={coin.image} />
      {coin.id}
    </button>
  );
};

export default ChartButton;
