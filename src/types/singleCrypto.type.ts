export interface ISingleCoin {
  id: string;
  symbol: string;
  name: string;
  asset_platform_id: null;
  platforms: object;
  detail_platforms: object;
  block_time_in_minutes: number;
  hashing_algorithm: string;
  categories: Array<number | string>;
  public_notice: null;
  additional_notices: [];
  localization: object;
  description: {
    en: string;
    de: string;
    es: string;
    fr: string;
    it: string;
    pl: string;
    ro: string;
    hu: string;
    nl: string;
    pt: string;
    sv: string;
    vi: string;
    tr: string;
    ru: string;
    ja: string;
    zh: string;
    ko: string;
    ar: string;
    th: string;
    id: string;
    cs: string;
    da: string;
  };
  links: {
    homepage: string[];
    blockchain_site: string[];
    official_forum_url: string[];
    chat_url: string[];
    announcement_url: string[];
    twitter_screen_name: string;
    facebook_username: string;
    bitcointalk_thread_identifier: null;
    telegram_channel_identifier: string;
    subreddit_url: string;
    repos_url: object;
  };
  image: {
    thumb: string;
    small: string;
    large: string;
  };
  country_origin: string;
  genesis_date: string;
  sentiment_votes_up_percentage: number;
  sentiment_votes_down_percentage: number;
  watchlist_portfolio_users: number;
  market_cap_rank: number;
  coingecko_rank: number;
  coingecko_score: number;
  developer_score: number;
  community_score: number;
  liquidity_score: number;
  public_interest_score: number;
  market_data: {
    current_price: {
      btc: number;
      usd: number;
    };
    total_value_locked: number | null;
    mcap_to_tvl_ratio: number | null;
    fdv_to_tvl_ratio: number | null;
    roi: number | null;
    ath: {
      btc: number;
      usd: number;
    };
    ath_change_percentage: {
      btc: number;
      usd: number;
    };
    ath_date: {
      btc: string;
      usd: string;
    };
    atl: {
      btc: number;
      usd: number;
    };
    atl_change_percentage: { btc: number; usd: number };
    atl_date: { btc: string; usd: string };
    market_cap: { btc: number; usd: number };
    market_cap_rank: number;
    fully_diluted_valuation: { btc: number; usd: number };
    total_volume: { btc: number; usd: number };
    high_24h: { btc: number; usd: number };
    low_24h: { btc: number; usd: number };
    price_change_24h: number;
    price_change_percentage_24h: number;
    price_change_percentage_7d: number;
    price_change_percentage_14d: number;
    price_change_percentage_30d: number;
    price_change_percentage_60d: number;
    price_change_percentage_200d: number;
    price_change_percentage_1y: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    price_change_24h_in_currency: { btc: number; usd: number };
    price_change_percentage_1h_in_currency: { btc: number; usd: number };
    price_change_percentage_24h_in_currency: { btc: number; usd: number };
    price_change_percentage_7d_in_currency: { btc: number; usd: number };
    price_change_percentage_14d_in_currency: { btc: number; usd: number };
    price_change_percentage_30d_in_currency: { btc: number; usd: number };
    price_change_percentage_60d_in_currency: { btc: number; usd: number };
    price_change_percentage_200d_in_currency: { btc: number; usd: number };
    price_change_percentage_1y_in_currency: { btc: number; usd: number };
    market_cap_change_24h_in_currency: { btc: number; usd: number };
    market_cap_change_percentage_24h_in_currency: { btc: number; usd: number };
    total_supply: number;
    max_supply: number;
    circulating_supply: number;
    sparkline_7d: {
      price: number[];
    };
    last_updated: string;
  };
  community_data: {
    facebook_likes: null | number;
    twitter_followers: null | number;
    reddit_average_posts_48h: null | number;
    reddit_average_comments_48h: null | number;
    reddit_subscribers: null | number;
    reddit_accounts_active_48h: null | number;
    telegram_channel_user_count: null | number;
  };
  developer_data: {
    forks: number;
    stars: number;
    subscribers: number;
    total_issues: number;
    closed_issues: number;
    pull_requests_merged: number;
    pull_request_contributors: number;
    code_additions_deletions_4_weeks: {
      additions: number;
      deletions: number;
    };
    commit_count_4_weeks: number;
    last_4_weeks_commit_activity_series: number[];
  };
  public_interest_stats: {
    alexa_rank: number;
    bing_matches: null | number;
  };
  status_updates: [];
  last_updated: string;
  tickers: {
    base: string;
    target: string;
    market: {
      name: string;
      identifier: string;
      has_trading_incentive: boolean;
    };
    last: number;
    volume: number;
    converted_last: {
      btc: number;
      eth: number;
      usd: number;
    };
    converted_volume: {
      btc: number;
      eth: number;
      usd: number;
    };
    trust_score: string;
    bid_ask_spread_percentage: number;
    timestamp: string;
    last_traded_at: string;
    last_fetch_at: string;
    is_anomaly: boolean;
    is_stale: boolean;
    trade_url: string;
    token_info_url: null;
    coin_id: string;
  }[];
}
