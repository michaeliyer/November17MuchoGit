// ============ INDIVIDUAL CONTENT CONTROL FUNCTIONALITY ============

// Store original HTML content (sonnets) and JavaScript content (stories)
const originalContent = {};
const javascriptContent = {};

// List of all day element IDs
const dayIds = [
  "dayOne",
  "dayTwo",
  "dayThree",
  "dayFour",
  "dayFive",
  "daySix",
  "daySeven",
  "dayEight",
  "dayNine",
  "dayTen",
  "dayEleven",
  "dayTwelve",
  "dayThirteen",
  "dayFourteen",
  "dayFifteen",
  "daySixteen",
  "daySeventeen",
  "daySeventeenSeptember2025",
];

// Store original sonnets IMMEDIATELY before they get overwritten
dayIds.forEach((dayId) => {
  const element = document.getElementById(dayId);
  if (element) {
    originalContent[dayId] = element.innerHTML;
  }
});

// Individual control functions
function showStory(dayId) {
  const element = document.getElementById(dayId);
  if (element && javascriptContent[dayId]) {
    element.innerText = javascriptContent[dayId];
    element.style.color = "white";
  }
}

function hideStory(dayId) {
  const element = document.getElementById(dayId);
  if (element) {
    element.style.color = "black";
  }
}

function showSonnet(dayId) {
  const element = document.getElementById(dayId);
  if (element && originalContent[dayId]) {
    element.innerHTML = originalContent[dayId];
    element.style.color = "white";
  }
}

function hideSonnet(dayId) {
  const element = document.getElementById(dayId);
  if (element) {
    element.style.color = "black";
  }
}

// ------------November1----------------

const november1ManOne =
  "Vander always had a thing for payback, aka revenge. He often found himself staring at walls in a contemplative state. Life has not treated him well, and it's because of a compiled list of offenders";
const november1ManTwo =
  "He would return with stories, but they were not always happy tales in which little people overcome big hurdles. They were frightening at times";
const november1ManThree =
  "He got lost in patterns and while wandering around he would forget that he was only in a meditative state. What was worrisome was that if he forgot he was in that state, well, he may get stuck staring at that fucking wall forever";
const november1ManFour =
  "The one person who Vander is a burden on actually wants that";
const november1ManFive =
  "She doesn’t trust him to make his own decisions in life so she hounds him incessantly and criticizes his choices, but she offers him a lot of advice that Vander does take to heart, and she even will slide him large denomination bills from time to time";
const november1ManSix =
  "You work late hours with a crew who likes to score a little white here and there, and you tend to be the guy who wants to go, go, go, as Vander does, well, you’re going to end up habitual. And it won’t take long";
const november1ManSeven =
  "You claim to love me more than the others. Why the fuck do I have to beg every time I need a little cash. This isn’t a get rich quick scheme, dammit! It’s a sure thing, and that money is mine";
const november1ManEight =
  "There was more than one misread here on the part of a once decent Vander. He was a good baby and everyone always loved him, calling him cuter than all the others combined, until the age of 13";
const november1ManNine =
  "Very little, and once you're sitting on the coke, what the hell is to stop you from doing lines till it’s gone. Nothing at all. That’s why you fucking got it, right";
const november1ManTen = "- 1 –      (11/1/24)";

let manOfNovember1 =
  () => `${november1ManOne}. Besides using the wall as a being capable of listening and empathizing, he found the patterns in the wood mesmerizing and he was able to get lost in these patterns and not return to normal consciousness sometimes for hours. ${november1ManTwo}.

${november1ManThree}. That was not Vander’s idea of a good time. That was what you wish on your enemies, ie. to go mad. He’s here, He’s feeling ok about his life. He feels like it’s kind of stupid and a waste most of the time, but he’s not a huge burden for the most part, at least not on most people. ${november1ManFour}.

${november1ManFive}. It’s nice to be a favorite grandchild, even if she does disrespect his girlfriend. But the money makes it all go away. How? Hard drugs. It had really become a problem lately. ${november1ManSix}.

"${november1ManSeven}!" 

${november1ManEight}. It was like the day he became a teenager, Satan took his soul. It’s usually a gradual change – not for Vander.  One night he was doing a Disney puzzle with his mommy and daddy, the next morning, they’re getting calls from the market to come pick up their little klepto shit son before they have the cops come get him. Vander was lonely, and he really like to do things. And if he couldn’t find things to do, he’d make things to do, and what think is easier to make than a little coke deal? ${november1ManNine}?  ${november1ManTen}.`;
let dayOne = manOfNovember1(november1ManOne);
console.log(dayOne);
document.getElementById("dayOne").innerText = dayOne;

// ------------November2----------------

const november2ManOne =
  "Vander BoChamp comes from good, decent, hardworking, attractive parents. Farming usually does not bring wealth to a family, unless they become one of the biggest names in dairy";
const november2ManTwo =
  "He finds everything to be needy and the sounds they make, irritating. He does enjoy eating meat, however, especially expensive cuts such as tenderloin, and ribeye";
const november2ManThree =
  "When he dines with friends, he’ll always comment that someone’s meat looks better than his. Even out at a restaurant he can’t shut up about it, and Jesus, many people have stopped wanting to go out with him because he’s an embarrassment to share a table with";
const november2ManFour =
  "Yo Vandrow, are you going for the Kobe Tenderloin topped with the King Crab? I was thinking of that myself but I really only want the 1/2 the steak";
const november2ManFive =
  "I say, suck my dick, Philbo. If you want Blowfish, order Blowfish. Candied Sea Urchin is special";
const november2ManSix =
  "That is Vander in a nutshell. It doesn’t even occur to him that he, through the power of a choice, could make a guy really fucking happy. Instead, he has to roll in with an insult. When the server gets around to Philbo, he orders both the Kobe and the Blowfish";
const november2ManSeven =
  "Oh fuck, Vandroid, sorry. I’m on my last few bites. Do you want a bite of my salad";
const november2ManEight =
  "Come on, man! You let everyone try it. Why are you being a Jew bastard";
const november2ManNine =
  "Philbo, who happens to be Jewish, knows Vander enough to take comments like that with a grain of salt. If he does cross the line, Philbo will give ample warning. If it goes too far, however, he can get mean; if he gets mean, Vander gets his ass beaten";
const november2ManTen = " * 2 *  (11/2/24)";

let manOfNovember2 =
  () => `${november2ManOne}. You don’t say the words “lactose-free milk” without thinking the name “BoChamp” and you don’t study the stock market without doing intense research on the ticker symbol, BOCHA. Vander, despite growing up on a farm, has never been a fan of the livestock. ${november2ManTwo}.

${november2ManThree}. Generally speaking, it’s fair to say that he’s not the most popular guy in the group he runs around with. The rest of the group finds him to be a selfish, narcissistic, and aggressive asshole, and they only hang around with him because he’s swimming in cash and he can get them into places they’d never be able to even get near.  

"${november2ManFour}. If I were to get the Blowfish a là Candied Sea Urchin, would you ever in a million years, surprise everyone at this table and do a 50/50 deal with me? I’ve heard the Blowfish kind of fucks you up, makes you pleasant. What do you say, old pally boy?"

"${november2ManFive}. If you want the best steak in the world with the freshest most delicious King Crab on this planet, prepared by one of the most talented chefs in the region, get that. I don’t share, bro. You’re a real piece of work." 

${november2ManSix}. This surprises Vander. Who orders 2 entrees? And when the food arrives Philbo wants everyone to try the Blowfish, since it is very rare. They may never get another chance, he explains. It is sublime, everyone agrees, and it does bring on good feelings, goddammit, and Vander, not realizing how rare Blowfish is, suddenly wants to see what all the excitement is about.

"${november2ManSeven}?" 

"${november2ManEight}?"   

${november2ManNine}.  ${november2ManTen}.`;

