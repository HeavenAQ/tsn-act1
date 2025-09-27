"use client";

import Head from "next/head";
import { Button } from "../components/ui/button";
import { Menu, X, ChevronLeft, ChevronRight, Mail, Phone, Ticket } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import TicketPurchaseSection from "~/components/sections/TicketPurchaseSection";

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentArtist, setCurrentArtist] = useState(0);

  // ✅ Single source of truth for navigation
  const navItems = useMemo(
    () => [
      { id: "concept", label: "音橋空環" },
      { id: "artists", label: "出演者紹介" },
      { id: "producer", label: "作曲・監修" },
      { id: "event-overview", label: "開催概要" },
      { id: "access", label: "会場アクセス" },
      { id: "ticket-info", label: "チケット情報" },
      { id: "sponsors", label: "協賛" },
      { id: "sns", label: "お問い合わせ" },
    ],
    [],
  );

  const sponsors = useMemo(
    () => [
      { name: "real-estate", src: "real-estate-sponsor.webp" },
      { name: "asaahido", src: "asahido-sponsor.webp" },
      { name: "sakibana", src: "sakibana-sponsor.webp" },
      { name: "topcon", src: "topcon-sponsor.webp" },
    ],
    [],
  );

  const artists = useMemo(
    () => [
      {
        name: "津村禮次郎",
        role: "能楽師",
        image: "津村禮次郎.webp",
        description:
          "観世流緑泉会代表、重要無形文化財（能楽総合）保持者、一般社団法人「和音」代表理事。1942年福岡県生まれ。一橋大学卒業後、津村紀三子、観世喜之に師事。1974年に緑泉会を継承し、伝統能楽の継承発展に尽力している。",
      },
      {
        name: "永山玳潤",
        role: "書道家",
        image: "永山玳潤.webp",
        description:
          "1971年大阪府高石市生まれ。4歳より書道を学び、プロ書道家として国内外で活動。JRA有馬記念の題字や企業ロゴを手がけ、古典に基づく伝統と独創性を融合させた書の表現を世界に発信している。",
      },
      {
        name: "山中裕貴",
        role: "和太鼓・篠笛奏者",
        image: "山中裕貴.webp",
        description:
          "兵庫県尼崎市出身。10歳で和太鼓に触れ、大阪音楽大学卒業後、kogakusyu翔に加入。2021年からソロ活動を開始し、和太鼓・篠笛奏者として国内外で演奏活動を行っている。",
      },
      {
        name: "北村和也",
        role: "コントラバス奏者",
        image: "北村和也.webp",
        description:
          "京都府出身。20歳からベースを始め、様々なジャンルで活動。2012年より「kogakusyu翔」に参加し、和楽器と洋楽器を融合させた音楽で高い評価を得る。現在はソロアーティストのサポートで活躍中。",
      },
    ],
    [],
  );

  const producer = useMemo(
    () => ({
      name: "渋谷牧人",
      role: "作曲・監修",
      image: "渋谷牧人.webp",
      description:
        "宮城教育大学卒業。作曲家・一般社団法人「和音」専務理事。クラシックを基盤に、和楽器や能、琉球音楽との融合を探求。「雨ニモマケズ」「首里」などの舞台作品を発表し、国際的に活動している。",
    }),
    [],
  );

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const nextArtist = () => {
    setCurrentArtist((prev) => (prev + 1) % artists.length);
  };

  const prevArtist = () => {
    setCurrentArtist((prev) => (prev - 1 + artists.length) % artists.length);
  };

  const [isImgLoading, setIsImgLoading] = useState(true);
  useEffect(() => {
    setIsImgLoading(true);
    const next = new window.Image();
    const path = `/${artists[currentArtist]?.image}`;
    next.src = path;
  }, [currentArtist, artists]);
  const navBtnBase =
    "absolute top-1/2 -translate-y-1/2 transform cursor-pointer rounded-full bg-yellow-400 p-2 text-black transition-all hover:bg-yellow-500";

  return (
    <>
      <Head >
        <title>能楽公演-音橋空環</title>
        <meta
          name="description"
          content="本公演は、能楽・書道・邦楽を基盤に現代的な表現を融合した舞台芸術作品です。
                  象徴的モチーフである「水」を通じ、弘法大師（空海）と八田與一を題材に、日本と台湾、過去と現在を結ぶ文化の架け橋を描きます。"
        />
      </Head>
      <div className="min-h-screen bg-black text-white">
        {/* Header */}
        <header className="relative z-50">
          {/* Top navigation bar */}
          <div className="absolute top-0 right-0 left-0 z-50 bg-black/90 px-4 py-4 backdrop-blur-sm lg:px-6">
            {/* Desktop Navigation */}
            <div className="hidden items-center justify-between lg:flex">
              <div className="flex items-center gap-8">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-white bg-transparent text-white hover:bg-white hover:text-black"
                >
                  <Link href="/" aria-label="公式サイトへ">
                    公式サイト
                  </Link>
                </Button>
              </div>

              <nav
                aria-label="Primary"
                className="flex items-center gap-6 text-sm"
              >
                <ul className="flex gap-6">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className="cursor-pointer transition-colors hover:text-yellow-400 focus:outline-none focus-visible:underline"
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Mobile Navigation */}
            <div className="cursor-pointer lg:hidden">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2"></div>
                <button
                  onClick={toggleMobileMenu}
                  className="rounded-lg border-2 border-white/30 p-2 transition-colors hover:border-white/50"
                  aria-label="メニューを開閉"
                  aria-expanded={isMobileMenuOpen}
                  aria-controls="mobile-menu"
                >
                  {isMobileMenuOpen ? (
                    <X className="h-6 w-6 text-white" />
                  ) : (
                    <Menu className="h-6 w-6 text-white" />
                  )}
                </button>
              </div>

              {isMobileMenuOpen && (
                <div
                  id="mobile-menu"
                  className="mt-4 border-t border-white/10 pb-4"
                >
                  <div className="space-y-4 pt-4">
                    <nav aria-label="Mobile Primary">
                      <ul className="flex flex-col space-y-2 text-sm">
                        {navItems.map((item) => (
                          <li key={item.id} className="border-b border-white/10">
                            <button
                              onClick={() => scrollToSection(item.id)}
                              className="w-full cursor-pointer py-3 text-left transition-colors hover:text-yellow-400"
                            >
                              {item.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </nav>

                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="mt-2 border-white bg-transparent text-white hover:bg-white hover:text-black"
                    >
                      <Link href="/" aria-label="公式サイトへ">
                        公式サイト
                      </Link>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Hero stays the same, but add scroll margin to avoid header overlap */}
          <div
            id="concept"
            className="relative top-20 h-[70vh] scroll-mt-24 overflow-hidden md:top-10 md:h-screen"
          >
            <div className="absolute inset-0 rounded-xl">
              <Image
                src="/hero.webp"
                alt="音橋空環 - 能楽公演2025"
                fill
                className="rounded-2xl object-contain object-top md:object-center"
                priority
              />
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="mt-16 px-4 py-8 sm:mt-20 sm:px-6 sm:py-12 lg:px-8">
          {/* Concept section */}
          <section className="my-12 sm:my-16 md:mt-0">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-6 text-center text-2xl font-bold text-yellow-400 sm:mb-8 sm:text-3xl">
                「{navItems[0]?.label}」
              </h2>

              <div className="space-y-6 text-sm leading-relaxed text-gray-300 sm:text-base">
                <p>
                  本公演は、能楽・書道・邦楽を基盤に現代的な表現を融合した舞台芸術作品です。
                  象徴的モチーフである「水」を通じ、弘法大師（空海）と八田與一を題材に、日本と台湾、過去と現在を結ぶ文化の架け橋を描きます。
                </p>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="rounded-lg bg-gray-900/50 p-4">
                    <h4 className="mb-2 font-bold text-yellow-400">音</h4>
                    <p className="text-sm">
                      音楽・言葉・祈りなど、響きを通じて人と人を結ぶ表現手段
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-900/50 p-4">
                    <h4 className="mb-2 font-bold text-yellow-400">橋</h4>
                    <p className="text-sm">
                      世界と世界、人と人、時と時を結ぶ通路。能舞台の「橋掛かり」に象徴される
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-900/50 p-4">
                    <h4 className="mb-2 font-bold text-yellow-400">空</h4>
                    <p className="text-sm">
                      あらゆるものが共鳴し合う空間。開かれた場、自由な発想と創造の象徴
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-900/50 p-4">
                    <h4 className="mb-2 font-bold text-yellow-400">環</h4>
                    <p className="text-sm">
                      文化や命の循環、日本文化における「和」の精神の象徴
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Artists section */}
          <section id="artists" className="mb-12 sm:mb-16">
            <h2 className="mb-8 text-center text-2xl font-bold text-yellow-400 sm:text-3xl">
              {navItems[1]?.label}
            </h2>

            <div className="mx-auto max-w-4xl">
              <div className="relative">
                {/* Carousel container */}
                <div className="h-[390px] rounded-lg bg-gray-900/50 p-6 sm:h-[430px] sm:p-8 lg:h-auto">
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.div
                      key={currentArtist}
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -8 }}
                      transition={{ duration: 0.25 }}
                      className="flex flex-col items-center gap-6 lg:flex-row lg:gap-8"
                    >
                      {/* Artist image */}
                      <div className="relative h-36 flex-shrink-0 sm:h-48">
                        {/* Image skeleton */}
                        {isImgLoading && (
                          <div className="h-32 w-32 animate-pulse overflow-hidden rounded-full border-4 border-yellow-400 bg-gray-700 sm:h-40 sm:w-40 lg:h-48 lg:w-48" />
                        )}

                        <div
                          className={`h-32 w-32 overflow-hidden rounded-full border-4 border-yellow-400 sm:h-40 sm:w-40 lg:h-48 lg:w-48 ${isImgLoading ? "invisible" : "visible"
                            }`}
                        >
                          <Image
                            src={`/${artists[currentArtist]?.image}`}
                            alt={artists[currentArtist]?.name ?? ""}
                            width={200}
                            height={200}
                            className="h-full w-full object-cover"
                            onLoad={() => setIsImgLoading(false)}
                            priority
                          />
                        </div>
                      </div>

                      {/* Artist info */}
                      <div className="flex-1 text-center lg:text-left">
                        {/* Name */}
                        {isImgLoading ? (
                          <div className="mb-3 h-6 w-48 animate-pulse rounded bg-gray-700 sm:h-7" />
                        ) : (
                          <h3 className="mb-2 text-xl font-bold text-white sm:text-2xl">
                            {artists[currentArtist]?.name ?? ""}
                          </h3>
                        )}

                        {/* Role */}
                        {isImgLoading ? (
                          <div className="mb-4 h-4 w-36 animate-pulse rounded bg-gray-700 sm:h-5" />
                        ) : (
                          <p className="mb-4 text-sm text-yellow-400 sm:text-base">
                            {artists[currentArtist]?.role}
                          </p>
                        )}

                        {/* Description */}
                        {isImgLoading ? (
                          <div className="space-y-2">
                            <div className="h-4 w-full animate-pulse rounded bg-gray-700" />
                            <div className="h-4 w-11/12 animate-pulse rounded bg-gray-700" />
                          </div>
                        ) : (
                          <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
                            {artists[currentArtist]?.description ?? ""}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation buttons */}
                <button
                  onClick={prevArtist}
                  className="absolute top-1/2 left-0 -translate-x-4 -translate-y-1/2 transform cursor-pointer rounded-full bg-yellow-400 p-2 text-black transition-colors hover:bg-yellow-500"
                  aria-label="Previous artist"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextArtist}
                  className={`${navBtnBase} right-0 translate-x-4 ${isImgLoading ? "opacity-60" : ""}`}
                  aria-label="Next artist"
                />
                <button
                  onClick={nextArtist}
                  className="absolute top-1/2 right-0 translate-x-4 -translate-y-1/2 transform cursor-pointer rounded-full bg-yellow-400 p-2 text-black transition-colors hover:bg-yellow-500"
                  aria-label="Next artist"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* Carousel indicators */}
              <div className="mt-6 flex justify-center gap-2">
                {artists.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentArtist(index)}
                    className={`h-3 w-3 rounded-full transition-colors ${index === currentArtist
                      ? "bg-yellow-400"
                      : "bg-gray-600 hover:bg-gray-500"
                      }`}
                    aria-label={`Go to artist ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Producer Section*/}
          <section id="producer" className="mb-12 sm:mb-16">
            <h2 className="mb-8 text-center text-2xl font-bold text-yellow-400 sm:text-3xl">
              {navItems[2]?.label}
            </h2>
            <div className="mx-auto max-w-4xl">
              <div className="rounded-lg bg-gray-900/50 p-6 sm:p-8">
                {/* Display all artists */}
                <div className="space-y-8">
                  <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-8">
                    {/* Artist image */}
                    <div className="relative h-36 flex-shrink-0 sm:h-48">
                      <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-yellow-400 sm:h-40 sm:w-40 lg:h-48 lg:w-48">
                        <Image
                          src={`/${producer.image}`}
                          alt={producer.name}
                          width={200}
                          height={200}
                          className="h-full w-full object-cover"
                          priority
                        />
                      </div>
                    </div>

                    {/* Artist info */}
                    <div className="flex-1 text-center lg:text-left">
                      <h3 className="mb-2 text-xl font-bold text-white sm:text-2xl">
                        {producer.name}
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
                        {producer.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Event details section */}
          <section id="event-overview" className="mb-12 sm:mb-16">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-6 text-center text-2xl font-bold text-yellow-400 sm:mb-8 sm:text-3xl">
                {navItems[3]?.label}
              </h2>

              <div className="rounded-lg bg-gray-900/50 p-6 sm:p-8">
                <div className="space-y-4 text-sm text-gray-300 sm:space-y-6 sm:text-base">
                  <div className="grid grid-cols-1 gap-2 sm:gap-4">
                    <div className="font-semibold text-yellow-400">公演日</div>
                    <div>2025年11月30日（日）</div>
                  </div>

                  <div className="grid grid-cols-1 gap-2 sm:gap-4">
                    <div className="font-semibold text-yellow-400">
                      開場・開演
                    </div>
                    <div>
                      開場：13:30
                      <br />
                      開演：14:00
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-2 sm:gap-4">
                    <div className="font-semibold text-yellow-400">会場</div>
                    <div>
                      堺能楽会館 (〒590-0974 大阪府堺市堺区大浜北町3丁4-7)
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-2 sm:gap-4">
                    <div className="font-semibold text-yellow-400">主催</div>
                    <div>
                      一般社団法人和音
                      <br />
                      株式会社tsn
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-2 sm:gap-4">
                    <div className="font-semibold text-yellow-400">協贊</div>
                    <div>
                      アーク不動産株式会社
                      <br />
                      社会医療法人啓仁会咲花病院
                      <br />
                      株式会社トプコン
                      <br />
                      株式会社 朝日堂
                      <br />
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps section */}
              <section id="access" className="mt-8 sm:mt-12">
                <h2 className="mb-6 text-center text-2xl font-bold text-yellow-400 sm:mb-8 sm:text-3xl">
                  {navItems[4]?.label}
                </h2>
                <div className="rounded-lg bg-gray-900/50 p-4 sm:p-6">
                  <div className="aspect-video w-full overflow-hidden rounded-lg">
                    <iframe
                      src="https://www.google.com/maps?output=embed&q=〒590-0974 大阪府堺市堺区大浜北町3丁4-7&hl=ja&z=17"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                      title="会場（〒590-0974 大阪府堺市堺区大浜北町3丁4-7）"
                    />
                  </div>
                  <div className="mt-4 space-y-2 text-sm text-gray-300">
                    <p className="font-semibold text-yellow-400">交通アクセス</p>
                    <div className="space-y-1">
                      <p>• 南海本線「堺駅」より徒歩約10分</p>
                      <p>• 阪堺電軌阪堺線「大小路駅」より徒歩約8分</p>
                      <p>• 南海バス「大浜公園前」停留所より徒歩約3分</p>
                    </div>
                    <p className="mt-3 text-xs text-gray-400">
                      ※現地に駐車場がございませんので、堺駅周辺のコインパーキング等をご利用ください。御足労をおかけいたします。{" "}
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </section>

          {/* Ticket section */}
          <section id="ticket-info" className="mb-12 text-center sm:mb-16">
            <h2 className="mb-6 text-2xl font-bold text-yellow-400 sm:mb-8 sm:text-3xl">
              チケット情報
            </h2>

            <div className="mx-auto max-w-5xl">
              {/* Pricing grid */}
              <div className="mb-8">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  <div className="rounded-lg border border-yellow-400/30 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 p-4">
                    <div className="mb-2 font-bold text-yellow-400">SS席</div>
                    <div className="text-xl font-bold text-white">¥20,000</div>
                  </div>
                  <div className="rounded-lg border border-yellow-400/20 bg-gradient-to-br from-yellow-400/15 to-yellow-600/15 p-4">
                    <div className="mb-2 font-bold text-yellow-400">S席</div>
                    <div className="text-xl font-bold text-white">¥10,000</div>
                  </div>
                  <div className="rounded-lg border border-yellow-400/20 bg-gradient-to-br from-yellow-400/15 to-yellow-600/15 p-4">
                    <div className="mb-2 font-bold text-yellow-400">A席</div>
                    <div className="text-xl font-bold text-white">¥8,000</div>
                  </div>
                  <div className="rounded-lg border border-yellow-400/20 bg-gradient-to-br from-yellow-400/15 to-yellow-600/15 p-4">
                    <div className="mb-2 font-bold text-yellow-400">一般席</div>
                    <div className="text-xl font-bold text-white">¥5,000</div>
                  </div>
                </div>
              </div>

              <TicketPurchaseSection />
            </div>
          </section>

          <section id="sponsors" className="mb-12 sm:mb-16">
            <div className="relative overflow-hidden rounded-lg bg-gray-900/30 pt-8">
              {/* Floating sponsors container */}
              <div
                className="animate-scroll flex space-x-8"
                style={{ scrollBehavior: "auto" }}
              >
                {/* First set of sponsors */}
                {sponsors.map((sponsor, index) => (
                  <div key={`first-${index}`} className="flex-shrink-0">
                    <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-white p-4 shadow-lg backdrop-blur-sm transition-transform hover:scale-110">
                      <Image
                        src={`/${sponsor.src}`}
                        alt={sponsor.name}
                        width={100}
                        height={100}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </div>
                ))}

                {sponsors.map((sponsor, index) => (
                  <div key={`first-${index}`} className="flex-shrink-0">
                    <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-white p-4 shadow-lg backdrop-blur-sm transition-transform hover:scale-110">
                      <Image
                        src={`/${sponsor.src}`}
                        alt={sponsor.name}
                        width={100}
                        height={100}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </div>
                ))}
                {sponsors.map((sponsor, index) => (
                  <div key={`first-${index}`} className="flex-shrink-0">
                    <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-white p-4 shadow-lg backdrop-blur-sm transition-transform hover:scale-110">
                      <Image
                        src={`/${sponsor.src}`}
                        alt={sponsor.name}
                        width={100}
                        height={100}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </div>
                ))}

                {sponsors.map((sponsor, index) => (
                  <div key={`first-${index}`} className="flex-shrink-0">
                    <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-white p-4 shadow-lg backdrop-blur-sm transition-transform hover:scale-110">
                      <Image
                        src={`/${sponsor.src}`}
                        alt={sponsor.name}
                        width={100}
                        height={100}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section id="sns" className="text-center">
            <h2 className="mb-6 text-2xl font-bold text-yellow-400 sm:mb-8 sm:text-3xl">
              {navItems[7]?.label}
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base">
              公演に関するお問い合わせは
              <br />
              株式会社tsnまでご連絡ください。
            </p>
            <div className="mx-auto text-sm text-gray-400">
              <div className="flex w-full justify-evenly">
                <div className="mb-1 flex items-center justify-start gap-2">
                  <Mail className="h-4 w-4 text-yellow-400" />
                  <span>info@twtsn.co.jp</span>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <Phone className="h-4 w-4 text-yellow-400" />
                  <span>072-284-9617</span>
                </div>
              </div>
            </div>{" "}
          </section>
        </main>

        <style jsx>{`
@keyframes scroll {
0% {
transform: translateX(0);
}
100% {
transform: translateX(-50%);
}
}

.animate-scroll {
animation: scroll 30s linear infinite;
}

.animate-scroll:hover {
animation-play-state: paused;
}
`}</style>
      </div>
    </>
  );
}
