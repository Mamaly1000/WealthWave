import { useEffect, useTransition } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { selecttheme } from "../../features/theme_slice/theme_slice";
import { motion } from "framer-motion";

const ChartSetting = () => {
  const themeSelector = useSelector(selecttheme);
  const dispatch = useDispatch();
  const { cryptoSelector } = useCrypto();
  const [_pending, setTransition] = useTransition();
  const days = [1, 7, 14, 30, 60, 90, 180];
  const refetch_chart_day = useQueries(
    cryptoSelector.cryptoCharts.map((chart) => {
      return {
        queryKey: ["charts-data", chart.id],
        queryFn: () => {
          fetchChart(
            chart.id,
            cryptoSelector.cryptoDay,
            cryptoSelector.currentCurrency.name
          )
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
            <motion.span
              key={index}
              className={`${
                cryptoSelector.cryptoChartDisplayType === value
                  ? "selected-title"
                  : ""
              }`}
              onClick={() => {
                setTransition(() => {
                  dispatch(setChartType(value));
                });
              }}
              animate={{
                background:
                  cryptoSelector.cryptoChartDisplayType === value
                    ? themeSelector.btnColor
                    : themeSelector.hoverColor,
                color: themeSelector.headerColor,
              }}
              transition={{ duration: 0.1 }}
              whileHover={{ background: themeSelector.hoverColor }}
            >
              {value}
            </motion.span>
          );
        })}
      </div>
      <div className="chart-days">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={5}
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
                  setTransition(() => {
                    dispatch(setCryptoDay(d));
                  });
                }}
                style={{ borderRadius: "8px" }}
              >
                <motion.span
                  animate={{
                    background:
                      cryptoSelector.cryptoDay === d
                        ? themeSelector.btnColor
                        : themeSelector.hoverColor,
                    color: themeSelector.headerColor,
                  }}
                  transition={{ duration: 0.1 }}
                  whileHover={{ background: themeSelector.hoverColor }}
                >
                  {d === 1 ? d + " day" : d + " days"}
                </motion.span>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default ChartSetting;
