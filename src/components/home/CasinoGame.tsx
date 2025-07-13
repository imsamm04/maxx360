import { useRef, useState } from "react";
import { Button } from "../ui";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/swiper-bundle.css";

interface Game {
  image: string;
  alt: string;
  id?: string;
  url?: string;
}

interface GameCarouselProps {
  title: string;
  games: Game[];
  showAllGamesButton?: boolean;
  onAllGamesClick?: () => void;
  onGameClick?: (game: Game, index: number) => void;
  itemHeight?: number;
  itemsPerPage?: number;
}

export const GameCarousel = ({
  title,
  games,
  showAllGamesButton = true,
  onAllGamesClick,
  onGameClick,
  itemHeight = 300,
  itemsPerPage = 6,
}: GameCarouselProps) => {
  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);
  const casinoSwiperRef = useRef<SwiperType | null>(null);

  const handlePrevious = () => {
    if (casinoSwiperRef.current) {
      casinoSwiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (casinoSwiperRef.current) {
      casinoSwiperRef.current.slideNext();
    }
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setIsLeftDisabled(swiper.isBeginning);
    setIsRightDisabled(swiper.isEnd);
  };
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex items-center justify-between w-full">
        <h2 className="text-2xl text-casino-primary font-bold">{title}</h2>
        <div className="flex items-end gap-2">
          {showAllGamesButton && (
            <Button
              variant="ghost"
              className="px-2 py-0 bg-casino-card rounded !h-6"
              onClick={onAllGamesClick}
            >
              <span className="text-xs text-casino-primary font-normal leading-6 whitespace-nowrap rounded-[4px]">
                All Games
              </span>
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            disabled={isLeftDisabled}
            className={`!w-6 !h-6 rounded p-0 ${
              isLeftDisabled
                ? "!bg-[#140d26]"
                : "bg-casino-element hover:bg-casino-card"
            }`}
            onClick={handlePrevious}
          >
            <img
              src="/images/icons/chevron_left.svg"
              className={`w-[7px] h-[11px] ${
                isLeftDisabled ? "opacity-50" : "text-white"
              }`}
            />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            disabled={isRightDisabled}
            className={`!w-6 !h-6 rounded p-0 ${
              isRightDisabled
                ? "!bg-[#140d26]"
                : "bg-casino-element hover:bg-casino-card"
            }`}
            onClick={handleNext}
          >
            <img
              src="/images/icons/chevron_right.svg"
              className={`w-[7px] h-[11px] ${
                isRightDisabled ? "opacity-50" : ""
              }`}
            />
          </Button>
        </div>
      </div>

      <div className="w-full">
        <Swiper
          onSlideChange={handleSlideChange}
          onSwiper={(swiper) => {
            casinoSwiperRef.current = swiper;
            handleSlideChange(swiper);
          }}
          slidesPerView={2}
          spaceBetween={16}
          breakpoints={{
            640: {
              slidesPerView: Math.min(3, itemsPerPage),
              spaceBetween: 16,
            },
            768: {
              slidesPerView: Math.min(4, itemsPerPage),
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: Math.min(5, itemsPerPage),
              spaceBetween: 16,
            },
            1280: {
              slidesPerView: itemsPerPage,
              spaceBetween: 16,
            },
          }}
          className="h-[300px]"
          style={{ height: `${itemHeight}px` }}
        >
          {games.map((game: Game, index: number) => (
            <SwiperSlide key={index}>
              <a
                href={
                  game.url || `/games/${game.id}` || `/games/game-${index + 1}`
                }
                className="cursor-pointer hover:scale-105 transition-all duration-300 ease block"
                onClick={(e) => {
                  if (onGameClick) {
                    e.preventDefault();
                    onGameClick(game, index);
                  }
                  // If no onGameClick handler, let the anchor tag handle navigation naturally
                }}
              >
                <img
                  className="w-full object-cover rounded-lg"
                  style={{ height: `${itemHeight}px` }}
                  alt={game.alt}
                  src={game.image}
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
