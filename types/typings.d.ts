import { AuthAction } from 'next-auth';
import { Connector } from 'wagmi';

type GameSlider = {
  name: string;
  trades: string;
  items: string;
  image: string;
};

type BreadCrumbs = {
  text: string;
  link?: Url;
};

type Currency = {
  id: string;
  name: string;
  logo: Awaited<ReturnType<typeof getStaticAssetPath>>;
  suffix?: string | React.ReactNode;
};

type Blockchain = {
  id: number;
  name: string;
  disabled: boolean;
};

type Category = {
  name: string;
  Icon: ComponentType<{ className?: string | undefined }>;
};

type Collection = {
  id?: string;
  token_address: string;
  creator?: string;
  slug: string;
  chain: string;
  image: string;
  logo: string;
  banner_image: string;
  name: string;
  total: number;
  user_id: string;
};

// TODO: Define Comment type
type Comment = {
  author: string;
  timestamp: string;
  comment: string;
  likes: number;
};

// TODO: Define Game type
type Game = {
  slug: string;
  image: string;
  name: string;
  id?: string;
};

type NFT = {
  id: string;
  price: number;
  token_id: string;
  token_address: string;
  token_uri: string;
  owner_address: string;
  chain: number;
  image: string;
  name: string;
  rarity: string;
  amount: number;
  aws_image: string;
  collection_id: string;
  user_id: string;
  created_at: string;
  updated_at: string;
  description: string;
  external_url: string;
  total: number;
};

type Step = {
  title: string;
  subtitle: string;
};

// TODO: Define UserLike type
type UserLike = {
  id?: string;
  likeable_type?: string;
  likeable_id: string;
};

type TWallet = {
  id?: number;
  title: string;
  icon: string;
  connector: Connector;
  disabled: boolean;
};

type Wallet = {
  id?: string;
  title: string;
  icon: string;
  connector?: Connector;
  address?: string;
  user_id: string;
};

type Payload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
interface NFTFilterItem {
  status?: Status[];
  blockchain?: Blockchain[];
  quantity?: Quantity[];
  artist?: Artist[];
  category?: Category[];
  chain?: number[];
  wallets?: string[];
  token_address?: string;
  owner_address?: string[] | Wallet[];
  liked_by?: string;
  id?: {
    custom: boolean;
    value: {
      in: string[];
    };
  };
}

type TNFT = {
  id: string;
  token_address: string;
  token_id: string;
  transaction_hash: string;
  amount: number;
  total: number;
  name: string;
  price: number;
  image: string;
  image_url?: string;
  description: string;
  image_data: string;
  attributes: any[];
  secondary_images?: string[];
  animation_url: string;
  audio_url: string;
  external_url: string;
  video: string;
  audio: string;
  background_color: string;
  youtube_url: string;
  token_uri: string;
  metadata: any;
  chain: number;
  owner_address: string;
  aws_image: string;
  collection_id: string;
  user_id: string;
  offers: Offer[];
  activities: Activity[];
  transfers: NFTTransfer[];
  likes: UserLike[];
  created_at: string;
  updated_at: string;
  rarity?: string;
  type: string;
  model_url: string;
  _count?: any;
  medias?: Array<any>;
};

type TNFTList = TNFT & {
  isImageValid: boolean;
  isNameValid: boolean;
  isApproved?: boolean;
};

type TUserWallets = {
  id?: string;
  title: string;
  icon: string;
  address: string;
  network: number;
  user_id: string;
  created_at?: string;
  updated_at?: string;
};

type LoginData = {
  password?: string;
  email?: string;
  username?: string | null;
};

type TUserData = {
  id: string;
  email: string;
  verified: boolean;
  username?: string;
  phone_number?: string;
  is_admin?: boolean;
  wallets?: TUserWallets[];
  accounts?: SocialAccount[];
  bio?: string;
  profile_image?: string;
  banner_image?: string;
  handle?: string;
  first_name?: string;
  last_name?: string;
  provider?: string;
  accessToken?: string;
  created_at: string;
};

type Offer = {
  id: string;
  activity_id: string;
  offer_type: string;
  nft_id: string;
  nft: TNFT;
  state: string;
  offer_name?: string;
  quantity?: number;
  buy_now?: BuyNow;
  auction?: Auction;
  rent?: Rent;
  user_id?: string;
  user?: TUserData;
  created_at?: string;
  updated_at?: string;
};

type Activity = {
  id: string;
  nft_id: string;
  nft?: TNFT;
  event: string;
  name?: string;
  quantity?: number;
  price?: number;
  from_id?: string;
  from?: TUserData;
  to_id?: string;
  to?: TUserData;
  offer?: Offer;
  transfer?: NFTTransfer;
  created_at: string;
  updated_at: string;
};

