
import blog from "../images/blog.jpg";
import blog2 from "../images/blog2.jpg";
import blog3 from "../images/blog3.jpg";

const blogData = [
  {
    id: "technical-seo",
    title: "The Role Of Technical SEO In Website Performance",
    image: blog,
    category: "SEO & Optimization",
    date: "October 10, 2026",
    excerpt:
      "Discover how technical SEO improves website performance, search engine visibility and user experience.",
    content: [
      {
        heading: "Why Technical SEO Matters",
        text: "Technical SEO helps search engines discover, crawl and understand your website. A technically sound website provides a stronger foundation for your overall SEO strategy.",
      },
      {
        heading: "Improve Website Performance",
        text: "Page speed, mobile responsiveness, secure connections and a clear website structure all contribute to a better experience for visitors and search engines.",
      },
      {
        heading: "Build a Strong SEO Foundation",
        text: "Regular audits, fixing broken links, optimizing indexing and improving site architecture can help maintain a healthy website over time.",
      },
    ],
  },
  {
    id: "voice-search-seo",
    title: "The Impact Of Voice Search On SEO",
    image: blog2,
    category: "Search Engine Optimization",
    date: "October 12, 2026",
    excerpt:
      "Learn how conversational search queries are changing the way businesses approach SEO and content creation.",
    content: [
      {
        heading: "Understanding Voice Search",
        text: "Voice search allows people to find information by speaking naturally to their devices. These searches often take the form of questions and conversational phrases.",
      },
      {
        heading: "Create Helpful, Conversational Content",
        text: "Answer common customer questions clearly, use descriptive headings and organize information so readers can quickly find what they need.",
      },
      {
        heading: "Optimize for Search Intent",
        text: "Focus on the intent behind each query, provide accurate information and make sure your website works smoothly on mobile devices.",
      },
    ],
  },
  {
    id: "data-driven-marketing",
    title: "How Data-Driven Marketing Helps Businesses Grow",
    image: blog3,
    category: "Digital Marketing",
    date: "October 13, 2026",
    excerpt:
      "Explore how businesses can use meaningful data to understand audiences, improve campaigns and make smarter decisions.",
    content: [
      {
        heading: "Understand Your Audience",
        text: "Website analytics and campaign data help businesses understand visitor behavior, audience interests and the content that attracts attention.",
      },
      {
        heading: "Measure Campaign Performance",
        text: "Track relevant metrics such as engagement, conversions and traffic sources to identify which marketing activities are delivering value.",
      },
      {
        heading: "Make Better Decisions",
        text: "Use reliable insights to test ideas, refine campaigns and continuously improve your marketing strategy.",
      },
    ],
  },
];

export default blogData;