let dayTwo = manOfNovember2(november2ManOne);
console.log(dayTwo);
document.getElementById("dayTwo").innerText = dayTwo;

// ------------November3----------------

const november3ManOne =
  "As much as an anecdote such as this is not flattering to a Vander, a narcissist, he probably wouldn’t bristle to read those words. He has his convictions, like everybody, and for him to change his mind about anything is rare";
const november3ManTwo =
  "Some people are Blowfish guys. Vander is not one of them. He’d also read that, yeah, Philbo can act like a total Jew fuck. That’s not on him";
const november3ManThree =
  "Vander himself, a purebred, white piece of American cheese is not racist but he knows that each culture has its own characteristics";
const november3ManFour =
  "Oh yeah, Philbo is a hypochondriac, as if that would surprise anyone. We’re talking about Philbo, Mr. Philbo “I got 5 Vaccinations Last Week” Goldling here";
const november3ManFive =
  "Philbo, in fairness, is not a bad American, but he’s not a Vander. A good patriot does not equal a not bad American, it should be noted. Vander is a great patriot despite being a great American";
const november3ManSix =
  "Vander does genuinely know what’s best. He is not political, however, so he’ll never be the needed agent of change. That policy shit is a waste of time anyway";
const november3ManSeven =
  "The important thing is don’t think about coming for a job at the dairy if your papers aren't clean. They don’t pay under the table, unless it benefits himself or a friend";
const november3ManEight =
  "Take, for example, his assault charge, which was ultimately dropped after he was assaulted days later by the original victim";
const november3ManNine =
  "That guy, one of the Haven sons, likes to bully homosexuals and that does not sit well with Vander. He may even suck a dick himself here or there. Who cares what he puts in his mouth? If he wants to inhale cock, shouldn’t that be between Vander and the cock he’s lining up";
const november3ManTen = "* 3 *  (11/3/24)";

let manOfNovember3 =
  () => `${november3ManOne}. He is resigned to his beliefs that someone is always trying to take something from him, or his family. Therefore he’d read them as, you want Blowfish, get Blowfish, just don’t put it on me. Vander is a surf and turf guy. ${november3ManTwo}.

${november3ManThree}. Sound Americans like Vander have the characteristics which keep the country moving forward and safe. Guys like Philbo complain all the time and are never satisfied. It’s a lot to take. ${november3ManFour}. 

${november3ManFive}. Great Americans tend to be problematic for societal harmony. They always say they know what’s best for everyone but it’s always their own personal wish list. ${november3ManSix}. 

${november3ManSeven}. Not that he’d ever really stick his neck out for anyone. He wasn’t born yesterday. Qualities may not be dripping off Vander BoChamp but it should be noted that Vander will protect his friends at all costs. ${november3ManEight}.  

${november3ManNine}? How does he handle it when assholes try and weigh in on these subjects? He beats their asses down. One thing Vander will not tolerate is bullying. He’s a wise ass at times, and you’d often like to knock him into Timbuktu, but if you need a strong friend who’ll always have your back, call on Vander. As spoiled brats who also happen to be cheap narcissists go, Vander is right there among the assholes you’d want to befriend. He does deserve a little credit for that. ${november3ManTen}.`;

let dayThree = manOfNovember3(november3ManOne);
console.log(dayThree);
document.getElementById("dayThree").innerText = dayThree;

// ------------November4----------------

const november4ManOne =
  "The Vander BoChamp’s of the world are an interesting group. They like living to please themselves. Their self-indulgence goes against the general principle of successful parenting";
const november4ManTwo =
  "Because the bar may be across town, the dad, although a narcissist who believes not only that he’s above the law, has enough sensibility to stay off the road and avoid adding a drunk driving charge to the long list of reasons Vander should not have children";
const november4ManThree =
  "The mommy has all the goods to keep the kid quiet and nourished, but does she have the patience to do it alone, knowing that her parenting partner doesn’t do shit";
const november4ManFour =
  "You know, I don’t think I want to do this after all. It’s not what I expected. Thoughts";
const november4ManFive =
  "The mom, an unselfish person, would rather not be the sole responsible parent, but if it requires it – ahh! you do what you have to do in order for the kid to not end up in the gutter as a goddamn mess";
const november4ManSix =
  "There are times that she may even want to punish the kid in order to punish the dad. That’s because the asshole has it coming";
const november4ManSeven =
  "This is not what she, the mom – we’ll refer to her as Jill – wants. This is not at all what Jill was hoping for when she got mixed up with Vander";
const november4ManEight =
  "A 15 year old girl, slightly advanced physically, build like an 18 year old, and quick-witted, meeting a 25 year old guy  who’s hanging out with his good buddy at the convenience store parking lot where all cool people like to hang out and smoke cigarettes, is an unusual sight. It’s an awkward moment, in fact";
const november4ManNine =
  "Jill is with her two girlfriends, both who look their age, and they’re waiting for Jill’s dad to pick them up and give them rides home, and in rolls Vander. He gets gas for his shitty old sedan, then parks, and lights up his smoke while his bro goes inside to take a leak";
const november4ManTen = "* 4 * (11/4/24)";

let manOfNovember4 =
  () => `${november4ManOne}; name a parent who can successfully raise children completely on their own terms. The kid, an infant, needs to drink the mommy’s milk in order to survive, and the dad – we’ll use a hypothetical name of Longwood – would rather get totally twisted in a bar than parent the kid. ${november4ManTwo}.

${november4ManThree}? She can do it, but does she want to? It isn’t fair to start the parenting effort under the impression that you’re going to go 50/50 on the job, and then on a dime, ½ the unit decides, "${november4ManFour}?" 

${november4ManFive}. She, the mom, is going to end up pissed the fuck off but she’s not going to make the little brat suffer. It’s not even that the kid is a brat, but when you get a little screaming being grating your nerves down night after night while you try and figure out ways to call it quits on the asshole dad, she can’t lie, the kid loses a little of the cuteness. ${november4ManSix}. 

${november4ManSeven}. The truth is, Jill deserves the mess she is in. She’s made some questionablen decisions in her 30 years. Chief among those is hooking up with a  guy 10 years older than she is. Think about that for a moment. ${november4ManEight}.  

${november4ManNine}. The girls look at him because he’s handsome and doesn’t judge them the way adults look at high school girls. He doesn’t look at them like kids. That’s cool and refreshing, so Jill smiles and giggles a little and asks why he’s not a wearing a sweater on this cold evening. ${november4ManTen}.`;

let dayFour = manOfNovember4(november4ManOne);
console.log(dayFour);
document.getElementById("dayFour").innerText = dayFour;

// ------------November5----------------

const november5ManOne =
  "It’s not Vander’s idea to be a shitty dad, but it also wasn’t his idea to be a dad at all. Does he enjoy sex? Yes. Does he enjoy wearing condoms";
const november5ManTwo =
  "Vander engaged in “stealthing” whenever a sex partner requested that he wear a condom. This unconditionally resulted in an angry partner, and sometimes a slap";
const november5ManThree =
  "It even resulted in a call to the authorities once but the girl decided to call off the charges after Vander confessed he had a case of whiskey dick on that particular occasion";
const november5ManFour =
  "Even after the second kick, while he was on the ground moaning, he wanted to pretend it was nothing more than a dust-up";
