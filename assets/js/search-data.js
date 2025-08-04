// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/photo-gallery/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/giscus-comments/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/diagrams/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/distill/";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/twitter/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/math/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/formatting-and-links/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-am-selected-as-a-rising-star-in-eecs",
          title: '🏆 I am selected as a Rising Star in EECS.',
          description: "",
          section: "News",},{id: "news-our-paper-semantic-super-a-semantic-aware-surgical-perception-framework-for-endoscopic-tissue-identification-reconstruction-and-tracking-is-accepted-by-icra-2023",
          title: 'Our paper Semantic-SuPer: A Semantic-Aware Surgical Perception Framework for Endoscopic Tissue Identification, Reconstruction,...',
          description: "",
          section: "News",},{id: "news-our-paper-orrn-an-ode-based-recursive-registration-network-for-deformable-respiratory-motion-estimation-with-lung-4dct-images-is-accepted-by-ieee-transactions-on-biomedical-engineering",
          title: 'Our paper ORRN: An ODE-based Recursive Registration Network for Deformable Respiratory Motion Estimation...',
          description: "",
          section: "News",},{id: "news-i-am-selected-as-pioneer-of-medical-robotics-at-data-vs-model-in-medical-robotics-iros-2023",
          title: '🏆 I am selected as Pioneer of Medical Robotics at Data vs. Model...',
          description: "",
          section: "News",},{id: "news-we-present-our-paper-semantic-super-employing-semantic-perception-for-endoscopic-tissue-identification-reconstruction-and-tracking-at-ippc-workshop-iros-2023",
          title: 'We present our paper Semantic-SuPer: Employing Semantic Perception for Endoscopic Tissue Identification, Reconstruction,...',
          description: "",
          section: "News",},{id: "news-my-research-is-reported-in-the-october-2023-issue-of-computer-vision-news",
          title: '📢 My research is reported in the October 2023 issue of Computer Vision...',
          description: "",
          section: "News",},{id: "news-️-i-am-invited-to-present-at-data-vs-model-in-medical-robotics-iros-2023-talk-title-employing-robust-semantic-perception-for-endoscopic-tissue-identification-tracking-and-reconstruction",
          title: '🎙️ I am invited to present at Data vs. Model in Medical Robotics...',
          description: "",
          section: "News",},{id: "news-our-papers-tracking-snake-like-robots-in-the-wild-using-only-a-single-camera-anyokp-one-shot-and-instance-aware-object-keypoint-extraction-with-pretrained-vit-and-real-to-sim-deformable-object-manipulation-optimizing-physics-models-with-residual-mappings-for-robotic-surgery-are-accepted-by-icra-2024-we-are-also-coauthor-of-open-x-embodiment-robotic-learning-datasets-and-rt-x-models-best-conference-paper-award-at-icra-2024",
          title: 'Our papers Tracking Snake-Like Robots in the Wild Using Only a Single Camera,...',
          description: "",
          section: "News",},{id: "news-the-paper-we-coauthored-droid-a-large-scale-in-the-wild-robot-manipulation-dataset-is-accepted-by-rss-2024",
          title: 'The paper we coauthored - DROID: A Large-Scale In-The-Wild Robot Manipulation Dataset -...',
          description: "",
          section: "News",},{id: "news-our-paper-baa-ngp-bundle-adjusting-accelerated-neural-graphics-primitives-is-accepted-by-7th-international-workshop-on-visual-odometry-and-computer-vision-applications-based-on-location-clues",
          title: 'Our paper BAA-NGP: Bundle-Adjusting Accelerated Neural Graphics Primitives is accepted by 7th International...',
          description: "",
          section: "News",},{id: "news-️-i-am-invited-to-present-at-ismr-2024-workshop-on-machine-learning-with-the-da-vinci-research-kit-talk-title-bringing-deep-learning-to-surgical-scene-reconstruction-and-tracking",
          title: '🎙️ I am invited to present at ISMR 2024 Workshop on Machine Learning...',
          description: "",
          section: "News",},{id: "news-our-paper-hemoset-the-first-blood-segmentation-dataset-for-automation-of-hemostasis-management-win-the-best-student-paper-award-at-ismr-2024",
          title: '🏆 Our paper HemoSet: The First Blood Segmentation Dataset for Automation of Hemostasis...',
          description: "",
          section: "News",},{id: "news-our-paper-reducing-annotating-load-active-learning-with-synthetic-images-in-surgical-instrument-segmentation-is-accepted-by-medical-image-analysis",
          title: 'Our paper Reducing Annotating Load: Active Learning with Synthetic Images in Surgical Instrument...',
          description: "",
          section: "News",},{id: "news-our-paper-superpm-a-surgical-perception-framework-based-on-deep-point-matching-learned-from-physical-constrained-simulation-data-is-accepted-by-iros-2024",
          title: 'Our paper SuPerPM: A Surgical Perception Framework Based on Deep Point Matching Learned...',
          description: "",
          section: "News",},{id: "news-our-paper-efficient-data-driven-joint-level-calibration-of-cable-driven-surgical-robots-is-accepted-by-npj-robotics",
          title: 'Our paper Efficient Data-Driven Joint-Level Calibration of Cable-Driven Surgical Robots is accepted by...',
          description: "",
          section: "News",},{id: "news-our-paper-based-bundle-adjusting-surgical-endoscopic-dynamic-video-reconstruction-using-neural-radiance-fields-is-accepted-by-wacv-2025",
          title: 'Our paper BASED: Bundle-Adjusting Surgical Endoscopic Dynamic Video Reconstruction Using Neural Radiance Fields...',
          description: "",
          section: "News",},{id: "news-my-lab-medical-automation-robotics-and-general-intelligence-lab-margin-lab-is-established-subscribe-to-our-youtube-channel-for-future-updates",
          title: '📢 My lab - Medical Automation, Robotics and General Intelligence Lab (MARGIN Lab)...',
          description: "",
          section: "News",},{id: "news-our-paper-ctrnet-x-camera-to-robot-pose-estimation-in-real-world-conditions-using-a-single-camera-is-accepted-by-icra-2025",
          title: 'Our paper CtRNet-X: Camera-to-Robot Pose Estimation in Real-World Conditions Using a Single Camera...',
          description: "",
          section: "News",},{id: "news-we-organize-the-workshop-on-the-evolving-landscape-of-surgical-robotics-elsr-at-icra-2025-atlanta-usa-️-i-give-a-talk-on-recent-research-from-my-lab-talk-title-intelligent-multimodal-surgical-perception",
          title: 'We organize the Workshop on the Evolving Landscape of Surgical Robotics (ELSR) at...',
          description: "",
          section: "News",},{id: "news-our-paper-twintrack-bridging-vision-and-contact-physics-for-real-time-tracking-of-unknown-dynamic-objects-is-available-online",
          title: 'Our paper TwinTrack: Bridging Vision and Contact Physics for Real-Time Tracking of Unknown...',
          description: "",
          section: "News",},{id: "news-our-paper-surgxbench-explainable-vision-language-model-benchmark-for-surgery-is-available-online",
          title: 'Our paper SurgXBench: Explainable Vision-Language Model Benchmark for Surgery is available online.',
          description: "",
          section: "News",},{id: "projects-robot-pose-tracking",
          title: 'Robot Pose Tracking',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/robot_pose_tracking/";
            },},{id: "projects-robotic-manipulation",
          title: 'Robotic Manipulation',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/robotic_manipulation/";
            },},{id: "projects-semantic-segmentation-in-surgery",
          title: 'Semantic Segmentation in Surgery',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/semantic_segmentation/";
            },},{id: "projects-surgical-perception",
          title: 'Surgical Perception',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/surgical_perception/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%68%61%6E.%6C%69%6E.%32@%61%73%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/shan-lin-6810b7140", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=HWIoDGYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://search.asu.edu/profile/5211818", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
