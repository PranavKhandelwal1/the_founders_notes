/* ============================================================================
   STORIES: every article lives here.

   To add a story: copy the template from docs/HOW-TO.md (section 2), paste it
   anywhere inside the list below, give it the next id number, and save.
   The newest story (highest id, or latest `published` date) is shown first
   and big. The oldest story is always #1, so numbers never change.

   Fields
     id          unique number as text: "3", then "4"...  (higher = newer)
     published   optional date, e.g. "2026-10-27" (used instead of id for ordering)
     tags        short labels shown on the story, e.g. ["Yoga", "Studio"]
     sample      true shows a "Sample" label; false for real, approved stories
     image       the founder's photo, e.g. "images/name.jpg" (the story banner)
     imageAlt    describes the photo
     imagePos    optional crop focus, e.g. "center top"
     headline, summary, business, owner, location, founded, offers,
     instagram, readTime, initials (shown if there is no photo),
     author      optional: overrides the "By ..." byline
     body        list of paragraphs. A picture is an item like:
                 { img: "images/studio.jpg", alt: "Describe it", caption: "Optional" }
     pullQuote, pullAfter   a quote shown after that item number
     Optional extras: website, booking (buttons), video (YouTube link or mp4), audio (mp3), series (label),
     translations ({ de: { label, headline, summary, body, pullQuote } }), and { q, a } items in body for Q&A.
     See docs/HOW-TO.md, section 2b.
   ============================================================================ */