const november5ManFive =
  "The girl took offense to thing so she took a step back and let a kick go right to his mid-section that probably broke a rib. It was never x-rayed but it hurt like hell for a solid 6 weeks";
const november5ManSix =
  "It didn’t do much good for him and his sex life, but as it turned out, he’d be settling down pretty soon anyway";
const november5ManSeven =
  "Ironically, Vander was not whipping off condoms when he got Jill pregnant. He was wearing a condom but when he had finished his work, he pulled a live, hard penis that had a shredded condom messily flopping around on it";
const november5ManEight =
  "Maybe someday he’d want kids, but he knew as well as anyone that this was not time for fatherhood";
const november5ManNine =
  "But the kid is here, and Jill is a fantastic mother. She refused to have an abortion because her parents wouldn’t hear of it. Vander himself had no convictions of any kind so he was totally lobbying for the abortion";
const november5ManTen = "* 5 *  (11/5/24)";

let manOfNovember5 =
  () => `${november5ManOne}? No, not at all. Why not just ask someone else to have the sex for you if you prefer minimal stimuli? Until he and Jill were forced into this predicament, ${november5ManTwo}.

${november5ManThree}. She ended the evening by kicking him squarely and smartly in the balls, and when he didn’t drop, she did it again. The second one put him on the ground. He actually didn’t take it seriously the first time, and he started to laugh. ${november5ManFour}.

${november5ManFive}. She finished off by spitting in his face and calling him a liar and a faggot, and yes, she’d be spreading the word that Vander BoChamp couldn’t get it up. ${november5ManSix}. 

${november5ManSeven}. Jill was not happy at all but it was an accident which she blamed her herself for as much as she blamed him. In fact, she didn’t really think about it with blame or anger. She wanted a goddamn kid. She was ready for a baby. Vander, on the contrary, did not want a baby. ${november5ManEight}.  

${november5ManNine}, Vander got on board with shopping the gear, decorating a baby room, and really throwing himself into the idea. It was very convincing also. The in-laws thought, “I like this Vander a lot!”, and Jill honestly couldn’t believe her eyes. Is this the new Vander? Do I have a good daddy here to take care of our little un-born baby? If so, wonders never cease. Well, by month 6, he was back to boozing till 2 o’clock AM and waking up hung over as shit not even going to the farm on half the days. ${november5ManTen}.`;

let dayFive = manOfNovember5(november5ManOne);
console.log(dayFive);
document.getElementById("dayFive").innerText = dayFive;

// ------------November6----------------

const november6ManOne =
  "Jill observed Vander’s descent into irresponsibility at a day by day pace. At first, it was mostly on weekends that he’d awaken, take care of little 2 year old Rusty for a couple hours while Jill worked on bookkeeping before all of sudden Rusty would be in the office";
const november6ManTwo =
  "Dada sleep,” and then the contents of a side table might get swept onto the floor. “Haha, Rusty bye bye";
const november6ManThree =
  "So Jill can’t do anymore bookkeeping till Vander wakes up and that could be in 1 hour, 2 hours, or 4 hours. It was like having 2 children is what it was. That was at the beginning, before the drug relapses started";
const november6ManFour =
  "Vander’s job is tough and physical. He does a lot of lifting of full grain sacks and a lot of equipment repair which involves lugging around heavy shit. And even though he’s under 30 years old, he’s got nagging injuries and tweaked up body parts like someone twice his age";
const november6ManFive =
  "Because of this continuous run of grieving about how difficult his job is and the physical discomfort he’s always in and the unwinding he needs to do after a day grinding it out in the hot sun, and nobody listens to him, and there’s a problem on plot 27, and blah, blah, blah";
const november6ManSix =
  "You end up missing those dumb moments in life that give a person anecdotal experience. You know that time you almost died scaling a building wasted in Warsaw but lived to talk about it, and in doing so gave people a nice story to enjoy";
const november6ManSeven =
  "who may originally have had good intentions, prove that they are not up to the job, well it just means more shit for her to do and fewer anecdotes like that which she’ll be able to collect";
const november6ManEight =
  "She can’t know this because she only knows the life she’s lived up to this point, but observers tend to say things like, “Jill is a sweet girl, but she’s so young. She’s never even traveled. And she never should have gotten mixed up with the fucking BoChamps";
const november6ManNine =
  "Needless to say, the BoChamps, though associated with money and success, were also known to have broken financial laws so they didn’t carry the best reputation. They were known in the state as the top dairy, however, no one liked doing business with them. They also had a reputation for not paying their bills";
const november6ManTen = "* 6 * (11/6/24)";

let manOfNovember6 = () => `${november6ManOne}. 

"${november6ManTwo}!"

${november6ManThree}.  

${november6ManFour}. He does heal quickly, so that’s helpful. He noticed once that when he had a deep gash in his hand it seemed to form new skin and scar tissue very quickly. Vander likes to believe he’s got amazing power of healing. What are you going to do? So he’s fucking blessed, is his attitude.

${november6ManFive}, Jill eventually is not lying around as the content 20 year old mommy, not at all. You’d think you’re talking to 33-35 year old the way Jill carries herself. That’s what being thrown into (or throwing yourself into!) a serious existence will do to youth.  

${november6ManSix}? Well people like Jill don’t have stories like that because they go straight into taking care of baby Rusty, and when their husbands, all the Vanders in the world, ${november6ManSeven}.  

${november6ManEight}." Needless to say, the BoChamps, though associated with money and success, were also known to have broken financial laws so they didn’t carry the best reputation. ${november6ManNine}. ${november6ManTen}.`;

let daySix = manOfNovember6(november6ManOne);
console.log(daySix);
document.getElementById("daySix").innerText = daySix;

// ------------November7----------------

const november7ManOne =
  "Before marrying into the BoChamp family, Jill envisioned a happy life with two kids and a few months off per year, and lots of traveling";
const november7ManTwo =
  "It was supposed to be the exciting life and it was a promise he made her";
const november7ManThree =
  "He owed her Hawaii and Europe, dammit. Then Mrs. BoChamp goes and dies, and Mr. BoChamp, well let’s just face the facts about him, he’s losing his mind faster than a horsefly in August";
const november7ManFour =
  "What’s the point of marrying into millions if you can’t enjoy the cash? Jill was born with little. Her mother was a waitress and her dad was a janitor so they were fortunate to just get food on the table for Jill and her older identical twin siblings";
const november7ManFive =
  "She didn’t know shit from whiskey dick. She knew one thing and one thing only. She was marrying this son of a bitch and getting out of this shit life if it was the last thing she did";
const november7ManSix =
  "Vander isn’t a romantic, Jill learned that very early in the marriage. He’d much rather watch TV than watch Jill do her strip tease. After a couple months of total boredom, in fact, Jill decided to take up knitting";
const november7ManSeven =
  "Baby Rusty was up at 6:30 every morning screaming like a lunatic if his baba wasn’t in his mouth upon the opening of his grey eyes. For Jill that meant eyes locked close by 11:00 or she’d be a wreck";
const november7ManEight =
  "That’s when she discovered NyQuil. And it didn’t take long before she was going through a two pack every two weeks. That’s too much NyQuil but Jill needed rest. Soon it stopped having it’s desired effect, however, so she went through the process of quitting";
const november7ManNine =
  "Additionally, with all the substances around the house, Jill didn’t feel like traveling after all. Where are you supposed to get your Xanax overseas? Home makes more sense when habitual behavior is your story";
const november7ManTen = "* 7 * (11/7/24)";

