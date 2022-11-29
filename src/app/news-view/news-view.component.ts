import { Component } from '@angular/core';

@Component({
  selector: 'app-news-view',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.css']
})
export class NewsViewComponent {

  newsData:any = {"status":"ok","totalResults":38,"articles":[{"source":{"id":null,"name":"The Indian Express"},"author":"Sports Desk","title":"Brazil vs Switzerland FIFA World Cup 2022 Live Updates: BRA 0-0 SUI after 35 mins at Stadium 974 - The Indian Express","description":"Brazil vs Switzerland Group G Live Score Updates: BRA vs SWI at Stadium 974.","url":"https://indianexpress.com/article/sports/football/fifa-world-cup-2022-live-updates-cameroon-vs-serbia-south-korea-vs-ghana-brazil-vs-switzerland-portugal-vs-uruguay-8294026/","urlToImage":"https://images.indianexpress.com/2022/11/BRA-vs-SWI-Live.jpg","publishedAt":"2022-11-28T16:33:45Z","content":"Uruguay's Federico Valverde celebrates scoring a goal\r\nPortugal vs Uruguay: Fede Valverde is an embodiment of the spirit of Garra Chharua\r\nValverde is an embodiment of the unique Uruguayan spirit of … [+1629 chars]"},{"source":{"id":null,"name":"The Indian Express"},"author":"Express Web Desk","title":"China Covid Protests Live Updates: UK tells Chinese government to take notice of lockdown protests; China defends zero-Covid policy in the face of massive protests - The Indian Express","description":"China Covid Protests Live Updates: China's foreign ministry responded saying that the reporter had not identified himself as a journalist.","url":"https://indianexpress.com/article/world/china-covid-protests-live-updates-8293638/","urlToImage":"https://images.indianexpress.com/2022/11/China-security.jpg","publishedAt":"2022-11-28T15:52:43Z","content":"China posted another record high COVID-19 infections on Monday, after an extraordinary weekend of protests across the country over restrictive coronavirus curbs, in scenes unprecedented since Preside… [+1495 chars]"},{"source":{"id":null,"name":"The Indian Express"},"author":"Express News Service","title":"Manipal assistant professor debarred after calling student 'Kasab'; video viral - The Indian Express","description":"The engineering student later said the assistant professor had apologised and that ‘we, as a student community, must let it go as a genuine mistake’.","url":"https://indianexpress.com/article/cities/bangalore/video-karnataka-students-outburst-asst-prof-kasab-probe-8294502/","urlToImage":"https://images.indianexpress.com/2022/11/video-1.jpg","publishedAt":"2022-11-28T15:31:52Z","content":"A video of an angry exchange between an engineering student and an assistant professor of Manipal Institute of Technology who allegedly addressed him by the name of a terrorist has gone viral on soci… [+2841 chars]"},{"source":{"id":null,"name":"Hindustan Times"},"author":"HT Tech","title":"New iPhone features that you simply must try-Magical photo trick, notifications, more - HT Tech","description":"You should try these new iPhone features for a much richer, and fun, experience.","url":"https://tech.hindustantimes.com/how-to/new-iphone-features-that-you-simply-must-try-magical-photo-trick-notifications-more-71669646615930.html","urlToImage":"https://images.hindustantimes.com/tech/img/2022/11/28/1600x900/neil-soni-6wdRuK7bVTE-unsplash_1669646888773_1669646921064_1669646921064.jpg","publishedAt":"2022-11-28T14:51:33Z","content":"The iPhone is a hidden well of secret features. Literally! Chances are that you may have been introduced to some common features of the iPhone, but the truth is that there are a number of secret tric… [+2233 chars]"},{"source":{"id":null,"name":"Livemint"},"author":"Meghna Sen","title":"Sensex may hit 80,000 by Dec 2023, says Morgan Stanley. But there's a catch | Mint - Mint","description":"India might have to wait until early next year to see its bonds enter the JPMorgan emerging market global index","url":"https://www.livemint.com/market/stock-market-news/sensex-may-hit-80-000-by-dec-2023-but-there-s-a-catch-11669643934903.html","urlToImage":"https://images.livemint.com/img/2022/11/28/600x338/sensex_1669646387530_1669646387758_1669646387758.jpg","publishedAt":"2022-11-28T14:40:37Z","content":"BSE Sensex is expected to hit 80,000 by December 2023 if India is included in the global bond indexes and prices of commodities including oil and fertilisers correct sharply and earnings growth compo… [+3300 chars]"},{"source":{"id":null,"name":"NDTV News"},"author":"NDTV Sports Desk","title":"South Korea vs Ghana, FIFA WC Live: Ghana Take Lead Through Kudus; Make It 3-2 vs South Korea - NDTV Sports","description":"FIFA World Cup 2022, South Korea vs Ghana Live: South Korea pulled themselves level 2-2 with two quick second-half strikes after Ghana went into the break with a 2-0 lead.","url":"https://sports.ndtv.com/fifa-world-cup-2022/fifa-world-cup-2022-south-korea-vs-ghana-football-live-score-updates-3559328","urlToImage":"https://c.ndtvimg.com/2022-11/v95voapo_kudus-afp_625x300_28_November_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675","publishedAt":"2022-11-28T14:32:54Z","content":"South Korea vs Ghana, FIFA World Cup 2022 Live Updates: Mohamamd Kudus struck for the second time to help Ghana re-establish their lead with a second-half strike, making it 3-2 against South Korea. E… [+679 chars]"},{"source":{"id":null,"name":"Hindustan Times"},"author":"Amit Bathla","title":"Former Russian minister caught with satellite phone at Dehradun airport: Police - Hindustan Times","description":"According to officials, the use of satellite phones other than BSNL-provided Inmarsat Satellite handset (ISAT Phone) in India is unlawful","url":"https://www.hindustantimes.com/cities/dehradun-news/former-russian-minister-caught-with-satellite-phone-at-dehradun-airport-police-101669645944694.html","urlToImage":"https://images.hindustantimes.com/img/2022/11/28/1600x900/320665bc-6f29-11ed-bd01-73668e446825_1669645943405.jpg","publishedAt":"2022-11-28T14:32:24Z","content":"A former Russian minister was on Sunday caught with a prohibited satellite phone during a security check at the Jolly Grant Airport in Uttarakhands Dehradun. \r\nVictor Semenov (64), who was the minist… [+2010 chars]"},{"source":{"id":null,"name":"NDTV News"},"author":null,"title":"On Camera, Men With Swords Attack Police Van Carrying Aaftab Poonawala - NDTV","description":"Police van carrying Aaftab Poonawala, accused of killing girlfriend, attacked in Delhi","url":"https://www.ndtv.com/india-news/police-van-carrying-aaftab-poonawala-accused-of-killing-girlfriend-attacked-in-delhi-3560411","urlToImage":"https://c.ndtvimg.com/2022-11/rb24b0c8_attack-on-aaftab-poonawala_650x400_28_November_22.jpg","publishedAt":"2022-11-28T14:29:00Z","content":"New Delhi: A police van carrying Aaftab Amin Poonawala -- accused of the horrific murder of girlfriend Shraddha Walkar in Delhi -- was attacked by a group of sword-wielding men this evening. The poli… [+1690 chars]"},{"source":{"id":null,"name":"NDTV News"},"author":null,"title":"World's Largest Volcano In Hawaii Erupts For 1st Time In 40 Years - NDTV","description":"Hawaii's Mauna Loa, the largest active volcano in the world, has erupted for the first time in nearly 40 years, US authorities said, as emergency crews went on alert early Monday.","url":"https://www.ndtv.com/world-news/worlds-largest-volcano-in-hawaii-erupts-alert-level-raised-3559989","urlToImage":"https://c.ndtvimg.com/2022-11/32mr4vb_hawaii-volcano_625x300_28_November_22.jpg","publishedAt":"2022-11-28T14:02:00Z","content":"Hawaii authorities said no evacuation orders have been given.\r\nLos Angeles: Hawaii's Mauna Loa, the largest active volcano in the world, has erupted for the first time in nearly 40 years, US authorit… [+2124 chars]"},{"source":{"id":null,"name":"Cricbuzz"},"author":null,"title":"Gaikwad special powers Maharashtra into Vijay Hazare semis | Cricbuzz.com - Cricbuzz - Cricbuzz","description":"Karnataka, Saurashtra and Assam won their respective quarterfinal games","url":"https://www.cricbuzz.com/cricket-news/124639/gaikwad-special-powers-maharashtra-into-vijay-hazare-semis","urlToImage":"http://www.cricbuzz.com/a/img/v1/600x400/i1/c249027/file-photo-ruturaj-gaikwad.jpg","publishedAt":"2022-11-28T13:27:43Z","content":"[File photo]: Ruturaj Gaikwad scored seven sixes in an over during his career-best 220* off 119 © BCCI/IPL\r\nPunjab vs Karnataka, Ahmedabad\r\nAbhishek Sharma's 109 and Sanvir Singh's all-round efforts … [+4558 chars]"},{"source":{"id":null,"name":"YouTube"},"author":null,"title":"Indian authorities step up vaccination efforts as Mumbai sees surge in measles cases - CNA","description":"India's financial capital Mumbai is experiencing a surge in measles cases. Outbreaks in the wider state of Maharashtra have affected almost 7,000 children, a...","url":"https://www.youtube.com/watch?v=LryMc8ogxUY","urlToImage":"https://i.ytimg.com/vi/LryMc8ogxUY/maxresdefault.jpg","publishedAt":"2022-11-28T13:15:20Z","content":null},{"source":{"id":"the-times-of-india","name":"The Times of India"},"author":"Bloomberg","title":"A third of Adani’s NDTV offer subscribed despite steep discount - Economic Times","description":"The category of corporate investors have tendered the most at 3.9 million shares while retail investors have offered to sell a little over 706,000 shares to the ports-to-power conglomerate with qualified Institutional buyers making up the rest","url":"https://economictimes.indiatimes.com/markets/stocks/news/a-third-of-adanis-ndtv-offer-subscribed-despite-steep-discount/articleshow/95832153.cms","urlToImage":"https://img.etimg.com/thumb/msid-95832244,width-1070,height-580,imgsize-31020,overlay-etmarkets/photo.jpg","publishedAt":"2022-11-28T13:11:00Z","content":"Adani Group has already found investors willing to sell 5.3 million shares of the Indian broadcaster -- or roughly a third of the entire open offer size -- despite the deep discount to the stocks cur… [+1902 chars]"},{"source":{"id":null,"name":"The Indian Express"},"author":"Science Desk","title":"Researchers investigate the secret to Octopus intelligence | Technology News - The Indian Express","description":"Octopuses are remarkably intelligent animals, especially considering the fact that most other invertebrates have little more than rudimentary nervous systems. Now, scientists are working to uncover what caused them to develop such complex nervous systems.","url":"https://indianexpress.com/article/technology/science/octopus-intelligence-microrna-nervous-system-8294654/","urlToImage":"https://images.indianexpress.com/2022/11/Octopus-intelligence-20221128.jpg","publishedAt":"2022-11-28T12:53:35Z","content":"Many cephalopods like octopus, cuttlefish and squid are remarkably intelligent, especially considering the fact that they are all invertebrates. Now, a team of scientists have worked to uncover how t… [+3820 chars]"},{"source":{"id":null,"name":"Hindustan Times"},"author":"ANI","title":"Red Planet Day 2022: Mind-blowing facts about Mars - HT Tech","description":"Named after the Roman God of War, Mars, which even though it has a thin atmosphere composed primarily of carbon dioxide, still holds humanity's fascination centuries after its discovery.","url":"https://tech.hindustantimes.com/tech/news/red-planet-day-2022-mind-blowing-facts-about-mars-71669624565068.html","urlToImage":"https://images.hindustantimes.com/tech/img/2022/11/28/1600x900/Untitled_design_-_2022-11-28T160157855_1669631605264_1669631605384_1669631605384.png","publishedAt":"2022-11-28T12:25:15Z","content":"Mars, also known as the Red Planet due to its soil's colour, is the fourth planet from the Sun and Earth's neighbour which holds the potential to possibly host the humankind some day.\r\nThe humans hav… [+2435 chars]"},{"source":{"id":null,"name":"Livelaw.in"},"author":"Sohini Chowdhury","title":"'Can High Court Become Town Planner?\" : Supreme Court Stays AP HC Direction To Develop Amaravati Capital... - Live Law - Indian Legal News","description":"In the plea pertaining to the  Andhra-Pradesh Three Capitals row, the Supreme Court, on Monday, stays certain  time-bound directions passed by the Andhra Pradesh High Court, including the  one...","url":"https://www.livelaw.in/top-stories/supreme-court-andhra-pradesh-amaravati-capital-three-capital-city-215258","urlToImage":"https://www.livelaw.in/h-upload/2021/07/14/396634-whatsapp-image-2021-07-14-at-40835-pm.jpeg","publishedAt":"2022-11-28T11:23:16Z","content":"In the plea pertaining to the Andhra-Pradesh Three Capitals row, the Supreme Court, on Monday, stays certain time-bound directions passed by the Andhra Pradesh High Court, including the one directing… [+16278 chars]"},{"source":{"id":null,"name":"Deccan Herald"},"author":null,"title":"ACV Burn Keto Gummies Canada | ACV Keto Gummies CA Shark Tank | Keto Blast Gummies Fake Exposed & Legitimate Review? - Deccan Herald","description":"The ACV Burn Keto Gummies work using the ketosis principle and are distinctive in that it aids in losing weight fast while at the same time it is not detrimental to your health.  Are you also a fan of attention but don't get it due to your size? Are you also …","url":"https://www.deccanherald.com/brandspot/pr-spot/acv-burn-keto-gummies-canada-acv-keto-gummies-ca-shark-tank-keto-blast-gummies-fake-exposed-legitimate-review-1166435.html","urlToImage":"https://www.deccanherald.com/sites/dh/files/vhncvb-1166435-1669634461.jpg","publishedAt":"2022-11-28T11:21:01Z","content":"The ACV Burn Keto Gummies work using the ketosis principle and are distinctive in that it aids in losing weight fast while at the same time it is not detrimental to your health.  Are you also a fan o… [+9927 chars]"},{"source":{"id":null,"name":"Business Standard"},"author":"BS Web Team","title":"WhatsApp announces Message Yourself feature: What is it and how it works - Business Standard","description":"The Message Yourself feature is a 11 chat window on WhatsApp for the user to transferring media documents contacts and more to self","url":"https://www.business-standard.com/article/technology/whatsapp-announces-message-yourself-feature-what-is-it-and-how-it-works-122112800670_1.html","urlToImage":"https://bsmedia.business-standard.com/_media/bs/img/article/2021-01/14/full/1610620831-7911.jpg","publishedAt":"2022-11-28T11:03:00Z","content":"Meta-owned instant messaging platform WhatsApp on Monday announced the roll out of the 'Message Yourself' feature. It is a 1:1 chat with yourself to send notes, reminders, and updates as needed, anno… [+1488 chars]"},{"source":{"id":null,"name":"Zee Business"},"author":"ZeeBiz WebTeam","title":"Stock Market HIGHLIGHTS: All time high closing for Nifty, Sensex; BPCL, Hero MotoCorp end among top - Zee Business","description":"Stock Market HIGHLIGHTS: Out of the 15 Nifty sectoral indices, six ended in the red against 9 gaine","url":"https://www.zeebiz.com/market-news/live-updates-stock-market-today-sensex-nifty-paytm-anil-singhvi-strategy-china-covid-19-zomato-hero-motocorp-dow-jones-nikkei-brent-dharmaj-crop-ipo-209834","urlToImage":"https://cdn.zeebiz.com/sites/default/files/2022/11/28/212937-m1.jpg","publishedAt":"2022-11-28T11:02:06Z","content":"Stock Market HIGHLIGHTS: Unfazed by the losses witnessed by their Asia peers, Indian frontline indices continued their winning streak on Monday. Nifty50 scaled a new lifetime high of 18,614.25, bette… [+2845 chars]"},{"source":{"id":null,"name":"Medical Dialogues"},"author":"Kajal Rajput","title":"ICMR issues guidelines against use of antibiotics for low-grade fever - Medical Dialogues","description":"\"A clinical diagnosis most often helps us predict causative pathogens fitting into a clinical syndrome which would tailor the correct antibiotic rather than blindly relying on fever, procalcitonin...","url":"https://medicaldialogues.in/news/health/icmr-issues-guidelines-for-prescribing-antibiotics-103060","urlToImage":"https://medicaldialogues.in/h-upload/2022/11/28/192141-icmr-6.jpg","publishedAt":"2022-11-28T10:30:06Z","content":"New Delhi: The apex research regulator the Indian Council of Medical Research (ICMR) has issued guidelines warning against the use of antibiotics for conditions such as low-grade fever and viral bron… [+4355 chars]"},{"source":{"id":null,"name":"Livelaw.in"},"author":"LIVELAW NEWS NETWORK","title":"Centre Disrupts Judges' Seniority By Splitting Up Collegium Resolutions: Supreme Court - Live Law - Indian Legal News","description":"The Supreme Court today criticized the practice of Centre splitting up the Collegium Resolutions by approving some names from the recommendation and withholding other names. While hearing a...","url":"https://www.livelaw.in/top-stories/collegium-resolutions-supreme-court-centre-disrupts-judges-seniority-by-splitting-215250","urlToImage":"https://www.livelaw.in/h-upload/2022/09/20/435920-justice-sk-kaul-and-sc.jpg","publishedAt":"2022-11-28T10:27:26Z","content":"The Supreme Court today criticized the practice of Centre splitting up the Collegium Resolutions by approving some names from the recommendation and withholding other names. \r\nWhile hearing a petitio… [+2500 chars]"}]}
  
}
