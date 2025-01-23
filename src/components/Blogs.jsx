import BlogPage from "./BlogPage";
import blog3 from "../assets/services/blog3.webp";

const Blogs = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden" id="blogs">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-12">
          {/* Left side content */}
          <div className="p-12 md:w-1/2 flex flex-col items-start">
            <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-400 mt-4 mb-4">
              Building and Using a Convolutional Neural Network (CNN) for Image
              Classification with Keras and TensorFlow{" "}
            </h2>
            <p className="leading-relaxed mb-8">
              Convolutional Neural Network (CNN) for image classification with
              Keras and TensorFlow, start by defining the architecture with
              convolutional, pooling, and fully connected layers.
            </p>
            <a
              className="text-indigo-500 inline-flex items-center"
              href="https://medium.com/analytics-vidhya/building-and-using-a-convolutional-neural-network-cnn-for-image-classification-with-keras-and-7abf571f0abb"
              target="_blank"
            >
              Learn More
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
            <img
              src={blog3}
              alt="blog"
              height="400"
              width="300"
              className="mt-8 w-full"
            />
          </div>
          {/* Right side content */}
          <div className="p-12 md:w-1/2 flex justify-center items-center">
            <BlogPage />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