let manOfNovember7 =
  () => `${november7ManOne}. She pictured Vander being a family man, packing them all up for big days on the beach and putting together picnics. Jill was thinking of Hawaii and Italy, and all the places she dreamed about but only saw in books and magazines. ${november7ManTwo}.

${november7ManThree}. That leaves Vander to stay home and try to run the dairy while a 22 year old Jill, with a 2 year old and another kid brewing because he had to go and fuck up her birth control, tries to keep up the household.

${november7ManFour}. It was embarrassing when all they could afford on Thanksgiving was cans of turkey chowder. So when 28 year old Vander BoChamp asked 18 year old Jill to go to a movie and eventually to her senior prom, how’s a girl going to say no? It was Vander Fucking BoChamp for God’s sake! ${november7ManFive}.

${november7ManSix}. If she was going to sit around all bored, why not at least have something to show for it? It turned out she was a natural with the knitting needles. She was able to produce professional caliber mittens and scarves, and soon, sweaters. She was very proud of her work and she got so involved in her projects that she found it difficult to unwind and fall asleep. ${november7ManSeven}.  

${november7ManEight}. That would have been eternally more difficult if she had not taken up something stronger and better to replace it, and that drug was Valium. Valium was not for everybody but it was for Jill – Xanax as well. And she loved a combination! Vander was a fuckup and drugs and alcohol made him useless and fail in every aspect of his life. Jill, by contrast, really benefitted from the rest and from the concentration she got from being better rested. ${november7ManNine}. ${november7ManTen}.`;

let daySeven = manOfNovember7(november7ManOne);
console.log(daySeven);
document.getElementById("daySeven").innerText = daySeven;

// ------------November8----------------

const november8ManOne =
  "Smart little goddamn boy, that Rusty. Walking at 11 months, saying “nose” at 14 months, and wanting “mo”, and often saying “dagoo” even when giving something to someone";
const november8ManTwo =
  "Jill has done a fine job training Rusty and she’s had to do it alone because her deadbeat husband Vander simply doesn’t have it in him. Training is the word she uses because he’s always been her little monkey";
const november8ManThree =
  "She does the best she can to not go over the edge but it’s tough when you’re the only one getting up in the middle of the night because of a crying child. He’s right there also";
const november8ManFour =
  "Thanks to him, Jill has become a pill popper, just like her mom. She promised herself she wouldn’t end up like that, yet he she fucking is. It’s Xanax and Valium and Red Bulls";
const november8ManFive =
  "She hates that she’s weak and a sucker for the pills but they honestly may be the only thing keeping her from figuring out how to get out of this thing. But she’ll never be is a drinker, that is a guarantee";
const november8ManSix =
  "Why they live in this small house was a joke to begin with. They’re rolling in dough and she’s got to share a shit ringed toilet with the father of her kid. She’ll let the asshole take care of the booze end of those things";
const november8ManSeven =
  "She began to ask herself what life might be like if she were alone, just her and Rusty. She and Milton running the dairy would not be easy. Vander does all the day management if you can call it that";
const november8ManEight =
  "She caught Vander banging one of the milkers in the grain silo recently; that’s not good managing, unless you count managing to be a two timing son of a bit";
const november8ManNine =
  "Milton can’t help himself – he’s always had a wandering eye, and he’s always found Jill to be his type, as much as a 22 year old can be the perfect type for a 65 year old. For an old guy, he looks good, she had to admit. The first night that she called him to tell him personally how sad she was that Helen was gone, and she missed her like her own mommy, Vander was passed out cold";
const november8ManTen = "* 8 * (11/8/24)";

let manOfNovember8 =
  () => `${november8ManOne}. And when there’s any kind of problem, and that could be that you moved, it’s “uh oh”. ${november8ManTwo}.

${november8ManThree}. He’s got 2 working ears, and they can hear all the same shit that Jill can hear. She knows he’s not deaf. Oh, wait, of course he can’t hear the screaming Rusty when he’s piss drunk and passed out every night. ${november8ManFour}. 

${november8ManFive}. She had sweet Jesus to thank for that. She doesn’t want to have the uncontrollable shits every day like Vander. It smells like a convenience store rest room, and guess who had to clean the rim of the toilet? That’s right, Jill. And you can bet your ass she wouldn’t be cleaning it if she didn’t have to use it herself. ${november8ManSix}.   

${november8ManSeven}. ${november8ManEight}.

${november8ManNine}. She walked over to Milton’s house  with Rusty and they proceeded to spend the next two hours talking about Helen and how she would have loved Rusty. He drank straight bourbon out of a rocks glass and Jill enjoyed chamomile tea. It crushed his goddamn soul that she never got to meet him. She would have also been a great trainer also, which started them laughing. ${november8ManTen}.`;

let dayEight = manOfNovember8(november8ManOne);
console.log(dayEight);
document.getElementById("dayEight").innerText = dayEight;

// ------------November9----------------

const november9ManOne =
  "There is this misconception out there that running a dairy means lining up a bunch of buckets, ushering in the cows, and gathering up a team of undocumented  workers to squeeze udders";
const november9ManTwo =
  "Jill is actually planning a cookbook on her favorite recipes and Milton’s. Vander is contributing, but he isn’t much of a cook, and that’s being generous. There will be some of the late Helen’s standards as well, and some silly acknowledgement for Rusty. Who doesn’t like a nice family cookbook";
const november9ManThree =
  "Jill is so full of disdain for the non-contributing Vander that she’s fantasized about fucking with his particular recipe. He can’t eat sesame or chili because it inflames his colon and makes his IBS rage, so Jill thinks it would be a good jab at him to do an Asian beef rib recipe under his name";
const november9ManFour =
  "he’s known for his inability to handle spice of any kind. Just give him a steak well done and a mashed potato with a corn on the cob and a black Russian and leave him alone, please. It’s not a lot to ask a hungover Vander";
const november9ManFive =
  "Meanwhile, Rusty is just starting to get going with his chewing, so the braised beef with rich milky, buttered potato and puréed squash is what he likes. Rusty will not have any complaints years down the road while rifling through old family memorabilia to see that this dish was attributed to him. It isn’t really a dish but Jesus does this kid go mental for it";
const november9ManSix =
  "Milton, though not a fan of Russia, Russians, or anything associated with Russia, has a thing for Beef Stroganoff";
const november9ManSeven = "And of course the heavy cream is unbeatable";
const november9ManEight =
  "Helen was a fromagère, so a whole chapter on her cheeses is to be present, and in some ways, it’s what motivated the project";
const november9ManNine =
  "Jill believes Vander murdered his mother, his own flesh and blood, his giver of life and baby milk, and that Milton was intended to be dead as well. If that is the case, she thought, this world is fucked";
const november9ManTen = "* 9 * (11/9/24)";

let manOfNovember9 =
  () => `${november9ManOne}. All that does happen, but there is a lot more to it than that, such as breeding cows, and raising them, and slaughtering the old and lame, the weak. BoChamp’s is not a butcher per se but if you want a primal cut and don’t mind doing a pre-order, you’ll get what you need. Since the animals that get processed for food are generally old and fat, the best application is stewing. ${november9ManTwo}?

${november9ManThree}. He’ll absolutely be pissed off at this huge inaccuracy. Everyone who knows him will know it’s horseshit; ${november9ManFour}. 

${november9ManFive}. 

${november9ManSix}. And he has possibly the best version of the classic dish in the entire state. There are wild mushrooms growing prolifically off of Pasture 37 and they happen to be better than anything you’d ever find in a grocery store bin. ${november9ManSeven}. 

${november9ManEight}. Helen was a good woman, and no one really knows how she parented a monster like Vander. Milton is a stubborn old coot but he’s okay. Vander just went and became a prick pretty much all on his own. Jill has no proof at all but she is absolutely convinced that Vander is responsible for the death of his mother. And how Milton was able to not be present when the good Helen drove off the cliff was really just shit luck. ${november9ManNine}. ${november9ManTen}.`;

