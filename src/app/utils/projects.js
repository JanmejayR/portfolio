const projects =  [
    {
        id:1,
        projectImage: {
            imageSrc:"/projectImage1.PNG",
            imageAlt: "Image of First Project",
            imageWidth: 1920,
            imageHeight: 935,
        },
        title: "Quick Subs",
        description : "It is an AI subtitle embedder that takes a video (all exts supported) and embeds subtitles of your desired language to it. It is lightweight and uses ffmpeg wasm for audio extraction and subtitle embedding and assemblyAI and DeepL apis for translation.", 
        github: "https://github.com/JanmejayR/QuickSubs",
        live: "https://quicksubs-production.up.railway.app", 
        frameworkIcons : []
    },
    {
        id:2,
        projectImage: {
            imageSrc:"/projectImage2.PNG",
            imageAlt: "Image of Second Project",
            imageWidth: 1896,
            imageHeight: 935,
        },
        title: "Anant Sangeet Academy",
        description : "This is a Music Academy website that I built for the music teacher of a friend of mine. It uses Reactjs and TailwindCSS to create the UI, Nextjs for server-side rendering and framer-motion library for the animations.",
        github: "",
        live: "https://www.anantsangeetacademy.com/", 
        frameworkIcons : []
    },
    {
        id:3,
        projectImage: {
            imageSrc:"/projectImage3.PNG",
            imageAlt: "Image of Third Project",
            imageWidth: 1920,
            imageHeight: 934,
        },
        title: "Swift Convo",
        description : "This is a Full Stack live chatting application built using the MERN stack. It uses JWTs for authentication and authorization and socket.io for real time communication along with a bunch of ui libraries like react-hot-toast for toast messages.",
        github: "https://github.com/JanmejayR/SwiftConvo",
        live: "https://swiftconvo.onrender.com/", 
        frameworkIcons : []
    },
    {
        id:4,
        projectImage: {
            imageSrc:"/projectImage4.PNG",
            imageAlt: "Image of Fourth Project",
            imageWidth: 1894,
            imageHeight: 931,
        },
        title: "Swift Stay",
        description : "This is a MERN Stack Hotel Booking application. It uses JWT based authentication, allows users to add their own hotels by uploading its pictures and description. Users can also book hotels and write reviews about them.",
        github: "https://github.com/JanmejayR/SwiftStay",
        live: "", 
        frameworkIcons : []
    },
]

export default projects;