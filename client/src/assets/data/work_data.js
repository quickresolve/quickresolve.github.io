import portfolio from '../images/work/portfolio.png';
import ethicsAI from '../images/work/ethics-ai.png';
import blueApron from '../images/work/blue-apron.png';
import AIFF from '../images/work/AIFF.png';
import LXAI from '../images/work/LXAI.jpg';
import cycle from '../images/work/cycle.jpeg';
import nest from '../images/work/nest.jpeg';
import accelai from '../images/work/accelai.png';
import imageclass from '../images/work/image-class.png';
import AILAW from '../images/featured/ai-law.png';
import AIGENOMICS from '../images/work/ai-genomics.png';
import diversity from '../images/work/diversity.png';

export default [
    {
        name: 'AI and Law Mini-course',
        info: 'The AI and Law Mini-course is designed to expose students to real-world use cases of Artificial Intelligence in law practice. Well begin with a high-level overview of artificial intelligence concepts and techniques, then walk through an applied example of topic modeling for supreme court cases using Natural Language Processing. Youll also learn where to find public datasets for use in future research and applications.',
        img: AILAW,
        alt: 'AILAW Promo',
        codeLink: "https://github.com/AccelAI/AI-Law-Minicourse",
        demoLink: "",
        type: "Technical Workshop",
    
    },
    {
        name: 'Image Classification in TensorFlow',
        info: 'Well begin with a high-level overview of image classification concepts and techniques, then walk through an applied lab using the TensorFlow API. Attendees will learn how to collect image data, build an image classifier in Tensorflow, retraining inceptions final layer on a new data set, and how to test the accuracy of their classifier.',
        img: imageclass,
        alt: 'Imageclass Promo',
        codeLink: "https://github.com/AccelAI/Image-Classification-TensorFlow",
        demoLink: "https://www.accel.ai/courses/image-classification-tensorflow",
        type: "Technical Workshop",
    
    },
    {
        name: 'Accel AI Institute',
        info: 'Accel.AI was founded in September of 2016, our mission is to lower the barriers to entry in engineering artificial intelligence. We focus on integrating AI and Social Impact through consulting, training, study sessions, and events on ethical AI development and applied AI engineering.',
        img: accelai,
        alt: 'Accel.AI',
        codeLink: "https://www.accel.ai/",
        demoLink: "https://www.slideshare.net/secret/MAXwercFoSMYhF",
        type: "501c3 Non-Profit",
    
    },
    {
        name: 'Ethics of Artificial Intelligence',
        info: 'Are you concerned about social and ethical issues related to artificial intelligence (AI)? Whatever your background or experience, this session is for all who care about how AI is rapidly changing our shared world. It is a mix of research-based presentation with interactive discussions addressing the impact of AI on our society. Specific topics addressed include: Embedding Values into Autonomous Intelligent Systems, Methodologies to Guide Ethical Research and Design, Personal Data and Individual Access Control, and Economics/Humanitarian Issues of AI Development.',
        img: ethicsAI,
        alt: 'AI Ethics Slide',
        codeLink: "",
        demoLink: "https://www.slideshare.net/secret/Bl1azJ3BMYZvzY",
        type: "Presentation",
    
    },
    {
        name: 'Blue Apron',
        info: 'A case study of Blue Apron meal kit delivery service including a redesign of customer checkout experience and new product offering.',
        img: blueApron,    
        alt: 'Blue Apron',
        codeLink: "",
        demoLink: "https://www.slideshare.net/secret/lltbrAwyUtarrk",
        type: "Case Study"
    },
    {   
        name: 'Latinx in AI',
        info: 'Creating Harmony and Opportunity for Latinx in AI',
        img: LXAI,
        alt: 'LXAI',
        codeLink: "https://github.com/brucean52/contact_list",
        demoLink: "http://contact-list.brucedev.net/",
        type: "Non-Profit Coalition"
    },
    {
        name: 'AI Fintech Forum',
        info: 'This forum highlights the convergence of Artificial Intelligence, Fintech, Blockchain and Cryptocurrencies including their effects on policy, data privacy, and technological trends on a global scale. We strive to offer opportunities and create a platform for high-level and diverse speakers to share their work with others working in or looking to break into the AI and Finance space.',
        img: AIFF,
        alt: 'AIFF',
        codeLink: "https://github.com/ai-fintech",
        demoLink: "http://www.aiff.world",
        type: "Conference"
    },
    {
        name: 'AI Genomics Hackathon',
        info: 'On June 23rd,  Accel.ai + SVAI + NF2 Project, are kicking off our first AI Genomics hackathon at Google Launchpad in San Francisco! Were also happy to announce the NCBI as a community partner. This event will focus on analyzing Genomic data and research publications using AI and other computational methods. We have a special opportunity to work with patient data from an ongoing medical case, provided by Onno Faber, a serial entrepreneur and NF2 Patient. This event kicks off our first open source medical AI community project and were super excited for it!',
        img: AIGENOMICS,
        alt: 'AI Genomics Promo',
        codeLink: "https://www.xconomy.com/san-francisco/2017/06/23/startup-founders-quest-for-cure-leads-to-genomics-hackathon-at-google/",
        demoLink: "https://www.accel.ai/ai-genomics-hackathon",
        type: "Hackathon"
    },
    {
        name: 'Portfolio',
        info: 'Web app using React.js and deployed via github pages',
        img: portfolio,
        alt: 'Portfolio',
        codeLink: "https://github.com/quickresolve/quickresolve.github.io",
        demoLink: "",
        type: "React Web App"
    },
    {
        name: 'Cycle the Bay',
        info: 'Our app was developed to meet the needs of a cyclist interested in exploring the San Francisco Bay area, specifically the Bay Trail with its beautiful historical and natural ecological offerings.',
        img: cycle,
        alt: 'Cycle',
        codeLink: "https://github.com/quickresolve/CycleTheBay",
        demoLink: "https://youtu.be/OI2wkQTdCrg",
        type: "React Native Mobile App"
    },
    {
        name: 'SkillNest',
        info: 'Skillnest is a mobile platform that uses a real-time database to allow students to browse local courses and connect with skilled teachers.',
        img: nest,
        alt: 'Nest',
        codeLink: "https://github.com/quickresolve/skillnest",
        demoLink: "https://youtu.be/ysyDFT27_ug",
        type: "React Native Mobile App"
    },
    {
        name: 'Diversity vs Culture Fit',
        info: 'The Merits of Diversity versus Culture Fit featured in Dev/color Publication',
        img: diversity,
        alt: 'Diversity',
        codeLink: "",
        demoLink: "https://blog.devcolor.org/the-merits-of-diversity-versus-culture-fit-5ae5ec8e474a",
        type: "Blog Post"
    },
];