type BuyNow = {
  id: string;
  price: number;
  currency: string;
  ends_at?: string;
  offer_id: string;
  offer: Offer;
  created_at?: string;
  updated_at?: string;
};

type Auction = {
  id: string;
  initial_price: number;
  currency: string;
  starts_at: string;
  ends_at: string;
  offer_id: string;
  offer: Offer;
  bids: AuctionBid[];
  created_at?: string;
  updated_at?: string;
};

type Rent = {
  id: string;
  price: number;
  currency: string;
  days?: number;
  offer_id: string;
  offer: Offer;
  created_at?: string;
  updated_at?: string;
};

type AuctionBid = {
  id: string;
  bid: number;
  auction_id: string;
  auction: Auction;
  user_id: string;
  user: TUserData;
};

type OfferData = {
  nftId: string;
  offerType: string;
  offerName: string;
  mainImage?: string;
  quantity: number;
  price?: number;
  dateRange?: number | string;
  dateFrom?: string;
  dateTo?: string;
  state: string;
  activity_id?: string;
  openTradeOffer?: boolean;
  royalty?: number;
  royaltyUnit?: string;
};

type CollectionData = {
  name: string;
  description: string;
  logo?: NFTMedia;
  feature: NFTMedia;
  banner: NFTMedia;
  links?: Link[];
  chain?: number;
  nsfw?: boolean;
  royalty?: number;
  state?: string;
  user_id?: string;
  royalty_address?: string;
};

type Query = {
  page?: number;
  pageSize?: number;
  filters?: String | NFTFilterItem | GuildFilterItem;
  sort?: string;
  search?: string;
};

type Token = {
  name: string;
  symbol: string;
  image: string;
  nativePrice: number;
  nativeSymbol: string;
  priceChangePercentage24H: number;
  usdPrice: number;
};

type TokenList = Token[];

type Trade = {
  id: string;
  user_id: string;
  partner_id: string;
  user: UserInfo;
  partner: UserInfo;
  state: string;
  period: number;
  created_at: string;
  updated_at: string;
  trade_user_nfts: TNFT[];
  trade_partner_nfts: TNFT[];
};

type TradeNft = {
  id: string;
  nft_id: string;
  trade_id: string;
  nft: TNFT;
};

type TradeList = {
  id?: string;
};

type TradeOffer = {
  id: string;
  user_id: string;
  partner_id: string;
  user?: UserInfo;
  partner?: UserInfo;
  state: string;
  period: number;
  created_at: string;
  updated_at: string;
  trade_user_nfts: TradeNft[];
  trade_partner_nfts: TradeNft[];
};

type TradeParam = {
  id: string;
  user_id?: string;
  partner_id?: string;
  state?: string;
  period?: number;
  trade_user_nfts?: any;
  trade_partner_nfts?: any;
};

type NFTDataResponse = {
  data: TNFT[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      total: number;
      totalPages: number;
    };
  };
};

type NFTParam = {
  chain: string;
  contract: string;
  token_id: string;
  option?: {
    includes: string;
    counts: string;
  };
};

type SearchResults = {
  users?: TUserData[];
  wallets?: TUserWallets[];
  nfts?: TNFT[];
  games?: Game[];
  collections?: Collection[];
};

type Guild = {
  id?: string;
  created_at?: string;
  status?: string;
  tx_hash?: string;
  chain: string;
  creator_address: string;
  guild_address?: string;
  governor_address?: string;
  token_address?: string;
  name: string;
  logo: string;
  purpose: string;
  introduction: string;
  type: string;
  governance_majority: number;
  governance_quorum: number;
  governance_duration: number;
  open_to_members: boolean;
  guild_games?: Array<string>;
  games?: Array<any>;
  guild_members?: Array<GuildMember>;
  members?: Array<any>;
  membership_cost?: number;
  membership_cost_currency?: string;
  token_name?: string;
  token_symbol?: string;
  token_supply?: number;
  token_on_sale?: number;
  token_cost?: number;
  token_cost_currency?: string;
  governance_deposit_required?: boolean;
  governance_deposit_amount?: number;
  governance_system?: string;
  slug?: string;
  _count?: any;
  games?: Array<GuildGame>;
};

type GuildGame = {
  game: Game;
};

type GuildInfo = {
  name: string;
  logo: string;
  purpose: string;
  introduction: string;
  games: Array<string>;
};

type GuildEconomy = {
  token?: GuildToken;
  tokenCost?: GuildCurrencyCost;
  membershipCost?: GuildCurrencyCost;
  openToMembers: boolean;
  startingMembers: Array<GuildMember>;
};

type GuildGovernance = {
  majority: number;
  quorum: number;
  duration: number;
  deposit: boolean;
  depositAmount: number;
  system: string;
};

type GuildToken = {
  name: string;
  symbol: string;
  supply: number;
  onSale: number;
};

type GuildCurrencyCost = {
  currency: string;
  cost: number;
};