let dayNine = manOfNovember9(november9ManOne);
console.log(dayNine);
document.getElementById("dayNine").innerText = dayNine;

// ------------November10----------------

const november10ManOne =
  "One thing about Vander that Jill has always found to be odd is how he seems uncomfortable when he has to thank people. Showing gratitude is natural for most but for Vander";
const november10ManTwo =
  "but it has become clear that although it may be based on a simple psychological notion, it is much more than cute; it is habitual and it is dangerous, and once it all plays out, it may be his undoing";
const november10ManThree =
  "Vander is a petty thief and that has bothered Jill for the entire 3 years that they’ve known each other. Here and there she’ll see him like inadvertently not ring in a Snickers© bar at a self-checkout kiosk";
const november10ManFour =
  "but she knows that people who say things like that are much bigger on the coming around than they are on the going around. Insincerity is inherent in these words – be wary of people who speak them";
const november10ManFive =
  "She’s been watching him closely for some weeks, and recently, Milton said something that has her convinced that she is married to a parent killer. They were having their late night powwow with Vander passed out cold  and Rusty doing his deep sleep thing";
const november10ManSix = "That’s the good shit";
const november10ManSeven =
  "He knocked back a couple of his bourbons and began his sentimental recollections of Helen";
const november10ManEight =
  "She loved to drive along these country roads to the shore. She enjoyed a cocktail or two, yes, an old-fashioned mostly, but she would never drive intoxicated";
const november10ManNine =
  "Jill only then realized that the cremation was rushed and no autopsy had been performed. Not only is it suspicious, but he lied to Jill. He lied because he thought she and Milton would never discuss it";
const november10ManTen = "* 10 * (11/10/24)";

let manOfNovember10 =
  () => `${november10ManOne}. It is as though he’d prefer that the person he’s going to eventually need to thank will fail so he won’t have to do the thanking. He also likes to celebrate his own successes, to draw as much attention as possible to himself. Jill finds this a cute insecurity, or used to, ${november10ManTwo}.

${november10ManThree}, the micro-heist that is popular among the not well to do, but Vander and his class of asshole have no need to rip off Snickers© bars. Jill has tolerated it because he had a way of making it seem like it was nothing. He uses expressions like “what comes around goes around”, to explain his actions. Jill doesn’t know much, ${november10ManFour}. 

${november10ManFive}. Milton enjoyed the crisp walk over. He settled in on the couch while Jill got him snifter of bourbon. He swirled it around and stuck his nose deep in the snifter. 

"${november10ManSix}."  

${november10ManSeven}. 

"${november10ManEight}! And no one will ever know what the hell happened after we rushed the cremation at Vander’s insistence. Jesus, it’s how she wanted it.” 

${november10ManNine}? It is true that they didn’t start off close but circumstances have made them best friends. Here’s the thing: Jill knew at the time that some of her Valium© was missing but she just couldn’t be sure. Now she was sure. Vander drugged his mother and she drove herself off a cliff. That’s a lousy thing for a son to do!

She does not think of herself as a violent person, but she has a deep sense of justice. That’s why she’s decided that Vander has to die, and that she must be be the one to end him,. She, Jill, mother to their baby Rusty, daughter-in-law to Milton BoChamp, owner of one of the best dairies in the region, was going to waste her husband! ${november10ManTen}.`;

let dayTen = manOfNovember10(november10ManOne);
console.log(dayTen);
document.getElementById("dayTen").innerText = dayTen;

// ------------November11----------------

const november11ManOne =
  "Jill knows a few people on the outside who can score her pocketfuls of pills. She can land it all. You want Valium©, she’ll get you Valium©, Xanax©, she’s going to get it. No problem. She knows the right people";
const november11ManTwo =
  "She’s come up with a different idea if you want to call watching true crime shows “coming up with”, and if all goes well, Vander could be cremated by next week. No way in shit he gets an autopsy";
const november11ManThree =
  "Lately, Vander’s been hitting the sauce hard and everything Jill does, Rusty goes along. At 18 months old, he’s a fantastic walker. Milton is very energetic for a 66 year old. His only ailment is that after 12 hours out in the goddamn pasture";
const november11ManFour =
  "Vander is unconscious by 9:00 every night so she enjoys the company. She’s been bored stupid lately, and the tea and pills are nice but she needs more";
const november11ManFive =
  "You know he killed Helen, don’t you? He drugged her. She liked to drive fast but she knows these roads and a couple Old Fashioneds isn’t going to launch you off a cliff";
const november11ManSix =
  "Milton decides to come clean about a couple disturbing events from Vander’s past. First, he beat the shit out of Milton when he was a senior in high school, and second, Milton caught him jerking off to teenage porn just the other day";
const november11ManSeven =
  "He’s getting written out of the will, the little murdering bastard!” Milton hisses quietly. “I’ll help you if you want, God help me! I’m going to end the curséd life of my own fucking offspring, but no one has ever deserved it more";
const november11ManEight =
  "Jill reaches into her handbag and pulls out a sealed vial filled with white powder. She holds it up and raises her eyebrows";
const november11ManNine =
  "This is what we use. This will end Vander. I don’t even care about the money.” She explains that they’re going to aerosolize the cyanide and fake sneeze in his face. He’ll be dead in 5 seconds and they’ll never think to test for it. He’ll be piss drunk and it will all be attributed to alcohol poisoning, and in any case, that fucker gets no autopsy";
const november11ManTen = " * 11 *  (11/11/24)";

let manOfNovember11 =
  () => `${november11ManOne}.  When she gets a meeting with the top guy – no one refuses a BoChamp rendezvous – Jill packs a handbag with 10,000 dollars, that is 2 stacks of 100 dollar bills, gets in her rebuilt 1977 Mustang, and heads across town. 10 K cash will buy you a lot of pills, but Jill isn’t thinking only of pills. ${november11ManTwo}.

${november11ManThree}, his back reminds him that he’s no young bucko. Those are the days he really likes to put down 4-6 stiff bourbons. Jill’s given him an open invitation to come around and play cards or just shoot the shit whenever he feels like it. ${november11ManFour}.

"${november11ManFive}." 

${november11ManSix}.

"${november11ManSeven}." 

${november11ManEight}.

"${november11ManNine}. 

“I think you and I should be a couple, Jill. I’ll leave it all to you, but we’re killing the little beast and we’re doing it soon. Rusty will be better off without that dirty piece of shit in his life. He can have a daddy who is actually his grampy, and you, the best mommy ever!” ${november11ManTen}.`;
let dayEleven = manOfNovember11(november11ManOne);
console.log(dayEleven);
document.getElementById("dayEleven").innerText = dayEleven;

// ------------November12----------------

const november12ManOne =
  "The moment that Milton declared his affection for Jill and that he is leaving her the dairy, it is really on. Vander is as good as dead. His mistake was not killing them both. Jill knows how his psychotic brain operates";
const november12ManTwo =
  "he’s got a plan for his old man, but Jill is not going to allow that to happen. She’s got the cyanide to prove it. What kind of man takes out his mother and spares his father";
const november12ManThree =
  "Vander is a goddamn beast and Jill is seeing him on board his one way bus ride to hell. Rusty will thank her for it when she tells him all about the cyanide at some point down the road when he seems ready";
