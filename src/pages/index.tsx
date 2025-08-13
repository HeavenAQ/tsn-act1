import { Button } from "~/components/ui/button";
import { Play, Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    // Close mobile menu after clicking a link
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="relative">
        {/* Top navigation bar */}
        <div className="bg-black/80 px-4 py-4 lg:px-6">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center gap-8">
              <button
                onClick={() => scrollToSection("concept")}
                className="cursor-pointer text-sm transition-colors hover:text-yellow-400"
              >
                コンセプト
              </button>
              <div className="flex items-center gap-4">
                <Image
                  src="/expo-2025-logo.png"
                  alt="EXPO 2025"
                  className="h-10"
                />
                <Image
                  src="/osaka-kansai-logo.png"
                  alt="大阪・関西万博"
                  className="h-10"
                />
                <Image
                  src="/team-expo-logo.png"
                  alt="Team Expo"
                  className="h-10"
                />
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <div className="flex gap-6">
                <button
                  onClick={() => scrollToSection("event-overview")}
                  className="cursor-pointer transition-colors hover:text-yellow-400"
                >
                  開催概要
                </button>
                <button
                  onClick={() => scrollToSection("ticket-info")}
                  className="cursor-pointer transition-colors hover:text-yellow-400"
                >
                  チケット情報
                </button>
                <button
                  onClick={() => scrollToSection("sns")}
                  className="cursor-pointer transition-colors hover:text-yellow-400"
                >
                  公式SNS
                </button>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="border-white bg-transparent text-white hover:bg-white hover:text-black"
              >
                公式サイト
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src="/expo-2025-logo.png"
                  alt="EXPO 2025"
                  className="h-8"
                />
                <Image
                  src="/osaka-kansai-logo.png"
                  alt="大阪・関西万博"
                  className="h-8"
                />
              </div>

              <button
                onClick={toggleMobileMenu}
                className="rounded-lg border-2 border-white/30 p-2 transition-colors hover:border-white/50"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 text-white" />
                ) : (
                  <Menu className="h-6 w-6 text-white" />
                )}
              </button>
            </div>

            {isMobileMenuOpen && (
              <div className="mt-4 border-t border-white/10 pb-4">
                <div className="space-y-4 pt-4">
                  <div className="flex flex-col space-y-4 text-sm">
                    <button
                      onClick={() => scrollToSection("concept")}
                      className="border-b border-white/10 py-2 text-left transition-colors hover:text-yellow-400"
                    >
                      コンセプト
                    </button>
                    <button
                      onClick={() => scrollToSection("event-overview")}
                      className="border-b border-white/10 py-2 text-left transition-colors hover:text-yellow-400"
                    >
                      開催概要
                    </button>
                    <button
                      onClick={() => scrollToSection("ticket-info")}
                      className="border-b border-white/10 py-2 text-left transition-colors hover:text-yellow-400"
                    >
                      チケット情報
                    </button>
                    <button
                      onClick={() => scrollToSection("sns")}
                      className="border-b border-white/10 py-2 text-left transition-colors hover:text-yellow-400"
                    >
                      公式SNS
                    </button>
                  </div>
                  <div className="pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-white bg-transparent text-white hover:bg-white hover:text-black"
                    >
                      公式サイト
                    </Button>
                  </div>
                  <div className="flex items-center justify-center gap-3 pt-4">
                    <Image
                      src="/team-expo-logo.png"
                      alt="Team Expo"
                      className="h-8"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Hero section */}
        <div
          id="concept"
          className="relative h-[400px] overflow-hidden sm:h-[500px] lg:h-[600px]"
        >
          {/* Background with traditional performers */}
          <div className="absolute inset-0 flex items-center justify-between px-4 sm:px-8 lg:px-12">
            <Image
              src="/noh-performer.png"
              alt="Noh performer"
              className="h-48 object-cover opacity-80 sm:h-64 lg:h-96 lg:opacity-100"
            />
            <Image
              src="/oni-mask-performer.png"
              alt="Oni performer"
              className="h-48 object-cover opacity-80 sm:h-64 lg:h-96 lg:opacity-100"
            />
          </div>

          {/* Golden circular frame */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="h-48 w-48 rounded-full border-2 border-yellow-400 opacity-80 sm:h-72 sm:w-72 sm:border-4 lg:h-96 lg:w-96"></div>
              <div className="absolute inset-4 rounded-full border border-yellow-400 opacity-60 sm:inset-8 sm:border-2"></div>
            </div>
          </div>

          {/* Main title */}
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="text-center">
              <h1 className="mb-2 text-3xl leading-tight font-bold text-yellow-400 sm:mb-4 sm:text-4xl lg:text-6xl">
                未来につなぐ
                <br />
                能楽の世界
              </h1>
              <p className="text-sm text-gray-300 sm:text-base lg:text-lg">
                The world of Nohgaku, connecting to the future.
              </p>
            </div>
          </div>
        </div>
        {/* Event info banner */}
        <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 px-4 py-4 sm:px-8 sm:py-6">
          <div className="text-center text-black">
            <div className="mb-2 text-sm leading-relaxed font-semibold sm:text-base lg:text-lg">
              2025年7月13日(日) 1回目 14:30開演／2回目 18:30開演
              <br />
              2025年7月14日(月) 1回目 13:30開演／2回目 19:00開演
            </div>
            <div className="text-base font-bold sm:text-lg lg:text-xl">
              EXPO2025 大阪・関西万博 EXPOホール「シャインハット」
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        {/* Video section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="mb-6 text-center text-xl text-gray-300 sm:mb-8 sm:text-2xl">
            「鬼」が誘う能楽の世界
          </h2>

          <div className="mx-auto max-w-[800px]">
            <div className="relative overflow-hidden rounded-lg bg-black">
              <Image
                src="/oni-mask.png"
                alt="Video thumbnail"
                className="h-48 w-full object-cover sm:h-64 lg:h-96"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  size="lg"
                  className="rounded-full bg-red-600 p-3 hover:bg-red-700 sm:p-4"
                >
                  <Play className="h-6 w-6 sm:h-8 sm:w-8" />
                </Button>
              </div>
              <div className="absolute bottom-2 left-2 text-white sm:bottom-4 sm:left-4">
                <div className="mb-1 text-base font-bold sm:mb-2 sm:text-lg">
                  鬼とは？
                </div>
                <div className="text-xs sm:text-sm">What&apos;s ONI ?</div>
              </div>
            </div>
          </div>
        </section>

        {/* Image gallery section */}
        <section className="mb-12 sm:mb-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-4 sm:gap-8 lg:grid-cols-2">
              <div className="order-1">
                <Image
                  src="/earth-from-space.png"
                  alt="Earth from space"
                  className="h-48 w-full rounded-lg object-cover sm:h-56 lg:h-64"
                />
              </div>
              <div className="order-2">
                <Image
                  src="/circular-white-building.png"
                  alt="EXPO building"
                  className="h-48 w-full rounded-lg object-cover sm:h-56 lg:h-64"
                />
              </div>
            </div>
          </div>

          <div className="mx-auto mt-6 max-w-4xl text-sm leading-relaxed text-gray-300 sm:mt-8 sm:text-base">
            <p className="mb-4">
              舞台は未来都市である大阪・関西万博で開催される、日本の伝統芸能である能楽の世界。
            </p>
            <p className="mb-4">
              能楽は、日本の伝統的な舞台芸術で、ユネスコ無形文化遺産にも登録されている貴重な文化です。その美しさと深い精神性は、現代においても多くの人々を魅了し続けています。
            </p>
            <p>
              今回の公演では、伝統的な能楽の魅力を現代の技術と融合させ、未来へとつなぐ新たな表現をお届けします。
            </p>
          </div>

          <div className="mt-6 flex justify-center sm:mt-8">
            <Image
              src="/japanese-person-black-kimono.png"
              alt="Performer portrait"
              className="h-32 rounded-lg object-cover sm:h-40 lg:h-48"
            />
          </div>
          <div className="mt-3 text-center text-gray-400 sm:mt-4">
            <div className="text-sm font-semibold sm:text-base">
              能楽師　野村萬斎
            </div>
          </div>
        </section>

        {/* Event details section */}
        <section id="event-overview" className="mb-12 sm:mb-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-2xl font-bold text-yellow-400 sm:mb-8 sm:text-3xl">
              開催概要
            </h2>
            <h3 className="mb-6 text-center text-xl text-gray-300 sm:mb-8 sm:text-2xl">
              未来につなぐ、能楽の世界
            </h3>

            <div className="space-y-4 text-sm text-gray-300 sm:space-y-6 sm:text-base">
              <div className="grid grid-cols-1 gap-2 sm:gap-4">
                <div className="font-semibold text-yellow-400">日程</div>
                <div>
                  <div className="mb-2 font-medium">2025年7月13日(日)</div>
                  <div className="mb-3 border-l-2 border-gray-600 pl-2 text-xs text-gray-400 sm:mb-4 sm:pl-4 sm:text-sm">
                    第1回 14:30開演（13:30開場）「子方」
                    <br />
                    第2回 18:30開演（17:30開場）「大人」
                  </div>
                  <div className="mb-2 font-medium">2025年7月14日(月)</div>
                  <div className="border-l-2 border-gray-600 pl-2 text-xs text-gray-400 sm:pl-4 sm:text-sm">
                    第1回 13:30開演（12:30開場）「子方」
                    <br />
                    第2回 19:00開演（18:00開場）「大人」
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2 sm:gap-4">
                <div className="font-semibold text-yellow-400">会場</div>
                <div>
                  公益社団法人能楽協会　能楽堂（東京都渋谷区千駄ヶ谷4-18-1）
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2 sm:gap-4">
                <div className="font-semibold text-yellow-400">主催</div>
                <div>
                  株式会社NHKエンタープライズ、ソニー・ミュージックエンタテインメント
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2 sm:gap-4">
                <div className="font-semibold text-yellow-400">EXPO会場</div>
                <div>
                  EXPO2025 大阪・関西万博 EXPOホール「シャインハット」
                  <br />
                  <div className="mt-2 text-xs text-gray-400 sm:text-sm">
                    Osaka
                    Metro中央線「コスモスクエア駅」徒歩13分（シャトルバス）
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-xs text-gray-400 sm:mt-8 sm:text-sm">
              <p className="mb-2 font-medium">※会場へのアクセスについて</p>
              <ul className="space-y-1 pl-4">
                <li>
                  ・公共交通機関をご利用ください。会場周辺には駐車場がございません。
                </li>
                <li>
                  ・最寄り駅からシャトルバスが運行予定です。詳細は公式サイトをご確認ください。
                </li>
                <li>
                  ・開演時間の変更や中止の場合は、公式サイトおよびSNSでお知らせいたします。
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Ticket section */}
        <section id="ticket-info" className="mb-12 text-center sm:mb-16">
          <h2 className="mb-3 text-2xl font-bold text-yellow-400 sm:mb-4 sm:text-3xl">
            チケット情報
          </h2>
          <h3 className="mb-6 text-lg text-gray-300 sm:mb-8 sm:text-xl">
            入場無料（要予約）
          </h3>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base">
            本公演は入場無料です。ただし、事前のご予約が必要となります。
            <br />
            チケットのご予約は下記のリンクより承っております。お早めにお申し込みください。
          </p>
        </section>

        <section id="sns" className="text-center">
          <h2 className="mb-6 text-2xl font-bold text-yellow-400 sm:mb-8 sm:text-3xl">
            公式SNS
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base">
            最新情報は公式SNSでお知らせいたします。フォローをお願いします。
          </p>
        </section>
      </main>
    </div>
  );
}
