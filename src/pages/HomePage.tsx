import {
  BannerSection,
  CasinoSection,
  type CasinoGame,
  type IBannerSlide,
  type SportsCard,
} from "@/components/home";

const slides: IBannerSlide[] = [
  {
    id: 1,
    title: "SIGN UP & GET REWARD",
    subtitle: "UP TO",
    highlightText: "$ 20,000",
    highlightColor: "text-success-500",
    buttonText: "Create Account",
    buttonStyle: "btn-accent",
    backgroundImage: "/images/banners/banner.png",
    textColor: "text-casino-primary",
  },
  {
    id: 2,
    title: "WELCOME BONUS",
    subtitle: "GET UP TO",
    highlightText: "$ 50,000",
    highlightColor: "text-warning-500",
    buttonText: "Claim Bonus",
    buttonStyle: "btn-warning",
    backgroundImage: "/images/banners/banner.png",
    textColor: "text-casino-primary",
  },
  {
    id: 3,
    title: "VIP PROGRAM",
    subtitle: "EARN UP TO",
    highlightText: "$ 100,000",
    highlightColor: "text-blue-500", // Changed from text-accent-500
    buttonText: "Join VIP",
    buttonStyle: "btn-accent",
    backgroundImage: "/images/banners/banner.png",
    textColor: "text-casino-primary",
  },
  {
    id: 4,
    title: "SPORTS BETTING",
    subtitle: "WIN UP TO",
    highlightText: "$ 25,000",
    highlightColor: "text-purple-500", // Changed from text-primary-500
    buttonText: "Place Bet",
    buttonStyle: "btn-primary",
    backgroundImage: "/images/banners/banner.png",
    textColor: "text-casino-primary",
  },
];

const sportsCards: SportsCard[] = [
  {
    league: "Premier League",
    date: "Feb 2, 00:00",
    team1: {
      name: "Chealsea",
      logo: "/images/icons/chealsea.svg",
    },
    team2: {
      name: "Liverpool",
      logo: "/images/icons/arsenal.svg",
    },
    odds: {
      home: "1.87",
      draw: "3.25",
      away: "2.10",
    },
  },
  {
    league: "Premier League",
    date: "Feb 2, 00:00",
    team1: {
      name: "West Ham",
      logo: "/images/icons/west_ham.svg",
    },
    team2: {
      name: "Arsenal",
      logo: "/images/icons/arsenal.svg",
    },
    odds: {
      home: "2.45",
      draw: "3.10",
      away: "1.75",
    },
  },
  {
    league: "Premier League",
    date: "Feb 2, 00:00",
    team1: {
      name: "Chealsea",
      logo: "/images/icons/chealsea.svg",
    },
    team2: {
      name: "Liverpool",
      logo: "/images/icons/arsenal.svg",
    },
    odds: {
      home: "1.95",
      draw: "3.40",
      away: "1.90",
    },
  },
  {
    league: "Premier League",
    date: "Feb 2, 00:00",
    team1: {
      name: "West Ham",
      logo: "/images/icons/west_ham.svg",
    },
    team2: {
      name: "Arsenal",
      logo: "/images/icons/arsenal.svg",
    },
    odds: {
      home: "2.20",
      draw: "3.00",
      away: "1.85",
    },
  },
];

const casinoGames: CasinoGame[] = [
  {
    id: "casino-game-1",
    image: "/images/casino-games/casino_game_1.png",
    alt: "Casino Game 1",
    url: "/",
  },
  {
    id: "casino-game-2",
    image: "/images/casino-games/casino_game_2.png",
    alt: "Casino Game 2",
    url: "/",
  },
  {
    id: "casino-game-3",
    image: "/images/casino-games/casino_game_3.png",
    alt: "Casino Game 3",
    url: "/",
  },
  {
    id: "casino-game-4",
    image: "/images/casino-games/casino_game_4.png",
    alt: "Casino Game 4",
    url: "/",
  },
  {
    id: "casino-game-5",
    image: "/images/casino-games/casino_game_5.png",
    alt: "Casino Game 5",
    url: "/",
  },
  {
    id: "casino-game-6",
    image: "/images/casino-games/casino_game_6.png",
    alt: "Casino Game 6",
    url: "/",
  },
  {
    id: "casino-game-7",
    image: "/images/casino-games/casino_game_4.png",
    alt: "Casino Game 7",
    url: "/",
  },
  {
    id: "casino-game-8",
    image: "/images/casino-games/casino_game_2.png",
    alt: "Casino Game 8",
    url: "/",
  },
];

const topRatedGames: CasinoGame[] = [
  {
    id: "top-game-1",
    image: "/images/top-rated-games/top_game_1.png",
    alt: "Top Rated Game 1",
    url: "/",
  },
  {
    id: "top-game-2",
    image: "/images/top-rated-games/top_game_2.png",
    alt: "Top Rated Game 2",
    url: "/",
  },
  {
    id: "top-game-3",
    image: "/images/top-rated-games/top_game_3.png",
    alt: "Top Rated Game 3",
    url: "/",
  },
  {
    id: "top-game-4",
    image: "/images/top-rated-games/top_game_4.png",
    alt: "Top Rated Game 4",
    url: "/",
  },
  {
    id: "top-game-5",
    image: "/images/top-rated-games/top_game_5.png",
    alt: "Top Rated Game 5",
    url: "/",
  },
  {
    id: "top-game-6",
    image: "/images/top-rated-games/top_game_6.png",
    alt: "Top Rated Game 6",
    url: "/",
  },
  {
    id: "top-game-7",
    image: "/images/top-rated-games/top_game_4.png",
    alt: "Top Rated Game 7",
    url: "/",
  },
  {
    id: "top-game-8",
    image: "/images/top-rated-games/top_game_2.png",
    alt: "Top Rated Game 8",
    url: "/",
  },
];

const liveGames: CasinoGame[] = [
  {
    id: "live-game-1",
    image: "/images/live-games/live_game_1.png",
    alt: "Live Game 1",
    url: "/",
  },
  {
    id: "live-game-2",
    image: "/images/live-games/live_game_2.png",
    alt: "Live Game 2",
    url: "/",
  },
  {
    id: "live-game-3",
    image: "/images/live-games/live_game_3.png",
    alt: "Live Game 3",
    url: "/",
  },
  {
    id: "live-game-4",
    image: "/images/live-games/live_game_4.png",
    alt: "Live Game 4",
    url: "/",
  },
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background-primary">
      <div className="w-full max-w-[1280px] mx-auto relative">
        {/* Hero Carousel Section */}
        <BannerSection slides={slides} />

        <CasinoSection
          sportsCards={sportsCards}
          casinoGames={casinoGames}
          topRatedGames={topRatedGames}
          liveGames={liveGames}
        />
      </div>
    </div>
  );
};

export default HomePage;