const november12ManFour =
  "You know Rusty, it’s tough growing up without your real dad. I lost my daddy when I was a little girl also";
const november12ManFive =
  "Rusty, a time comes in a boy’s life when he needs to know the truth about why his daddy had his life cut short. It’s complicated…maybe it’s not complicated. You daddy sabotaged your grammy’s brakes in her vintage Mustang sending her sprawling over the cliff at Plucklick Pass, and your grampy and I decided to fucking end him. You can’t go around killing, my boy. Know what I mean";
const november12ManSix =
  "Vander leans over the toilet and dry heaves for a couple minutes.  He stares at his bloodshot eyes and looks in his nostrils. He doesn’t even like Scotch but he thinks he drank and entire fifth in two hours yesterday";
const november12ManSeven =
  "The next morning while Jill is dealing with Rusty’s scrambled eggs and toast points (he loves that they’re called toast points and he always wants “mo”, and he’ll scream bloody murder if he doesn’t get them!), there is a crash from the bathroom upstairs";
const november12ManEight =
  "Vander? Is that you, everything okay up there? What was that crash?” She’s standing at the bottom of the stairs. She goes back to the kitchen and gets Rusty and the two of them head up the stairs. There on the bathroom floor is Vander, bleeding, after slipping in the shower";
const november12ManNine =
  "He’s okay, baby, it’s okay, daddy is still with us.” There seems to be a look of disappointment that falls over her as her words trail off";
const november12ManTen = "* 12 *  (11/12/24)";

let manOfNovember12 = () => `${november12ManOne}; ${november12ManTwo}?

${november12ManThree}. That’s not an everyday conversation you want to be having with your kid no matter how justified the killing was. She’s been running that conversation through her head over and over again as though it is something that has already occurred.

"${november12ManFour}." That sounds ridiculous and sociopathic if anyone with a brain were listening. She’d have to do a hell of a lot better than that.

"${november12ManFive}?" Obviously that is no better. She’d have to put a lot more thought into that conversation. There’d be more than enough time for that. 

${november12ManSix}. Head still pounding like there’s a bad concert happening in there. Jill knows what’s right, that’s why she’s a pill popper. Maybe that’s what he needs to do. Is that considered California sober?

${november12ManSeven}. 

"${november12ManEight}. Rusty screams and runs out of the room. After a moment, Vander’s eyes open. Jill sits him up and puts a washcloth over the cut on his forehead, and calls to Rusty. 

"${november12ManNine}. ${november12ManTen}.`;

let dayTwelve = manOfNovember12(november12ManOne);
console.log(dayTwelve);
document.getElementById("dayTwelve").innerText = dayTwelve;

// ------------November13----------------

const november13ManOne =
  "Lately Jill has been having nightmares. They come at her like short films, grainy, with distant radio sound. In one of them she’s with Vander and she’s got little Rusty in a sling and they’re hiking the rocky trails at Plucklick Pass. This would not happen in real life; she’s semi-aware of that even in her dream. What is she doing out here on this dangerous terrain with their 14 month old";
const november13ManTwo =
  "That’s the question she’s asking herself. And why is she carrying all their supplies as well? Vander is going fast and urges Jill to pick up the pace, there’s a surprise for her at the top. She trudges along almost tripping several times which amuses Vander, who becomes annoyed. When they get to the top, Vander stands by and lights a cigarette while Jill pulls inflatable furniture from her camping pack";
const november13ManThree =
  "She spends who can say how much time blowing air into love seats and sectionals and side tables. Whenever Vander approaches Rusty, the baby screams, and backs away and goes to Jill who tirelessly blows on. Finally, there’s a whole elaborate living room set up. Jill and Vander sit and watch for something but she doesn’t know what and Rusty crawls around like a little fool";
const november13ManFour =
  "Every time she glances at Vander, he points to the distance and encourages her to not look away. Then Rusty croaks off some baby nonsense, which is not endearing to her at all in this uneasy moment, and he points at Vander and cries and moves backward whenever he approaches";
const november13ManFive =
  "This goes on indefinitely when off in the distance behind them on the Passage Jill hears the increasing volume of a high pitch engine winding. It keeps getting louder until it's coming right through the trees when a red 1977 Mustang goes roaring past blowing past all the inflated furniture sending everything from ottoman to entertainment console up into the air";
const november13ManSix =
  "The next thing she knows the car is airborne and never comes down. It just floats of with an endless amount of furniture. When she looks at Vander, he’s standing there holding brake fluid and pads, and he’s rambling off a bunch of bullshit about anti-lock braking. Rusty points at him and mouths";
const november13ManSeven =
  "Dada kill! Dada kill. Dada kill.” Then she wakes up in a pool of sweat and all is normal. Vander is lying as usual like a useless lump of shit on the open recliner, and he’s got ½ a drink on his bulging gut, the lout. Jill won’t let him anywhere near her bed";
const november13ManEight =
  "He really needs to soak in a hot bath for hours. Rusty doesn’t detest him any more in real life than he does in the dream but he absolutely wants no part of him. Most babies are all about their goddamn fathers. Not Rusty. Vander has never been natural with kids, his own being no exception. He’s stiff and has a scripted tone to his voice. Rusty looks him at times like he’s a complete stranger";
const november13ManNine =
  "Milton by contrast, Jesus Christ, if a kid could ever be more insane for a grandada, Jill did not know who that little fucker would be, and didn’t want to know because it would drive her mad. She could end up taking the little asshole’s life. No one’s outshining her fuckin kid. Try her";
const november13ManTen = "* 13 * (11/13/24)";

let manOfNovember13 = () =>
  `${november13ManOne}? ${november13ManTwo}. ${november13ManThree}. ${november13ManFour}. ${november13ManFive}. ${november13ManSix}, "${november13ManSeven}. ${november13ManEight}. ${november13ManNine}. ${november13ManTen}.`;

let dayThirteen = manOfNovember13(november13ManOne);
console.log(dayThirteen);
document.getElementById("dayThirteen").innerText = dayThirteen;

// ------------November14----------------

const november14ManOne =
  "Murder isn’t just an act you throw around because you’re having a rough day, week, month, year, or other unit of time. You can’t just up and wax out a life whenever in St. Jesus H. Piss you decide it suits you. Jesus is not a fan of killing and Jill, though Jill will kill, she agrees with the biblical legend, the guy who gets all the attention";
const november14ManTwo =
  "He had a big story but is it that big really? You build a bunch of shit, make a lot of friends and enemies, head on a pilgrimage or whatever they’re calling it, piss off many, cause many to weep, and fast forward 2000 plus years and people are still talking about it. Jill has an equally interesting story, albeit on a smaller scale";
const november14ManThree =
  "and she’d wager a lot that no one is going to shit about it even10 years after she kicks it. What the hell can you do? C’est la vie, right? But this isn’t about Jesus anyway, and Jill could give a shit that she’s quickly due to be forgotten. A crime has already been committed in purchasing the cyanide. 5 K for not many CCs. Probably enough to kill a couple hundred";
const november14ManFour =
  "Besides not being able to come up with an alibi, she didn’t think she’d be able to handle a hot interrogation. No one’s buying a heart attack at the age of 32. He’d need to OD on some needle drug, or snort down a fuckload of coke. That would do the trick. Or mixing some pills with his whisky. The cyanide is too brazen. Furthermore, she has other reasons for the change of heart. Could it be possible that she is still in love with this Lord forsaken lush";