const STORIES = [

  {
    id: "1",
    published: "2026-10-23",
    image: "images/patricia-thielemann.jpg",
    imageAlt: "Patricia Thielemann, founder of Spirit Yoga",
    tags: ["Yoga", "Mindfulness", "Teacher Training"],
    sample: false,
    headline: "Founder of Spirit Yoga, teacher trainer and advocate for mindfulness, personal development and mental health.",
    summary: "Patricia Thielemann founded Spirit Yoga in Berlin in 2004, developing a distinctive yoga style that brings together mindful movement, personal growth and inner strength.",
    business: "Spirit Yoga",
    owner: "Patricia Thielemann",
    location: "Berlin, Germany",
    founded: "2004",
    offers: "Yoga classes, teacher training, prenatal and postnatal yoga, corporate mindfulness programmes, retreats",
    instagram: "https://www.instagram.com/spirityoga_berlin/",
    website: "https://spirityoga.de/",
    readTime: "5 min read",
    initials: "SY",
    body: [
      "Patricia Thielemann discovered yoga while working as an actress in the United States. What began as a personal exploration grew into a lifelong passion and ultimately inspired her to create a distinctive approach to yoga.",
      "In 2004, she founded Spirit Yoga in Berlin after studying a wide range of yoga styles. Her vision was to create a practice that combines physical strength, mindful awareness and a deeper connection with oneself. Today, Spirit Yoga is one of Germany's best-known yoga schools, with two locations in the capital.",
      "Sharing her knowledge has always been central to Patricia's work. Over the years, she has trained and further educated more than 1,000 Spirit Yoga teachers, helping shape the next generation of instructors. As a mother of two, she also has a special interest in prenatal and postnatal yoga, supporting women through the transformative stages of pregnancy and motherhood.",
      "Her work reaches far beyond the studio. Patricia advises companies on corporate yoga and mindfulness programmes and leads retreats at renowned destinations, including Schloss Elmau, Grand Tirolia Kitzbühel, Severin's on Sylt and Aleenta in Thailand. She has also completed several years of training as a spiritual counsellor to better support people through periods of change and crisis.",
      "Patricia is an established voice in conversations about yoga, mindfulness and mental health. She has spoken at international conferences, including TEDx and Future Day, contributed to books and specialist publications, and written columns for Der Tagesspiegel and Handelsblatt. Her work brings together practical experience, personal reflection and a commitment to making mindfulness relevant to everyday life.",
      "At the heart of Spirit Yoga is a clear philosophy: yoga is more than physical exercise. It is an opportunity to cultivate awareness, resilience and a more conscious relationship with ourselves. Through carefully selected workshops and collaborations with experts in neuroscience, philosophy and mindfulness research, Patricia continues to develop a teaching environment grounded in these values."
    ],
    pullQuote: "Yoga is more than physical movement. It is a practice of awareness, resilience and finding a deeper connection with yourself.",
    pullAfter: 2
  },

  {
    id: "2",
    published: "2026-10-26",
    image: "images/veena-pillai.jpg",
    imageAlt: "Veena V Pillai, karate instructor",
    tags: ["Karate", "Women in Sport", "Motherhood"],
    sample: false,
    headline: "A 3rd Dan Black Belt who turned her passion for karate into a career while embracing motherhood.",
    summary: "Veena V Pillai left a career in HR to follow her passion for karate, building classes across multiple branches while proving that motherhood and professional ambition can grow together.",
    business: "Veena V Pillai Karate Classes",
    owner: "Veena V Pillai",
    location: "India",
    founded: "2010",
    offers: "Karate classes, school training, guest instruction, martial arts education",
    instagram: "https://www.instagram.com/veenavpillai/",
    readTime: "5 min read",
    initials: "VP",
    body: [
      "Veena V Pillai's journey in karate began in 2010. Now a 3rd Dan Black Belt, karate instructor and certified Karate Judge, she has spent years learning, growing and deepening her connection with an art that became much more than a hobby.",
      "Although Veena studied Engineering, her professional career initially took her into Human Resources. Alongside her job, she continued conducting karate classes, making time for the practice she loved. As her confidence and experience grew, she faced a defining decision: remain in a conventional career or take a chance on building something of her own.",
      "She chose karate. Leaving her HR job was a bold step, but her determination to expand her classes and turn her passion into a profession gave her the courage to move forward. Looking back, she says she has never regretted the sacrifices or challenges along the way. Doing what she loves has made the journey worthwhile.",
      "A strong support system has also been an important part of her story. Veena married a partner who believes in her dreams and supports her ambitions without ego or restrictions. His encouragement has allowed her to continue pursuing her goals while building a life and family together.",
      "Over the years, what began as a personal passion has grown into a wider teaching career. Veena has expanded her karate classes across several branches and has been invited to work as a guest trainer in various schools. Each new opportunity has strengthened her commitment to teaching and sharing the discipline, confidence and perseverance that karate has brought into her own life.",
      "Then came motherhood, another life-changing chapter. Veena is now the mother of a beautiful three-year-old daughter, and becoming a parent has added a new dimension to her life without taking away her professional identity. One of her proudest memories captures that determination perfectly: she conducted her karate classes on the day before giving birth and went to the hospital the following day to welcome her baby girl.",
      "For Veena, motherhood and ambition do not have to compete with each other. Her journey reflects the possibility of loving your family deeply while continuing to pursue the work that gives you purpose. Her story is not about having an easy path; it is about choosing to keep moving forward with patience, perseverance and the support of the people who believe in you.",
      "Today, Veena continues to build on the journey she began in 2010. Through karate, she has created a profession rooted in passion, discipline and personal growth. Her experience is a reminder that success does not always mean following the expected route. Sometimes, it means having the courage to create a path of your own."
    ],
    pullQuote: "I have never regretted choosing karate. I built my career around what I genuinely love, and motherhood has never meant giving up that dream.",
    pullAfter: 5
  },

  {
    id: "3",
    published: "2026-10-27",
    image: "images/elena-lebedinets.jpg",
    imageAlt: "Elena Lebedinets, Pilates instructor",
    tags: ["Pilates", "Motherhood", "Personal Growth"],
    sample: false,
    headline: "From personal healing to helping others find strength, balance, and a deeper connection with their bodies.",
    summary: "After motherhood, anxiety, and a spinal injury prompted her to rethink her life, Elena Lebedinets discovered Pilates. Today, she teaches from her home studio in Vladivostok, helping others experience the benefits of mindful movement.",
    business: "Elena Lebedinets Pilates Studio",
    owner: "Elena Lebedinets",
    location: "Vladivostok, Russia",
    founded: "",
    offers: "Private Pilates sessions, Reformer Pilates, online classes",
    instagram: "https://www.instagram.com/helenespilates/",
    website: "https://pilates-feel.ru/", 
    readTime: "5 min read",
    initials: "EP",
    body: [
      "Five years ago, Elena Lebedinets became a mother to the daughter she had dreamed of since childhood. But the reality of motherhood was more emotionally challenging than she had expected. Anxiety, fear, the demands of a successful career, and discomfort from a herniated disc in her thoracic spine left her feeling vulnerable and exhausted. She knew something in her life needed to change.",
      "Elena began a journey of self-discovery through traditional psychotherapy, searching for greater harmony between her mind and body. Pilates eventually brought the pieces together. It offered the calm she needed, the relaxation she longed for, and the support her back was missing. The moment she lay down on the Reformer, she discovered a sense of relief and well-being that transformed her everyday life.",
      "Encouraged by her own teacher, Elena decided to become an instructor. The training filled her with so much knowledge and inspiration that she wanted to share it with others. That was how her private home studio began—not as a grand business plan, but as a natural extension of something that had genuinely changed her life.",
      "During her first year, Elena taught friends who lived nearby while balancing office work, motherhood, and her growing Pilates practice. The most rewarding moments came when her clients experienced relief from pain and improvements in their everyday lives. Seeing these changes helped her recognise that teaching Pilates was more than a new skill; it was a calling.",
      "Today, her Pilates circle includes colleagues, friends, her husband, her father, and herself. These are people who trust her guidance and understand her approach. Although she dreams of welcoming more clients, she wants to preserve the personal attention that makes her teaching special rather than build a high-volume studio.",
      "What makes Elena's approach distinctive is how closely she connects her teaching to her own physical experience. Before introducing an exercise to a client, she tries it herself, paying attention to the smallest movements of the shoulder blades, pelvis, abdomen, and thighs. Instead of simply explaining how an exercise should look, she describes what the movement feels like from the inside.",
      "Her professional background in project management at a large corporation also shapes how she works. Elena values thoughtful preparation, precision, and a clear understanding of how each movement serves the person practising it. Her aim is to guide clients so attentively that they can let go of overthinking and move with greater confidence, even when an exercise initially seems impossible.",
      "One experience she particularly cherishes is helping a colleague who had never practised Pilates and was nervous about entering a studio. After overcoming cancer and navigating a difficult period in her life, her colleague began rebuilding her relationship with her body through movement. Watching her develop strength, confidence, and a renewed sense of possibility was a powerful reminder of what Pilates can mean beyond physical exercise.",
      "Growing the business has its own challenges. Finding suitable premises in Vladivostok is difficult, and fluctuating property costs, renovation expenses, and rent make expanding into a dedicated studio a significant decision. Elena also knows that attracting a constant stream of clients could conflict with the individualised approach she values. For now, she continues to teach from her home studio and online, focusing on meaningful, personal sessions.",
      "Elena believes people should not feel intimidated by Pilates. You do not need to know how to perform crunches, touch your toes, or do the splits before beginning. A single session can offer a valuable opportunity to reconnect with your body, focus your mind, and step away from everyday stress. For her, Pilates is not simply about exercise; it is also a way to nurture awareness, patience, and inner strength.",
      "Her journey is a reminder that sometimes the most meaningful professional paths begin with a personal need. What started as Elena's search for healing and balance became a way to support others on their own journeys. Through her home studio and online sessions, she continues to share the practice that helped her find a more grounded relationship with herself."
    ],
    pullQuote: "You don't need to know how to do crunches or perform the splits. Pilates trains your spirit and gives your brain a break.",
    pullAfter: 4
  },

  {
    id: "4",
    published: "2026-10-28",
    image: "images/aishwarya.jpg",
    imageAlt: "Aishwarya Yogshala yoga instructor",
    tags: ["Yoga", "Wellness", "Women in Business"],
    sample: false,
    headline: "From competitive powerlifting to yoga, Aishwarya is building a more accessible approach to everyday wellness.",
    summary: "With advanced yoga qualifications, five-plus years of experience, and a background in competitive powerlifting, Aishwarya is building an online yoga platform that puts individual needs, strength, and sustainable well-being first.",
    business: "Aishwarya Yogshala",
    owner: "Aishwarya Sharma",
    location: "Delhi, India",
    founded: "2026",
    offers: "Online group yoga sessions, personalised yoga instruction, mobility, mindful breathing, relaxation and wellness practices",
    instagram: "https://www.instagram.com/aishwaryayogshala/",
    website: "https://aishwaryayogshala.vercel.app/",
    readTime: "5 min read",
    initials: "AY",
    body: [
      "For Aishwarya, yoga began with a deep interest in fitness, movement, and overall well-being. But as she explored the practice, she discovered something that went far beyond physical postures. Yoga brought together the body, breath, and mind, offering a more balanced approach to everyday life. That discovery inspired her to turn her interest into a professional calling.",
      "Aishwarya pursued formal education in the field, earning a Master’s in Yoga Acharya, a Postgraduate Diploma in Yoga, and specialised instructor certifications. With more than five years of experience, she began shaping a vision for yoga that could meet people where they are, regardless of their age, experience, or fitness level. In 2026, that vision took shape as Aishwarya Yogshala, a platform designed to make yoga more accessible through online group and personalised sessions.",
      "Her path into teaching was built through experience as much as education. Conducting yoga camps, working as a protocol instructor with the NGO Tears of the Earth, and serving as a wellness instructor at a camp certified by the Morarji Desai National Institute of Yoga helped her understand that effective teaching requires more than knowledge of asanas. It calls for patience, clear communication, and the ability to adapt a practice to different people and circumstances.",
      "Today, Aishwarya welcomes the idea of yoga for everyone, from children to senior citizens. Her approach focuses on helping people develop flexibility, mobility, strength, posture, breathing, and general well-being. Rather than expecting students to perform every posture perfectly, she wants them to feel comfortable asking questions, progressing at their own pace, and building a practice they can maintain over time.",
      "One of the most distinctive aspects of Aishwarya’s journey is her background in competitive powerlifting. As a former state-level powerlifter, she earned two silver medals at the senior and junior state levels, along with a silver medal at the IHFF Deadlift Championship. Competitive sport taught her discipline, consistency, and respect for the process—lessons she now brings into her work as a yoga instructor.",
      "For Aishwarya, strength training and yoga do not have to exist in separate worlds. When thoughtfully adapted to an individual's needs, they can complement one another, supporting a broader understanding of movement, strength, mobility, and body awareness. This perspective also informs her commitment to beginners, especially those who feel intimidated by traditional classes or believe they must become flexible before they can begin.",
      "Building Aishwarya Yogshala while maintaining a job of her own comes with practical challenges. Time must be divided between professional responsibilities, planning sessions, creating content, connecting with potential students, and developing the business. She is also working to challenge common misconceptions about yoga—that it is only about flexibility, weight loss, or impressive poses shared on social media.",
      "Instead, Aishwarya wants people to see yoga as a consistent practice that can support movement, breathing, relaxation, and a greater awareness of the body. She encourages students to communicate relevant injuries, health conditions, and physical limitations before beginning, so sessions can be planned more appropriately. Her emphasis is on thoughtful practice rather than comparison or perfection.",
      "Her journey is still unfolding. Having begun teaching professionally in 2021 and officially established Aishwarya Yogshala in 2026, she is now focused on expanding her online presence and making individualised instruction easier to access from home. The goal is not simply to teach more poses, but to help people build a sustainable relationship with movement and well-being.",
      "Aishwarya’s story brings together two seemingly different disciplines: the intensity of competitive lifting and the mindful awareness of yoga. Both have taught her that progress comes through patience, consistency, and respect for the individual journey. Through Aishwarya Yogshala, she hopes to share that lesson with more people—one practice, one breath, and one step at a time."
    ],
    pullQuote: "Yoga should adapt to the individual, rather than expecting every individual to adapt to the same routine.",
    pullAfter: 4
  },

  {
    id: "5",
    published: "2026-10-28",
    image: "images/irina-mindful.jpeg",
    imageAlt: "Irina practising meditation outdoors in nature",
    tags: ["Mindfulness", "Yoga", "Personal Growth"],
    sample: false,
    headline: "From overthinking to self-awareness: how Irina is making mindfulness more accessible.",
    summary: "With a background in IT and engineering, Irina began exploring yoga, meditation, and psychology to better understand herself. Now, she shares what she has learned to help others approach their minds and everyday lives with greater awareness.",
    business: "Irina Mindful",
    owner: "Irina",
    location: "Germany",
    founded: "2025",
    offers: "Mindfulness content, yoga philosophy, meditation insights, self-awareness and intentional living",
    instagram: "https://www.instagram.com/irina.mindful/",
    readTime: "5 min read",
    initials: "IM",
    body: [
      "Irina's journey into mindfulness began with a background in IT and engineering, where logical thinking and problem-solving were part of everyday life. But understanding problems intellectually did not always make them easier to navigate personally. Behind the routines of everyday life, she struggled with anxiety, overthinking, and the habit of trying to please others.",
      "She did not initially set out to become a yoga teacher or build a business. Her journey began with a more personal question: how could she understand herself better and feel more at ease in her own life? What started as an interest in physical yoga gradually became something deeper.",
      "Irina began exploring meditation, journaling, psychology, and yoga philosophy. She became curious about why people think, feel, and behave the way they do, and how beliefs about ourselves can influence the way we experience the world. Over time, these practices helped her recognise patterns she had once assumed were simply part of her personality.",
      "That discovery became especially meaningful when she noticed a change in her own mind. She used to spend entire metro journeys replaying conversations, imagining arguments, and preparing responses to situations that had not even happened. After years of practising meditation and learning about the mind, she realised that she was doing this far less often. The change was gradual rather than dramatic, but it showed her that familiar patterns do not always have to remain fixed.",
      "In 2025, after completing her 200-hour yoga teacher training, Irina began developing her online mindfulness presence. She is still building this part of her work, sharing ideas and reflections rather than running an established schedule of yoga classes. Her aim is to make mindfulness and self-understanding accessible to people who recognise some of the same struggles she once experienced.",
      "Her approach brings together yoga, meditation, psychology, spirituality, and insights into how the brain works. Irina does not see these as entirely separate subjects. Instead, she is interested in how our thoughts influence our emotions, how our emotions affect our bodies, and how these patterns shape our reactions and relationships.",
      "What makes her perspective personal is that she does not present herself as someone who has everything figured out. She sees herself first as a practitioner who is still learning, questioning, and testing ideas in everyday life. Rather than promising quick fixes, she wants to share practical perspectives that people can explore for themselves.",
      "Irina hopes to connect with people who are often hard on themselves, spend too much time overthinking, or feel that they should already have life figured out. She wants to create a welcoming space where people can question their assumptions without judgement and explore personal growth without turning it into another standard they must meet perfectly.",
      "Building this presence alongside a technical career and motherhood has its own challenges. Irina is learning to work with the time and energy she actually has, rather than waiting for ideal circumstances. She also recognises her tendency to overthink creative decisions, sometimes spending too long wondering whether something is good enough instead of sharing it and learning from the experience.",
      "For Irina, this is part of the practice itself: applying what she learns when life is busy, imperfect, and unpredictable. Mindfulness does not have to mean being calm all the time, and yoga does not require flexibility or previous experience. Sometimes, it begins with noticing a thought, understanding a reaction, or creating a little more space before responding.",
      "Today, Irina continues to develop her work primarily online from Germany. Her journey is still unfolding, but its purpose is clear: to help people understand themselves with greater curiosity and compassion. Through her content, she hopes to remind others that personal growth does not require becoming a completely different person. It can begin with learning to relate to yourself differently."
    ],
    pullQuote: "The patterns we think are part of our personality aren't necessarily fixed.",
    pullAfter: 4
  },

  {
    id: "6",
    published: "2026-11-01",
    image: "images/yulia-korchagina.jpeg",
    imageAlt: "Yulia Korchagina, Ashtanga yoga teacher",
    tags: ["Ashtanga Yoga", "Yoga Philosophy", "Retreats"],
    sample: false,
    headline: "From healing to teaching: how Yulia Korchagina turned a personal journey of recovery into a lifelong dedication to yoga.",
    summary: "After discovering yoga while struggling with back pain and scoliosis, Yulia transformed her personal practice into a profession. Today, she teaches Ashtanga and Hatha Yoga, explores traditional Indian philosophy, and organises retreats in Russia and beyond.",
    business: "Yoga Instructor",
    owner: "Yulia Korchagina",
    location: "Moscow, Russia",
    founded: "2022",
    offers: "Ashtanga Yoga, Hatha Yoga, personalised yoga instruction, strength and mobility training, yoga retreats",
    instagram: "https://www.instagram.com/saint.ashtanga/",
    readTime: "5 min read",
    initials: "YK",
    body: [
      "Yulia Korchagina's journey into yoga began in 2018, during a demanding chapter of her professional life. Working in a management position meant spending long hours at a desk, and living with second-degree scoliosis brought persistent back discomfort. Initially, she turned to yoga hoping to feel better physically. What she discovered, however, would eventually reshape her entire life.",
      "Through consistent practice, Yulia gradually rebuilt her relationship with her body. She developed greater strength and mobility and experienced significant improvements in her spinal health. More importantly, yoga introduced her to a different understanding of progress. She learned that meaningful transformation takes patience, discipline, awareness, and trust in the process.",
      "In 2022, what had begun as a personal journey became her profession. Yulia completed her professional yoga teacher training with honours and continued expanding her knowledge through studies in Hatha Yoga, women's yoga therapy, prenatal and postnatal yoga, anatomy, and hands-on adjustments. Her teaching experience has since included students of different ages, physical abilities, and levels of experience.",
      "Over time, her practice led her towards Ashtanga Yoga, a discipline that became central to her teaching and personal development. What attracts Yulia to Ashtanga is its combination of structure, discipline, breath, and continuous self-exploration. The repetition of the sequence creates an opportunity to observe not only physical progress but also the changing patterns of the mind.",
      "Her dedication to understanding yoga has taken her to India, where she deepened her studies of Hatha and Ashtanga Yoga. Her curiosity extends well beyond physical practice into Indian philosophy, Sanskrit, Vedanta, and the traditions of Shaivism and Shaktism. For Yulia, understanding the roots and philosophy of yoga is an essential part of developing a meaningful practice.",
      "Today, her teaching focuses on Ashtanga Yoga, strength, mobility, and mindful movement. She works with both beginners and experienced practitioners, adapting exercises when necessary while maintaining respect for the traditional foundations of the practice. Her aim is to help students develop a deeper connection with their bodies while gradually building confidence, discipline, and awareness.",
      "Alongside her regular teaching, Yulia organises yoga retreats that allow students to step away from everyday responsibilities and reconnect with themselves. Through movement, breathing, and shared experiences, these retreats offer an opportunity to explore yoga beyond the usual classroom environment.",
      "For Yulia, teaching is not simply about helping someone achieve a challenging posture. It is about guiding people towards a more conscious understanding of themselves. Her own experience of physical recovery has shaped the way she approaches students: with patience, respect for individual limitations, and an understanding that every person's journey is different.",
      "Her story is a reminder that sometimes a personal challenge can become the starting point for an entirely new direction in life. What began as a search for relief became a deeper commitment to learning, teaching, and exploring the philosophy behind yoga.",
      "As Yulia continues her journey, one belief remains at the centre of her work: yoga is not about performing the perfect asana. It is about developing awareness, discovering inner strength, and learning to meet ourselves with honesty. The deeper she explores the practice, the more she understands that yoga is not about becoming someone else, but about discovering who we truly are."
    ],
    pullQuote: "Yoga is not about performing the perfect asana. It is about developing awareness, discovering inner strength, and learning to meet ourselves with honesty.",
    pullAfter: 4
  },

  {
    id: "7",
    published: "2026-11-02",
    image: "images/queeny-cobelli.jpg",
    imageAlt: "Queeny Cobelli, yoga and dance instructor",
    tags: ["Yoga", "Dance", "Women in Wellness"],
    cover: "teal",
    sample: false,
    headline: "From gym enthusiast to fully booked instructor: how Queeny Cobelli turned her love of movement into a career.",
    summary: "What began with a love of fitness and dancing became an unexpected career in yoga and dance. Encouraged by teachers and classmates, Queeny gained her qualifications, secured her first gym job, and built a following across local fitness communities.",
    business: "Queeny Cobelli Yoga & Dance",
    owner: "Queeny Cobelli",
    location: "Cambridge, UK",
    founded: "",
    offers: "Yoga classes, yoga flow, dance classes, group fitness sessions",
    instagram: "https://www.instagram.com/queeny_fitnflexs",
    readTime: "4 min read",
    initials: "QC",
    body: [
      "Queeny Cobelli's journey into teaching began with two things she already loved: going to the gym and dancing. Yoga was initially just another hobby to explore. When she attended her first group yoga session, she remembers feeling nervous. But by the end of the class, that nervousness had turned into enjoyment, and she knew she wanted to keep going.",
      "What started as an occasional activity soon became part of her everyday routine. Queeny continued practising, developing her skills, and exploring new ways to move. Over a year of dedication helped her grow in confidence and ability, but it was the encouragement of others that made her consider an entirely new direction.",
      "Her yoga teachers and fellow class participants began noticing her natural ability with yoga flow. They regularly complimented her and encouraged her to consider becoming a qualified yoga instructor. Their words planted an idea that Queeny had not seriously considered before: perhaps something she loved doing could become her profession.",
      "Inspired by their encouragement, she decided to take the next step. She enrolled in yoga and dance instructor training courses at the same time, combining two passions that had become an important part of her life. Once she qualified, an opportunity came quickly. The gym where she had been practising offered her a teaching position.",
      "Of course, standing in front of a class for the first time was nerve-racking. But there was one thing working in her favour: the people already knew her. Being familiar with the gym community helped her settle her nerves and find her confidence as an instructor. What once felt intimidating gradually became something she genuinely looked forward to.",
      "Queeny did not stop there. She began promoting herself within the local sports community and gradually connected with several gyms. Her classes started attracting more participants, and the feedback was encouraging. Today, she works with multiple local gyms, where her sessions have become popular and are often fully booked.",
      "For Queeny, the most rewarding part is not simply seeing a full class. It is watching people enjoy themselves, laugh, smile, and feel good throughout each session. She loves being able to share the knowledge and skills she has developed while supporting others in building healthier, more active lifestyles.",
      "Looking back, her journey is a reminder of how unexpected opportunities can grow from simple hobbies. A nervous first yoga session led to daily practice, encouragement from fellow students, professional training, and eventually a career she loves. Sometimes, all it takes is someone recognising your potential before you recognise it yourself.",
      "Today, Queeny is grateful to be doing what she loves: bringing people together through yoga and dance, helping them discover the joy of movement, and making every class an opportunity to feel stronger, happier, and more confident."
    ],
    pullQuote: "I love seeing people laugh and smile in every single session. Helping others build a healthier life through something I love makes my heart so full.",
    pullAfter: 5
  },

  // {
  //   id: "8",
  //   image: "images/komi-yogi.jpg",
  //   imageAlt: "Komal, yoga practitioner and wellness advocate",
  //   tags: ["Hatha Yoga", "Chronic Illness", "Inclusive Wellness"],
  //   sample: false,
  //   headline: "Finding strength in stillness: how Komal's health journey shaped her relationship with yoga.",
  //   summary: "After living with Deep Vein Thrombosis and lupus, Komal discovered a more mindful approach to movement through Hatha yoga. Today, she highlights the importance of gentle practice, listening to the body, and making yoga accessible to people living with chronic conditions.",
  //   business: "Komal Yoga",
  //   owner: "Komal",
  //   location: "London, UK",
  //   founded: "",
  //   offers: "Yoga practice, Hatha Yoga, gentle movement, breathing practices and online yoga sessions",
  //   instagram: "https://www.instagram.com/komi_yogi",
  //   readTime: "5 min read",
  //   initials: "K",
  //   body: [
  //     "For Komal, yoga became much more than a form of exercise. Her journey began during a challenging period of her life, when she was dealing with Deep Vein Thrombosis (DVT) and lupus. Physical difficulties, including relying on crutches and experiencing joint pain, changed the way she approached everyday movement and her relationship with her body.",
  //     "Searching for ways to support her well-being, Komal discovered Hatha yoga. What initially attracted her was the possibility of gentle movement and improving her physical comfort. Over time, the practice introduced her to something deeper: the importance of being grounded, present, and aware of what her body was communicating.",
  //     "Her experience also shaped her understanding of what yoga should look like for people living with chronic conditions. She believes that slower practices, including Hatha, Iyengar, and Yin Yoga, can be valuable options for people with lupus because they allow greater attention to alignment, technique, and individual limitations. Rather than pushing through difficult movements, she encourages practitioners to approach their practice with patience and care.",
  //     "One of the most important lessons Komal shares is that yoga does not always have to involve physical postures. Living with lupus can mean experiencing periods when energy levels, joint comfort, and physical abilities change. During a flare, she emphasises the importance of listening to the body rather than forcing a demanding practice.",
  //     "On particularly difficult days, gentle breathing exercises, known as pranayama, can offer an alternative to physical exertion. Komal highlights the value of breathing practices for calming the nervous system and managing stress, which she identifies as an important consideration for people living with lupus.",
  //     "Her perspective challenges the common assumption that a successful yoga session must involve an energetic flow or a series of challenging poses. Sometimes, the most meaningful practice is simply slowing down, breathing consciously, and allowing yourself to be present. For Komal, understanding these different possibilities is an essential part of making yoga more inclusive.",
  //     "Accessibility is another important part of her message. In-person yoga classes offer opportunities for teachers to observe students closely and provide physical adjustments when appropriate. However, Komal also recognises the importance of online yoga sessions, particularly for people managing fatigue, limited mobility, or periods of isolation.",
  //     "Practising from home can help people maintain a connection with yoga and their wider wellness community without the additional demands of travelling to a studio. Online sessions may not replace every benefit of in-person instruction, but they create another way for people to remain involved and practise within their own circumstances.",
  //     "Komal's journey is a reminder that everyone's relationship with movement is different. A practice that works well for one person may not be appropriate for another, particularly when chronic health conditions are involved. Her message is not about achieving perfect postures or pushing physical limits, but about developing awareness, respecting individual needs, and finding sustainable ways to stay connected with the body.",
  //     "Through sharing her experiences and perspectives, Komal brings attention to a more compassionate understanding of yoga. For her, the practice is ultimately about being present, finding grounding during difficult moments, and recognising that even the gentlest movement or a few conscious breaths can have meaning."
  //   ],
  //   pullQuote: "Yoga is about being grounded and present. Sometimes, listening to your body and simply breathing is the most important practice.",
  //   pullAfter: 4
  // },
  {
    id: "9",
    published: "2026-11-04",
    image: "images/be-with-yoga.jpg",
    imageAlt: "Angela, Vinyasa yoga teacher and practitioner",
    tags: ["Vinyasa Yoga", "Yoga Philosophy", "Meditation"],
    sample: false,
    headline: "Living yoga every day: Angela's journey of devotion, discipline, and mindful movement.",
    summary: "After discovering yoga in 2005, Angela turned her passion into a lifelong commitment to teaching, studying, and sharing its wisdom. Inspired by renowned yoga teachers in India, she brings together movement, breathwork, meditation, and spirituality.",
    business: "Angela Yoga",
    owner: "Angela",
    location: "Palma De Mallorca, Spain",
    founded: "2010",
    offers: "Vinyasa Yoga, Pranayama, meditation, yoga philosophy, retreats, mentoring sessions",
    instagram: "https://www.instagram.com/bewithyoga/",
    website: "https://bewithyoga.live/",
    readTime: "5 min read",
    initials: "A",
    body: [
      "For Angela, yoga has never been just a physical practice. Her journey began in 2005, and what started as an interest in movement gradually became a way of life. Today, yoga is her spiritual, mental, and physical guide, shaping how she approaches health, personal growth, and her connection with the world around her.",
      "After completing her yoga teacher training with Paul Dallaghan at Samahita Retreat, Angela began developing a teaching philosophy that brings together yoga science, spirituality, and mindful living. She believes in a holistic approach to well-being, where the practice extends beyond the mat and becomes part of a more conscious and balanced lifestyle.",
      "Her commitment to learning has taken her to India year after year. Between 2011 and 2020, Angela travelled to study and practise with respected yoga teachers, including R. Sharath Jois, Ajay Kumar, and Vinay Kumar. These experiences deepened her understanding of traditional yoga and influenced the way she approaches both her personal practice and teaching.",
      "In 2017, she completed Vinay Kumar's yoga teacher training in India, adding another important milestone to her professional journey. For Angela, studying yoga is an ongoing process. She continues to explore its philosophy, techniques, and deeper dimensions, believing that a teacher must remain a student throughout life.",
      "Since 2010, Angela has shared her knowledge through a variety of offerings, including yoga classes, philosophy sessions, Pranayama, meditation circles, retreats, and mentoring. Her intention is to help people cultivate deeper connections with themselves, with others, and with nature.",
      "Her teaching style combines structure with sensitivity. Angela enjoys classes that place particular emphasis on deep breath awareness, allowing students to move beyond simply performing postures and begin experiencing the internal dimensions of yoga. At the same time, she respects each student's individual energy and adapts the practice according to their abilities and needs.",
      "Her Vinyasa classes often begin with Sun Salutations inspired by Pranavashya or Ashtanga traditions. From there, students move through standing postures, balancing sequences, twists, forward bends, and backbends. Angela pays particular attention to core strength and the connection between the upper and lower body, helping students develop stability, coordination, and awareness.",
      "Breathing and meditation are equally important parts of her teaching. Through Pranayama and moments of stillness, she encourages students to develop a deeper relationship with their breath and discover the quieter aspects of their practice. For Angela, the balance between movement, breath, and meditation is what allows yoga to become a truly holistic experience.",
      "She teaches Vinyasa Yoga to students of all abilities, believing that the practice should respect the individual rather than demand that everyone follow the same physical expectations. Whether someone is new to yoga or has years of experience, her intention is to create an environment where they can explore movement with awareness and confidence.",
      "Angela's dedication extends far beyond her teaching schedule. If she is not practising or teaching on the mat, she is usually studying yoga. This continuous curiosity reflects her belief that yoga is not something one masters once and then leaves behind. It is an evolving journey of learning, discipline, and self-discovery.",
      "After years of practice, international study, and sharing her knowledge with students, Angela continues to live by the principles that first drew her to yoga. Her work is rooted in the belief that a conscious life begins with a deeper connection to ourselves. Through movement, breath, philosophy, and meditation, she invites others to discover that connection in their own way."
    ],
    pullQuote: "Yoga is not simply something I teach. It is the way I live, learn, and connect with myself and the world around me.",
    pullAfter: 5
  },
  {
    id: "10",
    published: "2026-11-05",
    image: "images/ekaterina.jpg",
    imageAlt: "Ekaterina Katya, yoga and movement instructor in Sri Lanka",
    tags: ["Yoga", "Movement", "Mindful Living"],
    sample: false,
    headline: "Beyond the workout: how Ekaterina is helping people understand their bodies through yoga and mindful movement.",
    summary: "With a background in sports, dance, and fitness instruction, Ekaterina turned her personal yoga journey into a teaching practice. Today, she combines Hatha Yoga, stretching, mobility, and breathwork to help people move with greater awareness and confidence.",
    business: "Independent Yoga & Movement Instruction",
    owner: "Ekaterina (Katya)",
    location: "Batigama, Sri Lanka",
    founded: "2021",
    offers: "Hatha Yoga, stretching, mobility training, movement training, breathwork, meditation, private and group classes, online sessions",
    instagram: "https://www.instagram.com/katrina_loraim/",
    readTime: "5 min read",
    initials: "EK",
    body: [
      "Ekaterina's relationship with movement began long before she discovered yoga. Sports, dance, and physical training had already been important parts of her life for years. But in 2017, she found herself looking for something beyond physical achievements. She wanted to understand her body more deeply, learn to listen to it, and explore the connection between physical movement and her inner state.",
      "Yoga became the space where those interests came together. It changed the way she understood physical effort, self-care, and the body's potential. What began as a personal practice gradually developed into something she wanted to share with others. In 2021, Ekaterina took her first steps as a yoga instructor, bringing her experience in movement and dance into a new professional direction.",
      "Her first year of teaching was a period of learning, experimentation, and discovering her own approach. Although she already had experience working with people through sports and physical training, yoga introduced a different perspective. She began to understand how important it was to recognise individual needs, physical abilities, and limitations rather than expecting everyone to follow the same routine.",
      "Over time, she discovered that one of her favourite parts of teaching was explaining the purpose behind each movement. For her, a class should be more than a sequence of exercises. Students should understand what they are doing, why it matters, and how it can support their bodies in everyday life.",
      "Today, Ekaterina works with people from different backgrounds and experience levels. Some are complete beginners, while others regularly practise sports, dance, or yoga. Many come looking for more than a conventional workout. They want to improve their relationship with their bodies, move more freely, and make physical activity a meaningful part of their lives.",
      "Her approach brings together several disciplines, including Hatha Yoga, stretching, mobility training, movement practices, and breathing techniques. Her background in sports and dance gives her a strong understanding of coordination and physical movement, while yoga has taught her to pay closer attention to awareness, balance, and individual needs.",
      "Ekaterina does not believe in magical transformations or one-size-fits-all solutions. She understands that every person has a different physical background, lifestyle, and set of goals. Rather than asking people to adapt to a fixed ideal, she believes that a good practice should adapt to the individual.",
      "One of the biggest lessons in her own journey has been understanding that strength is not always about doing more or pushing harder. Earlier in her life, she was more focused on physical achievements and testing her limits. Over time, she learned that knowing when to slow down, listen to the body, and find balance is equally important.",
      "This is also the message she brings into her classes. Progress requires patience, consistency, and awareness. In a world where people often compare themselves with others and expect immediate results, she encourages students to focus on their own development rather than chasing someone else's idea of fitness or flexibility.",
      "For anyone considering joining her classes, Ekaterina has a simple message: you do not need to be flexible, athletic, or experienced in yoga to begin. Her sessions can be adapted to different levels and goals, whether someone wants to improve flexibility, develop mobility and strength, recover after physical activity, explore breathing techniques, or simply create more space for themselves in everyday life.",
      "Now based in Batigama, Sri Lanka, near Hiriketiya and Dikwella, Ekaterina offers both private and group sessions in person, as well as online classes for students around the world. Her work continues to grow through the same curiosity that first brought her to yoga in 2017: a desire to understand movement, connect with the body, and help others experience the benefits of a more mindful approach to physical well-being.",
      "For Ekaterina, the body is not simply something to shape or improve. It is something to understand, respect, and learn to work with. Through yoga and movement, she hopes to help people discover not only what their bodies can do, but also how much better they can feel when they learn to listen."
    ],
    pullQuote: "A good practice should adapt to the person, not the other way around.",
    pullAfter: 5
  },

  {
    id: "11",
    published: "2026-11-07",
    image: "images/anna_firstenko.jpg",
    imageAlt: "Anna Firstenko, yoga teacher",
    tags: ["Yoga", "Women's Wellness", "Mindfulness"],
    sample: false,
    headline: "Starting Again, Never Giving Up: Anna Firstenko’s 10-Year Yoga Journey",
    summary: "From practising yoga at home to teaching for a decade, opening studios, and rebuilding her career after repeated challenges, Anna Firstenko’s journey is one of resilience, self-discovery and a lasting commitment to yoga.",
    business: "Independent Yoga Teaching",
    owner: "Anna Firstenko",
    location: "Switzerland",
    founded: "2016",
    offers: "Yoga classes, breathing exercises, mindfulness practices, women's circles and yoga lectures",
    instagram: "@anna_firstenko",
    readTime: "4 min read",
    initials: "AF",
    body: [
      "Anna Firstenko’s relationship with yoga began at home. Initially, she started practising on her own because she wanted to improve her physical fitness and feel better in her body. But as her practice developed, she discovered something she had not expected: yoga was transforming her inner state, too. That deeper experience made her want to continue, eventually leading her to find her first yoga teacher in her hometown.",
      "Her first year of practice was filled with enthusiasm. She quickly fell in love with yoga and, as she describes it, began falling in love with herself through the experience. She wanted to share that feeling with others and introduce as many people as possible to the practice. That desire inspired her to become a yoga teacher.",
      "Her first year of teaching felt natural and encouraging. With her own teacher's continued support and guidance, Anna gained confidence and began finding her place as an instructor.",
      "Over the years, the women who have joined her classes have come with different needs. Some are navigating age-related changes or physical discomfort, stiffness and limitations that affect their everyday lives. Others are drawn to yoga because they want to understand themselves more deeply and bring about an inner transformation.",
      "Anna believes in approaching every student as an individual, even in group classes. While someone may initially come with a physical goal, she looks beyond the body and also works with awareness, mindset and emotional well-being. Breathing exercises and mindfulness are an important part of her teaching, helping students connect with themselves as they practise.",
      "Her career has not followed a straight path. Moving to another city meant leaving the first yoga studio where she worked. Later, she opened her own studio, only to close it temporarily during the pandemic. She found the strength to reopen it, but the beginning of the war in Ukraine forced her to close it for a second time.",
      "Even then, Anna did not give up. She opened her studio again and continued teaching for a long period during the war. Each new beginning demanded resilience, but her commitment to yoga remained. For her, one of the greatest achievements of her career is simply that she has continued to grow and develop in the field despite everything that has happened.",
      "Today, Anna lives in Switzerland. She is learning German and looking for opportunities to teach in Swiss yoga studios, hoping to continue doing the work she loves. She also occasionally organises yoga classes for Ukrainian women living in Switzerland, creating opportunities for them to practise and connect.",
      "While teaching, communicating with clients and organising events such as women's circles and yoga lectures come naturally to Anna, marketing remains a challenge. Attracting new clients, promoting her work and handling sales are not always easy. There are moments when this feels discouraging, but she finds a way to regain her motivation and continue.",
      "Anna does not believe that people need special preparation before attending her classes. Her advice is simple: let go of expectations, arrive with an open mind and allow yourself to experience the practice. She believes that people can discover something interesting and beneficial when they give themselves that opportunity.",
      "Having taught yoga since 2016, Anna has spent ten years building, rebuilding and developing her work. Her story is not simply about teaching yoga; it is about adapting to change, finding the courage to begin again and continuing to follow a path that feels meaningful."
    ],
    pullQuote: "Every time life made me start again, I found a way to return to what I love.",
    pullAfter: 6
  },

  {
    id: "12",
    published: "2026-11-09",
    image: "images/kami-yoga.jpg",
    imageAlt: "Kami, founder of Move with Kami",
    tags: ["Yoga", "Personal Growth", "Wellness"],
    sample: false,
    headline: "From Back Pain to a New Purpose: Kami’s Journey into Yoga",
    summary: "What began as a way to strengthen her body and support her recovery from back problems became a passion and a new direction. Today, Kami is building her teaching practice while continuing to explore the many dimensions of yoga.",
    business: "Move with Kami",
    owner: "Kami",
    location: "Chicago area, Illinois, USA",
    founded: "2025",
    offers: "Private one-to-one Hatha, Vinyasa and Yin Yoga classes, online and in person; pursuing further training in Original Hot Yoga and Prenatal Yoga",
    instagram: "@movewithkami",
    readTime: "3 min read",
    initials: "K",
    body: [
      "Kami's journey into yoga began in 2020, when she was dealing with back problems. Already working with a physical therapist, she wanted to find another way to strengthen her body. At first, yoga was simply part of that physical journey. But over time, something changed. What began as a practical step towards feeling stronger gradually became a genuine passion, eventually inspiring her to become a yoga teacher.",
      "Her first years in yoga were filled with learning and exploration. She completed her 200-hour Hatha and Vinyasa teacher training, followed by certifications in Yin and Prenatal Yoga. Alongside her studies, she began teaching private one-to-one classes, both online and in person, adapting each session to the individual student.",
      "Her learning journey is far from over. Kami is currently focusing on a 330-hour Original Hot Yoga Teacher Training, deepening her understanding of a style that has become one of her biggest interests.",
      "Kami is still building her teaching community. Through private sessions, she has had the opportunity to work with students individually, shaping practices around their needs and abilities. Her aim is to create a comfortable and supportive environment where people can explore yoga without feeling pressured to perform or meet certain expectations.",
      "While she appreciates different approaches to yoga, 26&2 Hot Yoga holds a special place in her interests. She is drawn to its discipline, structure and the concept of a skeletal realignment system. She also loves the quiet, reflective quality of Yin and the freedom and creativity of Vinyasa. Rather than believing there is only one right way to practise, she values what each style can offer.",
      "One of the things Kami feels most proud of is how far she has come. When she first stepped onto the mat, she never imagined that dealing with back problems would eventually lead her towards teaching. Looking back at that beginning makes her appreciate the progress she has made — and feel excited about everything she has yet to learn.",
      "Building a teaching practice while working a full-time job comes with its own challenges. Between work, training, personal practice and creating content, finding enough hours in the day is not always easy. Kami is learning to be patient with herself and recognise that becoming a teacher is a process that takes time.",
      "Her message to anyone considering yoga is simple: you do not need to be flexible, know advanced poses or have years of experience. You just need to show up and give yourself a chance. She also encourages beginners to explore different styles until they find an approach that feels right for them.",
      "For Kami, yoga is an ongoing journey of discovery. She is proud of the path that brought her here, but she is just as interested in what comes next — continuing to study, grow and share the practice with others."
    ],
    pullQuote: "You don't need to be flexible to do yoga. You just need to show up and give yourself a chance.",
    pullAfter: 7
  },

  {
    id: "13",
    published: "2026-11-09",
    image: "images/kris.jpg",
    imageAlt: "Kris, founder of Present Practices",
    tags: ["Photography", "Yoga", "Women in Business"],
    sample: false,
    headline: "Behind the lens: how Kris combines photography and yoga to help wellness professionals be seen.",
    summary: "After 15 years as a portrait photographer and discovering yoga in India, Kris found a way to bring her two passions together. Through Present Practices, she creates thoughtful imagery that helps yoga teachers and wellness businesses share their work with confidence.",
    business: "Present Practices",
    owner: "Kris",
    location: "Potters Bar, Hertfordshire, UK",
    founded: "2020",
    offers: "Portrait photography, yoga teacher photography, wellness brand photography, retreat photography, mentoring",
    instagram: "https://www.instagram.com/kris_present_practices/",
    website: "https://presentpractices.com/",
    readTime: "5 min read",
    initials: "PP",
    body: [
      "For Kris, photography has been a part of life for 15 years. What began as a career in portrait photography gradually developed into something more personal when she discovered yoga. Curious about the practice, she travelled to India in 2019 to complete her yoga teacher training. That experience brought two important parts of her life together: photography and yoga.",
      "As her understanding of yoga grew, so did the direction of her photography. She began working more closely with yoga teachers, wellness brands, and holistic practitioners, recognising that these businesses needed more than ordinary portraits. They needed images that could communicate the atmosphere of their work, the people behind it, and the experiences they offered.",
      "Present Practices took on its clearer identity during Kris's Yoga Nidra and somatic teacher training in Sicily with her teacher, Alida. The experience encouraged her to look more deeply at herself and gave her the confidence to rethink her branding and give her photography a more defined purpose.",
      "From that point, she focused her marketing on helping yoga teachers and wellness businesses stand out through thoughtful, carefully created imagery. Photography became more than capturing someone's appearance; it became a way to help practitioners communicate their identity and connect with the people who might benefit from their work. She is now also exploring mentoring as another way to support wellness professionals.",
      "Her clients include yoga teachers, massage therapists, studios, and retreat businesses. Yoga teachers particularly appreciate that Kris understands their practice, alignment, and the kinds of photographs they need to represent their teaching. Her experience as a trained yoga teacher allows her to approach each shoot with an understanding that goes beyond the camera.",
      "The experience itself matters just as much as the final photographs. Kris guides clients through their sessions, creating space for movement, exploration, and natural expression. Many people arrive feeling nervous about being photographed, only to discover that they can relax and feel comfortable during the process.",
      "For Kris, one of the most rewarding parts of the work is seeing what happens after a shoot. A teacher might use the photographs to refresh a website, promote a retreat, or introduce their classes to a new audience. Knowing that her images can help someone share their teaching and reach the right people is a source of genuine pride.",
      "Running a photography business also comes with challenges that are easy to overlook. Unlike services people book every week, professional photography is often an occasional investment. This means Kris has to keep her marketing consistent, reach new audiences, and maintain relationships with potential clients while managing shoots and looking after existing customers. Finding that balance can sometimes feel overwhelming.",
      "One message she particularly wants to share is that nobody needs to be younger, more flexible, or more confident before booking a photography session. Many yoga teachers worry that they are not good enough to be photographed. Kris wants to challenge that feeling, especially among women in midlife who are ready to become more visible and share their work with the world.",
      "She also understands that teaching yoga involves running a business, and that side of the profession can sometimes feel complicated. While photographs cannot solve every business challenge, a thoughtful collection of images can provide a strong foundation for a website, marketing materials, and communicating what a practitioner offers.",
      "Based in Potters Bar, Hertfordshire, Kris works primarily in London and travels across the UK and Europe for photography projects. With Present Practices, she continues to explore how thoughtful imagery and a supportive photography experience can help wellness professionals feel more confident about showing up in their businesses. And she hopes that, one day, this work will take her even further afield."
    ],
    pullQuote: "You don't need to be younger, more flexible or more confident to be photographed. You just need to be ready to be seen.",
    pullAfter: 5
  }

];

/* Newest story first, automatically. Order = `published` date if a story has one (e.g. published: "2026-10-27"),
   otherwise its numeric id (higher id = newer). The first story becomes the big "Featured story" and the
   oldest story is #1, so numbers never change. You can paste new stories anywhere in the list. */
STORIES.forEach((st, i) => { st._k = st.published ? Date.parse(st.published) : (isFinite(+st.id) ? +st.id : -i); });
STORIES.sort((a, b) => (b._k - a._k) || ((+b.id || 0) - (+a.id || 0)));   // same date: higher id (added later) first
