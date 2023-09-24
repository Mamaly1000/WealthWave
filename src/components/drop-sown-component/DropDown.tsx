import { useDispatch, useSelector } from "react-redux";
import { selecttheme } from "../../features/theme_slice/theme_slice";
import { cryptoControlsType } from "../search-components/Crypto_Search";
import {
  sortingTypes,
  cryptoTableDisplayType,
  currencySymbol,
  setCryptoPagination,
  setCryptoSearch,
  setCurrentCurrency,
  setDisplayType,
  sortCryptoTable,
} from "../../features/crypto_slice/crypto_slice";
import { toast } from "react-toastify";
import useCrypto from "../../hooks/useCrypto";
import React from "react";
import { motion } from "framer-motion";

export type crypto_currency_type = currencySymbol[];

export type crypto_diplay_type = Array<cryptoTableDisplayType>;

export type crypto_entries_type = {
  name: string;
  value: number;
}[];
export type crypto_favorites_type = {
  name: string;
  value: boolean;
}[];
export type crypto_sort_type = Array<sortingTypes | "asc" | "desc" | "N/A">;

const DropDown = ({
  content,
  contentType,
  setDisplayDropDown,
  extras,
}: {
  setDisplayDropDown: React.Dispatch<
    React.SetStateAction<cryptoControlsType | "">
  >;
  contentType: cryptoControlsType;
  content: {
    title: string;
    type: cryptoControlsType;
    currentValue: string;
    text: undefined | string;
    items:
      | crypto_currency_type
      | crypto_diplay_type
      | crypto_entries_type
      | crypto_favorites_type
      | { type: sortingTypes; name: string };
  };
  extras?: {
    currentValue: string;
    items:
      | crypto_currency_type
      | crypto_diplay_type
      | crypto_entries_type
      | crypto_favorites_type
      | crypto_sort_type;
  };
}) => {
  const theme = useSelector(selecttheme);
  const dispatch = useDispatch();
  const {
    cryptosList,
    cryptoSelector: { currentCurrency, pagination, coinlist, sortType },
  } = useCrypto();
  const { refetch } = cryptosList(
    "refetch-crypto-data",
    false,
    false,
    currentCurrency.name
  );
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ y: 10, opacity: 0 }}
      transition={{ duration: 0.1, type: "spring" }}
      style={{
        borderColor: theme.btnColor,
        background: theme.modalColor,
        color: theme.headerColor,
      }}
      onMouseLeave={() => setDisplayDropDown("")}
      className="drop-down-component"
    >
      {content.type == "crypto-currency" && (
        <Container>
          <div className="title">
            {content.title}
            <Item data={content.currentValue} />
            <div className="text">{content.text}</div>
          </div>
          <div className="items">
            {(content.items as unknown as crypto_currency_type).map((item) => {
              return (
                <Item
                  onclick={async () => {
                    await dispatch(
                      setCurrentCurrency({
                        name: item.name,
                        symbol: item.symbol,
                      } as currencySymbol)
                    );
                    await toast.promise(refetch(), {
                      error: "failed to fetch data !",
                      pending: `fetching data with ${item.name.toUpperCase()} currency`,
                      success: `crypto data updated with ${item.name.toUpperCase()} currency`,
                    });
                    setDisplayDropDown("");
                  }}
                  data={item.name}
                  key={item.name}
                />
              );
            })}
          </div>
        </Container>
      )}
      {contentType == "crypto-diplay" && (
        <Container>
          <div className="title">
            {content.title}
            <Item data={content.currentValue} />
            <div className="text">{content?.text}</div>
          </div>
          <div className="items">
            {(content.items as unknown as crypto_diplay_type).map((item) => {
              return (
                <Item
                  key={item}
                  onclick={() => {
                    dispatch(setDisplayType(item as cryptoTableDisplayType));
                    setDisplayDropDown("");
                  }}
                  data={item}
                />
              );
            })}
          </div>
        </Container>
      )}
      {contentType == "crypto-entries" && (
        <Container>
          <div className="title">
            {content.title}
            <Item data={content.currentValue} />
            <div className="text">{content.text}</div>
          </div>
          <div className="items">
            {(content.items as unknown as crypto_entries_type).map((item) => {
              return (
                <Item
                  data={item.name}
                  onclick={() => {
                    dispatch(setCryptoSearch(""));
                    dispatch(
                      setCryptoPagination({
                        current_page: pagination.current_page,
                        offset: item.value,
                        total_pages: Math.ceil(coinlist.length / item.value),
                      } as typeof pagination)
                    );
                    setDisplayDropDown("");
                  }}
                />
              );
            })}
          </div>
        </Container>
      )}
      {contentType == "crypto-favorites" && <></>}
      {contentType == "crypto-filter" && <></>}
      {contentType == "crypto-sort" && (
        <>
          {extras && (
            <div style={{ borderColor: theme.btnColor }} className="container">
              <div className="title">
                sort mode:
                <Item data={extras.currentValue} />
              </div>
              <div className="items">
                {(extras.items as unknown as crypto_sort_type).map((item) => {
                  return (
                    <Item
                      data={item}
                      onclick={() => {
                        dispatch(
                          sortCryptoTable({
                            mode: item.toUpperCase(),
                            type_name: sortType.type_name,
                          } as typeof sortType)
                        );
                        setDisplayDropDown("");
                      }}
                      key={item}
                    />
                  );
                })}
              </div>
            </div>
          )}
          <div style={{ borderColor: theme.btnColor }} className="container">
            <div className="title">
              {content.title}
              <Item data={content.currentValue} />
            </div>
            <div className="items">
              {(
                content.items as unknown as { type: sortingTypes; name: string }[]
              ).map((item) => {
                return (
                  <Item
                    data={item.name}
                    key={item.type}
                    onclick={() => {
                      dispatch(
                        sortCryptoTable({
                          mode:
                            sortType.mode === "N/A"
                              ? "ASC"
                              : sortType.mode === "ASC"
                              ? "DESC"
                              : "N/A",
                          type_name: item.type,
                        } as typeof sortType)
                      );
                      setDisplayDropDown("");
                    }}
                  />
                );
              })}
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default DropDown;

const Item = ({ data, onclick }: { data: string; onclick?: () => void }) => {
  const theme = useSelector(selecttheme);
  return (
    <div
      className="item"
      onClick={onclick}
      style={{ borderColor: theme.btnColor }}
    >
      {data}
    </div>
  );
};
const Container = ({ children }: { children: React.ReactNode }) => {
  const theme = useSelector(selecttheme);
  return (
    <div className="container" style={{ borderColor: theme.btnColor }}>
      {children}
    </div>
  );
};
