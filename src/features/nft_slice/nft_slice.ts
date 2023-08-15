import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

export interface INFT {
  asset_platform_id: string;
  contract_address: string;
  id: string;
  name: string;
  symbol: string;
}
export interface ISingleNFT {
  id: string;
  contract_address: string;
  asset_platform_id: string;
  name: string;
  symbol: string;
  image: {
    small: string;
  };
  description: string;
  native_currency: string;
  native_currency_symbol: string;
  floor_price: {
    native_currency: number;
    usd: number;
  };
  market_cap: {
    native_currency: number;
    usd: number;
  };
  volume_24h: {
    native_currency: number;
    usd: number;
  };
  floor_price_in_usd_24h_percentage_change: number;
  floor_price_24h_percentage_change: {
    usd: number;
    native_currency: number;
  };
  market_cap_24h_percentage_change: {
    usd: number;
    native_currency: number;
  };
  volume_24h_percentage_change: {
    usd: number;
    native_currency: number;
  };
  number_of_unique_addresses: number;
  number_of_unique_addresses_24h_percentage_change: number;
  volume_in_usd_24h_percentage_change: number;
  total_supply: number;
  links: {
    homepage: string;
    twitter: string;
    discord: string;
  };
  floor_price_7d_percentage_change: {
    usd: number;
    native_currency: number;
  };
  floor_price_14d_percentage_change: {
    usd: number;
    native_currency: number;
  };
  floor_price_30d_percentage_change: {
    usd: number;
    native_currency: number;
  };
  floor_price_60d_percentage_change: {
    usd: number;
    native_currency: number;
  };
  floor_price_1y_percentage_change: {
    usd: number;
    native_currency: number;
  };
  explorers: {
    name: string;
    link: string;
  }[];
}
interface Inft_slice {
  nft_list: INFT[];
  single_nft: ISingleNFT;
  sort_type: {
    name: string;
    mode: string;
  };
  pagination: {
    total_pages: number;
    current_page: number;
    offset: number;
  };
  nftSearch: string;
}
const InitialState: Inft_slice = {
  nft_list: [],
  single_nft: {
    id: "",
    contract_address: "",
    asset_platform_id: "",
    name: "",
    symbol: "",
    image: {
      small: "",
    },
    description: "",
    native_currency: "",
    native_currency_symbol: "",
    floor_price: {
      native_currency: 0,
      usd: 0,
    },
    market_cap: {
      native_currency: 0,
      usd: 0,
    },
    volume_24h: {
      native_currency: 0,
      usd: 0,
    },
    floor_price_in_usd_24h_percentage_change: 0,
    floor_price_24h_percentage_change: {
      usd: 0,
      native_currency: 0,
    },
    market_cap_24h_percentage_change: {
      usd: 0,
      native_currency: 0,
    },
    volume_24h_percentage_change: {
      usd: 0,
      native_currency: 0,
    },
    number_of_unique_addresses: 0,
    number_of_unique_addresses_24h_percentage_change: 0,
    volume_in_usd_24h_percentage_change: 0,
    total_supply: 0,
    links: {
      homepage: "",
      twitter: "",
      discord: "",
    },
    floor_price_7d_percentage_change: {
      usd: 0,
      native_currency: 0,
    },
    floor_price_14d_percentage_change: {
      usd: 0,
      native_currency: 0,
    },
    floor_price_30d_percentage_change: {
      usd: 0,
      native_currency: 0,
    },
    floor_price_60d_percentage_change: {
      usd: 0,
      native_currency: 0,
    },
    floor_price_1y_percentage_change: {
      usd: 0,
      native_currency: 0,
    },
    explorers: [],
  },
  sort_type: {
    name: "",
    mode: "ASC",
  },
  pagination: {
    total_pages: 0,
    current_page: 1,
    offset: 0,
  },
  nftSearch: "",
};
const Nft_Reducer = createSlice({
  name: "nft_slice",
  initialState: InitialState,
  reducers: {
    fetchNFTs: (state, action) => {
      state.nft_list = action.payload;
    },
    fetchSingleNFT: (state, action) => {
      state.single_nft = action.payload;
    },
    sortNFTTable: (_state, action) => {
      // let sortedArray = [...state.nft_list];
      switch (action.payload.type_name) {
        case "RANK":
          break;
        case "NAME":
          break;
        case "PRICE":
          break;
        case "LOW_24H":
          break;
        case "HIGH_24H":
          break;
        case "24H":
          break;
        case "24H_VOLUME":
          break;
        case "MKT_CAP":
          break;
      }
      if (action.payload.type === "DESC") {
      }
    },
    setNFTPagination: (state, action) => {
      state.pagination.total_pages = Math.ceil(action.payload.length / 10);
    },
    setCurrentNFTPage: (state, action) => {
      state.pagination.current_page = action.payload;
    },
    setNFTPageOffSet: (state, action) => {
      state.pagination.offset = action.payload;
    },
    setNFTsearch: (state, action) => {
      state.nftSearch = action.payload;
    },
    setNFTTotalPages: (state, action) => {
      state.pagination.total_pages = action.payload;
    },
    emptySingleNFT: (state) => {
      state.single_nft = InitialState.single_nft;
    },
  },
});
export const {
  fetchNFTs,
  fetchSingleNFT,
  sortNFTTable,
  setNFTPagination,
  setCurrentNFTPage,
  setNFTPageOffSet,
  setNFTsearch,
  setNFTTotalPages,
  emptySingleNFT,
} = Nft_Reducer.actions;
export default Nft_Reducer.reducer;
export const selectNFT = (state: RootState) => {
  return state.nft;
};
