import { type JSX } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button, Card, CardContent } from "../ui";
import { GameCarousel } from "./CasinoGame";

// Import Swiper styles
import "swiper/swiper-bundle.css";
interface Team {
  name: string;
  logo: string;
}

interface Odds {
  home: string;
  draw: string;
  away: string;
}

export interface SportsCard {
  league: string;
  date: string;
  team1: Team;
  team2: Team;
  odds: Odds;
}

export interface CasinoGame {
  id: string;
  image: string;
  alt: string;
  url: string;
}

interface IProps {
  sportsCards: SportsCard[];
  casinoGames: CasinoGame[];
  topRatedGames: CasinoGame[];
  liveGames: CasinoGame[];
}

export const CasinoSection = ({
  sportsCards,
  casinoGames,
  topRatedGames,
  liveGames,
}: IProps): JSX.Element => {
  return (
    <section className="flex flex-col gap-8 w-full">
      {/* Sports Betting Cards */}
      <div className="flex flex-col gap-8 w-full">
        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={16}
            navigation={true}
            loop={true}
            modules={[Navigation]}
            breakpoints={{
              480: {
                slidesPerView: 1.5,
                spaceBetween: 16,
              },
            }}
          >
            {sportsCards.map((sportCard, index) => (
              <SwiperSlide key={index}>
                <Card className="bg-casino-card rounded-lg border-[var(--color-background-secondary)]">
                  <CardContent className="flex flex-col items-center gap-4 p-4">
                    <div className="flex items-center justify-between w-full h-4">
                      <div className="flex items-center gap-2">
                        <img
                          className="w-5 h-5"
                          alt="Sports soccer"
                          src={"/images/icons/sports_soccer.svg"}
                        />
                        <span className="text-xs text-casino-secondary font-normal ">
                          {sportCard.league}
                        </span>
                      </div>
                      <span className="text-xs text-casino-secondary font-normal ">
                        {sportCard.date}
                      </span>
                    </div>

                    <div className="flex items-center justify-between w-full">
                      <div className="flex flex-col items-start gap-2">
                        <div className="w-10 h-10 bg-casino-element rounded-[20px] relative">
                          <img
                            className="absolute w-6 h-6 top-2 left-2 object-cover"
                            alt={sportCard.team1.name}
                            src={sportCard.team1.logo}
                          />
                        </div>
                        <span className="text-sm text-casino-primary font-semibold ">
                          {sportCard.team1.name}
                        </span>
                      </div>

                      <span className="text-xs text-casino-secondary font-normal ">
                        VS
                      </span>

                      <div className="flex flex-col items-end gap-2">
                        <div className="w-10 h-10 bg-casino-element rounded-[20px] relative">
                          <img
                            className="absolute w-6 h-6 top-2 left-2 object-cover"
                            alt={sportCard.team2.name}
                            src={sportCard.team2.logo}
                          />
                        </div>
                        <span className="text-sm text-casino-primary font-semibold font-open-sans">
                          {sportCard.team2.name}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 w-full">
                      {[
                        { label: "1", value: sportCard.odds.home },
                        { label: "X", value: sportCard.odds.draw },
                        { label: "2", value: sportCard.odds.away },
                      ].map((option, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-center gap-4 py-2 flex-1 bg-casino-element rounded"
                        >
                          <span className="text-xs text-casino-secondary font-normal font-open-sans">
                            {option.label}
                          </span>
                          <span className="text-xs text-casino-primary font-semibold font-open-sans">
                            {option.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          {sportsCards.map((sportCard, index) => (
            <Card
              key={index}
              className="bg-casino-card rounded-lg border-[var(--color-background-secondary)]"
            >
              <CardContent className="flex flex-col items-center gap-4 md:gap-6 p-4 md:p-6">
                <div className="flex items-center justify-between w-full h-4">
                  <div className="flex items-center gap-2">
                    <img
                      className="w-5 h-5"
                      alt="Sports soccer"
                      src={"/images/icons/sports_soccer.svg"}
                    />
                    <span className="text-xs text-casino-secondary font-normal font-open-sans">
                      {sportCard.league}
                    </span>
                  </div>
                  <span className="text-xs text-casino-secondary font-normal font-open-sans">
                    {sportCard.date}
                  </span>
                </div>

                <div className="flex items-center justify-between w-full">
                  <div className="flex flex-col items-start gap-1 md:gap-2">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-casino-element rounded-[20px] relative">
                      <img
                        className="absolute w-4 h-4 md:w-6 md:h-6 top-2 left-2 object-cover"
                        alt={sportCard.team1.name}
                        src={sportCard.team1.logo}
                      />
                    </div>
                    <span className="text-xs md:text-sm text-casino-primary font-semibold font-open-sans">
                      {sportCard.team1.name}
                    </span>
                  </div>

                  <span className="text-xs text-casino-secondary font-normal font-open-sans">
                    VS
                  </span>

                  <div className="flex flex-col items-end gap-1 md:gap-2">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-casino-element rounded-[20px] relative">
                      <img
                        className="absolute w-4 h-4 md:w-6 md:h-6 top-2 left-2 object-cover"
                        alt={sportCard.team2.name}
                        src={sportCard.team2.logo}
                      />
                    </div>
                    <span className="text-xs md:text-sm text-casino-primary font-semibold font-open-sans">
                      {sportCard.team2.name}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2 md:gap-4 w-full">
                  {[
                    { label: "1", value: sportCard.odds.home },
                    { label: "X", value: sportCard.odds.draw },
                    { label: "2", value: sportCard.odds.away },
                  ].map((option, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-center gap-2 md:gap-4 py-1 md:py-2 flex-1 bg-casino-element rounded"
                    >
                      <span className="text-xs text-casino-secondary font-normal font-open-sans">
                        {option.label}
                      </span>
                      <span className="text-xs text-casino-primary font-semibold font-open-sans">
                        {option.value}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Casino and Sport Banners */}

        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col lg:flex-row gap-4 w-full">
            <Card
              className="flex-1 rounded-lg overflow-hidden"
              style={{
                background:
                  "linear-gradient(180deg, rgba(19,13,37,0) 0%, rgba(19,13,37,0.8) 47%, rgba(19,13,37,1) 100%), url(/images/cards/card_1.svg) 50% 50% / cover",
              }}
            >
              <CardContent className="flex flex-col items-start justify-center gap-6 md:gap-9 pt-32 md:pt-52 pb-4 md:pb-6 px-4 md:px-6">
                <div className="flex flex-col items-start gap-4">
                  <div className="flex items-center gap-3 h-[29px]">
                    <img
                      className="w-5 h-5 md:w-6 md:h-6 object-cover"
                      alt="Rugby ball"
                      src="/images/icons/cards.svg"
                    />
                    <h2 className="text-xl md:text-2xl text-casino-primary font-bold font-open-sans">
                      Casino
                    </h2>
                  </div>
                  <p className="text-sm md:text-base text-casino-primary font-normal tracking-[0.32px] font-open-sans">
                    Dive in to our wide range of in-house games, live casino and
                    <br className="hidden sm:block" />
                    slots to experience a thrilling&nbsp;&nbsp;casino adventure.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4 w-full">
                  <Button
                    size="lg"
                    className="w-full sm:flex-1 btn-primary rounded"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 md:w-5 md:h-5 relative">
                        <img
                          className="absolute w-[14px] h-[14px] md:w-[18px] md:h-[18px] top-px left-px"
                          alt="Element house games"
                          src="/images/icons/dice.svg"
                        />
                      </div>
                      <span className="text-xs md:text-sm text-casino-primary font-semibold leading-6 whitespace-nowrap font-open-sans">
                        Casino
                      </span>
                    </div>
                  </Button>

                  <Button
                    size="lg"
                    className="w-full sm:flex-1 btn-accent rounded"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 md:w-5 md:h-5 relative">
                        <img
                          className="absolute w-[14px] h-[14px] md:w-[18px] md:h-[18px] top-px left-px"
                          alt="Element house games"
                          src="/images/icons/chip.svg"
                        />
                      </div>
                      <span className="text-xs md:text-sm text-casino-primary font-semibold leading-6 whitespace-nowrap font-open-sans">
                        Live Casino
                      </span>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="flex-1 rounded-lg overflow-hidden">
              <CardContent
                className="flex flex-col items-start justify-center gap-6 md:gap-9 pt-32 md:pt-52 pb-4 md:pb-6 px-4 md:px-6"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(19,13,37,0) 0%, rgba(19,13,37,0.8) 47%, rgba(19,13,37,1) 100%), url(/images/cards/card_2.svg) 50% 50% / cover",
                }}
              >
                <div className="flex flex-col items-start gap-4">
                  <div className="flex items-center gap-3 h-[29px]">
                    <img
                      className="w-5 h-5 md:w-6 md:h-6 object-cover"
                      alt="Rugby ball"
                      src="/images/icons/rugby_ball.svg"
                    />
                    <h2 className="text-xl md:text-2xl text-casino-primary font-bold font-open-sans">
                      Sport
                    </h2>
                  </div>
                  <p className="text-sm md:text-base text-casino-primary font-normal tracking-[0.32px] font-open-sans">
                    Dive in to our wide range of in-house games, live casino and
                    <br className="hidden sm:block" />
                    slots to experience a thrilling&nbsp;&nbsp;casino adventure.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4 w-full">
                  <Button
                    size="lg"
                    className="w-full sm:flex-1 btn-primary rounded border border-solid border-black shadow-[0px_4px_4px_#00000040]"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 md:w-5 md:h-5 relative">
                        <img
                          className="absolute w-[14px] h-[14px] md:w-[18px] md:h-[18px] top-px left-px"
                          alt="I"
                          src="/images/icons/ball.svg"
                        />
                      </div>
                      <span className="text-xs md:text-sm text-casino-primary font-semibold leading-6 whitespace-nowrap font-open-sans">
                        Sport
                      </span>
                    </div>
                  </Button>

                  <Button
                    size="lg"
                    className="w-full sm:flex-1 btn-accent rounded"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 md:w-5 md:h-5 relative">
                        <img
                          className="absolute w-[14px] h-[14px] md:w-[18px] md:h-[18px] top-px left-px"
                          alt="Element house games"
                          src="/images/icons/live.svg"
                        />
                      </div>
                      <span className="text-xs md:text-sm text-casino-primary font-semibold leading-6 whitespace-nowrap font-open-sans">
                        Live
                      </span>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Game Carousel Component */}
          <div className="flex flex-col gap-4 w-full">
            <GameCarousel
              title="Casino"
              games={casinoGames}
              showAllGamesButton={true}
              onAllGamesClick={() => console.log("All casino games clicked")}
              itemsPerPage={6}
            />
          </div>
        </div>
      </div>

      {/* Top Rated Games Section */}
      <GameCarousel
        title="Top Rated Games"
        games={topRatedGames}
        showAllGamesButton={true}
        onAllGamesClick={() => console.log("All top rated games clicked")}
        itemsPerPage={6}
      />

      <GameCarousel
        title="Live Casino  "
        games={liveGames}
        showAllGamesButton={true}
        onAllGamesClick={() => console.log("All top rated games clicked")}
        itemHeight={200}
        itemsPerPage={4}
      />
    </section>
  );
};
