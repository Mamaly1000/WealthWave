import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setChartType,
  setCryptoDay,
  updateCryptoChart,
} from "../../features/crypto_slice/crypto_slice";
import useCrypto, { fetchChart } from "../../hooks/useCrypto";
import { useQueries } from "react-query";
import { toast } from "react-toastify";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const ChartSetting = () => {
  const dispatch = useDispatch();
  const { cryptoSelector } = useCrypto();
  const days = [1, 7, 14, 30, 60, 90, 180];
  const refetch_chart_day = useQueries(
    cryptoSelector.cryptoCharts.map((chart) => {
      return {
        queryKey: ["charts-data", chart.id],
        queryFn: () => {
          fetchChart(chart.id, cryptoSelector.cryptoDay)
            .then((res) => {
              dispatch(
                updateCryptoChart({
                  id: chart.id,
                  data: res,
                  day: cryptoSelector.cryptoDay,
                })
              );
            })
            .catch((e) => {
              toast.error(e);
            });
        },
      };
    })
  );
  useEffect(() => {
    refetch_chart_day.map((c) =>
      toast.promise(c.refetch(), {
        pending: `fetching chart data from ${cryptoSelector.cryptoDay} ${
          cryptoSelector.cryptoDay > 1 ? "Days" : "Day"
        } ago`,
        success: "chart data fetched successfully !",
        error: "unable to fetch chart data",
      })
    );
  }, [cryptoSelector.cryptoDay]);
  return (
    <div className="chart-settings">
      <div className="chart-data-titles">
        {["prices", "market-cap", "total-volumes"].map((value, index) => {
          return (
            <span
              key={index}
              className={`${
                cryptoSelector.cryptoChartDisplayType === value
                  ? "selected-title"
                  : ""
              }`}
              onClick={() => dispatch(setChartType(value))}
            >
              {value}
            </span>
          );
        })}
      </div>
      <div className="chart-days">
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          modules={[Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: true }}
        >
          {days.map((d, index) => {
            return (
              <SwiperSlide
                key={index}
                className={`${
                  cryptoSelector.cryptoDay === d ? "selected-day" : ""
                }`}
                onClick={() => {
                  dispatch(setCryptoDay(d));
                }}
              >
                {d === 1 ? d + " day" : d + " days"}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default ChartSetting;
