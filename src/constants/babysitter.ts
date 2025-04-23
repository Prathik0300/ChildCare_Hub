import Profile from "../assets/profile.webp";

export const BABYSITTER_INFO: Record<string, any> = [
  {
    id: "carolyn-becker",
    firstName: "Carolyn",
    lastName: "Becker",
    fullName: "Carolyn Becker",
    initials: "CB",
    rating: 4.7,
    available: true,
    experience: 5,
    time: 20,
    rate: 17,
    profileImage: Profile,
    availabilitySlots: {
      "2025-29-03": {
        timeSlots: [
          {
            startTime: "8:00 AM",
            endTime: "3:00 PM",
          },
          {
            startTime: "6:00 PM",
            endTime: "10:00 PM",
          },
        ],
      },
      "2025-30-03": {
        timeAvailability: [
          {
            startTime: "8:00 AM",
            endTime: "3:00 PM",
          },
          {
            startTime: "6:00 PM",
            endTime: "10:00 PM",
          },
        ],
      },
      "2025-31-03": {
        timeAvailability: [
          {
            startTime: "8:00 AM",
            endTime: "3:00 PM",
          },
          {
            startTime: "6:00 PM",
            endTime: "10:00 PM",
          },
        ],
      },
      "2025-01-04": {
        timeAvailability: [
          {
            startTime: "8:00 AM",
            endTime: "3:00 PM",
          },
          {
            startTime: "6:00 PM",
            endTime: "10:00 PM",
          },
        ],
      },
    },
    description:
      "Early childhood education graduate with a passion for creating engaging learning activities. I believe in nurturing children's curiosity and encouraging exploration through play. My approach focuses on positive reinforcement and age-appropriate development.",
    qualifications: [
      "Cooking",
      "Vietnamese",
      "Laundry",
      "Tutoring",
      "Cleaning",
      "Pickup",
      "Drop off",
    ],
    reviews: [
      {
        id: 1,
        name: "Siena Hill",
        rating: 5,
        initial: "S",
        review:
          "Carolyn was amazing with my twins, keeping them entertained with creative activities while maintaining boundaries.",
      },
      {
        id: 2,
        name: "Patrick Hurst",
        rating: 4,
        initial: "P",
        review:
          "Very reliable and punctual, my kids always look forward to her visits.",
      },
      {
        id: 3,
        name: "Krew Larson",
        rating: 5,
        initial: "K",
        review:
          "Exceptional at handling my toddler's tantrums with patience and understanding.",
      },
      {
        id: 4,
        name: "Valerie Stuart",
        rating: 4,
        initial: "V",
        review:
          "Great at following our household routines and adding her educational touch to playtime.",
      },
      {
        id: 5,
        name: "Terrance Jones",
        rating: 5,
        initial: "T",
        review:
          "Always goes above and beyond, leaving the house tidier than she found it and the kids happy.",
      },
      {
        id: 6,
        name: "Monica Chen",
        rating: 5,
        initial: "M",
        review:
          "The Vietnamese lessons she gives my daughter are priceless; we're so grateful for her cultural knowledge.",
      },
    ],
    messages: [
      {
        from: "You",
        message: "Can you babysit on short notice?",
      },
      {
        from: "babySitter",
        message: "Yes!!",
      },
      {
        from: "You",
        message: "Are you available next Friday?",
      },
    ],
    distance: 15,
  },
  {
    id: "jennifer-lopez",
    firstName: "Jennifer",
    lastName: "Lopez",
    fullName: "Jennifer Lopez",
    initials: "JL",
    rating: 4.9,
    available: true,
    experience: 8,
    time: 30,
    rate: 22,
    profileImage: Profile,
    availabilitySlots: {
      "2025-29-03": {
        timeSlots: [
          {
            startTime: "9:00 AM",
            endTime: "5:00 PM",
          },
        ],
      },
      "2025-31-03": {
        timeAvailability: [
          {
            startTime: "12:00 PM",
            endTime: "9:00 PM",
          },
        ],
      },
      "2025-01-04": {
        timeAvailability: [
          {
            startTime: "9:00 AM",
            endTime: "9:00 PM",
          },
        ],
      },
      "2025-02-04": {
        timeAvailability: [
          {
            startTime: "6:00 PM",
            endTime: "10:00 PM",
          },
        ],
      },
    },
    description:
      "Pediatric nurse by day, babysitter by weekend with CPR and first aid certification. I specialize in caring for children with special needs and medical requirements. My nursing background ensures a safe environment while still focusing on fun and development.",
    qualifications: [
      "CPR Certified",
      "Special Needs",
      "Medical Care",
      "Spanish",
      "Meal Prep",
      "Homework Help",
      "Arts & Crafts",
    ],
    reviews: [
      {
        id: 1,
        name: "Margaret Wilson",
        rating: 5,
        initial: "M",
        review:
          "Jennifer's nursing background was invaluable when my son had an allergic reaction; she handled it calmly and professionally.",
      },
      {
        id: 2,
        name: "Robert Chen",
        rating: 5,
        initial: "R",
        review:
          "As parents of a child with autism, we've never felt more comfortable leaving our son with anyone else.",
      },
      {
        id: 3,
        name: "Sarah Johnson",
        rating: 5,
        initial: "S",
        review:
          "Her Spanish lessons are an amazing bonus to the exceptional care she provides.",
      },
      {
        id: 4,
        name: "Thomas Wright",
        rating: 5,
        initial: "T",
        review:
          "Incredibly organized and attentive to my daughter's medication schedule.",
      },
      {
        id: 5,
        name: "Diana Patel",
        rating: 5,
        initial: "D",
        review:
          "My kids love her creative activities and I love her attention to safety details.",
      },
      {
        id: 6,
        name: "James Rodriguez",
        rating: 4,
        initial: "J",
        review:
          "Professional, punctual, and genuinely cares about children's wellbeing.",
      },
      {
        id: 7,
        name: "Emily Schwartz",
        rating: 5,
        initial: "E",
        review:
          "Jennifer helped my daughter overcome her fear of water during bath time with patience and creative techniques.",
      },
    ],
    messages: [
      {
        from: "You",
        message: "Do you have experience with food allergies?",
      },
      {
        from: "babySitter",
        message:
          "Absolutely! As a pediatric nurse, I'm well-versed in managing allergies and can handle EpiPens if needed.",
      },
      {
        from: "You",
        message:
          "That's perfect for our situation. Can we schedule a meet and greet?",
      },
    ],
    distance: 15,
  },
  {
    id: "sophia-washington",
    firstName: "Sophia",
    lastName: "Washington",
    fullName: "Sophia Washington",
    initials: "SW",
    rating: 4.5,
    available: false,
    experience: 3,
    time: 15,
    rate: 16,
    profileImage: Profile,
    availabilitySlots: {
      "2025-28-03": {
        timeSlots: [
          {
            startTime: "4:00 PM",
            endTime: "10:00 PM",
          },
        ],
      },
      "2025-29-03": {
        timeAvailability: [
          {
            startTime: "10:00 AM",
            endTime: "2:00 PM",
          },
        ],
      },
      "2025-04-04": {
        timeAvailability: [
          {
            startTime: "9:00 AM",
            endTime: "6:00 PM",
          },
        ],
      },
      "2025-05-04": {
        timeAvailability: [
          {
            startTime: "5:00 PM",
            endTime: "10:00 PM",
          },
        ],
      },
    },
    description:
      "Music education student who brings rhythm and creativity to childcare. I incorporate age-appropriate music activities that develop cognitive skills while having fun. My specialties include piano lessons and songwriting games for all ages.",
    qualifications: [
      "Piano Lessons",
      "Guitar",
      "Swimming",
      "French",
      "Baking",
      "Art Projects",
      "Story Time",
    ],
    reviews: [
      {
        id: 1,
        name: "Lauren Taylor",
        rating: 5,
        initial: "L",
        review:
          "Sophia taught my 5-year-old simple piano pieces that boosted his confidence tremendously.",
      },
      {
        id: 2,
        name: "Michael Garcia",
        rating: 4,
        initial: "M",
        review:
          "The kids were composing their own songs by the end of the weekend!",
      },
      {
        id: 3,
        name: "Olivia Martinez",
        rating: 5,
        initial: "O",
        review:
          "Her French songs make language learning fun and natural for my toddler.",
      },
      {
        id: 4,
        name: "David Johnson",
        rating: 4,
        initial: "D",
        review:
          "Creative and engaging activities that kept my energetic twins entertained for hours.",
      },
      {
        id: 5,
        name: "Zoe Williams",
        rating: 5,
        initial: "Z",
        review:
          "A natural with children who brings music into everyday activities in meaningful ways.",
      },
      {
        id: 6,
        name: "Ethan Robertson",
        rating: 4,
        initial: "E",
        review:
          "My son now looks forward to piano practice thanks to Sophia's encouraging teaching style.",
      },
    ],
    messages: [
      {
        from: "You",
        message:
          "My daughter loves music. Do you incorporate that into your babysitting?",
      },
      {
        from: "babySitter",
        message:
          "Absolutely! Music education is my specialty. I can bring my portable keyboard and some instruments for music games if you'd like.",
      },
      {
        from: "You",
        message: "That sounds wonderful! She would love that.",
      },
    ],
    distance: 72,
  },
  {
    id: "madison-chen",
    firstName: "Madison",
    lastName: "Chen",
    fullName: "Madison Chen",
    initials: "MC",
    rating: 4.3,
    available: true,
    experience: 6,
    time: 25,
    rate: 19,
    profileImage: Profile,
    availabilitySlots: {
      "2025-27-03": {
        timeSlots: [
          {
            startTime: "3:00 PM",
            endTime: "11:00 PM",
          },
        ],
      },
      "2025-28-03": {
        timeAvailability: [
          {
            startTime: "3:00 PM",
            endTime: "11:00 PM",
          },
        ],
      },
      "2025-03-04": {
        timeAvailability: [
          {
            startTime: "10:00 AM",
            endTime: "2:00 PM",
          },
          {
            startTime: "4:00 PM",
            endTime: "8:00 PM",
          },
        ],
      },
      "2025-04-04": {
        timeAvailability: [
          {
            startTime: "10:00 AM",
            endTime: "8:00 PM",
          },
        ],
      },
    },
    description:
      "Elementary school teacher specializing in STEM activities and outdoor education. I create age-appropriate science experiments and nature exploration activities that make learning exciting. Your children will have fun while developing critical thinking skills and scientific curiosity.",
    qualifications: [
      "STEM Activities",
      "Mandarin Chinese",
      "Hiking",
      "Science Experiments",
      "Math Tutoring",
      "Gardening",
      "Coding Basics",
    ],
    reviews: [
      {
        id: 1,
        name: "Andrew Kim",
        rating: 5,
        initial: "A",
        review:
          "Madison turned our backyard into a science lab that had my kids talking about plant biology for weeks!",
      },
      {
        id: 2,
        name: "Jessica Park",
        rating: 4,
        initial: "J",
        review:
          "Her Mandarin lessons are perfectly integrated into playtime, making language acquisition natural.",
      },
      {
        id: 3,
        name: "Benjamin Lee",
        rating: 5,
        initial: "B",
        review:
          "My son built his first simple robot under Madison's guidance and hasn't stopped talking about engineering since.",
      },
      {
        id: 4,
        name: "Sophia Rivera",
        rating: 4,
        initial: "S",
        review:
          "She makes math fun with games and real-world applications that boosted my daughter's confidence.",
      },
      {
        id: 5,
        name: "Nathan Wong",
        rating: 3,
        initial: "N",
        review:
          "Great with STEM activities, though sometimes the projects were a bit advanced for my 4-year-old.",
      },
      {
        id: 6,
        name: "Elena Castro",
        rating: 5,
        initial: "E",
        review:
          "Madison's garden project helped my son overcome his fear of insects while learning about ecosystems.",
      },
      {
        id: 7,
        name: "William Johnson",
        rating: 4,
        initial: "W",
        review:
          "Excellent at making coding concepts accessible even to elementary school children.",
      },
      {
        id: 8,
        name: "Mia Thompson",
        rating: 5,
        initial: "M",
        review:
          "Her nature hikes are educational adventures that my kids beg to go on again and again.",
      },
    ],
    messages: [
      {
        from: "You",
        message: "My son loves science. What kind of activities do you do?",
      },
      {
        from: "babySitter",
        message:
          "I specialize in hands-on STEM projects! Last week we made volcanoes, studied rock formations, and programmed a simple robot. I can bring age-appropriate materials for experiments.",
      },
      {
        from: "You",
        message: "That sounds perfect! He would be thrilled.",
      },
    ],
    distance: 98,
  },
  {
    id: "taylor-rodriguez",
    firstName: "Taylor",
    lastName: "Rodriguez",
    fullName: "Taylor Rodriguez",
    initials: "TR",
    rating: 4.8,
    available: true,
    experience: 10,
    time: 40,
    rate: 25,
    profileImage: Profile,
    availabilitySlots: {
      "2025-25-03": {
        timeSlots: [
          {
            startTime: "2:00 PM",
            endTime: "10:00 PM",
          },
        ],
      },
      "2025-26-03": {
        timeAvailability: [
          {
            startTime: "7:00 AM",
            endTime: "1:00 PM",
          },
        ],
      },
      "2025-02-04": {
        timeAvailability: [
          {
            startTime: "7:00 AM",
            endTime: "7:00 PM",
          },
        ],
      },
      "2025-06-04": {
        timeAvailability: [
          {
            startTime: "9:00 AM",
            endTime: "3:00 PM",
          },
          {
            startTime: "5:00 PM",
            endTime: "9:00 PM",
          },
        ],
      },
    },
    description:
      "Former pediatric physical therapist with expertise in developmental milestones and motor skills. I create customized play activities that support physical development while ensuring children have fun. My approach combines therapeutic techniques with engaging games suitable for all ability levels.",
    qualifications: [
      "Physical Therapy",
      "Sign Language",
      "Developmental Activities",
      "Swimming Instruction",
      "First Aid Certified",
      "Special Needs Experience",
      "Sports Coaching",
    ],
    reviews: [
      {
        id: 1,
        name: "Christopher Martinez",
        rating: 5,
        initial: "C",
        review:
          "Taylor designed activities that helped my son with cerebral palsy improve his coordination while having a blast.",
      },
      {
        id: 2,
        name: "Rachel Wong",
        rating: 5,
        initial: "R",
        review:
          "Her sign language skills made communication possible with my non-verbal daughter for the first time.",
      },
      {
        id: 3,
        name: "Daniel Kim",
        rating: 5,
        initial: "D",
        review:
          "Taylor helped my twins reach their motor milestones through play-based activities that felt like pure fun to them.",
      },
      {
        id: 4,
        name: "Vanessa Garcia",
        rating: 4,
        initial: "V",
        review:
          "Excellent at adapting activities to accommodate my son's physical limitations without making him feel different.",
      },
      {
        id: 5,
        name: "Joshua Lin",
        rating: 5,
        initial: "J",
        review:
          "Her swimming lessons addressed my daughter's water anxiety with patience and expertise.",
      },
      {
        id: 6,
        name: "Amelia Patel",
        rating: 5,
        initial: "A",
        review:
          "Worth every penny for the specialized attention she gives to developmental concerns while keeping childcare fun.",
      },
      {
        id: 7,
        name: "Brandon Nguyen",
        rating: 5,
        initial: "B",
        review:
          "Taylor's background in PT was evident in how she helped my son improve his pencil grip through playful activities.",
      },
    ],
    messages: [
      {
        from: "You",
        message:
          "My daughter has some motor delays. Would that be something you're comfortable with?",
      },
      {
        from: "babySitter",
        message:
          "Absolutely! As a former pediatric PT, I specialize in creating fun activities that support motor development. I'd love to hear more about her specific needs.",
      },
      {
        from: "You",
        message: "That's exactly what we're looking for. When can we meet?",
      },
    ],
    distance: 9,
  },
  {
    id: "amy-patel",
    firstName: "Amy",
    lastName: "Patel",
    fullName: "Amy Patel",
    initials: "AP",
    rating: 4.6,
    available: true,
    experience: 4,
    time: 18,
    rate: 18,
    profileImage: Profile,
    availabilitySlots: {
      "2025-29-03": {
        timeSlots: [
          {
            startTime: "4:00 PM",
            endTime: "10:00 PM",
          },
        ],
      },
      "2025-30-03": {
        timeAvailability: [
          {
            startTime: "11:00 AM",
            endTime: "8:00 PM",
          },
        ],
      },
      "2025-02-04": {
        timeAvailability: [
          {
            startTime: "10:00 AM",
            endTime: "10:00 PM",
          },
        ],
      },
      "2025-03-04": {
        timeAvailability: [
          {
            startTime: "4:00 PM",
            endTime: "10:00 PM",
          },
        ],
      },
    },
    description:
      "Nutrition and culinary arts student who makes healthy eating fun for kids. I involve children in age-appropriate cooking activities that teach nutrition concepts through hands-on experience. My goal is to expand palates while creating positive relationships with food.",
    qualifications: [
      "Culinary Skills",
      "Hindi",
      "Gujarati",
      "Nutrition Education",
      "Meal Planning",
      "Food Allergies Management",
      "Vegetarian Cooking",
    ],
    reviews: [
      {
        id: 1,
        name: "Priya Shah",
        rating: 5,
        initial: "P",
        review:
          "Amy got my picky eater to try new vegetables by involving him in fun food preparation activities.",
      },
      {
        id: 2,
        name: "Kevin Zhang",
        rating: 4,
        initial: "K",
        review:
          "Her kid-friendly cooking lessons are both educational and delicious; my daughter now helps prepare family dinners!",
      },
      {
        id: 3,
        name: "Nadia Johnson",
        rating: 5,
        initial: "N",
        review:
          "Amy expertly accommodated my son's food allergies while making meal times stress-free and enjoyable.",
      },
      {
        id: 4,
        name: "Ryan Kumar",
        rating: 4,
        initial: "R",
        review:
          "She introduced my kids to Indian cuisine in a way that made them excited to try new flavors and spices.",
      },
      {
        id: 5,
        name: "Leila Hassan",
        rating: 5,
        initial: "L",
        review:
          "Amy's nutrition games turned healthy eating into something my children actually look forward to now.",
      },
      {
        id: 6,
        name: "Tyler Williams",
        rating: 5,
        initial: "T",
        review:
          "Her approach to vegetarian cooking opened up a whole new world of options for our family meals.",
      },
    ],
    messages: [
      {
        from: "You",
        message:
          "My kids are very picky eaters. Is that something you've dealt with before?",
      },
      {
        from: "babySitter",
        message:
          "Absolutely! I specialize in making food fun and involving kids in the preparation process. This ownership often helps expand their palates naturally. I'd love to know their current favorites to build from there.",
      },
      {
        from: "You",
        message:
          "That sounds like a great approach. They currently only eat pasta and chicken nuggets.",
      },
    ],
    distance: 94,
  },
  {
    id: "olivia-smith",
    firstName: "Olivia",
    lastName: "Smith",
    fullName: "Olivia Smith",
    initials: "OS",
    rating: 4.2,
    available: false,
    experience: 2,
    time: 10,
    rate: 15,
    profileImage: Profile,
    availabilitySlots: {
      "2025-27-03": {
        timeSlots: [
          {
            startTime: "12:00 PM",
            endTime: "6:00 PM",
          },
        ],
      },
      "2025-01-04": {
        timeAvailability: [
          {
            startTime: "5:00 PM",
            endTime: "9:00 PM",
          },
        ],
      },
      "2025-04-04": {
        timeAvailability: [
          {
            startTime: "1:00 PM",
            endTime: "9:00 PM",
          },
        ],
      },
      "2025-05-04": {
        timeAvailability: [
          {
            startTime: "9:00 AM",
            endTime: "5:00 PM",
          },
        ],
      },
    },
    description:
      "Art therapy student who uses creative expression to help children process emotions and develop social skills. I design art projects that build confidence while allowing kids to express themselves freely. My approach emphasizes the creative process rather than perfect results.",
    qualifications: [
      "Art Therapy",
      "French",
      "Drawing",
      "Painting",
      "Clay Modeling",
      "Emotional Intelligence",
      "Conflict Resolution",
    ],
    reviews: [
      {
        id: 1,
        name: "Rebecca Johnson",
        rating: 4,
        initial: "R",
        review:
          "Olivia helped my shy daughter express herself through art when she was struggling to verbalize her feelings.",
      },
      {
        id: 2,
        name: "Jason Miller",
        rating: 5,
        initial: "J",
        review:
          "Her art projects are amazing and adaptable to different age groups and skill levels.",
      },
      {
        id: 3,
        name: "Claire Dupont",
        rating: 4,
        initial: "C",
        review:
          "My kids loved the French songs and stories she incorporated into their art time.",
      },
      {
        id: 4,
        name: "Derek Thompson",
        rating: 3,
        initial: "D",
        review:
          "Creative and patient, though sometimes struggled with setting boundaries with my energetic twins.",
      },
      {
        id: 5,
        name: "Maya Rodriguez",
        rating: 5,
        initial: "M",
        review:
          "Olivia's clay modeling session helped my son work through his anxiety about starting school.",
      },
      {
        id: 6,
        name: "Eliza Bennett",
        rating: 4,
        initial: "E",
        review:
          "She turns simple art supplies into tools for emotional growth and expression.",
      },
    ],
    messages: [
      {
        from: "You",
        message:
          "My son has trouble expressing his emotions. Would your art approach help?",
      },
      {
        from: "babySitter",
        message:
          "Art can be a wonderful outlet for emotional expression! I'd be happy to design activities that help him communicate his feelings in a comfortable, non-verbal way.",
      },
      {
        from: "You",
        message: "That sounds perfect. What materials would you need?",
      },
    ],
    distance: 41,
  },
  {
    id: "gabrielle-jackson",
    firstName: "Gabrielle",
    lastName: "Jackson",
    fullName: "Gabrielle Jackson",
    initials: "GJ",
    rating: 4.9,
    available: true,
    experience: 12,
    time: 48,
    rate: 28,
    profileImage: Profile,
    availabilitySlots: {
      "2025-28-03": {
        timeSlots: [
          {
            startTime: "6:00 AM",
            endTime: "12:00 PM",
          },
          {
            startTime: "2:00 PM",
            endTime: "8:00 PM",
          },
        ],
      },
      "2025-29-03": {
        timeAvailability: [
          {
            startTime: "6:00 AM",
            endTime: "8:00 PM",
          },
        ],
      },
      "2025-31-03": {
        timeAvailability: [
          {
            startTime: "6:00 AM",
            endTime: "2:00 PM",
          },
        ],
      },
      "2025-06-04": {
        timeAvailability: [
          {
            startTime: "2:00 PM",
            endTime: "8:00 PM",
          },
        ],
      },
    },
    description:
      "Former kindergarten teacher with 12 years of childcare experience across all age groups. I create structured environments that balance learning with plenty of play and outdoor time. My expertise includes managing multiple children of different ages simultaneously.",
    qualifications: [
      "Early Childhood Education",
      "ASL",
      "Spanish",
      "Curriculum Planning",
      "Potty Training",
      "Behavioral Management",
      "Newborn Care",
    ],
    reviews: [
      {
        id: 1,
        name: "Alicia Carter",
        rating: 5,
        initial: "A",
        review:
          "Gabrielle managed my four children ages 1-10 with incredible organization and individualized attention for each.",
      },
      {
        id: 2,
        name: "Marcus Wilson",
        rating: 5,
        initial: "M",
        review:
          "Her teacher background shines through in the perfect balance of fun and learning activities she plans.",
      },
      {
        id: 3,
        name: "Stephanie Brown",
        rating: 5,
        initial: "S",
        review:
          "Successfully potty-trained our stubborn 3-year-old in just one weekend with her gentle but consistent approach.",
      },
      {
        id: 4,
        name: "Anthony Lopez",
        rating: 5,
        initial: "A",
        review:
          "The ASL basics she taught our hearing children have helped them communicate with their deaf cousin effectively.",
      },
      {
        id: 5,
        name: "Michelle Davis",
        rating: 5,
        initial: "M",
        review:
          "Handled our newborn with confidence and care while still giving our toddler plenty of attention.",
      },
      {
        id: 6,
        name: "Jordan Taylor",
        rating: 4,
        initial: "J",
        review:
          "Excellent at maintaining routines and boundaries while still making childcare feel fun and engaging.",
      },
      {
        id: 7,
        name: "Karen White",
        rating: 5,
        initial: "K",
        review:
          "Worth every penny for her expertise in behavioral management that transformed our evening routines.",
      },
      {
        id: 8,
        name: "David Johnson",
        rating: 5,
        initial: "D",
        review:
          "The Spanish lessons integrated into playtime have given my children a strong foundation in the language.",
      },
    ],
    messages: [
      {
        from: "You",
        message:
          "We have three kids of different ages. Is that something you can handle?",
      },
      {
        from: "babySitter",
        message:
          "Absolutely! As a former kindergarten teacher, I'm experienced in managing multiple children of different ages. I create activities that can be adapted for various developmental stages while ensuring each child gets individual attention.",
      },
      {
        from: "You",
        message: "That's exactly what we need. Our kids are 2, 5, and 8.",
      },
    ],
    distance: 53,
  },
  {
    id: "natalie-wong",
    firstName: "Natalie",
    lastName: "Wong",
    fullName: "Natalie Wong",
    initials: "NW",
    rating: 4.4,
    available: true,
    experience: 7,
    time: 28,
    rate: 21,
    profileImage: Profile,
    availabilitySlots: {
      "2025-26-03": {
        timeSlots: [
          {
            startTime: "5:00 PM",
            endTime: "9:00 PM",
          },
        ],
      },
      "2025-27-03": {
        timeAvailability: [
          {
            startTime: "5:00 PM",
            endTime: "9:00 PM",
          },
        ],
      },
      "2025-30-03": {
        timeAvailability: [
          {
            startTime: "9:00 AM",
            endTime: "9:00 PM",
          },
        ],
      },
      "2025-07-04": {
        timeAvailability: [
          {
            startTime: "9:00 AM",
            endTime: "3:00 PM",
          },
        ],
      },
    },
    description:
      "Dance instructor and physical education major specializing in active play and movement education. I help children develop coordination, balance, and body awareness through fun games and dance activities. My energetic approach keeps kids engaged while building physical confidence.",
    qualifications: [
      "Dance Instruction",
      "Cantonese",
      "Mandarin",
      "Yoga for Kids",
      "Physical Education",
      "Sports Activities",
      "Outdoor Games",
    ],
    reviews: [
      {
        id: 1,
        name: "Lily Chan",
        rating: 5,
        initial: "L",
        review:
          "Natalie's dance activities have transformed my daughter from shy to confident in just a few months.",
      },
      {
        id: 2,
        name: "Peter Wilson",
        rating: 4,
        initial: "P",
        review:
          "She kept my high-energy boys engaged and active even on rainy days with her creative movement games.",
      },
      {
        id: 3,
        name: "Grace Liu",
        rating: 5,
        initial: "G",
        review:
          "The Cantonese songs and games have helped my children connect with their heritage in a fun, meaningful way.",
      },
      {
        id: 4,
        name: "Frank Collins",
        rating: 4,
        initial: "F",
        review:
          "My daughter loves the kid-friendly yoga routines that help her calm down before bedtime.",
      },
      {
        id: 5,
        name: "Sophia Lee",
        rating: 4,
        initial: "S",
        review:
          "Great at organizing active outdoor play that develops coordination and teamwork skills.",
      },
      {
        id: 6,
        name: "Jackson Walker",
        rating: 5,
        initial: "J",
        review:
          "Natalie helped my son overcome his fear of physical activities through gradual, confidence-building games.",
      },
      {
        id: 7,
        name: "Emma Richardson",
        rating: 4,
        initial: "E",
        review:
          "Her background in PE is evident in how she structures activities to develop specific skills while keeping things fun.",
      },
    ],
    messages: [
      {
        from: "You",
        message: "My child has lots of energy. How do you handle active kids?",
      },
      {
        from: "babySitter",
        message:
          "I specialize in active kids! With my background in dance and physical education, I always come prepared with movement games, dance activities, and structured physical play to channel that energy positively.",
      },
      {
        from: "You",
        message:
          "That sounds great! We definitely need help with that energy management.",
      },
    ],
    distance: 80,
  },
  {
    id: "zoe-martinez",
    firstName: "Zoe",
    lastName: "Martinez",
    fullName: "Zoe Martinez",
    initials: "ZM",
    rating: 4.5,
    available: true,
    experience: 5,
    time: 22,
    rate: 19,
    profileImage: Profile,
    availabilitySlots: {
      "2025-26-03": {
        timeSlots: [
          {
            startTime: "3:00 PM",
            endTime: "8:00 PM",
          },
        ],
      },
      "2025-28-03": {
        timeAvailability: [
          {
            startTime: "9:00 AM",
            endTime: "2:00 PM",
          },
        ],
      },
      "2025-01-04": {
        timeAvailability: [
          {
            startTime: "7:00 AM",
            endTime: "12:00 PM",
          },
          {
            startTime: "4:00 PM",
            endTime: "9:00 PM",
          },
        ],
      },
      "2025-08-04": {
        timeAvailability: [
          {
            startTime: "10:00 AM",
            endTime: "8:00 PM",
          },
        ],
      },
    },
    description:
      "Environmental science major who loves connecting children with nature through outdoor exploration and eco-friendly activities. I teach children about sustainability and environmental stewardship through hands-on projects and nature walks. My approach blends science education with adventure and discovery.",
    qualifications: [
      "Environmental Education",
      "Spanish",
      "Nature Crafts",
      "Gardening",
      "Animal Care",
      "Hiking",
      "Science Experiments",
    ],
    reviews: [
      {
        id: 1,
        name: "Ethan Morris",
        rating: 5,
        initial: "E",
        review:
          "Zoe took my kids on a backyard safari that had them identifying local species and understanding ecosystems.",
      },
      {
        id: 2,
        name: "Isabella Gonzalez",
        rating: 4,
        initial: "I",
        review:
          "The garden project she started with my children has taught them responsibility and patience while learning about plant life cycles.",
      },
      {
        id: 3,
        name: "Lucas Hernandez",
        rating: 5,
        initial: "L",
        review:
          "My son now separates recycling and explains sustainability concepts to anyone who will listen thanks to Zoe's influence.",
      },
      {
        id: 4,
        name: "Ava Robinson",
        rating: 4,
        initial: "A",
        review:
          "She makes science concepts accessible through fun experiments using household materials.",
      },
      {
        id: 5,
        name: "Noah Campbell",
        rating: 5,
        initial: "N",
        review:
          "Zoe's nature hikes are the perfect blend of exercise, education, and adventure for my energetic twins.",
      },
      {
        id: 6,
        name: "Sofia Rodriguez",
        rating: 4,
        initial: "S",
        review:
          "Her Spanish nature vocabulary games have enhanced my children's language learning in meaningful ways.",
      },
      {
        id: 7,
        name: "Jacob Phillips",
        rating: 5,
        initial: "J",
        review:
          "The natural craft materials she brings create beautiful projects while teaching sustainable creativity.",
      },
    ],
    messages: [
      {
        from: "You",
        message:
          "We're trying to encourage more outdoor time for our kids. What activities do you suggest?",
      },
      {
        from: "babySitter",
        message:
          "I love getting kids outdoors! I can plan nature scavenger hunts, start simple gardening projects, teach outdoor sketching, or create environmental awareness games. We can tailor activities to your children's ages and interests!",
      },
      {
        from: "You",
        message:
          "The scavenger hunt sounds perfect for our 6-year-old. Would you bring materials?",
      },
    ],
    distance: 45,
  },
  {
    id: "rachel-kim",
    firstName: "Rachel",
    lastName: "Kim",
    fullName: "Rachel Kim",
    initials: "RK",
    rating: 4.8,
    available: true,
    experience: 6,
    time: 24,
    rate: 20,
    profileImage: Profile,
    availabilitySlots: {
      "2025-29-03": {
        timeSlots: [
          {
            startTime: "10:00 AM",
            endTime: "6:00 PM",
          },
        ],
      },
      "2025-30-03": {
        timeAvailability: [
          {
            startTime: "12:00 PM",
            endTime: "8:00 PM",
          },
        ],
      },
      "2025-02-04": {
        timeAvailability: [
          {
            startTime: "9:00 AM",
            endTime: "5:00 PM",
          },
        ],
      },
      "2025-03-04": {
        timeAvailability: [
          {
            startTime: "3:00 PM",
            endTime: "9:00 PM",
          },
        ],
      },
    },
    description:
      "Speech therapy graduate with expertise in language development and communication skills. I incorporate language-building games into everyday activities and specialize in helping children with speech delays or multilingual backgrounds.",
    qualifications: [
      "Speech Therapy",
      "Korean Language",
      "Reading Education",
      "Phonics Training",
      "Special Needs Experience",
      "Educational Games",
      "Storytelling",
    ],
    reviews: [
      {
        id: 1,
        name: "Melissa Park",
        rating: 5,
        initial: "M",
        review:
          "Rachel helped our son overcome his stuttering through consistent, gentle practice embedded in play activities.",
      },
      {
        id: 2,
        name: "Daniel Wu",
        rating: 5,
        initial: "D",
        review:
          "Her bilingual approach has been invaluable in maintaining our children's Korean while they learn English.",
      },
      {
        id: 3,
        name: "Tiffany Johnson",
        rating: 4,
        initial: "T",
        review:
          "She tailored reading activities to my daughter's interests, dramatically improving her phonics skills.",
      },
      {
        id: 4,
        name: "Brandon Lee",
        rating: 5,
        initial: "B",
        review:
          "Rachel's specialized techniques helped our non-verbal son make substantial communication progress.",
      },
      {
        id: 5,
        name: "Julia Chen",
        rating: 5,
        initial: "J",
        review:
          "The storytelling activities she creates have enriched my children's vocabulary and comprehension skills.",
      },
    ],
    messages: [
      {
        from: "You",
        message:
          "My daughter is struggling with pronunciation. Do you have experience with speech development?",
      },
      {
        from: "babySitter",
        message:
          "Absolutely! With my speech therapy background, I can incorporate fun games and activities that target specific sounds she's struggling with. I focus on making practice enjoyable rather than feeling like work.",
      },
      {
        from: "You",
        message:
          "That sounds perfect. When could you meet with us for an initial assessment?",
      },
    ],
    distance: 4,
  },
  {
    id: "isabelle-grant",
    firstName: "Isabelle",
    lastName: "Grant",
    fullName: "Isabelle Grant",
    initials: "IG",
    rating: 4.6,
    available: false,
    experience: 9,
    time: 35,
    rate: 23,
    profileImage: Profile,
    availabilitySlots: {
      "2025-27-03": {
        timeSlots: [
          {
            startTime: "7:00 AM",
            endTime: "3:00 PM",
          },
        ],
      },
      "2025-28-03": {
        timeAvailability: [
          {
            startTime: "7:00 AM",
            endTime: "3:00 PM",
          },
        ],
      },
      "2025-04-04": {
        timeAvailability: [
          {
            startTime: "12:00 PM",
            endTime: "8:00 PM",
          },
        ],
      },
      "2025-05-04": {
        timeAvailability: [
          {
            startTime: "8:00 AM",
            endTime: "6:00 PM",
          },
        ],
      },
    },
    description:
      "Former preschool director with extensive experience in Montessori and Waldorf educational approaches. I create environments that foster independence and self-directed learning while maintaining gentle boundaries and routines.",
    qualifications: [
      "Montessori Certified",
      "French Language",
      "Child Psychology",
      "Behavior Management",
      "Curriculum Development",
      "Conflict Resolution",
      "Parent Communication",
    ],
    reviews: [
      {
        id: 1,
        name: "Nicole Dupont",
        rating: 5,
        initial: "N",
        review:
          "Isabelle transformed our chaotic household into a calm, organized space where our children thrive independently.",
      },
      {
        id: 2,
        name: "Samuel Green",
        rating: 4,
        initial: "S",
        review:
          "Her Montessori approach has helped our son develop impressive problem-solving skills and self-confidence.",
      },
      {
        id: 3,
        name: "Amanda Wilson",
        rating: 5,
        initial: "A",
        review:
          "The practical life skills she's taught our daughter have made her remarkably self-sufficient for a four-year-old.",
      },
      {
        id: 4,
        name: "Richard Taylor",
        rating: 4,
        initial: "R",
        review:
          "Isabelle's consistent boundaries and positive reinforcement techniques have significantly improved our son's behavior.",
      },
      {
        id: 5,
        name: "Catherine Laurent",
        rating: 5,
        initial: "C",
        review:
          "Her bilingual French activities have given my children an educational advantage while having fun.",
      },
      {
        id: 6,
        name: "Michael Brooks",
        rating: 5,
        initial: "M",
        review:
          "The parent communication tools she taught us have transformed our family dynamics for the better.",
      },
      {
        id: 7,
        name: "Patricia Hoffman",
        rating: 4,
        initial: "P",
        review:
          "Worth every penny for the professional expertise she brings to childcare and development.",
      },
    ],
    messages: [
      {
        from: "You",
        message:
          "We're interested in incorporating Montessori principles at home. Could you help with that?",
      },
      {
        from: "babySitter",
        message:
          "Absolutely! I'd be happy to help implement Montessori principles in your home environment. We could start by setting up some practical life stations and creating accessible spaces that promote independence for your child.",
      },
      {
        from: "You",
        message:
          "That sounds excellent. Our daughter is 3, would you have specific recommendations for her age?",
      },
    ],
    distance: 93,
  },
  {
    id: "maya-jackson",
    firstName: "Maya",
    lastName: "Jackson",
    fullName: "Maya Jackson",
    initials: "MJ",
    rating: 4.3,
    available: true,
    experience: 4,
    time: 16,
    rate: 18,
    profileImage: Profile,
    availabilitySlots: {
      "2025-26-03": {
        timeSlots: [
          {
            startTime: "1:00 PM",
            endTime: "9:00 PM",
          },
        ],
      },
      "2025-27-03": {
        timeAvailability: [
          {
            startTime: "1:00 PM",
            endTime: "9:00 PM",
          },
        ],
      },
      "2025-01-04": {
        timeAvailability: [
          {
            startTime: "10:00 AM",
            endTime: "4:00 PM",
          },
        ],
      },
      "2025-06-04": {
        timeAvailability: [
          {
            startTime: "12:00 PM",
            endTime: "8:00 PM",
          },
        ],
      },
    },
    description:
      "Digital media student who incorporates responsible technology education into childcare. I teach age-appropriate digital literacy, coding basics, and creative tech projects while maintaining healthy screen time limits.",
    qualifications: [
      "Coding for Kids",
      "Digital Literacy",
      "Photography",
      "Video Production",
      "Animation Projects",
      "Online Safety",
      "STEM Activities",
    ],
    reviews: [
      {
        id: 1,
        name: "Denise Williams",
        rating: 4,
        initial: "D",
        review:
          "Maya taught my 8-year-old basic coding through game design, making technology creative rather than just consumptive.",
      },
      {
        id: 2,
        name: "Carlos Rodriguez",
        rating: 5,
        initial: "C",
        review:
          "The stop-motion animation project she did with my children kept them engaged and learning for hours.",
      },
      {
        id: 3,
        name: "Jasmine Thompson",
        rating: 4,
        initial: "J",
        review:
          "She strikes the perfect balance between tech education and offline activities.",
      },
      {
        id: 4,
        name: "Keith Davidson",
        rating: 3,
        initial: "K",
        review:
          "Great with teaching technology skills, though sometimes the projects were a bit advanced for my younger child.",
      },
      {
        id: 5,
        name: "Linda Cooper",
        rating: 5,
        initial: "L",
        review:
          "The online safety conversations she initiated with my pre-teens were invaluable and age-appropriate.",
      },
      {
        id: 6,
        name: "Martin Reyes",
        rating: 5,
        initial: "M",
        review:
          "My daughter's digital photography skills improved dramatically under Maya's creative guidance.",
      },
    ],
    messages: [
      {
        from: "You",
        message:
          "We want our kids to learn technology skills but worry about screen time. How do you balance that?",
      },
      {
        from: "babySitter",
        message:
          "I completely understand that concern! I focus on active, creative tech use rather than passive consumption. I structure activities with clear time limits and balance them with plenty of physical and outdoor play. Every tech project has specific learning goals.",
      },
      {
        from: "You",
        message:
          "That sounds like a healthy approach. What kind of tech activities would be appropriate for a 7-year-old?",
      },
    ],
    distance: 18,
  },
  {
    id: "daria-petrov",
    firstName: "Daria",
    lastName: "Petrov",
    fullName: "Daria Petrov",
    initials: "DP",
    rating: 4.9,
    available: true,
    experience: 11,
    time: 44,
    rate: 26,
    profileImage: Profile,
    availabilitySlots: {
      "2025-25-03": {
        timeSlots: [
          {
            startTime: "9:00 AM",
            endTime: "5:00 PM",
          },
        ],
      },
      "2025-26-03": {
        timeAvailability: [
          {
            startTime: "9:00 AM",
            endTime: "5:00 PM",
          },
        ],
      },
      "2025-05-04": {
        timeAvailability: [
          {
            startTime: "3:00 PM",
            endTime: "9:00 PM",
          },
        ],
      },
      "2025-07-04": {
        timeAvailability: [
          {
            startTime: "11:00 AM",
            endTime: "7:00 PM",
          },
        ],
      },
    },
    description:
      "Former Olympic gymnast with extensive experience coaching children of all ability levels. I design fun physical activities that develop coordination, strength, and confidence while prioritizing safety and positive body image.",
    qualifications: [
      "Gymnastics Instruction",
      "Russian Language",
      "Sports Coaching",
      "Athletic Training",
      "Injury Prevention",
      "Nutritional Guidance",
      "Team Building",
    ],
    reviews: [
      {
        id: 1,
        name: "Laura Simmons",
        rating: 5,
        initial: "L",
        review:
          "Daria helped my timid daughter build incredible physical confidence through personalized gymnastics games.",
      },
      {
        id: 2,
        name: "Victor Kozlov",
        rating: 5,
        initial: "V",
        review:
          "Her Russian lessons combined with physical activities create a unique immersive language learning experience.",
      },
      {
        id: 3,
        name: "Alyssa Morgan",
        rating: 5,
        initial: "A",
        review:
          "The safe stretching routines she taught our family have become part of our daily wellness practice.",
      },
      {
        id: 4,
        name: "Gregory Thomas",
        rating: 5,
        initial: "G",
        review:
          "Daria's approach to coaching built our son's resilience and sportsmanship along with physical skills.",
      },
      {
        id: 5,
        name: "Natasha Ivanova",
        rating: 5,
        initial: "N",
        review:
          "Her background at the elite level brings exceptional quality to children's physical education and development.",
      },
      {
        id: 6,
        name: "Paul Weber",
        rating: 4,
        initial: "P",
        review:
          "She transformed our living room into a safe mini-gymnasium during bad weather, keeping the kids active and engaged.",
      },
      {
        id: 7,
        name: "Katherine Adams",
        rating: 5,
        initial: "K",
        review:
          "Our daughter's coordination issues have improved dramatically through Daria's specialized activities.",
      },
      {
        id: 8,
        name: "Mark Collins",
        rating: 5,
        initial: "M",
        review:
          "The nutrition guidance she provides complements the physical activities perfectly for growing athletes.",
      },
      {
        id: 9,
        name: "Sophia Mitchell",
        rating: 5,
        initial: "S",
        review:
          "Worth every penny for the professional coaching expertise she brings to recreational activities.",
      },
    ],
    messages: [
      {
        from: "You",
        message:
          "Our son is very athletic but needs to work on coordination. Would your background help with that?",
      },
      {
        from: "babySitter",
        message:
          "Absolutely! Coordination is foundational in gymnastics, and I have many age-appropriate exercises that develop this skill specifically. We can incorporate them into fun games that won't feel like training but will effectively improve his motor skills.",
      },
      {
        from: "You",
        message:
          "That sounds perfect. Do you require any special equipment for these activities?",
      },
    ],
    distance: 83,
  },
  {
    id: "leila-hassan",
    firstName: "Leila",
    lastName: "Hassan",
    fullName: "Leila Hassan",
    initials: "LH",
    rating: 4.4,
    available: true,
    experience: 8,
    time: 32,
    rate: 22,
    profileImage: Profile,
    availabilitySlots: {
      "2025-30-03": {
        timeSlots: [
          {
            startTime: "2:00 PM",
            endTime: "10:00 PM",
          },
        ],
      },
      "2025-31-03": {
        timeAvailability: [
          {
            startTime: "2:00 PM",
            endTime: "10:00 PM",
          },
        ],
      },
      "2025-03-04": {
        timeAvailability: [
          {
            startTime: "8:00 AM",
            endTime: "4:00 PM",
          },
        ],
      },
      "2025-08-04": {
        timeAvailability: [
          {
            startTime: "11:00 AM",
            endTime: "7:00 PM",
          },
        ],
      },
    },
    description:
      "Multicultural education specialist with experience teaching in international schools. I introduce children to global perspectives through stories, cuisine, language, and cultural activities that celebrate diversity and foster cultural appreciation.",
    qualifications: [
      "Cultural Education",
      "Arabic Language",
      "French Language",
      "International Cuisine",
      "Storytelling",
      "Geography",
      "Global Games",
    ],
    reviews: [
      {
        id: 1,
        name: "Samir Khalil",
        rating: 5,
        initial: "S",
        review:
          "Leila helped our children maintain their connection to Arabic culture through engaging stories and traditions.",
      },
      {
        id: 2,
        name: "Elizabeth Norton",
        rating: 4,
        initial: "E",
        review:
          "The international cooking projects introduced my picky eaters to new flavors they now request regularly.",
      },
      {
        id: 3,
        name: "Omar Abdullah",
        rating: 5,
        initial: "O",
        review:
          "Her approach to teaching cultural respect and appreciation has had a lasting impact on our children's worldview.",
      },
      {
        id: 4,
        name: "Christine Miller",
        rating: 4,
        initial: "C",
        review:
          "My daughter now loves learning languages thanks to Leila's engaging multilingual games and songs.",
      },
      {
        id: 5,
        name: "Fatima Rahman",
        rating: 5,
        initial: "F",
        review:
          "The cultural festivals she organizes at home make geography and global awareness come alive for our kids.",
      },
      {
        id: 6,
        name: "Xavier Bernard",
        rating: 4,
        initial: "X",
        review:
          "Her French conversation practice has given my children confidence in their language skills beyond what school provides.",
      },
      {
        id: 7,
        name: "Zainab Ali",
        rating: 4,
        initial: "Z",
        review:
          "Leila creates an atmosphere where learning about different cultures feels like an exciting adventure.",
      },
      {
        id: 8,
        name: "Robert Wilson",
        rating: 5,
        initial: "R",
        review:
          "The global perspective she brings to everyday activities has broadened our children's horizons immensely.",
      },
    ],
    messages: [
      {
        from: "You",
        message:
          "We're a multicultural family and want our kids to appreciate diverse backgrounds. How do you approach cultural education?",
      },
      {
        from: "babySitter",
        message:
          "I believe in making cultural education organic and fun! I incorporate stories, games, music, and cooking from around the world into our activities. I can tailor these to include your family's specific cultural backgrounds as well as introduce new ones in age-appropriate ways.",
      },
      {
        from: "You",
        message:
          "That's exactly what we're looking for. Do you speak any languages other than English?",
      },
    ],
    distance: 70,
  },
  {
    id: "elena-vasquez",
    firstName: "Elena",
    lastName: "Vasquez",
    fullName: "Elena Vasquez",
    initials: "EV",
    rating: 4.7,
    available: true,
    experience: 7,
    time: 28,
    rate: 22,
    profileImage: Profile,
    availabilitySlots: {
      "2025-28-03": {
        timeSlots: [
          {
            startTime: "10:00 AM",
            endTime: "6:00 PM",
          },
        ],
      },
      "2025-29-03": {
        timeAvailability: [
          {
            startTime: "12:00 PM",
            endTime: "8:00 PM",
          },
        ],
      },
      "2025-03-04": {
        timeAvailability: [
          {
            startTime: "9:00 AM",
            endTime: "5:00 PM",
          },
        ],
      },
      "2025-04-04": {
        timeAvailability: [
          {
            startTime: "2:00 PM",
            endTime: "10:00 PM",
          },
        ],
      },
    },
    description:
      "Child psychology graduate with expertise in mindfulness and emotional intelligence. I help children identify, understand, and manage their emotions through age-appropriate activities and discussions. My approach creates a calm, supportive environment where children can develop healthy emotional regulation skills.",
    qualifications: [
      "Mindfulness",
      "Spanish",
      "Emotional Intelligence",
      "Conflict Resolution",
      "Therapeutic Play",
      "Breathing Techniques",
      "Yoga for Kids",
    ],
    reviews: [
      {
        id: 1,
        name: "Diana Torres",
        rating: 5,
        initial: "D",
        review:
          "Elena helped my anxious son develop coping strategies that have transformed our family dynamics.",
      },
      {
        id: 2,
        name: "Ryan Peters",
        rating: 5,
        initial: "R",
        review:
          "The mindfulness activities she taught our daughter help her calm down during overwhelming moments.",
      },
      {
        id: 3,
        name: "Monica Hughes",
        rating: 4,
        initial: "M",
        review:
          "My children now have a vocabulary for their emotions and can express their needs more clearly.",
      },
      {
        id: 4,
        name: "Justin Rivera",
        rating: 5,
        initial: "J",
        review:
          "Elena's Spanish immersion approach is natural and effective; my kids are picking up phrases effortlessly.",
      },
      {
        id: 5,
        name: "Ava Morales",
        rating: 4,
        initial: "A",
        review:
          "The conflict resolution techniques she's taught my twins have dramatically decreased their arguments.",
      },
      {
        id: 6,
        name: "Thomas Ferguson",
        rating: 5,
        initial: "T",
        review:
          "Her calm, therapeutic approach created a safe space for my son to open up about his school anxiety.",
      },
    ],
    messages: [
      {
        from: "You",
        message:
          "My daughter struggles with anxiety. Do you have experience with this?",
      },
      {
        from: "babySitter",
        message:
          "Yes, I specialize in emotional wellness for children. I can introduce age-appropriate mindfulness techniques and create a predictable, calming environment. We can work on specific strategies for her anxiety triggers.",
      },
      {
        from: "You",
        message:
          "That sounds perfect. Would you be available for a video chat to discuss further?",
      },
    ],
    distance: 40,
  },
  {
    id: "sarah-mitchell",
    firstName: "Sarah",
    lastName: "Mitchell",
    fullName: "Sarah Mitchell",
    initials: "SM",
    rating: 4.8,
    available: true,
    experience: 9,
    time: 36,
    rate: 24,
    profileImage: Profile,
    availabilitySlots: {
      "2025-27-03": {
        timeSlots: [
          {
            startTime: "8:00 AM",
            endTime: "4:00 PM",
          },
        ],
      },
      "2025-28-03": {
        timeAvailability: [
          {
            startTime: "8:00 AM",
            endTime: "4:00 PM",
          },
        ],
      },
      "2025-01-04": {
        timeAvailability: [
          {
            startTime: "12:00 PM",
            endTime: "8:00 PM",
          },
        ],
      },
      "2025-05-04": {
        timeAvailability: [
          {
            startTime: "10:00 AM",
            endTime: "6:00 PM",
          },
        ],
      },
    },
    description:
      "Certified Sleep Consultant and former NICU nurse with extensive experience helping families establish healthy sleep routines. I work with children of all ages, from newborns to teenagers, using gentle approaches that respect each family's parenting philosophy while promoting optimal sleep habits.",
    qualifications: [
      "Sleep Training",
      "Newborn Care",
      "Night Nanny",
      "First Aid Certified",
      "Bedtime Routines",
      "Overnight Care",
      "Gentle Parenting",
    ],
    reviews: [
      {
        id: 1,
        name: "Angela Thompson",
        rating: 5,
        initial: "A",
        review:
          "Sarah helped us sleep train our twins using gentle methods that aligned with our parenting style. Life-changing!",
      },
      {
        id: 2,
        name: "James Wilson",
        rating: 5,
        initial: "J",
        review:
          "Her overnight care gave us the first full night's sleep we'd had since our baby was born. Absolutely worth it.",
      },
      {
        id: 3,
        name: "Melissa Richards",
        rating: 5,
        initial: "M",
        review:
          "Sarah's nursing background was evident in her confident handling of our premature baby's needs.",
      },
      {
        id: 4,
        name: "Brian Kelly",
        rating: 4,
        initial: "B",
        review:
          "The bedtime routine she established has continued to work months after her consultation.",
      },
      {
        id: 5,
        name: "Nicole Adams",
        rating: 5,
        initial: "N",
        review:
          "She helped our toddler transition from co-sleeping to his own bed with minimal tears and maximum comfort.",
      },
      {
        id: 6,
        name: "Patrick Johnson",
        rating: 5,
        initial: "P",
        review:
          "Sarah's NICU experience was invaluable when dealing with our newborn's reflux issues at night.",
      },
      {
        id: 7,
        name: "Katherine Walsh",
        rating: 5,
        initial: "K",
        review:
          "Even our pediatrician was impressed with the sleep plan Sarah devised for our colicky baby.",
      },
    ],
    messages: [
      {
        from: "You",
        message:
          "We're desperate for sleep. Our 8-month-old wakes every hour all night. Can you help?",
      },
      {
        from: "babySitter",
        message:
          "I completely understand how exhausting that must be! I'd love to help create a customized sleep plan for your family. I use gentle, responsive approaches that support attachment while teaching self-soothing skills. Would you prefer an overnight session or consultation?",
      },
      {
        from: "You",
        message:
          "An overnight session sounds like exactly what we need. When are you available?",
      },
    ],
    distance: 86,
  },
  {
    id: "mikayla-jefferson",
    firstName: "Mikayla",
    lastName: "Jefferson",
    fullName: "Mikayla Jefferson",
    initials: "MJ",
    rating: 4.5,
    available: true,
    experience: 5,
    time: 20,
    rate: 19,
    profileImage: Profile,
    availabilitySlots: {
      "2025-29-03": {
        timeSlots: [
          {
            startTime: "3:00 PM",
            endTime: "11:00 PM",
          },
        ],
      },
      "2025-30-03": {
        timeAvailability: [
          {
            startTime: "3:00 PM",
            endTime: "11:00 PM",
          },
        ],
      },
      "2025-04-04": {
        timeAvailability: [
          {
            startTime: "2:00 PM",
            endTime: "10:00 PM",
          },
        ],
      },
      "2025-05-04": {
        timeAvailability: [
          {
            startTime: "12:00 PM",
            endTime: "8:00 PM",
          },
        ],
      },
    },
    description:
      "Literature student and creative writing enthusiast who brings books to life through dramatic readings, creative storytelling, and literacy activities. I foster a love of reading in children of all ages and help reluctant readers discover genres that capture their imagination.",
    qualifications: [
      "Creative Writing",
      "American Sign Language",
      "Drama",
      "Reading Instruction",
      "Literacy Games",
      "Character Voices",
      "Comic Creation",
    ],
    reviews: [
      {
        id: 1,
        name: "Trevor Barnes",
        rating: 5,
        initial: "T",
        review:
          "Mikayla transformed my son from a reluctant reader to a bookworm by finding mystery novels that matched his interests.",
      },
      {
        id: 2,
        name: "Layla Washington",
        rating: 4,
        initial: "L",
        review:
          "Her dramatic story readings have become a highly anticipated bedtime ritual in our house.",
      },
      {
        id: 3,
        name: "Aaron Phillips",
        rating: 5,
        initial: "A",
        review:
          "The comic book my kids created with Mikayla's guidance is now their proudest achievement.",
      },
      {
        id: 4,
        name: "Serena Davis",
        rating: 4,
        initial: "S",
        review:
          "She integrates ASL into storytelling, making reading a multisensory experience my children love.",
      },
      {
        id: 5,
        name: "Dylan Foster",
        rating: 5,
        initial: "D",
        review:
          "The literacy games she introduced have noticeably improved my daughter's reading comprehension.",
      },
      {
        id: 6,
        name: "Hannah Coleman",
        rating: 4,
        initial: "H",
        review:
          "Mikayla's character voices bring stories to life and have my kids laughing and engaged throughout.",
      },
    ],
    messages: [
      {
        from: "You",
        message:
          "My son hates reading but needs to improve his skills. Any suggestions?",
      },
      {
        from: "babySitter",
        message:
          "I love helping reluctant readers! I'd start by finding topics he's passionate about\u2014sports, animals, space, whatever excites him\u2014and introduce high-interest books on those subjects. We could also try graphic novels, interactive stories, or reading games that don't feel like 'work.'",
      },
      {
        from: "You",
        message:
          "He loves dinosaurs and robots. Would you have specific book recommendations?",
      },
    ],
    distance: 57,
  },
  {
    id: "jasmine-nguyen",
    firstName: "Jasmine",
    lastName: "Nguyen",
    fullName: "Jasmine Nguyen",
    initials: "JN",
    rating: 4.6,
    available: true,
    experience: 8,
    time: 32,
    rate: 23,
    profileImage: Profile,
    availabilitySlots: {
      "2025-26-03": {
        timeSlots: [
          {
            startTime: "9:00 AM",
            endTime: "5:00 PM",
          },
        ],
      },
      "2025-29-03": {
        timeAvailability: [
          {
            startTime: "11:00 AM",
            endTime: "7:00 PM",
          },
        ],
      },
      "2025-02-04": {
        timeAvailability: [
          {
            startTime: "8:00 AM",
            endTime: "4:00 PM",
          },
        ],
      },
      "2025-07-04": {
        timeAvailability: [
          {
            startTime: "10:00 AM",
            endTime: "6:00 PM",
          },
        ],
      },
    },
    description:
      "Occupational therapist specializing in sensory integration and adaptive play techniques. I create personalized activities that address sensory needs, fine motor skills, and developmental milestones through playful engagement that children enjoy.",
    qualifications: [
      "Occupational Therapy",
      "Vietnamese",
      "Sensory Activities",
      "Fine Motor Skills",
      "Adaptive Equipment",
      "Autism Experience",
      "Sensory Diet Planning",
    ],
    reviews: [
      {
        id: 1,
        name: "Vivian Tran",
        rating: 5,
        initial: "V",
        review:
          "Jasmine's sensory activities have dramatically improved my son's tolerance for different textures and environments.",
      },
      {
        id: 2,
        name: "Kenneth Pearson",
        rating: 5,
        initial: "K",
        review:
          "Her expertise in occupational therapy brought professional-level support into our home in a playful way.",
      },
      {
        id: 3,
        name: "Lisa Dao",
        rating: 4,
        initial: "L",
        review:
          "The fine motor activities she introduced have helped my daughter's handwriting improve significantly.",
      },
      {
        id: 4,
        name: "Marcus Bell",
        rating: 5,
        initial: "M",
        review:
          "Jasmine created a sensory-friendly space in our playroom that has become my autistic son's safe haven.",
      },
      {
        id: 5,
        name: "Tina Pham",
        rating: 5,
        initial: "T",
        review:
          "Her Vietnamese cultural activities add a wonderful dimension to the developmental work she does with our children.",
      },
      {
        id: 6,
        name: "Gregory Martinez",
        rating: 4,
        initial: "G",
        review:
          "The sensory diet she designed for our daughter has helped regulate her behavior throughout the day.",
      },
      {
        id: 7,
        name: "Helen Warren",
        rating: 5,
        initial: "H",
        review:
          "Jasmine's adaptive equipment recommendations transformed ordinary activities into therapeutic opportunities.",
      },
    ],
    messages: [
      {
        from: "You",
        message:
          "Our daughter has sensory processing challenges. What experience do you have with this?",
      },
      {
        from: "babySitter",
        message:
          "As an occupational therapist, I specialize in sensory processing! I can create custom sensory activities based on her specific needs\u2014whether she seeks or avoids certain sensory input. I bring appropriate tools and can help design a sensory-friendly space in your home.",
      },
      {
        from: "You",
        message:
          "That's exactly what we've been looking for. She's particularly sensitive to sounds and certain textures.",
      },
    ],
    distance: 33,
  },
  {
    id: "fiona-campbell",
    firstName: "Fiona",
    lastName: "Campbell",
    fullName: "Fiona Campbell",
    initials: "FC",
    rating: 4.7,
    available: true,
    experience: 10,
    time: 40,
    rate: 25,
    profileImage: Profile,
    availabilitySlots: {
      "2025-25-03": {
        timeSlots: [
          {
            startTime: "11:00 AM",
            endTime: "7:00 PM",
          },
        ],
      },
      "2025-26-03": {
        timeAvailability: [
          {
            startTime: "7:00 AM",
            endTime: "3:00 PM",
          },
        ],
      },
      "2025-30-03": {
        timeAvailability: [
          {
            startTime: "10:00 AM",
            endTime: "6:00 PM",
          },
        ],
      },
      "2025-06-04": {
        timeAvailability: [
          {
            startTime: "11:00 AM",
            endTime: "7:00 PM",
          },
        ],
      },
    },
    description:
      "Former professional chef who now specializes in teaching culinary skills to children with food allergies and dietary restrictions. I create inclusive cooking experiences that accommodate all dietary needs while maintaining the joy of food exploration and kitchen confidence.",
    qualifications: [
      "Culinary Training",
      "Gaelic",
      "Scottish",
      "Allergy Management",
      "Gluten-Free Cooking",
      "Dairy-Free Baking",
      "Vegetarian/Vegan",
    ],
    reviews: [
      {
        id: 1,
        name: "Heather MacDonald",
        rating: 5,
        initial: "H",
        review:
          "Fiona created amazing gluten-free recipes that finally made my celiac son feel included in family meals.",
      },
      {
        id: 2,
        name: "Alan Robertson",
        rating: 5,
        initial: "A",
        review:
          "Her kitchen safety training gave our daughter confidence while teaching essential cooking skills.",
      },
      {
        id: 3,
        name: "Charlotte Fleming",
        rating: 4,
        initial: "C",
        review:
          "The Scottish recipes and Gaelic songs made cooking lessons a cultural experience our kids loved.",
      },
      {
        id: 4,
        name: "Ian Scott",
        rating: 5,
        initial: "I",
        review:
          "Fiona's vegan adaptations of classic recipes convinced my skeptical teenagers that plant-based eating can be delicious.",
      },
      {
        id: 5,
        name: "Jessica Murray",
        rating: 5,
        initial: "J",
        review:
          "Her meticulous approach to avoiding cross-contamination meant my severely allergic daughter could safely enjoy cooking.",
      },
      {
        id: 6,
        name: "Nathan Parker",
        rating: 5,
        initial: "N",
        review:
          "The dairy-free baking techniques she taught have become staples in our household recipes.",
      },
      {
        id: 7,
        name: "Victoria Blair",
        rating: 4,
        initial: "V",
        review:
          "Fiona transformed our picky eater's relationship with food through hands-on cooking involvement.",
      },
      {
        id: 8,
        name: "William Duncan",
        rating: 5,
        initial: "W",
        review:
          "Professional-level culinary instruction adapted perfectly for children's capabilities and attention spans.",
      },
    ],
    messages: [
      {
        from: "You",
        message:
          "Our family has multiple food allergies (nuts, dairy, eggs). Can you accommodate this in cooking activities?",
      },
      {
        from: "babySitter",
        message:
          "Absolutely! Managing food allergies is my specialty. I have extensive experience creating delicious recipes free from nuts, dairy, and eggs. I bring my own dedicated tools to prevent cross-contamination and can teach your children how to safely prepare allergen-free foods that everyone can enjoy.",
      },
      {
        from: "You",
        message:
          "That's wonderful to hear. Would you have suggestions for allergen-free birthday treats?",
      },
    ],
    distance: 43,
  },
  {
    id: "emily-rodriguez",
    firstName: "Emily",
    lastName: "Rodriguez",
    fullName: "Emily Rodriguez",
    initials: "ER",
    rating: 4.9,
    available: true,
    experience: 8,
    time: 30,
    rate: 22,
    profileImage: Profile,
    availabilitySlots: {
      "2025-24-03": {
        timeSlots: [
          {
            startTime: "9:00 AM",
            endTime: "5:00 PM",
          },
        ],
      },
      "2025-27-03": {
        timeAvailability: [
          {
            startTime: "12:00 PM",
            endTime: "8:00 PM",
          },
        ],
      },
      "2025-29-03": {
        timeAvailability: [
          {
            startTime: "8:00 AM",
            endTime: "4:00 PM",
          },
        ],
      },
      "2025-05-04": {
        timeAvailability: [
          {
            startTime: "10:00 AM",
            endTime: "6:00 PM",
          },
        ],
      },
    },
    description:
      "Music educator specializing in early childhood development. I create engaging activities that incorporate music, movement, and language acquisition for children ages 0-7. My background in special education also equips me to work effectively with children who have learning differences or developmental delays.",
    qualifications: [
      "Bachelor's in Music Education",
      "Early Childhood Development",
      "Special Education",
      "Spanish Bilingual",
      "Piano & Guitar",
      "Sign Language Basics",
      "First Aid & CPR",
    ],
    reviews: [
      {
        id: 1,
        name: "Maria Torres",
        rating: 5,
        initial: "M",
        review:
          "My nonverbal son responded to Emily's music activities in ways I've never seen before. Her patience is remarkable.",
      },
      {
        id: 2,
        name: "Daniel Washington",
        rating: 5,
        initial: "D",
        review:
          "Emily teaches Spanish through songs - my twins have picked up more vocabulary in weeks than they did in months of classes.",
      },
      {
        id: 3,
        name: "Sarah Kim",
        rating: 4,
        initial: "S",
        review:
          "Her mini music lessons are the highlight of my daughter's week. She's teaching real instrument skills at age 4!",
      },
      {
        id: 4,
        name: "Thomas Lee",
        rating: 5,
        initial: "T",
        review:
          "Emily's background in special education was critical in helping our son with sensory processing issues enjoy music without becoming overwhelmed.",
      },
      {
        id: 5,
        name: "Rebecca Johnson",
        rating: 5,
        initial: "R",
        review:
          "The sign language songs she teaches have given our daughter communication tools she uses every day.",
      },
      {
        id: 6,
        name: "Omar Patel",
        rating: 5,
        initial: "O",
        review:
          "My children are always excited when Emily comes over - she brings instruments for everyone and our house becomes a joyful orchestra.",
      },
      {
        id: 7,
        name: "Lisa Wu",
        rating: 5,
        initial: "L",
        review:
          "Emily has a gift for reaching children through music. My shy son now sings confidently after just a few sessions with her.",
      },
      {
        id: 8,
        name: "Kevin Barnes",
        rating: 4,
        initial: "K",
        review:
          "She introduces cultural music from around the world, which has expanded our children's appreciation for different sounds and rhythms.",
      },
    ],
    messages: [
      {
        from: "You",
        message:
          "My daughter is showing interest in music but is very shy. Could you help build her confidence?",
      },
      {
        from: "babySitter",
        message:
          "I'd love to work with your daughter! For shy children, I start with one-on-one activities where they can explore instruments without pressure. We'll begin with simple percussion that feels successful right away, then gradually introduce more complex skills as her confidence grows. Many shy children actually blossom through music since it offers expression without requiring words.",
      },
      {
        from: "You",
        message:
          "That sounds perfect. Does she need any special equipment or instruments?",
      },
    ],
    distance: 30,
  },
  {
    id: "sophia-patel",
    firstName: "Sophia",
    lastName: "Patel",
    fullName: "Sophia Patel",
    initials: "SP",
    rating: 4.8,
    available: true,
    experience: 6,
    time: 25,
    rate: 20,
    profileImage: Profile,
    availabilitySlots: {
      "2025-23-03": {
        timeSlots: [
          {
            startTime: "3:00 PM",
            endTime: "9:00 PM",
          },
        ],
      },
      "2025-25-03": {
        timeAvailability: [
          {
            startTime: "4:00 PM",
            endTime: "10:00 PM",
          },
        ],
      },
      "2025-28-03": {
        timeAvailability: [
          {
            startTime: "9:00 AM",
            endTime: "5:00 PM",
          },
        ],
      },
      "2025-04-04": {
        timeAvailability: [
          {
            startTime: "2:00 PM",
            endTime: "8:00 PM",
          },
        ],
      },
    },
    description:
      "Third-year medical student specializing in creative STEM activities for children. I transform scientific concepts into exciting hands-on experiments and projects that spark curiosity. My background in healthcare also means I'm thoroughly prepared for any emergencies or health concerns that might arise during childcare.",
    qualifications: [
      "Medical Student",
      "Advanced First Aid",
      "STEM Education",
      "Hindi & Gujarati",
      "Chemistry & Biology",
      "Outdoor Education",
      "Tutoring Experience",
    ],
    reviews: [
      {
        id: 1,
        name: "Priya Shah",
        rating: 5,
        initial: "P",
        review:
          "Sophia taught our children about germs through fascinating experiments that made handwashing fun instead of a chore.",
      },
      {
        id: 2,
        name: "James Wilson",
        rating: 5,
        initial: "J",
        review:
          "When my son had an asthma attack, her medical knowledge was invaluable in keeping the situation calm and managed.",
      },
      {
        id: 3,
        name: "Anita Gupta",
        rating: 4,
        initial: "A",
        review:
          "Our daughter now wants to be a scientist thanks to the engaging projects Sophia creates. The volcano experiment was a huge hit!",
      },
      {
        id: 4,
        name: "Robert Chen",
        rating: 5,
        initial: "R",
        review:
          "She turned our backyard into a nature laboratory, teaching the kids about ecosystems while having tremendous fun.",
      },
      {
        id: 5,
        name: "Lakshmi Reddy",
        rating: 5,
        initial: "L",
        review:
          "Sophia has been teaching our children Hindi through games and songs - they're learning effortlessly.",
      },
      {
        id: 6,
        name: "Michael Thompson",
        rating: 4,
        initial: "M",
        review:
          "The anatomy lessons she devised for my curious 8-year-old were age-appropriate yet genuinely educational.",
      },
      {
        id: 7,
        name: "Diana Lopez",
        rating: 5,
        initial: "D",
        review:
          "Her patient tutoring helped my daughter overcome her math anxiety through practical, real-world applications.",
      },
      {
        id: 8,
        name: "Raj Sharma",
        rating: 5,
        initial: "R",
        review:
          "Sophia's background in medicine gave us peace of mind when caring for our child with Type 1 diabetes.",
      },
    ],
    messages: [
      {
        from: "You",
        message:
          "My son loves science but struggles with reading. Can you recommend activities that might help?",
      },
      {
        from: "babySitter",
        message:
          "Absolutely! I often create science activities that naturally incorporate reading in motivating ways. We could make a science journal where he records observations from experiments, create labeled diagrams, or follow recipe-style experiment instructions. Using science as the hook makes reading feel purposeful rather than difficult. I've seen great progress with this approach!",
      },
      {
        from: "You",
        message:
          "That sounds great! What kind of experiments would be appropriate for a 7-year-old?",
      },
    ],
    distance: 99,
  },
  {
    id: "olivia-jackson",
    firstName: "Olivia",
    lastName: "Jackson",
    fullName: "Olivia Jackson",
    initials: "OJ",
    rating: 4.6,
    available: true,
    experience: 12,
    time: 35,
    rate: 28,
    profileImage: Profile,
    availabilitySlots: {
      "2025-24-03": {
        timeSlots: [
          {
            startTime: "1:00 PM",
            endTime: "9:00 PM",
          },
        ],
      },
      "2025-26-03": {
        timeAvailability: [
          {
            startTime: "8:00 AM",
            endTime: "4:00 PM",
          },
        ],
      },
      "2025-31-03": {
        timeAvailability: [
          {
            startTime: "10:00 AM",
            endTime: "6:00 PM",
          },
        ],
      },
      "2025-07-04": {
        timeAvailability: [
          {
            startTime: "9:00 AM",
            endTime: "5:00 PM",
          },
        ],
      },
    },
    description:
      "Former elementary school teacher with a focus on art education and creative expression. I create structured activities that develop fine motor skills, artistic techniques, and emotional literacy through creative projects. My background in education helps me integrate academic concepts into art-based learning experiences.",
    qualifications: [
      "Elementary Education Degree",
      "Art Therapy Training",
      "Children's Literature",
      "French Language",
      "Behavioral Management",
      "Special Needs Experience",
      "Digital Art & Animation",
    ],
    reviews: [
      {
        id: 1,
        name: "Monique Williams",
        rating: 5,
        initial: "M",
        review:
          "Olivia helped our son process difficult emotions through art projects when his grandfather passed away.",
      },
      {
        id: 2,
        name: "Paul Bennett",
        rating: 4,
        initial: "P",
        review:
          "Her art-based French lessons have our daughter speaking basic phrases after just a month.",
      },
      {
        id: 3,
        name: "Keisha Brown",
        rating: 5,
        initial: "K",
        review:
          "The stop-motion animation project she did with my children kept them creatively engaged for weeks.",
      },
      {
        id: 4,
        name: "George Martinez",
        rating: 4,
        initial: "G",
        review:
          "Olivia incorporated our 8-year-old's math homework concepts into art projects that finally helped concepts click.",
      },
      {
        id: 5,
        name: "Tamika Johnson",
        rating: 5,
        initial: "T",
        review:
          "Her patience with our son who has ADHD is remarkable - she finds ways to channel his energy into focused creativity.",
      },
      {
        id: 6,
        name: "Justin Taylor",
        rating: 5,
        initial: "J",
        review:
          "The children's book our kids created with Olivia's guidance is now a treasured family possession.",
      },
      {
        id: 7,
        name: "Nicole Harper",
        rating: 4,
        initial: "N",
        review:
          "She transformed our playroom into an art studio with organization systems the kids can maintain themselves.",
      },
      {
        id: 8,
        name: "Darren Washington",
        rating: 5,
        initial: "D",
        review:
          "Our daughter's fine motor skills have improved dramatically through the craft activities Olivia designs.",
      },
    ],
    messages: [
      {
        from: "You",
        message:
          "My children are very different - one loves art and one prefers sports. Can you engage them both?",
      },
      {
        from: "babySitter",
        message:
          "Definitely! I love creating activities that bridge different interests. For your children, I could organize artistic obstacle courses, sports-themed art projects, or team challenges that involve both physical activity and creative problem-solving. This approach helps siblings appreciate each other's strengths while bonding through shared experiences. I find that even sports-focused children enjoy art when it connects to their interests!",
      },
      {
        from: "You",
        message:
          "That's a creative approach! Would you bring art supplies or should we have some ready?",
      },
    ],
    distance: 11,
  },
  {
    id: "maya-chen",
    firstName: "Maya",
    lastName: "Chen",
    fullName: "Maya Chen",
    initials: "MC",
    rating: 4.9,
    available: true,
    experience: 9,
    time: 32,
    rate: 26,
    profileImage: Profile,
    availabilitySlots: {
      "2025-25-03": {
        timeSlots: [
          {
            startTime: "12:00 PM",
            endTime: "8:00 PM",
          },
        ],
      },
      "2025-28-03": {
        timeAvailability: [
          {
            startTime: "7:00 AM",
            endTime: "3:00 PM",
          },
        ],
      },
      "2025-01-04": {
        timeAvailability: [
          {
            startTime: "9:00 AM",
            endTime: "5:00 PM",
          },
        ],
      },
      "2025-08-04": {
        timeAvailability: [
          {
            startTime: "10:00 AM",
            endTime: "6:00 PM",
          },
        ],
      },
    },
    description:
      "Physical therapist assistant specializing in active childcare through movement, outdoor exploration, and sports. I create play-based activities that develop gross motor skills, coordination, and confidence in physical abilities while making exercise fun and engaging for children of all athletic abilities.",
    qualifications: [
      "Physical Therapy Assistant",
      "Youth Sports Coach",
      "Mandarin Chinese",
      "Adaptive Physical Education",
      "Sensory Processing",
      "Wilderness First Responder",
      "Nutrition Basics",
    ],
    reviews: [
      {
        id: 1,
        name: "Wei Zhang",
        rating: 5,
        initial: "W",
        review:
          "Maya helped our son who was reluctant to participate in physical activities develop confidence through customized games.",
      },
      {
        id: 2,
        name: "Samantha Reid",
        rating: 5,
        initial: "S",
        review:
          "Her background in physical therapy was invaluable in creating exercises that helped strengthen our daughter's weak ankles.",
      },
      {
        id: 3,
        name: "David Wong",
        rating: 4,
        initial: "D",
        review:
          "The nature scavenger hunts she organizes have our normally indoor kids excited about hiking and exploring.",
      },
      {
        id: 4,
        name: "Jennifer Miller",
        rating: 5,
        initial: "J",
        review:
          "Maya taught our children Mandarin through active games - they're learning language while constantly moving!",
      },
      {
        id: 5,
        name: "Li Chen",
        rating: 5,
        initial: "L",
        review:
          "Her attention to proper form even during play prevented injuries while teaching our sports-loving kids good habits.",
      },
      {
        id: 6,
        name: "Erica Jones",
        rating: 5,
        initial: "E",
        review:
          "Maya created sensory-friendly obstacle courses that helped our son with processing issues enjoy physical activity.",
      },
      {
        id: 7,
        name: "Trevor Scott",
        rating: 4,
        initial: "T",
        review:
          "She taught our children basic nutrition through garden adventures and cooking their harvested vegetables.",
      },
      {
        id: 8,
        name: "Grace Lin",
        rating: 5,
        initial: "G",
        review:
          "Our daughter's coordination has improved dramatically since Maya started working with her through playful activities.",
      },
    ],
    messages: [
      {
        from: "You",
        message:
          "My child has low muscle tone and gets tired easily. How would you keep activities fun but appropriate?",
      },
      {
        from: "babySitter",
        message:
          "I'd focus on building endurance gradually through high-interest activities with built-in rest periods. For example, we might create 'adventure stations' where active movement alternates with seated creative or strategic tasks. I'd incorporate therapeutic movements disguised as games, and ensure activities build confidence by emphasizing personal improvement rather than competition. We can adjust intensity based on energy levels while keeping the experience positive and successful!",
      },
      {
        from: "You",
        message:
          "That's exactly what we need. Would you be able to share some of these exercises with us to continue at home?",
      },
    ],
    distance: 3,
  },
  {
    id: "zara-ahmad",
    firstName: "Zara",
    lastName: "Ahmad",
    fullName: "Zara Ahmad",
    initials: "ZA",
    rating: 4.8,
    available: true,
    experience: 7,
    time: 28,
    rate: 24,
    profileImage: Profile,
    availabilitySlots: {
      "2025-23-03": {
        timeSlots: [
          {
            startTime: "10:00 AM",
            endTime: "6:00 PM",
          },
        ],
      },
      "2025-27-03": {
        timeAvailability: [
          {
            startTime: "9:00 AM",
            endTime: "5:00 PM",
          },
        ],
      },
      "2025-30-03": {
        timeAvailability: [
          {
            startTime: "12:00 PM",
            endTime: "8:00 PM",
          },
        ],
      },
      "2025-03-04": {
        timeAvailability: [
          {
            startTime: "8:00 AM",
            endTime: "4:00 PM",
          },
        ],
      },
    },
    description:
      "Computer science graduate focusing on digital literacy and STEAM education for children. I teach coding, robotics, and digital creation through game-based learning while maintaining a healthy balance with offline activities. My approach emphasizes responsible technology use while developing the computational thinking skills essential for future success.",
    qualifications: [
      "Computer Science Degree",
      "Kids Coding Education",
      "Arabic & Urdu",
      "Digital Safety",
      "Robotics & Electronics",
      "Media Literacy",
      "Game Design",
    ],
    reviews: [
      {
        id: 1,
        name: "Fatima Malik",
        rating: 5,
        initial: "F",
        review:
          "Zara taught our daughter to code her own simple game - she was thrilled to create something interactive!",
      },
      {
        id: 2,
        name: "Brian Anderson",
        rating: 4,
        initial: "B",
        review:
          "Her lessons on internet safety were age-appropriate and empowering rather than scary.",
      },
      {
        id: 3,
        name: "Aisha Khan",
        rating: 5,
        initial: "A",
        review:
          "Zara speaks to our children in both English and Arabic, helping them maintain their heritage language.",
      },
      {
        id: 4,
        name: "Christopher Davis",
        rating: 5,
        initial: "C",
        review:
          "The robotics projects she brings are incredible - my kids are learning engineering concepts without realizing it.",
      },
      {
        id: 5,
        name: "Samir Hassan",
        rating: 5,
        initial: "S",
        review:
          "She taught our children how to evaluate online information for accuracy - a crucial skill in today's world.",
      },
      {
        id: 6,
        name: "Elizabeth Chen",
        rating: 4,
        initial: "E",
        review:
          "Zara creates excellent screen time boundaries while still making technology a creative tool rather than passive entertainment.",
      },
      {
        id: 7,
        name: "Omar Qureshi",
        rating: 5,
        initial: "O",
        review:
          "The digital stories our children created with her guidance combined coding, art, and storytelling beautifully.",
      },
      {
        id: 8,
        name: "Laura Williams",
        rating: 5,
        initial: "L",
        review:
          "She's helped our technology-resistant son develop confidence with computers through games he actually enjoys.",
      },
    ],
    messages: [
      {
        from: "You",
        message:
          "We try to limit screen time, but our kids are interested in coding. Is there a good balance?",
      },
      {
        from: "babySitter",
        message:
          "Absolutely! I often use a blend of 'unplugged' coding activities (using cards or physical objects to teach computational thinking) along with strategic screen time. We might start with a logic puzzle using physical materials, then apply those concepts on a computer for just 15-20 minutes. This approach helps children understand that coding is about problem-solving rather than just screen time. I can also recommend offline activities that reinforce coding concepts between sessions.",
      },
      {
        from: "You",
        message:
          "That sounds perfect! What age is appropriate to start these kinds of activities?",
      },
    ],
    distance: 50,
  },
  {
    id: "natalie-winters",
    firstName: "Natalie",
    lastName: "Winters",
    fullName: "Natalie Winters",
    initials: "NW",
    rating: 4.8,
    available: true,
    experience: 11,
    time: 38,
    rate: 27,
    profileImage: Profile,
    availabilitySlots: {
      "2025-24-03": {
        timeSlots: [
          {
            startTime: "2:00 PM",
            endTime: "10:00 PM",
          },
        ],
      },
      "2025-26-03": {
        timeAvailability: [
          {
            startTime: "11:00 AM",
            endTime: "7:00 PM",
          },
        ],
      },
      "2025-29-03": {
        timeAvailability: [
          {
            startTime: "8:00 AM",
            endTime: "4:00 PM",
          },
        ],
      },
      "2025-02-04": {
        timeAvailability: [
          {
            startTime: "3:00 PM",
            endTime: "9:00 PM",
          },
        ],
      },
    },
    description:
      "Child psychology graduate student with expertise in behavioral management and emotional intelligence development. I create structured environments that help children identify, express, and regulate their emotions while building social skills through play-based approaches and mindfulness techniques.",
    qualifications: [
      "Psychology Master's Student",
      "Childhood Development",
      "Behavioral Management",
      "Play Therapy Techniques",
      "Mindfulness Education",
      "Social Skills Coaching",
      "German Language",
    ],
    reviews: [
      {
        id: 1,
        name: "Hannah Schmidt",
        rating: 5,
        initial: "H",
        review:
          "Natalie helped our son develop healthy coping mechanisms for his anxiety through kid-friendly mindfulness activities.",
      },
      {
        id: 2,
        name: "Marcus Bauer",
        rating: 5,
        initial: "M",
        review:
          "Her techniques for helping siblings resolve conflicts have transformed our household dynamics.",
      },
      {
        id: 3,
        name: "Karen Thompson",
        rating: 4,
        initial: "K",
        review:
          "The emotional vocabulary our daughter has learned from Natalie has improved her ability to express her needs.",
      },
      {
        id: 4,
        name: "John Meyer",
        rating: 5,
        initial: "J",
        review:
          "Natalie's structured approach to playdates has helped our socially anxious child build meaningful friendships.",
      },
      {
        id: 5,
        name: "Brianna Wilson",
        rating: 5,
        initial: "B",
        review:
          "She introduced daily mindfulness routines that have noticeably improved our children's focus and behavior.",
      },
      {
        id: 6,
        name: "Thomas Klein",
        rating: 4,
        initial: "T",
        review:
          "The German language games she plays with our kids make learning a new language exciting rather than tedious.",
      },
      {
        id: 7,
        name: "Sophia Rivera",
        rating: 5,
        initial: "S",
        review:
          "Our daughter's emotional outbursts have decreased dramatically since implementing Natalie's calming strategies.",
      },
      {
        id: 8,
        name: "Peter Walsh",
        rating: 5,
        initial: "P",
        review:
          "Her psychological insight into our child's behavior patterns has been invaluable in addressing underlying issues.",
      },
    ],
    messages: [
      {
        from: "You",
        message:
          "Our 5-year-old struggles with emotional regulation and has frequent tantrums. Any strategies you might recommend?",
      },
      {
        from: "babySitter",
        message:
          "I'd be happy to help! For children this age, I find that creating a 'feelings corner' with calming tools can be transformative. We'd establish a routine where your child identifies emotions using simple visual aids, then chooses from several regulation strategies we practice together (deep breathing, sensory tools, movement breaks). I focus on validating feelings while teaching appropriate expression. Many children respond well to having this structured approach that gives them agency in managing big emotions.",
      },
      {
        from: "You",
        message:
          "That sounds promising. How long does it usually take to see improvement with these techniques?",
      },
    ],
    distance: 3,
  },
  {
    id: "jasmine-barnes",
    firstName: "Jasmine",
    lastName: "Barnes",
    fullName: "Jasmine Barnes",
    initials: "JB",
    rating: 4.7,
    available: true,
    experience: 9,
    time: 30,
    rate: 23,
    profileImage: Profile,
    availabilitySlots: {
      "2025-23-03": {
        timeSlots: [
          {
            startTime: "8:00 AM",
            endTime: "4:00 PM",
          },
        ],
      },
      "2025-25-03": {
        timeAvailability: [
          {
            startTime: "10:00 AM",
            endTime: "6:00 PM",
          },
        ],
      },
      "2025-31-03": {
        timeAvailability: [
          {
            startTime: "12:00 PM",
            endTime: "8:00 PM",
          },
        ],
      },
      "2025-07-04": {
        timeAvailability: [
          {
            startTime: "9:00 AM",
            endTime: "5:00 PM",
          },
        ],
      },
    },
    description:
      "Environmental educator who brings nature exploration and sustainability concepts to childcare. I create outdoor adventures, gardening projects, and nature-based arts that connect children with the natural world while teaching environmental stewardship through hands-on experiences and citizen science projects.",
    qualifications: [
      "Environmental Science Degree",
      "Outdoor Education",
      "Gardening & Botany",
      "Wildlife Identification",
      "Sustainability Projects",
      "Nature-Based Crafts",
      "ASL Basics",
    ],
    reviews: [
      {
        id: 1,
        name: "Michelle Cooper",
        rating: 5,
        initial: "M",
        review:
          "Jasmine turned our backyard into a thriving vegetable garden that the kids maintain with pride and excitement.",
      },
      {
        id: 2,
        name: "Derek Johnson",
        rating: 4,
        initial: "D",
        review:
          "Her knowledge of local wildlife has transformed our neighborhood walks into fascinating nature expeditions.",
      },
      {
        id: 3,
        name: "Eliza Washington",
        rating: 5,
        initial: "E",
        review:
          "The upcycled craft projects she creates with the children are both beautiful and teach important lessons about reuse.",
      },
      {
        id: 4,
        name: "Carlos Rodriguez",
        rating: 5,
        initial: "C",
        review:
          "My screen-obsessed son now requests outdoor time after participating in Jasmine's nature scavenger hunts.",
      },
      {
        id: 5,
        name: "Alicia Morgan",
        rating: 4,
        initial: "A",
        review:
          "She incorporates ASL into nature lessons, teaching my children to sign animal names and environmental terms.",
      },
      {
        id: 6,
        name: "Samuel Green",
        rating: 5,
        initial: "S",
        review:
          "The rain collection system the kids built with Jasmine has become a centerpiece of science learning in our home.",
      },
      {
        id: 7,
        name: "Tiffany Adams",
        rating: 5,
        initial: "T",
        review:
          "Her respectful approach to wildlife observation has taught our children to appreciate nature without disturbing it.",
      },
      {
        id: 8,
        name: "Brandon Taylor",
        rating: 5,
        initial: "B",
        review:
          "The seasonal nature journals they create with Jasmine have improved both science understanding and artistic skills.",
      },
    ],
    messages: [
      {
        from: "You",
        message:
          "We live in an apartment with limited outdoor space. Can you still incorporate nature activities?",
      },
      {
        from: "babySitter",
        message:
          "Absolutely! I have many nature activities designed specifically for urban spaces. We can create windowsill gardens with herbs or microgreens, set up small terrariums, or make bird feeders to attract wildlife to view from your windows. I also bring nature-based sensory bins and can organize outings to nearby parks or green spaces. Even in apartments, we can use magnifying glasses to explore plant life on your balcony or study the urban ecosystem. The natural world is everywhere when you know how to look!",
      },
      {
        from: "You",
        message:
          "That's great to hear! Do you bring supplies for these activities or should we prepare anything?",
      },
    ],
    distance: 2,
  },
  {
    id: "lucia-morales",
    firstName: "Lucia",
    lastName: "Morales",
    fullName: "Lucia Morales",
    initials: "LM",
    rating: 4.9,
    available: true,
    experience: 7,
    time: 33,
    rate: 24,
    profileImage: Profile,
    availabilitySlots: {
      "2025-26-03": {
        timeSlots: [
          {
            startTime: "9:00 AM",
            endTime: "5:00 PM",
          },
        ],
      },
      "2025-28-03": {
        timeAvailability: [
          {
            startTime: "1:00 PM",
            endTime: "9:00 PM",
          },
        ],
      },
      "2025-02-04": {
        timeAvailability: [
          {
            startTime: "10:00 AM",
            endTime: "6:00 PM",
          },
        ],
      },
      "2025-05-04": {
        timeAvailability: [
          {
            startTime: "8:00 AM",
            endTime: "4:00 PM",
          },
        ],
      },
    },
    description:
      "Speech language pathology student specializing in language enrichment and communication development. I create play-based activities that enhance vocabulary, storytelling abilities, and social communication while supporting multilingual development in children from diverse linguistic backgrounds.",
    qualifications: [
      "Speech Pathology Student",
      "Language Development",
      "Spanish & Portuguese",
      "Early Literacy",
      "Phonological Awareness",
      "Storytelling Techniques",
      "Sign Language",
    ],
    reviews: [
      {
        id: 1,
        name: "Elena Gonzalez",
        rating: 5,
        initial: "E",
        review:
          "Lucia has been crucial in helping our bilingual children develop strong vocabulary in both English and Spanish.",
      },
      {
        id: 2,
        name: "Aiden Murphy",
        rating: 5,
        initial: "A",
        review:
          "Her creative approach to addressing our son's speech delay made practice feel like play rather than therapy.",
      },
      {
        id: 3,
        name: "Carmela Santos",
        rating: 4,
        initial: "C",
        review:
          "The storytelling games she introduced have dramatically improved our daughter's narrative skills and confidence.",
      },
      {
        id: 4,
        name: "Patrick O'Connor",
        rating: 5,
        initial: "P",
        review:
          "Lucia created custom phonological awareness activities that prepared our son beautifully for reading instruction.",
      },
      {
        id: 5,
        name: "Isabella Ferreira",
        rating: 5,
        initial: "I",
        review:
          "She maintained our family's Portuguese while introducing English in a seamless, natural way through play.",
      },
      {
        id: 6,
        name: "Ryan Kennedy",
        rating: 4,
        initial: "R",
        review:
          "The communication strategies she taught have reduced frustration tantrums in our toddler significantly.",
      },
      {
        id: 7,
        name: "Teresa Diaz",
        rating: 5,
        initial: "T",
        review:
          "Our daughter's pronunciation has improved dramatically through the fun articulation games Lucia creates.",
      },
      {
        id: 8,
        name: "Michael Lewis",
        rating: 5,
        initial: "M",
        review:
          "She incorporates sign language seamlessly into activities, giving our children multiple ways to express themselves.",
      },
    ],
    messages: [
      {
        from: "You",
        message:
          "We're raising our children in a bilingual household (English/Korean), but they're starting to resist speaking Korean. Any advice?",
      },
      {
        from: "babySitter",
        message:
          "This is quite common in bilingual families! I'd approach this by creating high-interest activities where Korean is naturally integrated - perhaps cooking Korean dishes while using Korean vocabulary, or games where Korean knowledge gives them special powers or advantages. I also recommend establishing specific contexts where Korean is the primary language (like certain days or activities). The key is making the heritage language feel valuable and cool rather than obligatory. I've worked with several bilingual families facing similar challenges with great success!",
      },
      {
        from: "You",
        message:
          "That's helpful! Do you have experience with Korean specifically or strategies for any language?",
      },
    ],
    distance: 92,
  },
  {
    id: "amara-okafor",
    firstName: "Amara",
    lastName: "Okafor",
    fullName: "Amara Okafor",
    initials: "AO",
    rating: 4.8,
    available: true,
    experience: 8,
    time: 29,
    rate: 24,
    profileImage: Profile,
    availabilitySlots: {
      "2025-24-03": {
        timeSlots: [
          {
            startTime: "7:00 AM",
            endTime: "3:00 PM",
          },
        ],
      },
      "2025-27-03": {
        timeAvailability: [
          {
            startTime: "11:00 AM",
            endTime: "7:00 PM",
          },
        ],
      },
      "2025-01-04": {
        timeAvailability: [
          {
            startTime: "9:00 AM",
            endTime: "5:00 PM",
          },
        ],
      },
      "2025-04-04": {
        timeAvailability: [
          {
            startTime: "10:00 AM",
            endTime: "6:00 PM",
          },
        ],
      },
    },
    description:
      "Literature specialist and storyteller focusing on multicultural education and global awareness. I introduce children to stories, traditions, and perspectives from cultures around the world while developing literacy skills, cultural appreciation, and global citizenship through interactive storytelling, cooking, and arts from diverse traditions.",
    qualifications: [
      "Children's Literature MA",
      "Multicultural Education",
      "Yoruba & Igbo",
      "Global Cuisines",
      "Traditional Storytelling",
      "Character Education",
      "Cultural Celebrations",
    ],
    reviews: [
      {
        id: 1,
        name: "Olufemi Adebayo",
        rating: 5,
        initial: "O",
        review:
          "Amara keeps our Nigerian heritage alive for our American-born children through stories and traditions.",
      },
      {
        id: 2,
        name: "Melissa Harrison",
        rating: 5,
        initial: "M",
        review:
          "Her global folktale activities have expanded our children's worldview and sparked curiosity about different cultures.",
      },
      {
        id: 3,
        name: "Joseph Nwosu",
        rating: 4,
        initial: "J",
        review:
          "The traditional West African dishes she prepares with our children connect them to their heritage in a tangible way.",
      },
      {
        id: 4,
        name: "Linda Davidson",
        rating: 5,
        initial: "L",
        review:
          "Amara's character education through cultural stories helps our children understand universal values in meaningful contexts.",
      },
      {
        id: 5,
        name: "Chidimma Okonkwo",
        rating: 5,
        initial: "C",
        review:
          "She's teaching our children Igbo phrases and songs, preserving our language for the next generation.",
      },
      {
        id: 6,
        name: "Robert Jackson",
        rating: 4,
        initial: "R",
        review:
          "The global celebration calendar she created has become a family tradition - we explore a new culture each month.",
      },
      {
        id: 7,
        name: "Folake Afolayan",
        rating: 5,
        initial: "F",
        review:
          "Her storytelling performances captivate our children while teaching important cultural lessons and perspectives.",
      },
      {
        id: 8,
        name: "Benjamin Foster",
        rating: 5,
        initial: "B",
        review:
          "Amara helped our adopted daughter connect with her birth culture through age-appropriate stories and activities.",
      },
    ],
    messages: [
      {
        from: "You",
        message:
          "We'd like to expose our children to more diverse perspectives and cultures. What kinds of activities do you suggest?",
      },
      {
        from: "babySitter",
        message:
          "I'd love to help with that! I typically create themed cultural exploration days that engage all the senses. We might explore Japan through origami art, haiku poetry, and making simple sushi rolls, or learn about Morocco through spice identification, geometric art patterns, and traditional music. I bring authentic stories from each culture and age-appropriate context for traditions. These immersive experiences help children develop both appreciation for diversity and recognition of our shared humanity across cultures.",
      },
      {
        from: "You",
        message:
          "That sounds wonderful! Do you have experience with cultures from all regions of the world?",
      },
    ],
    distance: 61,
  },
  {
    id: "isabel-rivera",
    firstName: "Isabel",
    lastName: "Rivera",
    fullName: "Isabel Rivera",
    initials: "IR",
    rating: 4.7,
    available: true,
    experience: 10,
    time: 34,
    rate: 26,
    profileImage: Profile,
    availabilitySlots: {
      "2025-25-03": {
        timeSlots: [
          {
            startTime: "3:00 PM",
            endTime: "9:00 PM",
          },
        ],
      },
      "2025-29-03": {
        timeAvailability: [
          {
            startTime: "7:00 AM",
            endTime: "3:00 PM",
          },
        ],
      },
      "2025-31-03": {
        timeAvailability: [
          {
            startTime: "11:00 AM",
            endTime: "7:00 PM",
          },
        ],
      },
      "2025-06-04": {
        timeAvailability: [
          {
            startTime: "2:00 PM",
            endTime: "8:00 PM",
          },
        ],
      },
    },
    description:
      "Performing arts educator specializing in music, dance, and drama for children of all abilities. I create engaging performing arts activities that build confidence, self-expression, and collaborative skills while accommodating various learning styles and physical capabilities through adaptive techniques and inclusive approaches.",
    qualifications: [
      "Performing Arts Education",
      "Adaptive Dance Methods",
      "Spanish & Italian",
      "Musical Instruments",
      "Inclusive Theater",
      "Voice Training",
      "Sensory-Friendly Performance",
    ],
    reviews: [
      {
        id: 1,
        name: "Gabriela Sanchez",
        rating: 5,
        initial: "G",
        review:
          "Isabel helped our extremely shy daughter find her voice through gradual introduction to performance opportunities.",
      },
      {
        id: 2,
        name: "Anthony Romano",
        rating: 4,
        initial: "A",
        review:
          "Her adaptive techniques allowed our son in a wheelchair to fully participate in dance activities with his siblings.",
      },
      {
        id: 3,
        name: "Carmen Vasquez",
        rating: 5,
        initial: "C",
        review:
          "The mini-musical our children created with Isabel's guidance was the highlight of our family gathering.",
      },
      {
        id: 4,
        name: "Julian Kennedy",
        rating: 5,
        initial: "J",
        review:
          "She introduced our children to instruments from around the world, expanding their musical appreciation.",
      },
      {
        id: 5,
        name: "Mariana Esposito",
        rating: 4,
        initial: "M",
        review:
          "Isabel maintains our children's Italian language skills through songs and theatrical activities from Italian culture.",
      },
      {
        id: 6,
        name: "Devon Williams",
        rating: 5,
        initial: "D",
        review:
          "Her sensory-friendly approach to music sessions made these activities accessible for our son with processing issues.",
      },
      {
        id: 7,
        name: "Sofia Martinez",
        rating: 5,
        initial: "S",
        review:
          "Isabel's voice training games have improved our daughter's speech clarity while being incredibly fun.",
      },
      {
        id: 8,
        name: "Travis Jenkins",
        rating: 4,
        initial: "T",
        review:
          "The collaborative theater games she leads have helped our children work through conflicts constructively.",
      },
    ],
    messages: [
      {
        from: "You",
        message:
          "My child gets very anxious about performing or being the center of attention. Would your activities be too stressful?",
      },
      {
        from: "babySitter",
        message:
          "I completely understand that concern! I always use a gradual approach with anxious children, starting with group activities where no one is spotlighted. We might begin with collaborative storytelling where everyone contributes just one line, or sound effect explorations where everyone makes noises together. I never force performance but create safe opportunities where participation can grow naturally as confidence builds. Many parents are surprised to see their hesitant children voluntarily taking more active roles as they feel secure in our supportive environment.",
      },
      {
        from: "You",
        message:
          "That's reassuring. What types of performing arts do you typically incorporate?",
      },
    ],
    distance: 3,
  },
];
