"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import "./style.scss";
import {
  AlarmClockIcon,
  ChevronLeft,
  ChevronRight,
  HeroTicketIcon,
  PlayIcon,
} from "@/components/icons";

const videoData = [
  {
    id: 1,
    title: "O'zbekiston Milliy Simfonik orkestri",
    date: "12–Aprel, 20:00",
    price: "2 000 000 UZS",
    thumb: "https://xalqlardostligi-ticket.uz/uploads/1757593065098.jpg",
    video: "https://xalqlardostligi-ticket.uz/uploads/1757593065394.mp4",
  },
  {
    id: 2,
    title: "Volkswagen GTI Review",
    date: "21–Aprel, 18:00",
    price: "1 250 000 UZS",
    thumb: "https://xalqlardostligi-ticket.uz/uploads/1756729953533.jpg",
    video: "https://xalqlardostligi-ticket.uz/uploads/1756729954376.mp4",
  },
  {
    id: 5,
    title: "Elephant Dream",
    date: "20–May, 19:30",
    price: "800 000 UZS",
    thumb: "https://xalqlardostligi-ticket.uz/uploads/1757584617906.jpg",
    video: "https://xalqlardostligi-ticket.uz/uploads/1757593065394.mp4",
  },
];

const monthNames = [
  "Yanvar",
  "Fevral",
  "Mart",
  "Aprel",
  "May",
  "Iyun",
  "Iyul",
  "Avgust",
  "Sentabr",
  "Oktabr",
  "Noyabr",
  "Dekabr",
];

const dayNames = ["Ju", "Sha", "Ya", "Du", "Se", "Cho", "Pa"];

interface DayInfo {
  day: number;
  dayName: string;
  date: Date;
  currentMonth: boolean;
}

