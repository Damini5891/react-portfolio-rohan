const BlogPost = ({ linkUrl, title, content }) => {
  return (
    <div className="py-8 flex flex-wrap md:flex-nowrap">
      <div className="md:flex-grow">
        <h2 className="text-2xl font-medium text-gray-400 title-font mb-2">
          {title}
        </h2>
        <p className="leading-relaxed">{content}</p>
        <a
          className="text-indigo-500 inline-flex items-center mt-4"
          href={linkUrl}
          target="_blank"
        >
          Read More
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

const BlogPage = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 mx-auto">
        <div>
          <BlogPost
            linkUrl="https://medium.com/analytics-vidhya/algorithmic-trading-in-python-rsi-f633524ea7eb"
            title="Algorithmic Trading in Python: RSI"
            content="Relative Strength Index (RSI)"
          />
          <BlogPost
            linkUrl="https://medium.com/analytics-vidhya/how-to-build-stock-technical-indicators-with-python-7a0c5b665285"
            title="How to Build Stock Technical Indicators with Python"
            content="Building Stock Technical Indicators with Python entails leveraging Python libraries such as Pandas, NumPy, and Matplotlib to compute and visualize various technical indicators like moving averages, Relative Strength Index (RSI), and Bollinger Bands"
          />
          <BlogPost
            linkUrl="https://medium.com/analytics-vidhya/dockerizing-a-basic-django-app-on-macos-step-by-step-guide-ddcff69b8311"
            title="Dockerizing a Basic Django App on macOS: Step-by-Step Guide"
            content="Docker simplifies deployment by encapsulating your app and its dependencies into portable containers, ensuring consistency across different environments."
          />
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