const november14ManFive =
  " She’s been having Vander dreams where he’s not a mess in picnic dreams, and in them, Vander is carrying all the supplies and he’s got Vander on his shoulders. He’s got a fancy botte of wine and is wearing a top hat. Vander is giggling and clearly worships him. The emotion she feels shudders her awake. She lays there silently until a stinking, groaning Vander wakes with a series of wet farts";
const november14ManSix =
  "What was that?” she asks, in the silly way they used to talk to each other back before the shit started. She’s even begun wondering if he maybe didn’t sabotage the brakes on the Mustang, and if not then if he's actually sad and that’s why he’s drinking himself into stupidity";
const november14ManSeven =
  "The new problem is convincing the devastated Milton, who is now fixated on the idea of matricide. Milton just pledged his love to Jill. She had herself one of those Jesus type conundrums. Be honest and get yourself crucified or worse. If Milton came after them both, that would be at least a 20 year story";
const november14ManEight =
  "That conversation is going to happen in the morning and it’ll start something like this: “Milton, I can’t kill you son because I’ve decided to work on our marriage instead. Would you like to congratulate me on my change of heart";
const november14ManNine =
  "Will I still inherit the whole goddamn thing? She doubts the hell out of that, but there are ways to figure out the money, oh yeah, she’s going to live the good life if it kills her";
const november14ManTen = "* 14 * (11/14/24)";

let manOfNovember14 = () =>
  `${november14ManOne}. ${november14ManTwo}, ${november14ManThree}. ${november14ManFour}? ${november14ManFive}. "${november14ManSix}, "${november14ManSeven}. ${november14ManEight}?" ${november14ManNine}! ${november14ManTen}.`;

let dayFourteen = manOfNovember14(november14ManOne);
console.log(dayFourteen);
document.getElementById("dayFourteen").innerText = dayFourteen;

// ------------November15----------------

const november15ManOne =
  "Things started to improve quickly when made up her mind to not take her husband’s life. It’s crazy how you can go from raging, homicidal thoughts one minute to romantic, marriage saving thoughts in the blink of an eye. There are shrinks out there who now all about that shit, and if anyone wants to know what that means";
const november15ManTwo =
  "Jill suggests talking to the qualified medical professionals and please stop harassing her about it. Cut your losses folks. The son of a bitch is lucky he’ll be continuing this, what do you call it, um, wasted life? Jill will still kill, that is she can. She has the goddamn cyanide still. Does that have a half-life? What even is a half-life? Something related to the life span of something she guessed";
const november15ManThree =
  "Half of that. Jill with the pills comes up with all sorts of silly stuff that most people would ignore. But she’s not ignoring it. Cyanide is not a joke. Remember that, she believes. Ok, Vander made a nice deal that he would only hit the sauce two to five times per week instead of the normal which is daily and by that, yeah, all day";
const november15ManFour =
  "Not just a few whacks to wind down after a couple hours staring at animals. All day long. That’s the Vander drinking style. Pound till you’re in the ground. And Jill made a deal that might be hard to keep. It’s related to the Xanax © and the Valium © and that she should seriously think about getting off them";
const november15ManFive =
  "Vander suggests that she go into an outpatient rehab program and he’d be happy to go but there’s no way Rusty could sit there with them without freaking out. This 15 month old can’t keep it together most days, and on his good days, he’s sitting at home knocking shit over and not impressing anyone or making lives easier in any way for any person. He’s not a very good baby if you look closely at it";
const november15ManSix =
  "Why? Because the parents have been selfish and if you think it doesn’t rub off the kid, think again. But things are slated for change. The way to really hook up Rusty, the misbehaved, lately unimpressive child is to get a happy home scene going. The therapy sessions are going to be intense and Milton will have to do a lot of childcare even though Vander doesn’t particularly trust his old man";
const november15ManSeven =
  "Someone has to watch the boy. And someone will also have to watch the boy on the big day of the vow renewal.  It’s going to really change things. That’s what Jill keeps telling herself anyway. If all goes well, 3 months from now Rusty will be 18 months old, with a dad who has a decent hold on his boozing";
const november15ManEight =
  "and a mom who barely does anymore Xanax © and Valium © except if she’s really stressed out and it’s affecting her rest. The key for Vander is to not get so twisted he can’t run the goddamn stinking dairy that is feeling more like a curse than anything else. No one wants to run it";
const november15ManNine =
  "Rusty  is going to be the last hope, that is if it even lasts. These dairies don’t run themselves, that’s for sure";
const november15ManTen = "* 15 * (11/15/24)";

let manOfNovember15 = () =>
  `${november15ManOne}, ${november15ManTwo}. ${november15ManThree}. ${november15ManFour}. ${november15ManFive}. "${november15ManSix}. "${november15ManSeven}, ${november15ManEight}. ${november15ManNine};. ${november15ManTen}.`;

let dayFifteen = manOfNovember15(november15ManOne);
console.log(dayFifteen);
document.getElementById("dayFifteen").innerText = dayFifteen;

// ------------November16----------------

const november16ManOne =
  "Now, it’s a decent couple months and they’re sizzling by. Rusty ‘s experiencing improved moods and with consistency, that is, fewer meltdowns. The reconciled couple feels pretty good taking him into town to shop for his favorite things: candied meat sticks. The butcher loves seeing a happy Rusty. Hell, everyone does";
const november16ManTwo =
  "The grandboy of the dead Helen deserves to have a good day, right? Hell yeah he does! And one good day leads to another, and before you know it he’s strung a few together. No more of the one day good, one day shit routine. That’s fine if you are one of the Kendersons over at Wilmont Circle, that 12 mile loop that ran along the edge of the quarry and hooked back up by at the reservoir just before Plucklick Pass";
const november16ManThree =
  "That’s down past the bluffs. If you aren’t from the area you may as well just forget it. You’d never find them because they live in shitty little clapboards in the woods. No one wants to visit the filthy Kendersons and their clan of no one knows how many between all the children and cousins";
const november16ManFour =
  "One local insists there were 19 bred from the same parents which seems impossible until you do the math. A 20 year old woman (possibly a couple 3 years younger) by the age 40-45 could pull it off, and maybe be afforded a little rest in between. Jill likes to believe she’d be good for 10 at the most. Haha, fuck that. One is more than enough";
const november16ManFive =
  "What is known all too well is that it’s dirty in there, and not a few things out of place dirty. The real dirty with mice and roaches and other goddamn pests. Plus there’s a whole army of dogs and some goats. Chickens bob around stupidly day and night, and there’s always fighting and occasionally you’ll hear .22s go off";
const november16ManSix =
  "Usually it’s just shooting frogs and shit but one story has it that one of the brothers shot another brother in the balls with buckshot. No one really knows what actually happened that drizzly day, except probably the Kendersons, and it was so fucked up and chaotic over there like a poorly planned city, that it was probably unmemorable for most of them";
const november16ManSeven =
  "That’s life out in some of these towns. So one afternoon Jill is with Rusty while Milton leads the milk team, and Vander is returning by 4:00 because Jill has a rehab session in Pluckton. But guess what. It’s 4:15 and no Vander and Dr. Proctor does not allow late. “You want to be late? You’ve chosen your fate”. That’s one of his popular expressions. It’s funny to his patients but in a mocking way. That’s not flattering";
const november16ManEight =
  "And if he can’t cut her slack because she’s married to an absolute degenerate, irresponsible half-wit, she’s going to walk. But Vander, Christ, he’s been punctual since the morning after the night she almost took his quite possibly useless existence. In he stumbles at 4:30 and Jill lets him have it. She missed her private session, and really tears into him, cursing him up and down until Rusty thrown beef stew all over her";