function getNext14Days(fromDate: Date): DayInfo[] {
  const days: DayInfo[] = [];
  for (let i = 0; i < 14; i++) {
    const currentDate = new Date(fromDate);
    currentDate.setDate(currentDate.getDate() + i);
    const dayOfWeek = currentDate.getDay();
    const month = currentDate.getMonth();
    const today = new Date();
    days.push({
      day: currentDate.getDate(),
      dayName: dayNames[dayOfWeek],
      date: currentDate,
      currentMonth: month === today.getMonth(),
    });
  }
  return days;
}

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [startDate, setStartDate] = useState(new Date());

  // Drag state
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const sliderRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const calendarDaysRef = useRef<HTMLDivElement | null>(null);

  const today = new Date();
  const totalSlides = videoData.length;

  // Card dimensions (percentage based: 20% - 60% - 20%)
  const CARD_GAP = 24;

  // Calculate center offset for 20-60-20 layout
  const getSliderTranslate = useCallback(
    (index: number, offset: number = 0) => {
      if (!sliderRef.current) return 0;
      const containerWidth = sliderRef.current.offsetWidth;
      // Mini card = 20%, gap between cards
      const miniWidth = containerWidth * 0.2;
      // Start position: align first mini card to left edge
      const baseTranslate = offset;
      return baseTranslate;
    },
    []
  );

  // Initialize translateX
  useEffect(() => {
    setTranslateX(getSliderTranslate(activeIndex));
  }, [activeIndex, getSliderTranslate]);

  // Handle infinite scroll
  const normalizeIndex = (index: number) => {
    return ((index % totalSlides) + totalSlides) % totalSlides;
  };

  const goToSlide = (index: number) => {
    // Limit to valid range (no infinite scroll)
    if (index < 0) {
      setActiveIndex(0);
    } else if (index >= totalSlides) {
      setActiveIndex(totalSlides - 1);
    } else {
      setActiveIndex(index);
    }
  };

  const prevSlide = () => goToSlide(activeIndex - 1);
  const nextSlide = () => goToSlide(activeIndex + 1);

  // Drag handlers
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    setDragOffset(0);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    const diff = clientX - startX;
    setDragOffset(diff);
    setTranslateX(getSliderTranslate(activeIndex, diff));
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 100; // drag threshold in pixels

    if (dragOffset > threshold) {
      prevSlide();
    } else if (dragOffset < -threshold) {
      nextSlide();
    } else {
      setTranslateX(getSliderTranslate(activeIndex));
    }

    setDragOffset(0);
  };

  // Mouse events
  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleDragStart(e.clientX);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    handleDragMove(e.clientX);
  };

  const onMouseUp = () => {
    handleDragEnd();
  };

  const onMouseLeave = () => {
    if (isDragging) handleDragEnd();
  };

  // Touch events
  const onTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientX);
  };

  const onTouchEnd = () => {
    handleDragEnd();
  };

  // Video controls
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
      setPlaying(true);
    }
  }, [activeIndex]);

  // Calendar
  const changeDateRange = (dir: number) => {
    const newDate = new Date(startDate);
    newDate.setDate(newDate.getDate() + dir * 7);
    setStartDate(newDate);
  };

  const calendarDays = getNext14Days(startDate);
  const monthName = monthNames[calendarDays[0].date.getMonth()];

  const getVisibleSlides = () => {
    const slides = [];
    for (let i = -1; i <= 1; i++) {
      const realIndex = normalizeIndex(activeIndex + i);
      slides.push({
        ...videoData[realIndex],
        position: i,
        realIndex,
      });
    }
    return slides;
  };

  const visibleSlides = getVisibleSlides();

  return (
    <>
      <div
        className="hero-slider"
        ref={sliderRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="hero-slider__track"
          style={{
            transform: `translateX(${translateX}px)`,
            transition: isDragging
              ? "none"
              : "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
          }}
        >
          {visibleSlides.map((slide) => {
            const isActive = slide.position === 0;

            return (
              <div
                key={`${slide.id}-${slide.position}`}
                className={`hero-slider__card ${
                  isActive
                    ? "hero-slider__card--active"
                    : "hero-slider__card--mini"
                }`}
                onClick={() => !isActive && goToSlide(slide.realIndex)}
              >
                {isActive ? (
                  <>
                    <video
                      ref={videoRef}
                      src={slide.video}
                      poster={slide.thumb}
                      autoPlay
                      // muted
                      loop
                      playsInline
                    />
                    <div className="hero-slider__overlay"></div>
                    <button
                      className="hero-slider__play"
                      onClick={(e) => {
                        e.stopPropagation();
                        togglePlay();
                      }}
                    >
                      {playing ? "⏸" : <PlayIcon />}
                    </button>
                    <div className="hero-slider__info">
                      <div className="hero-slider__info__left">
                        <h2 className="hero-slider__title">{slide.title}</h2>
                        <div className="hero-slider__date">
                          <AlarmClockIcon /> {slide.date}
                        </div>
                      </div>
                      <div className="hero-slider__info__right">
                        <div className="hero-slider__info__right-price">
                          {slide.price}
                        </div>
                        <span className="hero-slider__info__right-icon">
                          <HeroTicketIcon />
                        </span>
                      </div>
                    </div>
                    {/* Price card - inside active card, bottom right */}

                    <div className="hero-slider__dots">
                      {videoData.map((_, i) => (
                        <span
                          key={i}
                          className={`hero-slider__dot ${
                            i === activeIndex ? "hero-slider__dot--active" : ""
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            goToSlide(i);
                          }}
                        ></span>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <img src={slide.thumb} alt={slide.title} />
                    <div className="hero-slider__overlay hero-slider__overlay--mini"></div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Navigation buttons */}
      </div>

      {/* Calendar section */}
      <div className="hero__calendar">
        <div className="calendar__header-row">
          <h3>{monthName}</h3>
          {calendarDays.some(
            (d) => d.date.getMonth() !== calendarDays[0].date.getMonth()
          ) && (
            <h3>
              {
                monthNames[
                  calendarDays[calendarDays.length - 1].date.getMonth()
                ]
              }
            </h3>
          )}
        </div>

        <div className="calendar__days-row">
          <button
            className="calendar__arrow"
            onClick={() => changeDateRange(-1)}
          >
            <ChevronLeft />
          </button>
          {calendarDays.map((dayInfo, idx) => {
            const isToday =
              dayInfo.day === today.getDate() &&
              dayInfo.date.getMonth() === today.getMonth() &&
              dayInfo.date.getFullYear() === today.getFullYear();

            return (
              <div
                key={idx}
                className={`calendar__pill ${
                  isToday ? "calendar__pill--today" : ""
                }`}
              >
                <span className="calendar__weekday">{dayInfo.dayName}</span>
                <span className="calendar__day">{dayInfo.day}</span>
              </div>
            );
          })}
          <button
            className="calendar__arrow"
            onClick={() => changeDateRange(1)}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </>
  );
}
