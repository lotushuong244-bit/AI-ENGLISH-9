import { UnitData } from './types';

export const UNITS: UnitData[] = [
  {
    id: 1,
    title: "Unit 1",
    topic: "Environment",
    description: "Protecting our planet and green living.",
    color: "bg-green-600",
    vocab: [
      { id: 'u1_1', word: 'pollution', phonetic: '/pəˈluːʃn/', meaning: 'Sự ô nhiễm', example: 'Air pollution is a major problem in big cities.', image: 'https://images.unsplash.com/photo-1611273426761-53c8577a3c18?auto=format&fit=crop&w=400&q=80' },
      { id: 'u1_2', word: 'preserve', phonetic: '/prɪˈzɜːv/', meaning: 'Bảo tồn', example: 'We must preserve our natural resources.', image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=400&q=80' },
      { id: 'u1_3', word: 'recycle', phonetic: '/ˌriːˈsaɪkl/', meaning: 'Tái chế', example: 'We recycle plastic bottles to reduce waste.', image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=400&q=80' },
      { id: 'u1_4', word: 'eco-friendly', phonetic: '/ˌiːkəʊ ˈfrendli/', meaning: 'Thân thiện môi trường', example: 'I use eco-friendly bags when shopping.', image: 'https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&w=400&q=80' }
    ],
    listening: {
      id: 'l1',
      title: 'A Green Club Meeting',
      transcript: "Welcome to the Green Club. Today we are discussing how to reduce our carbon footprint. We suggest walking to school instead of taking a car, and planting more trees in the neighborhood.",
      questions: [
        { id: 'q1', question: 'What is the topic of the meeting?', options: ['Playing games', 'Reducing carbon footprint', 'Cooking', 'Exam preparation'], correctIndex: 1 },
        { id: 'q2', question: 'What suggestion is made?', options: ['Sleep more', 'Buy a new car', 'Walk to school', 'Cut down trees'], correctIndex: 2 }
      ]
    },
    speaking: [
      { id: 's1', topic: 'Environmental Solutions', modelSentence: 'We should plant more trees to make the air cleaner.' }
    ],
    grammar: [
      { id: 'g1', title: 'Complex Sentences', rule: 'Use subordinators (because, although, if) to connect clauses.', example: 'Although it was raining, we went out to pick up trash.' }
    ]
  },
  {
    id: 2,
    title: "Unit 2",
    topic: "Teen Stress & Pressure",
    description: "Dealing with academic and peer pressure.",
    color: "bg-red-500",
    vocab: [
      { id: 'u2_1', word: 'frustrated', phonetic: '/frʌˈstreɪtɪd/', meaning: 'Nản lòng', example: 'He felt frustrated with his exam results.', image: 'https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?auto=format&fit=crop&w=400&q=80' },
      { id: 'u2_2', word: 'expectation', phonetic: '/ˌekspekˈteɪʃn/', meaning: 'Sự kỳ vọng', example: 'Parental expectations can be high.', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&q=80' },
      { id: 'u2_3', word: 'peer pressure', phonetic: '/pɪə ˈpreʃə/', meaning: 'Áp lực đồng trang lứa', example: 'Teenagers often face peer pressure to fit in.', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=400&q=80' }
    ],
    listening: {
      id: 'l2',
      title: 'Advice Line',
      transcript: "If you feel overwhelmed, take a break. It is important to balance study and relaxation. Talk to a counselor if you need help.",
      questions: [
        { id: 'q1', question: 'What should you do if overwhelmed?', options: ['Study harder', 'Take a break', 'Quit school', 'Ignore it'], correctIndex: 1 }
      ]
    },
    speaking: [
      { id: 's2', topic: 'Giving Advice', modelSentence: 'If I were you, I would talk to my parents about my feelings.' }
    ],
    grammar: [
      { id: 'g2', title: 'Reported Speech', rule: 'Change tense back one step when reporting what someone said.', example: 'He said he was feeling stressed.' }
    ]
  },
  {
    id: 3,
    title: "Unit 3",
    topic: "English-speaking Countries",
    description: "Culture and geography of UK, USA, Australia.",
    color: "bg-blue-600",
    vocab: [
      { id: 'u3_1', word: 'accent', phonetic: '/ˈæksent/', meaning: 'Chất giọng', example: 'Australians have a distinct accent.', image: 'https://images.unsplash.com/photo-1526218626217-dc65a29bb444?auto=format&fit=crop&w=400&q=80' },
      { id: 'u3_2', word: 'native', phonetic: '/ˈneɪtɪv/', meaning: 'Bản xứ', example: 'She is a native English speaker.', image: 'https://images.unsplash.com/photo-1481487484168-9b930d5b7960?auto=format&fit=crop&w=400&q=80' }
    ],
    listening: {
      id: 'l3',
      title: 'Travel to London',
      transcript: "London is famous for Big Ben and the red double-decker buses. The weather can be rainy, so bring an umbrella.",
      questions: [
        { id: 'q1', question: 'What is famous in London?', options: ['Golden Gate Bridge', 'Big Ben', 'Eiffel Tower', 'Kangaroos'], correctIndex: 1 }
      ]
    },
    speaking: [
      { id: 's3', topic: 'Describing a Country', modelSentence: 'The USA is famous for the Statue of Liberty and Hollywood.' }
    ],
    grammar: [
      { id: 'g3', title: 'Present Tenses for Future', rule: 'Using present simple for schedules.', example: 'The train to London leaves at 8 AM tomorrow.' }
    ]
  },
  {
    id: 4,
    title: "Unit 4",
    topic: "Festivals around the World",
    description: "Celebrations, traditions and customs.",
    color: "bg-purple-500",
    vocab: [
      { id: 'u4_1', word: 'parade', phonetic: '/pəˈreɪd/', meaning: 'Cuộc diễu hành', example: 'We watched the colorful parade.', image: 'https://images.unsplash.com/photo-1514525253440-b393452e8d26?auto=format&fit=crop&w=400&q=80' },
      { id: 'u4_2', word: 'carnival', phonetic: '/ˈkɑːnɪvl/', meaning: 'Lễ hội hóa trang', example: 'Rio Carnival is the biggest in the world.', image: 'https://images.unsplash.com/photo-1565596956637-26806a6c4b28?auto=format&fit=crop&w=400&q=80' }
    ],
    listening: {
      id: 'l4',
      title: 'La Tomatina',
      transcript: "La Tomatina is a festival in Spain where people throw tomatoes at each other. It is messy but very fun!",
      questions: [
        { id: 'q1', question: 'What do people throw in La Tomatina?', options: ['Water', 'Tomatoes', 'Flowers', 'Candy'], correctIndex: 1 }
      ]
    },
    speaking: [
      { id: 's4', topic: 'Describing a Festival', modelSentence: 'Tet is the most important festival in Vietnam.' }
    ],
    grammar: [
      { id: 'g4', title: 'H/Wh- Questions', rule: 'Forming questions for information.', example: 'When does the festival start?' }
    ]
  },
  {
    id: 5,
    title: "Unit 5",
    topic: "Technology",
    description: "AI, gadgets and the digital age.",
    color: "bg-cyan-500",
    vocab: [
      { id: 'u5_1', word: 'artificial intelligence', phonetic: '/ˌɑːtɪfɪʃl ɪnˈtelɪdʒəns/', meaning: 'Trí tuệ nhân tạo', example: 'AI robots can help with housework.', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=400&q=80' },
      { id: 'u5_2', word: 'addiction', phonetic: '/əˈdɪkʃn/', meaning: 'Sự nghiện', example: 'Smartphone addiction is common among teens.', image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=400&q=80' }
    ],
    listening: {
      id: 'l5',
      title: 'Smart Homes',
      transcript: "In a smart home, you can control lights and temperature with your voice. It makes life convenient but raises privacy concerns.",
      questions: [
        { id: 'q1', question: 'What can you control in a smart home?', options: ['Weather', 'Lights and temperature', 'Traffic', 'Neighbors'], correctIndex: 1 }
      ]
    },
    speaking: [
      { id: 's5', topic: 'Tech Benefits', modelSentence: 'Technology helps us learn faster and connect with friends.' }
    ],
    grammar: [
      { id: 'g5', title: 'Passive Voice', rule: 'Subject receives the action.', example: 'Smartphones are used by billions of people.' }
    ]
  },
  {
    id: 6,
    title: "Unit 6",
    topic: "Community Service",
    description: "Volunteering and helping others.",
    color: "bg-orange-500",
    vocab: [
      { id: 'u6_1', word: 'volunteer', phonetic: '/ˌvɒlənˈtɪə(r)/', meaning: 'Tình nguyện viên', example: 'She is a volunteer at the animal shelter.', image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=400&q=80' },
      { id: 'u6_2', word: 'donate', phonetic: '/dəʊˈneɪt/', meaning: 'Quyên góp', example: 'We donated books to the rural library.', image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=400&q=80' }
    ],
    listening: {
      id: 'l6',
      title: 'Helping the Elderly',
      transcript: "Our class organized a visit to the nursing home. We sang songs and talked with the elderly people. They were very happy.",
      questions: [
        { id: 'q1', question: 'Where did the class visit?', options: ['School', 'Nursing home', 'Hospital', 'Park'], correctIndex: 1 }
      ]
    },
    speaking: [
      { id: 's6', topic: 'Volunteering', modelSentence: 'I enjoy helping the community because it makes me feel useful.' }
    ],
    grammar: [
      { id: 'g6', title: 'Past Simple & Past Continuous', rule: 'Interrupted actions in the past.', example: 'I was cleaning the park when it started to rain.' }
    ]
  },
  {
    id: 7,
    title: "Unit 7",
    topic: "Healthy Lifestyle",
    description: "Diet, exercise and mental health.",
    color: "bg-lime-500",
    vocab: [
      { id: 'u7_1', word: 'balanced diet', phonetic: '/ˈbælənst ˈdaɪət/', meaning: 'Chế độ ăn cân bằng', example: 'A balanced diet includes fruits and vegetables.', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=400&q=80' },
      { id: 'u7_2', word: 'workout', phonetic: '/ˈwɜːkaʊt/', meaning: 'Tập thể dục', example: 'I do a 30-minute workout every morning.', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=400&q=80' }
    ],
    listening: {
      id: 'l7',
      title: 'Sleep Habits',
      transcript: "Teenagers need about 8 to 10 hours of sleep. Lack of sleep can affect your memory and mood.",
      questions: [
        { id: 'q1', question: 'How much sleep do teens need?', options: ['5-6 hours', '8-10 hours', '12 hours', '4 hours'], correctIndex: 1 }
      ]
    },
    speaking: [
      { id: 's7', topic: 'Giving Health Tips', modelSentence: 'You should avoid fast food and drink more water.' }
    ],
    grammar: [
      { id: 'g7', title: 'Modals for Advice', rule: 'Should / Ought to / Must.', example: 'You ought to get more sleep.' }
    ]
  },
  {
    id: 8,
    title: "Unit 8",
    topic: "World Englishes",
    description: "Varieties of English around the globe.",
    color: "bg-indigo-500",
    vocab: [
      { id: 'u8_1', word: 'dialect', phonetic: '/ˈdaɪəlekt/', meaning: 'Tiếng địa phương', example: 'People in the north speak a different dialect.', image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=400&q=80' },
      { id: 'u8_2', word: 'official language', phonetic: '/əˈfɪʃl ˈlæŋɡwɪdʒ/', meaning: 'Ngôn ngữ chính thức', example: 'English is an official language in Singapore.', image: 'https://images.unsplash.com/photo-1564959130747-897fb406b9dc?auto=format&fit=crop&w=400&q=80' }
    ],
    listening: {
      id: 'l8',
      title: 'Singlish',
      transcript: "In Singapore, people often speak 'Singlish', which mixes English with Chinese and Malay words. It is unique to their culture.",
      questions: [
        { id: 'q1', question: 'What is Singlish?', options: ['Standard English', 'A mix of languages in Singapore', 'A food', 'A festival'], correctIndex: 1 }
      ]
    },
    speaking: [
      { id: 's8', topic: 'Language Importance', modelSentence: 'English helps people from different countries communicate.' }
    ],
    grammar: [
      { id: 'g8', title: 'Relative Clauses', rule: 'Defining vs Non-defining clauses.', example: 'English, which is spoken globally, is very useful.' }
    ]
  },
  {
    id: 9,
    title: "Unit 9",
    topic: "Future Careers",
    description: "Jobs, skills and ambitions.",
    color: "bg-teal-600",
    vocab: [
      { id: 'u9_1', word: 'qualification', phonetic: '/ˌkwɒlɪfɪˈkeɪʃn/', meaning: 'Bằng cấp, trình độ', example: 'You need good qualifications for this job.', image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=400&q=80' },
      { id: 'u9_2', word: 'mechanic', phonetic: '/məˈkænɪk/', meaning: 'Thợ máy', example: 'The mechanic fixed my car.', image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=400&q=80' }
    ],
    listening: {
      id: 'l9',
      title: 'Job Interview',
      transcript: "In a job interview, be confident and honest. Research the company beforehand and dress appropriately.",
      questions: [
        { id: 'q1', question: 'What should you do before an interview?', options: ['Sleep', 'Research the company', 'Eat a big meal', 'Play games'], correctIndex: 1 }
      ]
    },
    speaking: [
      { id: 's9', topic: 'Dream Job', modelSentence: 'I want to become a doctor to help sick people.' }
    ],
    grammar: [
      { id: 'g9', title: 'Conditional Type 2', rule: 'Unreal situations in the present.', example: 'If I were you, I would study medicine.' }
    ]
  },
  {
    id: 10,
    title: "Unit 10",
    topic: "Media & Communication",
    description: "Social media, news and networking.",
    color: "bg-pink-500",
    vocab: [
      { id: 'u10_1', word: 'social media', phonetic: '/ˌsəʊʃl ˈmiːdiə/', meaning: 'Mạng xã hội', example: 'I use social media to keep in touch with friends.', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=400&q=80' },
      { id: 'u10_2', word: 'interact', phonetic: '/ˌɪntərˈækt/', meaning: 'Tương tác', example: 'We interact with people all over the world online.', image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=400&q=80' }
    ],
    listening: {
      id: 'l10',
      title: 'Fake News',
      transcript: "Be careful with fake news on the internet. Always check the source before sharing information.",
      questions: [
        { id: 'q1', question: 'What should you check before sharing?', options: ['The time', 'The source', 'The color', 'The font'], correctIndex: 1 }
      ]
    },
    speaking: [
      { id: 's10', topic: 'Using Social Media', modelSentence: 'Social media is useful, but it can also be a distraction.' }
    ],
    grammar: [
      { id: 'g10', title: 'Prepositions of Time/Place', rule: 'In, On, At usage.', example: 'I saw the news on Facebook at 8 PM.' }
    ]
  },
  {
    id: 11,
    title: "Unit 11",
    topic: "Global Issues",
    description: "Poverty, hunger and climate change.",
    color: "bg-stone-500",
    vocab: [
      { id: 'u11_1', word: 'poverty', phonetic: '/ˈpɒvəti/', meaning: 'Sự nghèo đói', example: 'Many organizations are fighting to end poverty.', image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=400&q=80' },
      { id: 'u11_2', word: 'overpopulation', phonetic: '/ˌəʊvəˌpɒpjuˈleɪʃn/', meaning: 'Sự quá tải dân số', example: 'Overpopulation causes a lack of resources.', image: 'https://images.unsplash.com/photo-1477763858572-cda7deaa9bc5?auto=format&fit=crop&w=400&q=80' }
    ],
    listening: {
      id: 'l11',
      title: 'Climate Change',
      transcript: "Climate change is causing sea levels to rise. We need to reduce greenhouse gases immediately.",
      questions: [
        { id: 'q1', question: 'What is climate change causing?', options: ['Lower temperatures', 'Rising sea levels', 'More trees', 'Less rain'], correctIndex: 1 }
      ]
    },
    speaking: [
      { id: 's11', topic: 'Discussing Problems', modelSentence: 'We must work together to solve global warming.' }
    ],
    grammar: [
      { id: 'g11', title: 'Perfect Gerunds', rule: 'Having + V3.', example: 'He was accused of having stolen the money.' }
    ]
  },
  {
    id: 12,
    title: "Unit 12",
    topic: "Culture Exchange",
    description: "Learning from other cultures.",
    color: "bg-violet-600",
    vocab: [
      { id: 'u12_1', word: 'diversity', phonetic: '/daɪˈvɜːsəti/', meaning: 'Sự đa dạng', example: 'Cultural diversity makes the world interesting.', image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=400&q=80' },
      { id: 'u12_2', word: 'custom', phonetic: '/ˈkʌstəm/', meaning: 'Phong tục', example: 'It is a custom to bow when greeting in Japan.', image: 'https://images.unsplash.com/photo-1528360983277-13d9012356ee?auto=format&fit=crop&w=400&q=80' }
    ],
    listening: {
      id: 'l12',
      title: 'Study Abroad',
      transcript: "Studying abroad allows you to experience new cultures and meet people from different backgrounds.",
      questions: [
        { id: 'q1', question: 'What is a benefit of studying abroad?', options: ['Eating fast food', 'Experiencing new cultures', 'Sleeping more', 'Saving money'], correctIndex: 1 }
      ]
    },
    speaking: [
      { id: 's12', topic: 'Cultural Differences', modelSentence: 'I want to learn about Korean culture through their food and music.' }
    ],
    grammar: [
      { id: 'g12', title: 'Articles', rule: 'A, An, The usage.', example: 'The Mekong River flows through several countries.' }
    ]
  }
];
