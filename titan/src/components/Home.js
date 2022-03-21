import msdeath from "../assets/miss_death.png";
import power from "../assets/power-gem.png";
import champOne from "../assets/Champion_2.png";
import champTwo from "../assets/Champion.jpg";
import soul from "../assets/soul-gem.png";
import inBetweenOne from "../assets/In-Betweener.png";
import inBetweenTwo from "../assets/In-Betweener_2.jpg";
import time from "../assets/time-gem.png";
import gardenerOne from "../assets/Gardener.png";
import gardenerTwo from "../assets/Gardener_2.jpg";
import space from "../assets/space-gem.png";
import runnerOne from "../assets/Runner_2.jpg";
import runnerTwo from "../assets/Runner.png";
import reality from "../assets/reality-gem.png";
import collectorOne from "../assets/Collector_2.jpg";
import collectorTwo from "../assets/Collector.png";
import mind from "../assets/mind-gem.png";
import grandOne from "../assets/Grandmaster.png";
import grandTwo from "../assets/Grandmaster_2.jpg";
import gauntlet from "../assets/infinity-gauntlet.png";
import thanosTwo from "../assets/Thanos_2.png";
import thanosThree from "../assets/Thanos_3.png";

const Home = () => {
  return (
    <main>
      <section id="prologue">
        <div className="mask">
          <img className="hvr-grow" src={msdeath} alt="Mistress Death" />
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h1 className="section_title">prologue</h1>
            <p className="section_p">
              My name is <strong>Thanos of Titan</strong> and I am Death's champion. Recently I was resurrected by Mistress Death in order to correct the current imbalance between life and death in our universe. In order to restore this balance, she has tasked me with eliminating half the population.
              <br />
              <br />
              Now even for someone with my dark talents, this would be an extremely daunting task. However, by gazing into the depths of the Well of Knowledge, I found an amazing discovery and a solution to my problems. I dubbed them the Infinity Gems. There are six in all. Each is capable of granting its possessor immense and incalculable power. Respectively they are the power, soul, time, space, reality, and mind gems.
              <br />
              <br />
              These prizes are currently in the hands of six very powerful beings: <strong>Champion, the In-Betweener, the Gardener, Runner, the Collector, and the Grandmaster</strong>. I will relieve them of all of their gems and combine their might into one Infinity Gauntlet. With it, I will have the power to not only complete Mistress Death's mandate but also fulfill my deepest wish to sit by her side as her lover and equal. My quest will not be an easy one but in the end, victory is inevitable.
              <strong>
                <em>After all, I am Thanos!</em>
              </strong>
            </p>
          </div>
        </div>
      </section>
      <section id="power">
        <div className="gem text-center">
          <h1>
            <img src={power} alt="power gem" />
          </h1>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h1 className="section_title">power</h1>
            <div className="image-wrapper float-left pr-4 pb-4 pt-0">
              <img className="photo_one" src={champOne} alt="Champion" />
            </div>
            <p className="section_p">
              Armed with my plan I board my hoverchair which is capable of space and interdimensional travel. My first destination is a war-ravaged planet called Tamarata. There resides <strong>Champion</strong> who is in possession of the <strong>Power Gem</strong>. He is currently on Tamarata causing nothing but mischief and trouble. He constantly switches sides with the planet's numerous armies for the sole purpose of feeding his lust for battle and competition.
            </p>
            <br />
            <div className="image-wrapper float-right pl-4 pb-4">
              <img className="photo_two" src={champTwo} alt="Champion" />
            </div>
            <br />
            <p className="section_p">Upon arrival, I immediately challenge the imbecile to a fight which he swiftly accepts. Our battle is brief, brutal, and severely one-sided. I am able to land several punishing blows on Champion and him not one on me. He is no match for my superior speed and cunning. As we battle I start to realize that Champion is getting stronger and stronger. Without realizing it the oaf is subconsciously tapping into the gem's power.</p>
            <br />
            <p className="section_p">I frustrate Champion so much that in a fit of rage he accidentally destroys the planet, stranding himself in space. I teleport to his location and we make a deal. In exchange for the Power Gem, I agree to drop him off at a planet suitable to his desires. The fool reluctantly agrees as he believes that the gem never worked.</p>
            <br />
            <p className="section_p">With the Power Gem now in my possession, I drop Champion off as promised. I release him into the planet's atmosphere. I wonder if he will survive the fall? Maybe I should have been a little kinder. He was very entertaining.</p>
          </div>
        </div>
      </section>
      <section id="soul">
        <div className="gem text-center">
          <h1>
            <img src={soul} alt="soul gem" />
          </h1>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h1 className="section_title">soul</h1>
            <div className="image-wrapper float-right pl-4 pb-4 pt-0">
              <img className="photo_two" src={inBetweenOne} alt="The In-Betweener" />
            </div>
            <p className="section_p">
              Next, I travel to The Nexus of Realities. Imprisoned there is the <strong>In-Betweener</strong> who is currently in possession of the <strong>Soul Gem</strong>. My journey there is a perilous one. If at any moment I were to have lost focus I would have lost my mind.
            </p>
            <br />
            <p className="section_p">Upon arrival, I find the In-Betweener imprisoned in a sphere. I offer him a proposition. In exchange for his freedom, I will become his servant. Furthermore, he will provide me protection from Mistress Death. He accepts. We combine our tremendous might to break him free.</p>
            <br />
            <div className="image-wrapper float-left pr-4 pb-4 pt-2">
              <img className="photo_one" src={inBetweenTwo} alt="The In-Betweener" />
            </div>
            <p className="section_p">As if on cue, the In-Betweener immediately tries to destroy me upon gaining his freedom. However, as calculated his powers don't work outside the sphere. Without any powers, I easily overpower him and remove the Soul Gem from his brow. I make a hasty departure. I do not want to be around when his masters Lord Chaos and Master Order arrive to deal out his punishment.</p>
            <br />
            <p className="section_p">Shortly after returning from the Nexus and basking in the glow of victory, I am suddenly confronted by Mistress Death and one of her minions. Speaking through the minion, she lets me know of her displeasure with my proposition to serve the In-Betweener. I try to convince her that it was all part of a ruse to obtain the Soul Gem. With a suspicious stare, she and her minion depart. I am left to continue my work with the knowledge that she is watching my every move.</p>
          </div>
        </div>
      </section>
      <section id="time">
        <div className="gem text-center">
          <h1>
            <img src={time} alt="time gem" />
          </h1>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h1 className="section_title">time</h1>
            <div className="image-wrapper float-left pr-4 pb-4 pt-0">
              <img className="photo_one" src={gardenerTwo} alt="The Gardener" />
            </div>
            <p className="section_p">
              With both the Power and Soul Gems in my possession, I turn my attention to retrieving the <strong>Time Gem</strong>. It is currently being held by a peaceful being called <strong>The Gardener</strong>. The Gardener has dedicated his entire being to creating gardens of unparalleled beauty in all the universe.
            </p>
            <br />
            <p className="section_p">When I arrive on Gardener's planet I am genuinely taken aback by all the breathtaking beauty that I see. His creations are amongst the most beautiful things that I have ever seen in life.</p>
            <br />
            <div className="image-wrapper float-right pl-4 pb-4">
              <img className="photo_two" src={gardenerOne} alt="The Gardener" />
            </div>
            <p className="section_p">The Gardener has been expecting me. By now the word has gotten out that I have been collecting gems. We exchange pleasantries and then get down to business. I make it clear that I need the Time Gem for my dreams and he likewise for his gardens.</p>
            <br />
            <p className="section_p">Gardener makes the first move. He attempts to strangle me with some of his vegetation. I easily escape this pitiful attack. Now it's my turn. Using the power of the Power Gem I turn some of the Gardener's very own creations against him. The Time Gem is now mine.</p>
            <br />
            <p className="section_p">I depart Gardener's world with a small bit of regret. I did not want to harm him. If only he had just given me the gem. He and I both knew full well that he had no chance of defeating me. Instead, Gardener chose defiance and learned the hard way that those who defy Thanos must pay a steep price.</p>
          </div>
        </div>
      </section>
      <section id="space">
        <div className="gem text-center">
          <h1>
            <img src={space} alt="space gem" />
          </h1>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h1 className="section_title">space</h1>
            <div className="image-wrapper float-right pl-4 pb-4 pt-0">
              <img className="photo_two" src={runnerOne} alt="The Runner" />
            </div>
            <p className="section_p">
              With three of the six Infinity Gems in my possession, I set my sites on the final three. I contact The Collector who holds the <strong>Reality Gem</strong>. I make him an offer he can't refuse. In return for his gem, I offer him an item so rare that he will graciously trade for it. I sincerely hope that the Collector does not know how to use the Reality Gem. For if he does, all is lost.
            </p>
            <br />
            <p className="section_p">
              After bartering with the Collector, I seek out <strong>The Runner</strong>, the fastest entity in the universe. He possesses the Space Gem. The Runner has been expecting me. In the blink of an eye, he attacks and destroys my hoverchair. I attempt to counter-attack but, my efforts are in vain against his supreme speed. I cannot touch him.
            </p>
            <br />
            <div className="image-wrapper float-left pr-4 pb-4 pt-2">
              <img className="photo_one" src={runnerTwo} alt="The Runner" />
            </div>
            <p className="section_p">The Runner begins to gloat. He informs me that unless I divulge why I've been collecting the gems, I will suffer death by high-speed beating. He plans to do this no matter what, so I share. I tell him how the Infinity Gems came to be as well as my grand ambition to sit at Mistress Death's side.</p>
            <br />
            <p className="section_p">The Runner starts gloating once more. He believes I am utterly defeated and gets ready to make the kill but I turn the tables. Now it's my turn to gloat. First, I mock him for having limited intelligence and vision. The fool did not even think to consider that I might use the power of the Infinity Gems already in my grasp. This oversight is his undoing. Next, I use the Time Gem to turn him old and decrepit and then into an infant. The Runner is now the offer that the Collector can't refuse. That is adding an Elder of The Universe to his vast collection.</p>
          </div>
        </div>
      </section>
      <section id="reality">
        <div className="gem text-center">
          <h1>
            <img src={reality} alt="reality gem" />
          </h1>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h1 className="section_title">reality</h1>
            <div className="image-wrapper float-left pr-4 pb-4 pt-0">
              <img className="photo_two" src={collectorOne} alt="The Collector" />
            </div>
            <p className="section_p">
              With baby Runner in tow, I teleport us to the Collector's location. When I make my eagerly awaited arrival, I do not disappoint. Upon seeing the Runner as an infant, he's both shocked and amazed. He tries hard to hide it but, I can see the excitement and lust in his eyes for this prize. He is well pleased with what I offer in return for his <strong>Reality Gem</strong>.
            </p>
            <br />
            <p className="section_p">
              We consummate our deal. <strong>The Collector</strong> believes he is the clear-cut winner in this one-sided trade. He thinks I have dupped myself. According to him, the Reality Gem I just bartered for is nothing more than a worthless piece of glass. He knows because he thoroughly tested and studied it.
            </p>
            <br />
            <p className="section_p">Moments later, the Collector finds out just how wrong he was. I unleash a small portion of the Reality Gem's power upon him, nearly destroying him. Only by experiencing his reality crumbling and then being remade does he realize the truth of what he once had. He begs me to take it away. Whereas lack of vision was Runner's downfall, arrogance is the Collector's. He assumed that since he could not get the gem to work, it was worthless.</p>
            <br />
            <div className="image-wrapper float-right pl-4 pb-4 pt-2">
              <img className="photo_one" src={collectorTwo} alt="The Collector" />
            </div>
            <p className="section_p">I gladly comply with the Collector's plea but leave him with a parting gift. I release Runner from under the Time Gem's influence. He reverts to his former self. He's furious that the Collector has deeply betrayed him. Just like he, Champion, and Gardener, the Collector is also an Elder of The Universe. Runner pays the Collector in kind for his treachery. As I teleport away, I can hear the Collector screaming and begging for mercy as Runner pummels him mercilessly at super speed.</p>
          </div>
        </div>
      </section>
      <section id="mind">
        <div className="gem text-center">
          <h1>
            <img src={mind} alt="mind gem" />
          </h1>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h1 className="section_title">mind</h1>
            <div className="image-wrapper float-right pl-4 pb-4 pt-0">
              <img className="photo_two" src={grandOne} alt="The Grandmaster" />
            </div>
            <p className="section_p">
              I have now come to the grand finale of my quest. All that is left is the retrieval of the <strong>Mind Gem</strong>. It currently resides with <strong>The Grandmaster</strong>, master of all games, and another Elder of the Universe. A grand finale with a grandmaster. Oh, the irony.
            </p>
            <br />
            <p className="section_p">I arrive on the Grandmaster's world to face this ultimate gamer. Unlike my previous adversaries, he is a master strategist who has had time to prepare for me. I have no doubts that he has covered every angle and taken every precaution to ensure his victory and my defeat.</p>
            <br />
            <p className="section_p">The Grandmaster has the Mind Gem encased in a tamper-proof device. The device is programmed to randomly teleport the gem to another dimension should its force fields be breached. It will only deactivate if I beat him in a game of his choosing. Only then will the Mind Gem be mine. In the unfathomable event that I lose, my five gems become his.</p>
            <br />
            <div className="image-wrapper float-left pr-4 pb-4">
              <img className="photo_one" src={grandTwo} alt="The Grandmaster" />
            </div>
            <p className="section_p">The Grandmaster chooses for us a virtual kill shot combat game. The loser will not only lose their lives there but in real life as well. In our virtual battle, I get the best of him. As I am about to finish him off, my battle armor suddenly becomes encased in fungus. Surprise! The Grandmaster has cheated.</p>
            <br />
            <p className="section_p">I am not without my tricks. The Grandmaster soon finds out that he was merely facing a perfect android replica of me. The real me proceeds to destroy the gaming device, thus killing the Grandmaster and freeing the Mind Gem. Finally, all the Infinity Gems are mine! The universe belongs to me now!</p>
          </div>
        </div>
      </section>
      <section id="epilogue">
        <div className="gem text-center">
          <h1>
            <img src={gauntlet} alt="Infinity Gauntlet" />
          </h1>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h1 className="section_title">epilogue</h1>
            <div className="image-wrapper float-left pr-4 pb-4">
              <img className="photo_one" src={thanosTwo} alt="Thanos" />
            </div>
            <p className="section_p">Earthlings have a saying that goes like this: Money can't buy you, love. In my case, ultimate power could not procure me love or happiness. After all that I did and went through to please Mistress Death, she still rejected me. I risked life and limb to acquire the Infinity Gems. She wanted half the living beings in the universe erased and, I did as she requested. Adding insult to injury, she never even thanked me for my efforts. The painful truth is that while I love Mistress Death, she does not love me. Nothing that I did for her will ever change that. I was merely a tool to her.</p>
            <br />
            <p className="section_p">A broken heart at the hands of Mistress Death was only the start of my troubles. My act of love had drawn the attention of the remaining universe. Plus, the power of the Infinity Gauntlet had driven me insane. I began making some highly questionable decisions. I allowed that imp Mephisto to act as an advisor. I brought my granddaughter Nebula to my side. I tortured her and made her into a wretch. This decision would come back to haunt me.</p>
            <br />
            <p className="section_p">I allowed myself to engage in a meaningless battle with a team of Earth's Mightiest Heroes, The Silver Surfer, and Adam Warlock. They came to confront me once they found out about my act. I could have prevented this but, my ego wanted it. I even reduced my power to allow them a one-in-a-million chance of winning. They were easily defeated but, I nearly lost the gauntlet in the process.</p>
            <br />
            <div className="image-wrapper float-right pl-4 pb-4">
              <img className="photo_one" src={thanosThree} alt="Thanos" />
            </div>
            <p className="section_p">
              Later, I engaged in a fierce battle with a group of some of the universe's most powerful entities. Beings such as Galactus, The Celestials, Lord Order, and Master Chaos all came together to take me down. In the end, I was victorious. I even took on Eternity, the embodiment of our universe. I defeated him and usurped his role. My megalomania was at its peak. The power of the Infinity Gems had no limit! Then it happened. Nebula removed the Infinity Gaunlet from my hand. I was so caught up in my acts of egotism that she had become beneath my notice. Thus the brief reign of <strong>Thanos of Titan</strong>, supreme ruler of the universe, was no more.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