type GuildMember = {
  address: string;
  amount: number;
  created_at?: string;
  user?: User | null;
  ownership?: number;
};

interface GuildFilterItem {
  status?: string;
  chain?: Blockchain[];
  type?: string;
  purpose?: string;
  games?: {
    custom: boolean;
    value: any;
  };
  name?: {
    custom: boolean;
    value: any;
  };
  contract_address?: {
    custom: boolean;
    value: any;
  };
}

type GuildAnnouncement = {
  id?: string;
  guild_id?: string;
  guild?: Guild;
  user_id?: string;
  user?: User;
  title: string;
  content: string;
  text_content: string;
  created_at?: string;
  updated_at?: string;
  creator?: {
    id: string;
    username: string;
  };
  editor?: {
    id: string;
    username: string;
  };
};

type GuildRules = {
  id?: string;
  guild_id?: string;
  guild?: Guild;
  content: string;
  text_content: string;
  created_at?: string;
  updated_at?: string;
};

type GuildFaq = {
  id?: string;
  guild_id?: string;
  guild?: Guild;
  user_id?: string;
  user?: User;
  topic: string;
  content: string;
  created_at?: string;
  updated_at?: string;
  parent?: GuildFaq;
  children?: GuildFaq[];
  order?: number;
};

interface GuildLog {
  id: string;
  guild_id: string;
  guild?: Guild;
  user_id?: string;
  user?: UserInfo;
  user_address: string;
  model: string;
  action: string;
  content?: string;
  created_at?: string;
  updated_at?: string;
}

type GuildProposal = {
  id?: string;
  guild_id?: string;
  guild?: Guild;
  user_id?: string;
  user?: User;
  user_address?: string;
  title: string;
  description: string;
  proposal_id?: string;
  motion_id?: number;
  status?: string;
  tx_hash?: string;
  actions?: Array<object>;
  vote_starts_block?: number;
  vote_ends_block?: number;
  vote_starts_date?: string;
  vote_ends_date?: string;
  voting_power?: number;
  quorum?: string;
  majority?: string;
  yes?: string;
  no?: string;
  abstain?: string;
  votes?: Array<GuildProposalVote>;
  created_at?: string;
  updated_at?: string;
};

type GuildProposalVote = {
  id: string;
  proposal_id: string;
  user_id?: string;
  user_address: string;
  user?: UserInfo;
  tx_hash: string;
  choice: string;
  weight: string;

  created_at?: string;
  updated_at?: string;
};

type NFTTransfer = {
  transaction_hash: string;
  amount: number;
  from: string;
  to: string;
  value?: number;
  royalty?: number;
  created_at: string;
};

type CustodyData = {
  nftImage: string | null;
  actionDescription: string;
  transactionID: string;
  date: string;
  type: string;
  lastEvent?: boolean;
};

type CreateTradeOffer = {
  trade_user_nfts: { create: { nft: { connect: { id: string } } }[] };
  trade_partner_nfts: { create: { nft: { connect: { id: string } } }[] };
  period: number;
  user_id: string;
  partner_id: string;
  state?: string;
};

type UserInfo = {
  id: string;
  verified: boolean;
  username?: string;
  is_admin?: boolean;
  wallets?: TUserWallets[];
  wallet_address?: string;
  profile_image?: string;
  banner_image?: string;
  first_name?: string;
  last_name?: string;
  created_at: string;
  updated_at: string;
};

type Message = {
  id: string;
  gif: string | null;
  message: string;
  photoURL: string;
  timestamp: Timestamp;
  username: string;
  userEmail: string;
  image: string;
};

type NFTMedia = {
  buffer: string;
  file?: File;
};

type ContractData = {
  deployer_address: string;
  transaction_hash: string;
  block_number: string;
  created_at: string;
};

type TokenPrice = {
  id: string;
  name: string;
  symbol: string;
  image: string;
  price: number;
  marketCap: string;
  priceChangePercentage24H: number;
};

type Conversation = {
  id: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  users: string[];
};

type MfaData = {
  image_url: string;
  auth_app_otp_secret: string;
};

type CurrencyConverterPayload = {
  from: string;
  to: string;
};

type SocialAccount = {
  id?: string;
  account_id: string;
  name: string;
  email: string;
  image: string;
  provider: string;
  type: string;
  scope: string;
  username?: string;
  node_id?: string;
  bio?: string;
  location?: string;
  verified?: boolean;
  avatar?: string;
};

type Notification = {
  createdAt: FieldValue;
  updatedAt: FieldValue;
  type: 'conversation' | 'message';
  receiver: {
    id: string;
    username: string | null | undefined;
    profile_image: string | null | undefined;
  };
  id: string;
  read: boolean;
};

type ConversationUser = {
  banner_image: string | undefined;
  id: string;
  profile_image: string | undefined;
  username: string | undefined;
};
