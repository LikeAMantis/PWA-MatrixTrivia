const questions = [
        {
          question: `"The Matrix": "I know why you're here; Neo. I know what you've been doing... why you hardly sleep; why you live alone and why; night after night; you sit by your computer." Who said this to Neo?`,
          answer: 'Trinity',
          explanation: "This scene is near the beginning of the movie; before Neo wakes up in the 'real world'. Trinity has been tasked with contacting Neo and bringing him to Morpheus; she finds him at a club; where he has gone out with a couple of friends. What Trinity is referring to; in the quote; is how Neo has suspicions of the existence of the Matrix.",
          options: ''
        },
        {
          question: 'What is the training program that everyone misses the first time?',
          answer: 'The Jump Program',
          explanation: `"I'm trying to free your mind; Neo; but I can only show you the door. You're the one that has to walk through it. Tank; load the jump program. You have to let it all go; Neo; fear; doubt; and disbelief. Free your mind."`,
          options: ''
        },
        {
          question: 'During the opening sequence; who is the first person to speak?',
          answer: 'Cypher',
          explanation: `We do not see the speaker; but you hear Cypher's voice answer; "Yeah?" to which Trinity replies; "Is everything in place?"`,
          options: ''
        },
        {
          question: 'What scene opens "The Matrix"?',
          answer: 'Telephone conversation',
          explanation: "No; as far as we can tell; Agent Smith has only one tie! Seriously though; the telephone convesation is between Cypher & Trinity; and gives away much of the plot; although you wouldn't understand it at the time.",
          options: ''
        },
        {
          question: 'What was the first word that Cypher said; in the beginning sequence?',
          answer: '"Yeah?"',
          explanation: 'Shortly before Trinity says her first words; Cypher says "Yeah?" as soon as he picks up the phone.',
          options: ''
        },
        {
          question: "'Unfortunately no one can be told what the Matrix is; you have to see it for yourself.'",
          answer: 'Morpheus',
          explanation: 'Morpheus says this to Neo when he asks what the Matrix is. This is said during the progress to convince Neo that he is the One. Morpheus is played by Laurence Fishburne.',
          options: ''
        },
        {
          question: `Just prior to meeting with the Oracle; we see Morpheus' crew eating in the mess hall of the Nebuchadnezzer. According to Dozer the food they consume is 'a single-celled protein combined with synthetic aminos; vitamins
      and minerals.' According to Mouse; this food reminds him of which breakfast treat?`,
          answer: 'Tastee wheat',
          explanation: "The crew is rather cruel to Neo during this scene; Mouse claiming that the goop they eat is like 'runny eggs' and Apoc suggesting it has the consistency of 'a bowl of snot'. Mouse also suggests that it reminds him of 'Tastee Wheat'. Switch points out that Mouse has technically never tried Tastee Wheat; which elicits further philosophic discussion from Mouse. I sure hope that I; technically or otherwise; never have to try Tastee Wheat after having seen this film...",
          options: '[ Cream-o-wheat ] [ Tastee wheat ] [ Wheaties ] [ Wheat germ ]'
        },
        {
          question: "Neo's shocking extraction from the Matrix is the early climax of the film; but it also marks a new beginning. Before any explanations can be provided; however; Neo requires physical therapy to restore his atrophied muscles to health. During his therapy; Morpheus makes reference to which body part(s) that Neo has never used before?",
          answer: 'Eyes',
          explanation: `Along with electrically stimulating his atrophied muscles; Neo goes through surgery to have dozens of implants removed. During his rehabilitation; he complains that his eyes hurt; a result of never having used them
      before according to Morpheus. This line has double meaning. He literally has never used his eyes for their function; to see. He also has figuratively had his eyes opened to the real world.`,
          options: '[ Eyes ] [ Ears ] [ Mouth ] [ Brain ]'
        },
        {
          question: "'The Matrix' opens with a conversation; and a rather revealing one at that if one is paying attention. Which two characters have this introductory discussion?",
          answer: 'Trinity and Cypher',
          explanation: "This elucidating conversation includes a prediction by Cypher that 'we're gonna kill him'; in reference to Neo; and also initiates suspicion that an informant exists among the protagonists. Of course; a neophyte watcher of the film would not pick up these nuances; and the conversation comes off as mostly cryptic to the first-time viewer. Listening to the conversation again after having watched the film a number of times; however; allows for some keen insight.",
          options: '[ Trinity and Cypher ] [ Neo and Trinity ] [ Trinity and Morpheus ] [ Morpheus and Cypher ]'
        },
        {
          question: 'On what level do Neo and Trinity stop the elevator after the lobby shootout?',
          answer: '41',
          explanation: 'If you look when Trinity pushes the emergency stop button; it flashes "Level 41....Have a Nice Day".',
          options: ''
        },
        {
          question: 'When Morpheus is explaining how things got the way they are to Neo; he uses an old TV set. What are the two words on the back of this TV?',
          answer: 'Radiola Television',
          explanation: `If you watch as the camera glides across the back of the TV while Morpheus is speaking; you can read it. By the way; Neo never directly sees for himself the "scorched" surface that Morpheus describes - he only sees
      it on a TV. How does he know for sure that Morpheus is being truthful?`,
          options: ''
        },
        {
          question: 'How many lines does DuJour have in the entire film?',
          answer: '2',
          explanation: "She has two - 'Definitely.' and 'Come on; it'll be fun. I promise.'",
          options: ''
        },
        {
          question: `"The Matrix": "We're willing to wipe the slate clean; give you a fresh start. All that we're asking in return is your cooperation in bringing a known terrorist to justice." Who tried to make this deal?`,
          answer: 'Agent Smith',
          explanation: "The agents; led by Mr. Smith; learn of Neo through their (as yet unrevealed) spy. Despite efforts by Morpheus to help Neo to escape capture; the agents do so; and proceed to interrogate him. They play it as though they will cut a deal with Neo (or; Mr. Anderson) in order to get his help to capture the 'terrorist' known as Morpheus.",
          options: ''
        },
        {
          question: 'When Morpheus takes Neo into the Agent Training Program; he explains that all of the people in it are still part of the system. Which of the following was NOT one of his examples?',
          answer: 'Doctors',
          explanation: '"Business men; teachers; lawyers; carpenters. The very minds of the people we are trying to save. But until we do; these people are still a part of that system; and that makes them our enemy."',
          options: '[ Carpenters ] [ Teachers ] [ Doctors ] [ Businessmen ]'
        },
        {
          question: 'In the opening sequence; what is the telephone number that is traced?',
          answer: '312-555-0690',
          explanation: '"Call Trans Opt: received. 2-19-98 13:24:18AM REC:log> Trace Program Running. 312 555 0690>" is the opening visual sequence.',
          options: ''
        },
        {
          question: 'All these legendary lines appear in "The Matrix"; right? Wrong! Only one of these lines is actually SPOKEN. Which one is it?',
          answer: '"Free my mind."',
          explanation: `That's right. The actual lines are "Only try to realise the truth; that there is no spoon" and "...a virus. Human beings are a disease". In fact; "Luke; I am your father" is not only absent from "The Matrix"; it isn't even heard in any 'Star Wars' film! And yes; we have WAY too much free time.`,
          options: '[ "Remember'
        },
        {
          question: 'How many guards did Trinity take on in the beginning fight sequence?',
          answer: '4',
          explanation: 'This scene was a very cool way to start the movie; as I am sure you all agree! Carrie Anne-Moss performs stunts such as running up the wall and "bullet-time" when she kicks the first guard.',
          options: ''
        },
        {
          question: "'I know kung fu.'",
          answer: 'Neo',
          explanation: 'Neo says that to Morpheus when he challenges him; after he has been injected with the knowledge of how to practice kung fu. Neo is played by Keanu Reeves.',
          options: ''
        },
        {
          question: "Neo's first return to the Matrix occurs at this juncture in the film. On the way to visiting the Oracle; Neo gazes wistfully at his former home; realizing that many formerly familiar sights and smells are now only fleeting impressions of his once enslaved mind. At one point during the drive; he longingly recalls which food item?",
          answer: 'Noodles',
          explanation: "Neo spots a restaurant that he remembered had 'really good noodles'. He realizes with a pained expression; however; that digital noodles have no flavor. The ever optimistic Trinity interprets the situation in a different way...'The Matrix cannot tell you who you are.' Nor can it tell you which noodles to enjoy...",
          options: '[ Pot stickers ] [ Noodles ] [ Spaghetti ] [ Lasagna ]'
        },
        {
          question: "When Neo is ambulatory; Morpheus leads him on a small tour of his ship; a hovercraft that he uses to make his way around the 'real world'. Morpheus' ship is named for Nebuchadnezzer; a king of which ancient empire?",
          answer: 'Babylon',
          explanation: "Morpheus' vessel is called the Nebuchadnezzer; the name of three ancient kings of Babylon. If you watch closely during the tour you will see that the Nebuchadnezzer was 'made in the USA' in the year 2069.",
          options: '[ Babylon ] [ Assyria ] [ Persia ] [ Egypt ]'
        },
        {
          question: 'After discovering that her phone line is tapped; Trinity is forced to escape from the truly wretched confines of the roach motel in which she is holed up. After contacting Morpheus; Trinity is instructed to reach a public phone on a street corner. The street corner is located at the intersection of which two streets?',
          answer: 'Wells and Lake',
          explanation: "During this intense opening fight scene we see glimpses of the possibilities within this film. Trinity is able to defy gravity; leap across building tops and literally 'fly'. In addition; we discover through one reverse kick to the head of a policeman that she is extraordinarily flexible! We are also introduced to the three agents in the film; all of whom apparently have similar super powers.",
          options: '[ Wells and Lake ] [ Market and Ash ] [ University and Oxford ] [ State and Indiana ]'
        },
        {
          question: 'Whom does Thomas Anderson help to take out her garbage?',
          answer: 'Land Lady',
          explanation: "When Agent Smith is reading Thomas Anderson his two records (Thomas A. Anderson and 'Neo') he states that Thomas Anderson goes to work; pays his taxes; and helps his land lady take out her garbage.",
          options: ''
        },
        {
          question: 'With Morpheus captured; who is the most senior-ranking member of the group?',
          answer: 'Trinity',
          explanation: "Trinity tells Neo she is the second-highest ranking member of the crew when Neo tells her she can't go with him to save Morpheus.",
          options: ''
        },
        {
          question: 'What is the first name of the actress who plays Switch?',
          answer: 'Belinda',
          explanation: '',
          options: ''
        },
        {
          question: `"The Matrix": "I know what you're thinking; 'cause right now I'm thinking the same thing. Actually; I've been thinking it ever since I got here: Why oh why didn't I take the BLUE pill?" Who was this; bemoaning his fate?`,
          answer: 'Cypher',
          explanation: `After Neo has awakened in the real world and is adjusting to life aboard the Nebuchadnezzar; he has a brief chat with Cypher; sharing some homemade alcohol. Here we get some foreshadowing; as we see how much Cypher
      wishes he had never ever become aware of the Matrix.`,
          options: '[ Federal programs ] [ Controlling software ] [ Sentient programs ] [ Interactive Sentinels ]'
        },
        {
          question: 'What are Agents?',
          answer: 'Sentient programs',
          explanation: `"Sentient programs. They can move in and out of any software still hard wired to their system. That means that anyone we haven't unplugged is potentially an agent. Inside the Matrix; they are everyone and they are no one."`,
          options: ''
        },
        {
          question: "What is the name of the man that comes to Neo's apartment to pick up a disc?",
          answer: 'Choi',
          explanation: '"Something wrong; man? You look a little whiter than usual;" was one of the lines spoken by Choi.',
          options: ''
        },
        {
          question: "Which member of the crew designed 'The woman in the red dress'?",
          answer: 'Mouse',
          explanation: "It is the young Mouse who is responsible for programming the woman in the red dress. We believe he was doing valuable and noble work; and at least he had a purpose! Can anyone tell us what Apoc's function in the film was? (Aside from being killed that is.)",
          options: '[ Dozer ] [ Mouse ] [ Cypher ] [ Tank ]'
        },
        {
          question: 'What were the exact words of the policeman when Agent Brown jumped from one building roof to another?',
          answer: `"That's impossible."`,
          explanation: 'All the guards looked shocked when Agent Smith jumps the jump; in chase of Trinity. She then jumps into the opposite building and manages to escape - phew!',
          options: ''
        },
        {
          question: "'The answer is out there; Neo. It's looking for you. And; it will find you; if you want it to.'",
          answer: 'Trinity',
          explanation: 'This is said by Trinity to Neo when she; like Morpheus; wants to believe that he is the One. Trinity is played by Carrie-Anne Moss.',
          options: ''
        },
        {
          question: 'Before meeting with the Oracle; Neo is ushered into a room full of children doing extraordinary things. The woman who escorts Neo in to see the children refers to these youths by what collective term?',
          answer: 'Potentials',
          explanation: `Several of the 'Potentials' are featured doing extraordinary things such as levitating blocks; bending spoons with their mind and reading Chinese literature (maybe the most difficult thing of all!) The 'spoon boy';
      as I shall call him; is the only one who talks with Neo. In a very Buddhist sense; he informs Neo that 'there is no spoon.'`,
          options: ''
        },
        {
          question: 'After the tour of the ship; Morpheus finally feels that the time has come to explain the nature of the Matrix to Neo. It is here that Neo learns of the conflict between the humans and the machines. He also discovers that human beings are being used as a power source for the machines. Morpheus mentions one other power source that the machines have learned to harness; what is this power source?',
          answer: 'Fusion',
          explanation: "During the initial stages of their existence as sentient entities the machines were reliant on solar energy. However; according to Morpheus; human beings 'scorched the sky' in order to cut off that source once the wars between the two rival lifeforms began. It was this action that forced the machines to resort to enslaving human beings and making them into their 'batteries'; along with 'a form of fusion'. Hmmph...one would think the fusion would be enough!",
          options: ''
        },
        {
          question: `The scene now shifts to a dark apartment. Neo; played by Keanu Reeves; is napping in front of his active computer. Suddenly; the computer screen goes blank; and three words appear...'Wake up Neo.' Promptly enough; Neo
      loses his slumber just in time to see another cryptic message on his monitor; 'The Matrix has you.' A third message soon appears; an allusion to which piece of classic literature?`,
          answer: 'Alice in Wonderland',
          explanation: "The second message reads; 'Follow the white rabbit'; a reference to Lewis Carroll's classic 'Alice in Wonderland'. This 'Alice' motif continues throughout the first quarter of the film. A third message follows on Neo's computer screen; namely 'Knock; knock; Neo'. He has guests...",
          options: '[ Alice in Wonderland ] [ Robinson Crusoe ] [ Tom Sawyer ] [ Crime and Punishment ]'
        },
        {
          question: 'What does Neo mutter before he shoots the elevator wire?',
          answer: '"There is no spoon"',
          explanation: `After the lobby shootout; Neo and Trinity are on top of the elevator. Just as he's about to shoot the wire; (which would cause the elevator to drop and them to ascend to the top) he whispers to himself; "There is no spoon".`,
          options: ''
        },
        {
          question: 'Which artist sings the track that plays when Neo and Trinity first meet in the underground nightclub?',
          answer: 'Rob Zombie',
          explanation: "It is 'Dragula' by Rob Zombie; originally from his 'Hellbilly Deluxe' album.",
          options: '[ Rage Against the Machine ] [ Sepultura ] [ The Cure ] [ Rob Zombie ]'
        },
        {
          question: 'Name the crew member who dies first.',
          answer: 'Mouse',
          explanation: "It was Mouse who died first. He couldn't escape from the building and was shot.",
          options: ''
        },
        {
          question: `"The Matrix": "You're cuter than I thought. I can see why she likes you." Who makes this observation?`,
          answer: 'The Oracle',
          explanation: `Morpheus takes Neo to see the Oracle; a mysterious character hidden within the Matrix who has the power of foresight. We learn (after she meets with Neo) that she had told Morpheus sometime previously that he would
      find 'The One'. However; in her conversation with Neo; she pretty much blatantly tells him that he is *not* the one. In hindsight; it becomes evident that Neo had not yet made the mental shift necessary to become 'The One'.`,
          options: ''
        },
        {
          question: "When Morpheus explains that Neo will have to fight the agents; he also tries to tell Neo that when he's ready; he won't have to WHAT?",
          answer: 'dodge bullets',
          explanation: '"What are you trying to tell me; that I can dodge bullets?"',
          options: ''
        },
        {
          question: 'What is the name of the woman with the white rabbit tattoo?',
          answer: 'DuJour',
          explanation: `Trinity tells Neo to "Follow the white rabbit" in an obvious reference to "Alice in Wonderland". As Morpheus says; "I imagine that right now you're feeling a bit like Alice; tumbling down the rabbit hole?"`,
          options: ''
        },
        {
          question: 'In the film; two characters say the line "Welcome to the real world". Morpheus and who else?',
          answer: 'Cypher',
          explanation: 'Grr; how we hate that treacherous Cypher! He says "Welcome to the real world; huh; baby" gloatingly after revealing himself to be the traitor. Morpheus says the same line earlier as a welcome to the newly freed Neo.',
          options: ''
        },
        {
          question: "What was the room number of Mr. Anderson's apartment?",
          answer: '101',
          explanation: 'This is the scene when we first get to see Neo - "The One". The door number is shown when he opens the door to his drug-abusing "friends"!',
          options: ''
        },
        {
          question: "'What are you waiting for? You're faster than this. Don't think you are . . . know you are.'",
          answer: 'Morpheus',
          explanation: 'Morpheus spurs Neo when they practice kung fu in the construct.',
          options: ''
        },
        {
          question: "Perhaps to Neo's surprise; the Oracle appears simply as a kindly old lady. Kindly though she may be; she has wisdom to impart; and does so for Neo's benefit. At one point; she prompts Neo to look at a wooden plaque positioned above her kitchen door frame. What phrase appears on this plaque?",
          answer: 'Temet Nosce',
          explanation: "'Temet nosce' is a Latin phrase meaning 'know thyself'. This is a direct reference to the ancient Greek Oracle at Delphi; where the phrase 'gnothe seauton' could be found inscribed. ('Gnothe seauton' is the phrase in its original Greek; perhaps it would have been a more correct rendering to have used the Greek rather than the Latin...but who's counting?)",
          options: ''
        },
        {
          question: "Following his shocking indoctrination regarding the Matrix; Neo immediately begins training in the martial arts. At this point he meets the 'operator'; Tank; who introduces himself as a 'genuine child of Zion'; the last Earth city. Who is the only other member of Morpheus' crew to have been born in Zion?",
          answer: 'Dozer',
          explanation: "Tank; played by Marcus Chong (son of Tommy Chong of 'Cheech and Chong'); and Dozer are introduced as brothers; and Tank calls himself a 'genuine child of Zion' upon first chatting with Neo. Because Tank and Dozer were born in Zion; they don't have the implants and the 'plug' on the backs of their heads...hence they are not equipped to enter the Matrix.",
          options: ''
        },
        {
          question: "A bit out of sorts; the groggy and disoriented Neo is next visited by an interesting rabble who apparently have some shady business dealings with our hero. In return for a wad of cash; Neo provides a mini-disc to his friend Choi. Neo has the disc stashed in a hollowed-out book called 'Simulacra and Simulation'; a work by which French social theorist?",
          answer: 'Jean Baudrillard',
          explanation: `It seems that the creators of the film; the Wachowski brothers; are voracious readers of philosophy and; more especially; post-modernist social theory. The theme of the Baudrillard volume certainly fits with the film; discussions inside the tome revolve around the simulated reality that human beings have created for themselves using symbols (simulacra). Of course; this sort of literature is very dense and difficult to understand; but it's well
      worth a look if you have the time.`,
          options: '[ Jean Baudrillard ] [ Pierre Bourdieu ] [ Michael Foucault ] [ Jacques Lacan ]'
        },
        {
          question: 'What are the first words spoken after the first phone call is finished?',
          answer: '"Freeze! Police!"',
          explanation: 'After Trinity finishes talking to Cypher (in the very beginning of the movie); the police kick the door open and yell; "Freeze! Police!"',
          options: ''
        },
        {
          question: 'What does Apoc say just before he is unplugged by Cypher?',
          answer: "'Trinity!'",
          explanation: "Apoc looks at Trinity as if he knows he is about to die; and says her name. 'Not like this!' is what Switch says before she dies.",
          options: ''
        },
        {
          question: "Fill in the blank: 'You're ____.' 'So are you.'",
          answer: 'Empty',
          explanation: 'This was in the subway fight scene between Neo and Agent Smith. The subway was entirely computer generated.',
          options: ''
        },
        {
          question: '"The Matrix": "Whoa. Déjà vu." Who said this; upon seeing the same black cat twice?',
          answer: 'Neo',
          explanation: `Shortly after visiting the Oracle; Cypher betrays his crewmates to the agents. When Neo sees the black cat twice; the other members of the group know immediately that the déjà vu is actually a glitch in the matrix;
      caused by something being changed. In this case; the change is turning the building they are in into a big trap.`,
          options: ''
        },
        {
          question: 'When sentinels are located; Morpheus asks Dozer if Zion sent word; to which Dozer replies; "No; another ship." What is the name of that ship?',
          answer: 'We never learn',
          explanation: 'It is never mentioned what the name of the other ship is. Sorry for the earlier confusion on this one to anyone that got it wrong before when I had originally put "The Osiris" as the correct answer.',
          options: '[ The Osiris ] [ The Logos ] [ We never learn ] [ The Hammer ]'
        },
        {
          question: "What is Neo's apartment number?",
          answer: '101',
          explanation: 'We see the room number when Choi goes to retrieve his disc.',
          options: ''
        },
        {
          question: 'What was "The Question" that Trinity and Neo talk of in the club?',
          answer: '"What is the Matrix?"',
          explanation: 'This scene is the first time that Neo and Trinity meet - who would have guessed the importance of it?',
          options: ''
        },
        {
          question: "'So; what do you need; besides a miracle?'",
          answer: 'Tank',
          explanation: "Tank wonders what Neo needs when he's going in to save Morpheus; together with Trinity. The answer is 'guns. Lots of guns.' Tank is played by Marcus Chong.",
          options: ''
        },
        {
          question: "Aside from leaving the Oracle's abode with increased awareness of his self and his mission; what item does Neo also take with him?",
          answer: 'Cookie',
          explanation: "Neo bends the spoon; breaks the vase and reads the plaque...but all remain in the Oracle's possession. He does leave with a delicious cookie; which is of the oatmeal variety (yuck...give me chocolate-chip!)",
          options: ''
        },
        {
          question: "Speaking of 'Zion'; the last human city; from which language is this name (Zion) ultimately derived?",
          answer: 'Hebrew',
          explanation: `The name 'Zion' is from the Hebrew 'siyyôn'. It refers to the historic land of Israel and to the Jewish people who reside there. The word has also been employed to describe a sacred place devoted to God; and/or a utopia. Zion's National Park in southern Utah is probably the most recognized place to have adopted this name. According to Tank; Zion is located underground near the Earth's core; where it's still warm. However; it wouldn't really be
      possible for humans to reside 'near the Earth's core'; as Tank puts it...the pressure would be great. I have rationalized Tank's claim off to hyperbole...a required skill of any film fan.`,
          options: '[ Hebrew ] [ Hindi ] [ Greek ] [ Latin ]'
        },
        {
          question: "Neo; prompted by a tattoo he sees on the shoulder of Choi's lady friend; decides to join his visitors at a nearby nightclub. Here; he meets Trinity for the first time. While chatting with Trinity in the seedy nightclub; which performer's music plays in the background?",
          answer: 'Rob Zombie',
          explanation: "The Rob Zombie song heard in the background is 'Dragula'; one of the various hits from the hard-core Matrix soundtrack (a song by the band Prodigy can also be heard). The tattoo referred to here is the white rabbit; which Neo/Alice follows to the nightclub. Before Neo leaves the club that night; Trinity manages to further intrigue and confuse him with discussions of Morpheus and the Matrix...",
          options: '[ Rob Zombie ] [ Marilyn Manson ] [ Rage Against the Machine ] [ Nine Inch Nails ]'
        },
        {
          question: 'How many units did the Lieutenant send in?',
          answer: '2',
          explanation: `When Agent Smith talks to the Lieutenant; the Lieutenant tells Agent Smith; "I sent in 2 units and they're bringing her (Trinity) down now."`,
          options: ''
        },
        {
          question: 'On which shoulder does DuJour have the white rabbit tatoo?',
          answer: 'Left',
          explanation: 'The "white rabbit" is a reference to the "Alice in Wonderland" story by Lewis Carrol. (Please; no notes about it actually being titled something else; you know which story I mean!)',
          options: ''
        },
        {
          question: "What colour is the vase that Neo knocks over in the Oracle's kitchen?",
          answer: 'Green',
          explanation: "My theory is that he wouldn't have knocked it over if she hadn't said anything; as he wouldn't have moved to see which vase she meant; therefore wouldn't have knocked it to the floor. :)",
          options: ''
        },
        {
          question: '"The Matrix Reloaded": "I stand here; before you now; truthfully unafraid. Why? Because I believe something you do not? No; I stand here without fear because I remember." Who says this; as part of his speech to the people of Zion?',
          answer: 'Morpheus',
          explanation: 'With the knowledge of multiple machines gathered to begin an assault on Zion; Morpheus speaks to the people to remind them that humanity has survived against all odds. By virtue of that fact; Morpheus tells everyone that he has courage not because of his (implied) belief in Neo as The One; but because of the people of Zion.',
          options: ''
        },
        {
          question: "What is Cypher's real last name?",
          answer: 'Reagan',
          explanation: 'During the scene when Agent Smith discusses the plan with the informant; Cypher; he calls him Mr. Reagan.',
          options: ''
        },
        {
          question: 'When Morpheus is aiding Neo through the office building; where is the first place Morpheus instructs Neo to go when the Agents come?',
          answer: 'To an empty cubicle',
          explanation: `Morpheus says "I can guide you but you must do exactly as I say. The cubicle across from you is empty." Neo is then instructed to stay there for a moment; go to the end of the row; into the office at the end of the
      hall; and to a scaffold out the window.`,
          options: ''
        },
        {
          question: 'What colour is the grass inside the matrix?',
          answer: 'green',
          explanation: `Yep; its green; like pretty much everything else in the matrix. If its "interesting information" you want; 'It's not easy being green' was sung by Kermit the frog. There; we spoil you!`,
          options: ''
        },
        {
          question: 'What colour tie did Neo wear to work?',
          answer: 'Black',
          explanation: "We begin to realise how boring Neo's everyday life is in this scene. He is spoken to by his boss; Mr. Rhinehart; after being late for work again.",
          options: ''
        },
        {
          question: "'It means; buckle your seatbelt; Dorothy. 'Cause Kansas; is goin' bye-bye.'",
          answer: 'Cypher',
          explanation: "This is said when Neo asks about the pill he took. It's designed to disrupt his input/output carrier signal so they can pinpoint his location. Cypher is played by Joe Pantoliano.",
          options: ''
        },
        {
          question: "During Neo's combat training Tank 'programs' him to learn a number of different forms of hand-to-hand combat. Which is the first program we see loaded?",
          answer: 'Jujitsu',
          explanation: "Jujitsu is a weaponless martial art of traditional Japan; the parent of the more modern Judo. Neo is also programmed to learn Kempo; Tae Kwan Do; Savate and Drunken Boxing; and he announces after his training that he 'knows Kung Fu'. The reference to 'Drunken Boxing' is an homage to Woo-ping Yuen; who served as the trainer and coordinator for the fighting sequences in this film. Jackie Chan starred in two films entitled 'Drunken Master' ('Zui Quan' in Mandarin; 'Jui Kuen' in Cantonese); the first of which was directed by Yuen in 1978.",
          options: '[ Jujitsu ] [ Tae Kwan Do ] [ Kempo ] [ Drunken Boxing ]'
        },
        {
          question: 'Habitually late for work; we find Neo being chewed out in the following scene by his condescending boss. At which faceless corporate entity does Neo work?',
          answer: 'Metacortex',
          explanation: "We're not certain what exactly is done at Metacortex; but we do discover that Neo; aka Thomas Anderson; has his very own cubicle; a la Dilbert. It's no wonder that Neo gives up this meaningless job to discover the secrets of the Matrix. The name 'Metacortex' is an interesting one...another hint at the deeper meaning of the film; that is; escaping the bounds of what we believe is real in our minds (meta = to go beyond; cortex = outer covering; in this case a reference to the cerebral cortex of the brain).",
          options: '[ Metacortex ] [ Primaneutics ] [ Alphametrix ] [ Theradatics ]'
        },
        {
          question: 'After Morpheus makes the big jump in the jump program; what does Neo exclaim?',
          answer: '"Whoa!"',
          explanation: 'After Morpheus makes the big jump; Neo dumbfoundedly says; "Whoa!"',
          options: ''
        },
        {
          question: 'Agent Smith claims that this; above all else; is what he hates the most about having to be among humans in The Matrix.',
          answer: 'The smell',
          explanation: "Agent Smith says he smells 'the stink' of humanity everywhere; as he desperately tries to get the codes out of Morpheus.",
          options: ''
        },
        {
          question: 'Who describes Mouse as a virtual pimp?',
          answer: 'Switch',
          explanation: "While eating the 'breakfast of champions'. Which feels like you're eating runny eggs. Or a bowl of snot. :)",
          options: ''
        },
        {
          question: `"The Matrix Reloaded": "No; no point. Old men like me don't bother with making points. There's no point." Who makes this point in conversation with Neo?`,
          answer: 'Councillor Hamann',
          explanation: `Neo; in Zion; wakes up from a nightmare and steps outside. Councillor Hamann joins him on the catwalk and they go to visit the engineering level. With so much machinery around them; the conversation turns to the irony of the humans' dependence on all this machinery to keep them alive. As their conversation winds down; Councillor Hamann makes the statement quoted above in answer to a question by Neo; "So; we need machines and they need us. Is that your point; Councillor?"`,
          options: ''
        },
        {
          question: 'How long had Cypher been out of the Matrix before betraying his crew?',
          answer: '9 years',
          explanation: 'During the dinner scene with Agent Smith; Cypher says "After nine years; you know what I realize? Ignorance is bliss."',
          options: ''
        },
        {
          question: 'Where does Morpheus tell Neo to meet at?',
          answer: 'Adams Street Bridge',
          explanation: `Switch says; "Listen to me; Copper-top. We don't have time for twenty questions. Right now there's only one rule; our way or the highway." Neo meets Trinity; Switch and Apoc under the Adams Street Bridge.`,
          options: ''
        },
        {
          question: 'According to The Oracle; how soon will Neo feel better after hearing her disappointing news?',
          answer: 'When he has finished eating a cookie',
          explanation: "We reckon he never finished that cookie; as we don't notice a significant change of his mood; or indeed facial expression; throughout the rest of the film.",
          options: ''
        },
        {
          question: 'What were the first words that Morpheus said to Neo on the phone that was sent to his work place?',
          answer: '"Hello Neo."',
          explanation: 'The first line that Morpheus ever says to Neo. He describes to Neo how to avoid the agents who are coming for him; in this phone call.',
          options: ''
        },
        {
          question: "'What are you trying to tell me; that I can dodge bullets?'",
          answer: 'Neo',
          explanation: 'This is said when Morpheus tells Neo about the agents and the rules of the Matrix. He wants to make Neo believe that he can do anything; even fight off the agents.',
          options: ''
        },
        {
          question: `Returning to the strange mansion from whence they first entered the Matrix; Neo; Morpheus and friends soon discover that they are in grave danger. The first clue to their danger is a 'deja vu' Neo has; involving which
      creature?`,
          answer: 'Cat',
          explanation: "Okay; so wombat was an improbable choice...but they did film in Australia. According to Trinity; the phenomenon we refer to as 'deja vu' is in fact a 'glitch in the Matrix'. Glitches only occur when 'they change something'; the 'they' meaning the Agents; I would suspect.",
          options: '[ Rat ] [ Cat ] [ Dog ] [ Wombat ]'
        },
        {
          question: "After an exhilarating set of sparring matches that pit Neo against Morpheus; Tank is instructed to 'load the jump program'. Which; if any; of the crew members of the Nebuchadnezzer succeeded in their first attempt with the jump program?",
          answer: 'None',
          explanation: `And; of course; Neo fails too! (Though he doesn't fail to provide us with a 'whoa!' during the scene; Keanu's signature 'phrase'...) The truth is; as Cypher makes abundantly clear; 'everybody falls the first time.'
      I find it shocking that anyone could be expected to take such a leap of faith at such an early stage in their training...I would request that a giant swimming pool be added below; at the very least.`,
          options: '[ None ] [ Cypher ] [ Mouse ] [ Trinity ]'
        },
        {
          question: "Neo's day at work only gets worse following his meeting with his boss; the agents are coming! Morpheus attempts to help Neo escape the agents by delivering a package containing which of these devices?",
          answer: 'Telephone',
          explanation: "Morpheus' telephone trick is suitably impressive; but unfortunately he is unable to convince Neo to properly follow his instructions; which include climbing out on a window ledge towards a scaffolding. Naturally; Neo chickens out when a strong gust of wind sweeps the telephone out of his hand and down to the street far below. Frankly; Morpheus' expectations for Neo are a bit too high at this point...",
          options: '[ Telephone ] [ Two-way radio ] [ Machine gun ] [ Desktop computer ]'
        },
        {
          question: 'Morpheus claims that the human body generates roughly the same amount of energy as what size battery?',
          answer: '120 volt',
          explanation: 'The 25;000 is the number of BTUs Morpheus says we produce in a lifetime.',
          options: ''
        },
        {
          question: "What are Switch's last words?",
          answer: 'Not like this',
          explanation: 'She repeats this twice.',
          options: ''
        },
        {
          question: '"The Matrix Reloaded": "I am unplugged; a new man; so to speak; like you; apparently free." Who explains this to Neo?',
          answer: 'Agent Smith',
          explanation: `Agent Smith still exists after his confrontation with Neo at the end of the first film "The Matrix"; but now he is something different. He is no longer 'plugged in' to the matrix as one of its agents; but is able to act independently. He has also managed to learn how to duplicate himself - not simply take over people's bodies (as we saw agents do in "The Matrix") one at a time.`,
          options: ''
        },
        {
          question: 'What are the Agents after?',
          answer: 'Access codes to the Zion mainframe',
          explanation: 'Although the Agents were pursuing Morpheus; they only wanted him for the purpose of obtaining access codes to the Zion mainframe; as Smith explains to Cypher during the dinner scene.',
          options: ''
        },
        {
          question: 'What exactly is the red pill?',
          answer: 'Trace program',
          explanation: `Morpheus says "The pill you took is part of a trace program. It's designed to disrupt your input/output carrier signal so we can pinpoint your location." And Cypher replies; "It means buckle your seat belt; Dorothy; cause Kansas is going bye-bye."`,
          options: ''
        },
        {
          question: 'What colour was the liquid that was injected into Morpheus by the agents to make him talk?',
          answer: 'Metallic gray',
          explanation: 'This liquid is supposed to interfere with his alpha brain patterns; and in doing so; hack into his brain in the same way one hacks into a computer.',
          options: ''
        },
        {
          question: 'How many agents come looking for Neo whilst he is at work?',
          answer: '3',
          explanation: "Smith and his two followers are the ones who seek Neo. Neo is told by Morpheus how he can avoid them; but backs out of climbing up the scaffold due to a fear of the building's height.",
          options: ''
        },
        {
          question: "'Maybe they couldn't figure out what to make chicken taste like; which is why chicken tastes like everything.'",
          answer: 'Mouse',
          explanation: 'Mouse starts to discuss food during breakfast. He wonders if the taste of the food only is in their imagination. Mouse is played by Matt Doran.',
          options: '[ Tank ] [ Neo ] [ Agent Smith ] [ Mouse ]'
        },
        {
          question: 'Soon our friends find themselves under siege; as the Agents and their subservient shock troops ambush Morpheus and crew in the mansion. Which of the crew is the first to die?',
          answer: 'Mouse',
          explanation: 'Mouse is the first; and only; member of the crew to die in the mansion itself. Despite being equipped with two machine guns; Mouse is mowed down by a bevy of fire from several machine-gun toting policemen. I might add that Mouse is a terrible shot...',
          options: '[ Dozer ] [ Mouse ] [ Apoc ] [ Switch ]'
        },
        {
          question: "While meeting the 'lady in the red dress' in yet another training program; Morpheus and Neo are interrupted by a call from Dozer. Sentinels have been sent by the machines to 'search and destroy' Morpheus' ship. What is Dozer's nickname for the sentinels?",
          answer: 'Squiddy',
          explanation: "It seems that Dozer has encountered a few of these metallic nightmares in the past. According to Trinity and Dozer; they are 'killing machines designed for one thing...search and destroy.' Have you ever noticed that evil creatures in action films always resemble spiders; bugs or multi-legged sea life? Must be something scary about all those legs...",
          options: ''
        },
        {
          question: "Following Neo's failed attempt to escape; Agent Smith and his associates are able to capture Neo and take him into custody. They attempt to make a deal with Neo; but he isn't having any of it. Neo demands a phone call; he 'knows his rights'. He also asserts that the agents can't scare him with their tactics; which he describes with which of the following adjectives?",
          answer: 'Gestapo',
          explanation: "Yes; it's true that the agents can't scare Neo with their 'gestapo crap'. However; they can scare him by sealing his mouth with flesh and releasing a quasi-metal bug into his belly button! Sounds pretty 'gestapo' to me...",
          options: '[ Gestapo ] [ Mafioso ] [ Nazi ] [ Fascist ]'
        },
        {
          question: 'Besides "Alice in Wonderland"; what other storybook is mentioned?',
          answer: 'The Wizard of Oz',
          explanation: `"The Wizard of Oz" is when Cypher says to Neo; "Buckle your seatbelt; Dorothy; 'cause Kansas is going Bye-Bye".`,
          options: ''
        },
        {
          question: 'After Neo is unplugged; Morpheus takes him into a simulation where there is a TV and a chair; and explains to him how things got the way they are. What colour is the chair?',
          answer: 'Red',
          explanation: "There is a beat-up red leather chair upon which Morpheus sits as he says 'welcome to the desert of the real.'",
          options: ''
        },
        {
          question: "Which side of Agent Smith's shades does Neo break?",
          answer: 'Left',
          explanation: "Shades seemed to be essential in this film. Morpheus' just rested on his nose with no bits to attach them to his ears. :)",
          options: '[ Left ] [ Both ] [ Right ] [ Neither ]'
        },
        {
          question: `"The Matrix Reloaded": "Touch me; and that hand will never touch anything again." Who gives this warning to Merovingian's thug?`,
          answer: 'Trinity',
          explanation: "Neo learns from the Oracle that he must find the Source. In order to do that; he must first find the Keymaker; who is being held by a program called Merovingian. Morpheus; Neo and Trinity go to speak with Merovingian; but he refuses to cooperate. As he leaves; his group of thugs approach the three; and one of them begins to place his hand on Trinity's shoulder. This terrific line was spoken before he could.",
          options: ''
        },
        {
          question: `Finish this quote: "If you close your eyes it almost feels like you're eating ____________."`,
          answer: 'runny eggs',
          explanation: 'This line is spoken by Mouse during the breakfast scene.',
          options: ''
        },
        {
          question: 'What line follows this quote spoken by Neo: "Why do my eyes hurt?"',
          answer: `"You've never used them before."`,
          explanation: "This scene takes place when they are rebuilding Neo after he was removed from the Matrix. Morpheus responds to Neo's question.",
          options: ''
        },
        {
          question: "Especially hard question here; for true fans only! What is 'Neo' an anagram of?",
          answer: 'One',
          explanation: 'OK; so we lied. Not really that hard was it? Here are some other mildly entertaining anagrams relating to "The Matrix":',
          options: ''
        },
        {
          question: 'Where was Neo told to meet Morpheus after being phoned by him for the second time?',
          answer: 'Adams Street Bridge',
          explanation: 'Neo was told to meet Morpheus here; after waking up from being bugged (believing that this was just a dream). He gets into the car with Trinity; Switch and Apoc; and is taken to see Morpheus for the first time.',
          options: ''
        },
        {
          question: "'All that we're asking in return; is your cooperation in bringing a known terrorist to justice.'",
          answer: 'Agent Smith',
          explanation: 'Morpheus is considered by many authorities to be the most dangerous man alive and Agent Smith tries to get Neo to tell him about Morpheus. Agent Smith is played by Hugo Weaving.',
          options: ''
        },
        {
          question: "Neo's next encounter aboard the Nebuchadnezzer is with Cypher; who is monitoring the Matrix using several computer screens. Cypher describes the Matrix to Neo; which appears to the layman as simply a bunch of streaming green symbols. Which of the following is not mentioned as part of what he 'sees' when peering at the monitors?",
          answer: 'Auburn',
          explanation: "As Cypher puts it; 'I don't even see the code. All I see is blonde; brunette; redhead.' Makes one wonder...what exactly is Cypher watching here; hmm?",
          options: '[ Auburn ] [ Brunette ] [ Blonde ] [ Redhead ]'
        },
        {
            question: "The agents 'bug' Neo; but then release him; apparently believing that he will lead them to Morpheus. Morpheus contacts Neo and sends Trinity and some of his other acolytes to retrieve the poor; dazed fellow. In the car that has been dispatched to pick up Neo; along with Trinity; are Switch and Apoc. Juxtaposed against the nurturing and gentle Trinity; who coaxes Neo with her smooth talk; the impatient and somewhat belligerent Switch insists that Neo follow their directions without question. She refers to Neo by what cleverly derisive name?",
            answer: 'Copper top',
            explanation: "The 'copper top' comment is a reference to the fact that Neo's mind is still locked into the Matrix while his real body is being utilized essentially as a battery for the machines. If I am not mistaken; a 'copper top' is a Duracell...",
            options: ''
          },
          {
            question: 'What drug does Choi mention?',
            answer: 'Mescaline',
            explanation: `Neo asks Choi if he's ever had a dream that you were so sure it was real. Choi replied; "Mmm...all the time; man. It's called Mescaline. It's the only way to fly."`,
            options: ''
          },
          {
            question: 'What instrument is the entertainer playing in the restaurant; when Cypher is plotting with Agent Smith?',
            answer: 'Harp',
            explanation: "Easy one. The harpist breaks in dramatically after Cypher says 'ignorance is bliss;' giving the whole scene an eerie; dreamlike quality. There are countless dream and sleep images in the movie - Morpheus's name; for example; and also the numerous times that characters are sleeping or are told to wake up.",
            options: ''
          },
          {
            question: 'For how many hours does Neo learn combat?',
            answer: 'Ten',
            explanation: "Tank's there for seemingly ages. 'How is he?' 'Ten hours straight. He's a machine.'",
            options: ''
          },
          {
            question: '"The Matrix Reloaded": "There are levels of survival we are prepared to accept. However; the relevant issue is whether or not you are ready to accept the responsibility for the death of every human being in this world." Who presents this challenge to Neo?',
            answer: 'The Architect',
            explanation: `In Neo's conversation with The Architect (the creator of the matrix); we learn that Neo is the sixth "One"; and that his existence is a requirement that recurs. According to The Architect; Zion will be destroyed because "There are levels of survival we are prepared to accept;" and humanity has reached its limit. Neo's job will be to "select from the matrix 23 individuals; 16 female; 7 male; to rebuild Zion. Failure to comply with this process will result in a cataclysmic system crash killing everyone connected to the matrix; which coupled with the extermination of Zion will ultimately result in the extinction of the entire human race."`,
            options: ''
          },
          {
            question: 'The "breakfast of champions" consists of all of the following except what?',
            answer: 'multiple cell proteins',
            explanation: `"It's a single cell protein combined with synthetic aminos; vitamins; and minerals."`,
            options: '[ minerals ] [ synthetic aminos ] [ multiple cell proteins ] [ vitamins ]'
          },
          {
            question: 'What is the name of the last human city?',
            answer: 'Zion',
            explanation: `"If the war was over tomorrow; Zion is where the party would be. The last human city. The only place we have left... Deep underground; near the earth's core where it's still warm. Live long enough you might even see it."`,
            options: ''
          },
          {
            question: "How many of Morpheus' crew are killed by agents (and stay dead!) in the film?",
            answer: '1',
            explanation: "They only killed Mouse. We think this is really odd; especially as the agents are hyped up as unstoppable killing machines by the ever hyperbolic Morpheus. Incidentally; have you noticed how we always refer to ourselves in the plural? What's with that?",
            options: ''
          },
          {
            question: "What is Switch's rule?",
            answer: '"Our way or the highway."',
            explanation: 'She says this to Neo just after calling him "Copper top"; in the car when he is picked up to see Morpheus. Shortly after saying this; Trinity removes the bug from inside Neo.',
            options: ''
          },
          {
            question: "'Neo; no one has ever done anything like this.'",
            answer: 'Trinity',
            explanation: "Trinity says this when she and Neo go in to save Morpheus. Neo answers 'That's why it's going to work.' Tank is loading their guns.",
            options: ''
          },
          {
            question: "Most of the crew are able to escape the mansion via the walls and the sewer; though several do not make it back to the 'real world'. Which of the following crew members does not manage to escape the mansion; falling into Agent custody?",
            answer: 'Morpheus',
            explanation: "I thought I'd provide an easy question to finish this quiz off! Technically; Cypher leaves the mansion in police custody too; though we all know by now that he is the informant. Trinity; Neo; Switch and Apoc all escape through the wall and into the sewer; but only the former two return from the Matrix thanks to Cypher's invidious machinations. Speaking of thanks; thank you for trying this quiz...please give its counterparts a try if you haven't already!",
            options: '[ Apoc ] [ Morpheus ] [ Switch ] [ Trinity ]'
          },
          {
            question: "At the halfway point in the film we finally see the traitor (or 'informant'; as the agents put it) among the crew revealed. Cypher has been offered a deal by Agent Smith in return for handing over Morpheus. During this scene we also discover Cypher's true last name; the same surname as which U.S. President?",
            answer: 'Reagan',
            explanation: "To make things more amusing; the Wachowski brothers also add other references to Ronald Reagan amid the conversation. When Agent Smith asks Mr. Reagan (Cypher) about their deal; the latter requests that he 'remember nothing' and that he become somebody 'important...like an actor.' Political references are always fun; if not subtle; in films; aren't they? Please feel free to try the prequel and sequel(s) to this quiz if you enjoyed this one...thanks for playing!",
            options: '[ Reagan ] [ Clinton ] [ Carter ] [ Bush ]'
          },
          {
            question: "Neo is now brought to an eerie; drab mansion; where he finally meets Morpheus face-to-face (well; sort of...remember; this is still the matrix!) Morpheus presents Neo with a choice; he can choose to walk away or he can choose to discover what the Matrix really is. As expected; Neo chooses the latter. While preparing to take this leap of faith; Neo meets Cypher for the first time. Cypher's first words to Neo are a reference to which classic American film?",
            answer: 'The Wizard of Oz',
            explanation: `Morpheus provides Neo with a pill; which he swallows. Neo soon learns that the pill is part of a 'trace program' meant to help Morpheus' team locate Neo's real body. Of course; Neo is still in the dark; and responds to Morpheus' comment by asking; 'What does that mean?' Cypher interrupts; 'It means; buckle your seat belt Dorothy; cause Kansas...it's going bye bye.' Now Neo is both Alice and Dorothy all rolled up into one! Please try the sequel
        to this quiz...as we continue our quest to reload...`,
            options: '[ The Wizard of Oz ] [ The Godfather ] [ Citizen Kane ] [ Casablanca ]'
          },
          {
            question: 'Who is the last person from Morpheus crew to die? (Including temporarily dead.)',
            answer: 'Neo',
            explanation: 'Even though Neo came back; he did get shot by Agent Smith and flat lined. There have been many complaints about this question; but if you watch "The Matrix: Reloaded"; Agent Smith says to Neo; "...I watched you die...;" conveying that Neo did die; but since he is The One; he was able to come back to life. Even though people go flatline for a second; they are still considered (technically) dead for that amount of time.',
            options: ''
          },
          {
            question: 'What is the name of the last human city; located deep in the Earth?',
            answer: 'Zion',
            explanation: "Tank reveals to Neo that he is a 'genuine child of Zion;' one of the few humans not born in the Matrix. There must not be many humans left; even in Zion; if they can't muster more than a handful of people to help the cause!",
            options: ''
          },
          {
            question: "Who's driving the car when Neo gets picked up at the bridge?",
            answer: 'Apoc',
            explanation: "Apoc was driving the car. You don't really see his face clearly.",
            options: ''
          },
          {
            question: `"The Matrix Revolutions": "Down here I make the rules. Down here I make the threats. Down here; I'm God." Who makes this claim to Neo?`,
            answer: 'The Trainman',
            explanation: "The first time we see Neo in the third film is in 'the train station' - a place between worlds. The train goes *to* the matrix; but is not itself the matrix. Neo meets three programs there (Kamala; Rama-Kandra and Sati) who inform him that the Trainman (who works for Merivingian) is the one who can take him to the matrix. Neo tries to threaten the Trainman; but the Trainman responds with the quote above; proving his power by punching Neo away and leaving him behind on the train station.",
            options: ''
          },
          {
            question: 'Who says the line; "So... What do you need; besides a miracle?"?',
            answer: 'Tank',
            explanation: 'Tank says this to Neo; when both Neo and Trinity are preparing to rescue Morpheus. Neo replies; "Guns...Lots of guns".',
            options: ''
          },
          {
            question: "Fill in the blank: 'Buckle your seatbelt; ____.'",
            answer: 'Dorothy',
            explanation: "'Buckle your seatbelt; Dorothy. Cause Kansas is going bye bye.'",
            options: ''
          },
          {
            question: `"The Matrix Revolutions": "She'll do it. If she has to; she'll kill every one of us. She's in love." Who says this about Trinity?`,
            answer: 'Persephone',
            explanation: `In an effort to find Neo; Trinity; Morpheus and Seraph attack Merovingian's lair at the Hel Club. In a lull in the fighting; Merovingian asks Trinity if she is really ready to die for Neo. In response; she cocks her gun and says "Believe it." The quote from the question came next; spoken by Merovingian's wife Persephone. Merovingian follows up with a shrewd observation: "It is remarkable how similar the pattern of love is to the pattern of insanity."`,
            options: ''
          },
          {
            question: 'What do most guys think Trinity is?',
            answer: 'a guy',
            explanation: 'When Trinity and Neo first meet at the club; Neo says; "I thought you were a guy."',
            options: ''
          },
          {
            question: "And who said the 'buckle your seatbelt' line?",
            answer: 'Cypher',
            explanation: "This is probably my favourite line in the whole film. Short of 'There is no spoon.' :)",
            options: ''
          },
          {
            question: `"The Matrix Revolutions": "The great and powerful Oracle. We meet at last. I suppose you've been expecting me; right? The all-knowing Oracle is never surprised. How can she be; she knows everything." Who confronts the
        Oracle like this?`,
            answer: 'Agent Smith',
            explanation: `Agent Smith confronts the Oracle and; in his usually convoluted language; expresses the irony that despite knowing what is coming; the Oracle still chooses to let Agent Smith absorb her/take her over. It is obvious
        that Agent Smith is not entirely sure that this is not all some part of a plan by the Oracle.`,
            options: ''
          },
          {
            question: 'What is track four on the soundtrack?',
            answer: 'Clubbed To Death',
            explanation: "'Clubbed To Death' by Rob D was played during the training programme where Neo is looking at the woman in the red dress.",
            options: ''
          },
          {
            question: '"The Matrix Revolutions": "Three captains; one ship. I assume the other ships were lost under equally pointless circumstances?" Who makes this sarcastic comment to Niobe?',
            answer: 'Commander Lock',
            explanation: 'After successfully avoiding (and defeating) a Sentinel attack; Niobe and Morpheus return to Zion. Commander Lock is there to broach them as they disembark as to their situation. He subsequently takes them to the Council to report their actions.',
            options: ''
          },
          {
            question: 'Who says; "Get up; Trinity! GET UP!"?',
            answer: 'Trinity',
            explanation: 'She says it to herself as reassurance once she falls down the stairs while Agent Smith is chasing her.',
            options: ''
          },
          {
            question: 'Who makes the drink that Cypher offers Neo?',
            answer: 'Dozer',
            explanation: 'Good for two things - degreasing car engines and killing brain cells.',
            options: ''
          },
          {
            question: `"The Matrix Revolutions": "Oh no. No; I didn't. But I believed. I believed." Who spoke this; the last line of the movie?`,
            answer: 'The Oracle',
            explanation: 'In conversation with Sati and Seraph; the Oracle responds to a question by Seraph: "Did you always know?"',
            options: ''
          },
          {
            question: 'Besides Neo; who else thought he was in love with Trinity?',
            answer: 'Cypher',
            explanation: 'When Cypher is killing everyone; he tells Trinity; "For the longest time; Trinity; I thought that I was in love with you."',
            options: ''
          },
          {
            question: 'What is the name of the second Matrix film?',
            answer: 'The Matrix Reloaded',
            explanation: 'Scheduled for release 2002 but was pushed back for a number of reasons.',
            options: ''
          },
]