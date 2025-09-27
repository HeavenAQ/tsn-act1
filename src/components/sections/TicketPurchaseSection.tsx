export default function TicketPurchaseSection() {
  return (
    <div className="mt-8 rounded-lg border border-gray-600/30 bg-gradient-to-br from-gray-900/60 to-gray-800/60 p-6">
      <h3 className="mb-6 text-left text-xl font-bold text-yellow-400">
        【チケット購入方法】
      </h3>

      {/* Office ticket sales */}
      <div className="mb-6">
        <h4 className="mb-3 flex items-center gap-2 text-lg font-bold text-yellow-400">
          <div className="text-lg">⭕️</div>
          事務局販売チケット
        </h4>

        <div className="mb-4 text-left text-sm text-gray-300">
          <p className="mb-2">
            <a
              href="mailto:info@twtsn.co.jp"
              className="text-blue-400 underline hover:text-blue-300"
            >
              info@twtsn.co.jp
            </a>
            へメールしてください。
          </p>
        </div>

        {/* Required information */}
        <div className="mb-4">
          <h5 className="mb-3 flex items-center gap-2 text-lg font-bold text-yellow-400">
            <div className="h-2 w-2 rounded-full bg-yellow-400" />
            〈必須ご記入項目〉
          </h5>
          <div className="grid gap-3 text-left text-sm text-gray-300">
            <div className="flex items-start gap-2">
              <span className="text-yellow-400">○</span>
              <div>お名前</div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-yellow-400">○</span>
              <div>お電話番号</div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-yellow-400">○</span>
              <div>ご希望の席種（SS席・S席・A席）</div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-yellow-400">○</span>
              <div>枚数</div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-yellow-400">○</span>
              <div>チケット送付先ご住所</div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-yellow-400">○</span>
              <div>お振込み予定日</div>
            </div>
          </div>
        </div>

        {/* Important notices */}
        <div className="mb-6 rounded-lg border border-yellow-400/30 bg-yellow-400/10 p-3">
          <div className="flex items-start gap-3">
            <div className="text-left">
              <div className="mb-2 font-semibold text-yellow-400">
                重要なお知らせ
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <div>
                    お振込み確認をもって正式にご予約完了となります。その後ご自宅へチケットを郵送いたします
                    <span className="text-lg ml-1">📮</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <div>
                    料金は事前の振り込みをお願いいたします
                    <span className="text-lg ml-1">💳</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bank transfer information */}
      <div className="mb-6">
        <h4 className="mb-3 flex items-center gap-2 text-lg font-bold text-yellow-400">
          <div className="h-2 w-2 rounded-full bg-yellow-400" />
          〈振込先情報〉
        </h4>
        <div className="grid gap-3 text-left text-sm text-gray-300">
          <div className="flex items-start gap-2">
            <span className="text-yellow-400 mt-1">•</span>
            <div>
              <span className="font-medium text-yellow-400">銀行名：</span>
              泉州池田銀行
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-yellow-400 mt-1">•</span>
            <div>
              <span className="font-medium text-yellow-400">支店名：</span>
              鳳支店
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-yellow-400 mt-1">•</span>
            <div>
              <span className="font-medium text-yellow-400">口座番号：</span>
              <span className="font-mono text-white">普通 3113368</span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-yellow-400 mt-1">•</span>
            <div>
              <span className="font-medium text-yellow-400">口座名義：</span>
              カ）テイエスエヌ
            </div>
          </div>
        </div>
      </div>

      {/* Lawson Ticket */}
      <div className="mb-6">
        <h4 className="mb-3 flex items-center gap-2 text-lg font-bold text-yellow-400">
          <div className="text-lg">⭕️</div>
          ローソンチケット
        </h4>
        <div className="grid gap-3 text-left text-sm text-gray-300">
          <div className="flex items-start gap-2">
            <span className="text-yellow-400 mt-1">•</span>
            <div>
              Webで簡単購入：
              <a
                href="https://l-tike.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 text-blue-400 underline hover:text-blue-300"
              >
                https://l-tike.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-yellow-400 mt-1">•</span>
            <div>
              Lコード：<span className="font-mono text-white">53805</span>
            </div>
          </div>
        </div>
      </div>

      {/* Payment information */}
      <div className="mb-6">
        <h4 className="mb-3 flex items-center gap-2 text-lg font-bold text-yellow-400">
          <div className="h-2 w-2 rounded-full bg-yellow-400" />
          〈お支払いについて〉
        </h4>
        <p className="text-left text-sm text-gray-300">
          WEB購入はクレジット決済、ローソンでの購入はその場で現金となります。
        </p>
      </div>

      <hr className="my-8 h-[2px] rounded-full border-0 bg-gradient-to-r from-zinc-400 via-zinc-500 to-zinc-400 shadow-lg" />

      {/* Contact information */}
      <div>
        <h4 className="mb-3 flex items-center gap-2 text-lg font-bold text-yellow-400">
          <div className="text-lg">⭐</div>
          チケット購入・お問い合わせ
        </h4>
        <div className="text-left text-sm text-gray-300">
          <div className="mb-2 font-medium text-yellow-400">株式会社tsn</div>
          <div className="grid gap-2">
            <div>
              電話：
              <a href="tel:0722849617" className="ml-1 hover:underline">
                072-284-9617
              </a>
            </div>
            <div>
              メール：
              <a
                href="mailto:info@twtsn.co.jp"
                className="ml-1 text-blue-400 underline hover:text-blue-300"
              >
                info@twtsn.co.jp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