const november16ManNine =
  "Oh, man, just when you think you’re not going to kill someone, that person insists on giving you a reason to dig up that vial of cyanide and start her colluding with Milton, who never once wanted the plan to be off. He relented because Jill chickened out. Maybe that’s strong. She wanted the best for Rusty. But things are different and Rusty can just get over it. Little son of a bitch is going to have to";
const november16ManTen = "* 16 * (11/16/24)";

let manOfNovember16 = () =>
  `${november16ManOne}. ${november16ManTwo}, ${november16ManThree}. ${november16ManFour}! ${november16ManFive}. ${november16ManSix}. ${november16ManSeven}. ${november16ManEight}. ${november16ManNine}. ${november16ManTen}.`;

let daySixteen = manOfNovember16(november16ManOne);
console.log(daySixteen);
document.getElementById("daySixteen").innerText = daySixteen;

// ------------November17----------------

const november17ManOne =
  "She’s trying to live a virtuous life but that daily proves more and more difficult. After she missed the rehab appointment with goddamn Dr. Proctor, the one individual who’s been able to communicate to her that life can be tolerable without the Xanax © and the Valium ©";
const november17ManTwo =
  "he explained to her in plain language that though her husband has seemingly nothing to contribute to society, she can maybe help him. It’s difficult to hear that you are nothing but a self-absorbed bitch, but when you hear it  in the context of self-improvement, well, shit, you’ve got to listen to voices that aren’t your own";
const november17ManThree =
  "Every couple has marriage problems”, Proctor once explained, “even my marriage is on the rocks…” It’s rare that a rehab therapist like a Dr. Proctor will dump out his own problems under the pretense of helping a client. Admittedly, that one slipped. Proctor knows it’s not professional, but 2 things to consider";
const november17ManFour =
  "Number one, Proctor caught his wife cheating on him, and number two, he kind of has a thing for Jill – that is NOT professional. He’s always had the wandering eye. And Jill can read the signs because she’s here before. This guy wants to tag her";
const november17ManFive =
  "This dirty pervert will charge his clients 100%, no exceptions, if they don’t get to their appointment on time, will often give reduced care (he won’t pay attention to you at your next appointment like a fucking baby who’s been offended), and on top of it all, he’ll still make gross passes at attractive young pill-popping mothers like Jill";
const november17ManSix =
  "Jill, because she’s not getting any attention at home, now that Vander is back to perpetual non-parenting, who seems to be spending more and more time at the Kenderson compound, though they are in socially and economically divergent demographics, and with Milton pretty much having to man the dairy by himself (he smells like sour milk most of the time";
const november17ManSeven =
  "suddenly doesn’t care that Dr. Proctor is a creep; she’ll bed him down anyway. Rusty has been accompanying her to the rehab appointments lately which Proctor normally wouldn’t allow, but since he’s got sex on his mind, he’d probably open up an entire daycare center if it could him get laid. He’s what the ladies like to refer to as desperate. He has nothing at all to offer Jill except a good-sized penis and some uninteresting conversation";
const november17ManEight =
  "The way she looked at, it’s all a hell of a lot better than bourbon or sour milk. Vander made her gag and lately Milton is disgusting. She is obligated to sleep with him, of course, if she’s going to land the estate, which is all conditional on Vander ending up in an oven and a pile of dust to be scattered off of the Plucklick Bluffs";
const november17ManNine =
  "What a beautiful day that will be. And Milton, with the heartbreak from loss of Helen, and overworking himself on a daily basis, well, he isn’t going to last more than a few years. And then it’s happily ever after for Jill and Rusty, rich, dairy unloaded, Proctor out of the picture, although not dead she hopes, Rusty will finally have something to smile about";
const november17ManTen = "* 17 * (11/17/24).";

let manOfNovember17 = () =>
  `${november17ManOne}; ${november17ManTwo}, "${november17ManThree}: ${november17ManFour}. ${november17ManFive}. ${november17ManSix}!). ${november17ManSeven}. ${november17ManEight}. ${november17ManNine}. ${november17ManTen}.`;

let daySeventeen = manOfNovember17(november17ManOne);
console.log(daySixteen);
document.getElementById("daySeventeen").innerText = daySeventeen;

// ------------Sept17_2025----------------

const september17_2025_One = "This is So UnCool!";
// const september17_2025_Two =
//   "";
// const september17_2025_Three =
//   "";
// const september17_2025_Four =
//   " ";
// const september17_2025_Five =
//   "";
// const september17_2025_Six =
//   "";
// const september17_2025_Seven =
//   "";
// const september17_2025_Eight =
//   "";
// const september17_2025_Nine =
//   " ";
// const september17_2025_Ten = "* 17_September * (9/17/25).";

let manOfSeptember17_2025 = () => `${september17_2025_One}. Setting Up BS`;

let daySeventeenSeptember_2025 = manOfSeptember17_2025(september17_2025_One);
console.log(daySeventeenSeptember_2025);
document.getElementById("daySeventeenSeptember2025").innerText =
  daySeventeenSeptember_2025;

// ============ STORE JAVASCRIPT CONTENT AFTER LOADING ============

// After all the JavaScript stories have been written, store them
setTimeout(() => {
  dayIds.forEach((dayId) => {
    const element = document.getElementById(dayId);
    if (element) {
      javascriptContent[dayId] = element.innerText;
    }
  });
}, 100);

// ============ SETUP ALL EVENT LISTENERS ============
document.addEventListener("DOMContentLoaded", () => {
  // November dates
  const dateMapping = [
    { num: "1", dayId: "dayOne" },
    { num: "2", dayId: "dayTwo" },
    { num: "3", dayId: "dayThree" },
    { num: "4", dayId: "dayFour" },
    { num: "5", dayId: "dayFive" },
    { num: "6", dayId: "daySix" },
    { num: "7", dayId: "daySeven" },
    { num: "8", dayId: "dayEight" },
    { num: "9", dayId: "dayNine" },
    { num: "10", dayId: "dayTen" },
    { num: "11", dayId: "dayEleven" },
    { num: "12", dayId: "dayTwelve" },
    { num: "13", dayId: "dayThirteen" },
    { num: "14", dayId: "dayFourteen" },
    { num: "15", dayId: "dayFifteen" },
    { num: "16", dayId: "daySixteen" },
    { num: "17", dayId: "daySeventeen" },
  ];

  dateMapping.forEach(({ num, dayId }) => {
    document
      .getElementById(`nov-${num}-show-story`)
      ?.addEventListener("click", () => showStory(dayId));
    document
      .getElementById(`nov-${num}-hide-story`)
      ?.addEventListener("click", () => hideStory(dayId));
    document
      .getElementById(`nov-${num}-show-sonnet`)
      ?.addEventListener("click", () => showSonnet(dayId));
    document
      .getElementById(`nov-${num}-hide-sonnet`)
      ?.addEventListener("click", () => hideSonnet(dayId));
  });

  // September 17, 2025
  document
    .getElementById("sept-17-2025-show-story")
    ?.addEventListener("click", () => showStory("daySeventeenSeptember2025"));
  document
    .getElementById("sept-17-2025-hide-story")
    ?.addEventListener("click", () => hideStory("daySeventeenSeptember2025"));
  document
    .getElementById("sept-17-2025-show-sonnet")
    ?.addEventListener("click", () => showSonnet("daySeventeenSeptember2025"));
  document
    .getElementById("sept-17-2025-hide-sonnet")
    ?.addEventListener("click", () => hideSonnet("daySeventeenSeptember2025"));
});
