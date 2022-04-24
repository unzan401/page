(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{408:function(t,v,_){"use strict";_.r(v);var e=_(30),r=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"技術分析概論-rsi就是呈現矛盾與共識的利器。"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#技術分析概論-rsi就是呈現矛盾與共識的利器。"}},[t._v("#")]),t._v(" 技術分析概論－RSI就是呈現矛盾與共識的利器。")]),t._v(" "),_("blockquote",[_("p",[t._v("這一系列文章是建立程式交易基礎知識的入門課程，只是簡單的提及理論讓未來進行交易策略編寫時能有初步的概念進行，而不僅僅是淪為瞎猜瞎湊。期望讀者能在理解理論之餘，能結合過去求學時所習得之數學理論。")])]),t._v(" "),_("p",[t._v("前一回我們利用KD指標去判斷價格的趨勢，當K值高昂時，認定是市場上大多數的投資人願意以更高的價格收盤。"),_("br"),t._v(" "),_("a",{attrs:{href:"https://medium.com/%E5%80%8D%E5%88%A9%E9%9B%9E%E7%9A%84%E7%A8%8B%E5%BC%8F%E4%BA%A4%E6%98%93%E4%B8%96%E7%95%8C/%E6%8A%80%E8%A1%93%E5%88%86%E6%9E%90%E6%A6%82%E8%AB%96-%E7%99%BC%E6%98%8Ekd%E7%9A%84%E4%BA%BA%E6%89%80%E4%BD%BF%E7%94%A8%E4%BD%86%E4%BD%A0%E6%89%80%E4%B8%8D%E8%AA%8D%E8%AD%98%E7%9A%84%E6%96%B9%E6%B3%95-e90236f7f6af",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://medium.com/倍利雞的程式交易世界/技術分析概論-發明kd的人所使用但你所不認識的方法-e90236f7f6af"),_("OutboundLink")],1)]),t._v(" "),_("p",[t._v("在更過去我們也談過均線指的是近幾天內大多數投資人的共識，但只考慮均線的話，這段期間多方與空方的拉鋸是無法呈現出來的。")]),t._v(" "),_("blockquote",[_("p",[t._v("想像一下，有兩個即將畢業的班級。")])]),t._v(" "),_("blockquote",[_("p",[t._v("兩個班的同學們為了要跟彼此留下寶貴的回憶，決定要在畢業前去畢業旅行。針對旅行的地點，兩班同學們分別開了一次班會討論班級要去海邊玩水還是山上露營。")])]),t._v(" "),_("blockquote",[_("p",[t._v("在開班會的時候，"),_("br"),t._v("\nA班的同學，討論沒多久就有共識：去海邊，大家都期待可以去海邊玩水。")])]),t._v(" "),_("blockquote",[_("p",[t._v("B班的同學，討論的過程中相當激烈，分成了兩個團體分別闡述了去海邊或山上的優缺點，彼此輪流發言爭取去自己想要的地點。討論到了放學時分，班長不得已讓大家舉手投票，結果是去海邊險勝三票。")])]),t._v(" "),_("blockquote",[_("p",[t._v("結果兩個班不約而同的都是選擇到海邊去玩，但整個歷程是完全不同。")])]),t._v(" "),_("p",[t._v("相信這樣的亙古難題，對各個人來說可能都會有一個屬於自己的答案，包含去海邊、去山上，亦或是哪邊都好。最終班級總算決定了一個目的地，去海邊。")]),t._v(" "),_("p",[t._v("當大家都一致對公司未來感到悲觀的同時，會共同拋售股票，股價自然會滑落，反之股價會上升。但共識不一致時，股價會隨之波動，趨勢也會比較不明確。")]),t._v(" "),_("h4",{attrs:{id:"相對強弱指數-relative-strength-index-rsi"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#相對強弱指數-relative-strength-index-rsi"}},[t._v("#")]),t._v(" 相對強弱指數(Relative Strength Index，"),_("strong",[t._v("RSI)")])]),t._v(" "),_("p",[t._v("威爾斯·威爾德(Welles Wilder)在1978年提出一個取代**傳統動量振動指標(Momentum Oscillators)**的解決方案。")]),t._v(" "),_("blockquote",[_("p",[t._v("傳統動量振動指標的定義如下："),_("br"),t._v("\n動量=今日收盤價-n日前收盤價"),_("br"),t._v("\n其中n常取為5或10。")])]),t._v(" "),_("p",[t._v("威爾斯·威爾德提出三個大家一眼就能看出傳統動量振動指標的問題：")]),t._v(" "),_("p",[t._v("1. 若在前n日間出現高檔，但在今日已經開始下滑，卻無法顯現在動量振動指標上。"),_("br"),t._v("\n(例如：連續六天的價格分別為10 12 13 16 18 12，在第六天的時候大跌，動量振動指標卻依然為+2）")]),t._v(" "),_("p",[t._v("2. 由於動量的定義為收盤價格之差，但不同商品或不同時期有不同的基數，變化量難以相互與類比。"),_("br"),t._v("\n(例如：A股票今日價格100、5日動量為5，和B股票今日價格10、5日動量為5，這兩者的動量卻有截然不同的影響）")]),t._v(" "),_("p",[t._v("3. 必須要處理大量數值的查找與運算。"),_("br"),t._v("\n(例如：如果要處理n日前的收盤價，演算時要不斷向前查找，造成傳統在紙本上演算的困擾）"),_("em",[t._v("（註：這點於現代交由電腦演算，已經完全無需考慮。）")])]),t._v(" "),_("p",[t._v("而這個解決方案就是：相對強弱指數(Relative Strength Index，RSI)。")]),t._v(" "),_("blockquote",[_("p",[t._v("先計算出RS："),_("br"),t._v("\nRS=n日內上漲值移動平均/n日內下跌值移動平均"),_("br"),t._v("\n再算出基礎的RSI："),_("br"),t._v("\nRSI=100-[100/(1+RS)]")])]),t._v(" "),_("blockquote",[_("p",[t._v("下一期的RSI："),_("br"),t._v("\nn日內上漲值指數移動平均=(1/n)*今日上漲值+(1-1/n)*前一期n日內上漲值指數移動平均"),_("br"),t._v("\nn日內下跌值指數移動平均=(1/n)*今日上漲值+(1–1/n)*前一期n日內下跌值指數移動平均"),_("br"),t._v("\nRS=n日內上漲值指數移動平均/n日內上漲值指數移動平均"),_("br"),t._v("\nRSI=100-[100/(1+RS)]")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://cdn-images-1.medium.com/max/800/1*E8tKo_aCneVCdVU7S8do4A.png",alt:""}})]),t._v(" "),_("p",[t._v("其中上漲值的定義是該期上漲時，該期收盤價減去上期收盤價的值，當價格下跌時上漲值定義為0。"),_("br"),t._v("\n反之下跌值的定義是該期下跌時，上期收盤價減去該期收盤價的值，當價格上漲時下跌值定義為0。")]),t._v(" "),_("p",[t._v("當RSI>50時，呈現上漲值總和較高，可以解讀為看漲的人比較多。"),_("br"),t._v("\n反之RSI<50時，呈現下跌值總和較高，可以解讀為看跌的人比較多。")]),t._v(" "),_("p",[t._v("威爾斯·威爾德認為在RSI>70或RSI<30時，代表投資人們對未來價格預期較為一致。反之RSI在30~70之間時，可能為看漲看跌的人充滿矛盾，或是現價已符合投資人內心中的實際價值。")]),t._v(" "),_("p",[t._v("其中當RSI>70時，雖然投資人共識相同，但也有看漲的人過多了、價格上漲超過預期的隱憂，折返的機會將大幅上升。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://cdn-images-1.medium.com/max/800/1*aFSsTsySHaOJhmRk20FFAA.png",alt:""}})]),t._v(" "),_("h4",{attrs:{id:"較為簡單的算法-卡特勒相對強弱指數"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#較為簡單的算法-卡特勒相對強弱指數"}},[t._v("#")]),t._v(" **較為簡單的算法(**卡特勒相對強弱指數)")]),t._v(" "),_("p",[t._v("卡特勒(Culter)改用簡單移動平均法來計算上漲值平均及下跌值平均，兩者差異並不大。")]),t._v(" "),_("blockquote",[_("p",[t._v("RSI=100*n日內上漲值簡單移動平均/(n日內下跌值移動平均+n日內上漲值移動平均)=100*n日內上漲值總和/(n日內下跌值總和+n日內上漲值總和)"),_("br"),t._v("\n下跌日時上漲值為0，反之上漲日時下跌值為0。")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://cdn-images-1.medium.com/max/600/1*ZS_7Pc72JnUeWr9x5NvWQA.png",alt:""}}),t._v(" "),_("img",{attrs:{src:"https://cdn-images-1.medium.com/max/600/1*oQOycxxJmKUFBNRTUQFwyw.png",alt:""}})]),t._v(" "),_("p",[_("img",{attrs:{src:"https://cdn-images-1.medium.com/max/600/1*aX-V4DKksciy3-CbBVdJ4Q.png",alt:""}}),t._v(" "),_("img",{attrs:{src:"https://cdn-images-1.medium.com/max/600/1*hjkn2NrlqwMpAKbntUY2uA.png",alt:""}})]),t._v(" "),_("p",[t._v("從上面的兩種不同商品的走勢圖，雖然都在第12日達到110，但可以從RSI中看出對B商品的未來價格，投資人之間有更多歧見。")]),t._v(" "),_("h4",{attrs:{id:"常用的rsi策略"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常用的rsi策略"}},[t._v("#")]),t._v(" 常用的RSI策略")]),t._v(" "),_("p",[t._v("一般來說將RSI當作逆勢操作的指標。當過高或過低時，可以考慮進場。")]),t._v(" "),_("blockquote",[_("p",[t._v("當RSI>70(80)時，通常表示買超過熱，折返的機會將大幅上升，即將下跌。"),_("br"),t._v("\n當RSI<30(20)時，通常表示賣超過冷，即將上漲。")])]),t._v(" "),_("p",[t._v("此外，也可以和均線策略中的交叉訊號相同，透過快慢周期的不同RSI值之間互相交叉的關係進行買賣。")]),t._v(" "),_("blockquote",[_("p",[t._v("均線黃金交叉：短期均線向上穿過長期均線。"),_("br"),t._v("\n均線死亡交叉：短期均線向下穿過長期均線。")])]),t._v(" "),_("blockquote",[_("p",[t._v("RSI黃金交叉：短期RSI向上穿過長期RSI。"),_("br"),t._v("\nRSI死亡交叉：短期RSI向下穿過長期RSI。")])]),t._v(" "),_("p",[t._v("當短期RSI向上穿過時，可以解讀為市場共識開始趨向買進。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://cdn-images-1.medium.com/max/800/1*Q892oYghp6IRSjfh0Sdf3A.png",alt:""}})]),t._v(" "),_("p",[t._v("威爾斯·威爾德也提出當"),_("strong",[t._v("價格和RSI背離")]),t._v("時，能夠預期未來的走向。")]),t._v(" "),_("p",[_("strong",[t._v("背離")]),t._v("就是價格和RSI走向為反方向，也就是當價格上漲但RSI下跌時或當價格下跌但RSI上漲。")]),t._v(" "),_("p",[t._v("威爾斯·威爾德認為發生價格和RSI背離時，反轉的機率會提高，可以考慮進場布局。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://cdn-images-1.medium.com/max/800/1*aoVguuJIYCAfDqjPmem4ow.png",alt:""}})]),t._v(" "),_("p",[t._v("簡單做RSI黃金交叉進場的策略，在大盤多頭的2019年指數成長23.06%。但總報酬率為差強人意9.59%。比起簡單的均線黃金交叉策略的總報酬率更為差勁。")]),t._v(" "),_("p",[t._v("由於RSI受價格影響波動大，比較適合用來解讀市場是否具有共識。作為進場訊號時，可能和現在價格關係無關，或是只是遇上RSI鈍化的現象。獨立運作時也需要配合其他指標多面向的閱覽價格，避免受到前列所述的缺點影響。")]),t._v(" "),_("h3",{attrs:{id:"reference"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[t._v("#")]),t._v(" Reference:")]),t._v(" "),_("p",[t._v("Welles Wilder "),_("em",[t._v("New Concepts in Technical Trading")]),t._v(" (1978)")]),t._v(" "),_("p",[t._v("維基百科 指數移動平均條目"),_("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E7%A7%BB%E5%8B%95%E5%B9%B3%E5%9D%87",target:"_blank",rel:"noopener noreferrer"}},[_("br"),t._v("\nhttps://zh.wikipedia.org/wiki/%E7%A7%BB%E5%8B%95%E5%B9%B3%E5%9D%87"),_("OutboundLink")],1)]),t._v(" "),_("p",[t._v("維基百科 相對強弱指數條目"),_("br"),t._v(" "),_("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E7%9B%B8%E5%B0%8D%E5%BC%B7%E5%BC%B1%E6%8C%87%E6%95%B8",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://zh.wikipedia.org/wiki/%E9%9A%8F%E6%9C%BA%E6%8C%87%E6%A0%87"),_("OutboundLink")],1)])])}),[],!1,null,null,null);v.default=r.exports}}]);