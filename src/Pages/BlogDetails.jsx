import { useParams, Link } from "react-router-dom";
import { FaImage } from "react-icons/fa";
import blog1 from "../assets/images/blogs/blog1.png";
import blog2 from "../assets/images/blogs/blog2.png";
import blog3 from "../assets/images/blogs/blog3.png";

const blogsDetails = [
  {
    id: 1,
    image: blog1,
    title: "Urna cras et mauris congue nunc nisi nec tempus cursus",
    date: "24 May 2024",
  },
  {
    id: 2,
    image: blog2,
    title: "Id tellus dignissim eu nisl aliquam. Massa id interdum",
    date: "24 May 2024",
  },
  {
    id: 3,
    image: blog3,
    title: "mus cursus pellentesque blandit tortor suspendisse ornare",
    date: "24 May 2024",
  },
];

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogsDetails.find((b) => b.id === parseInt(id));

  if (!blog) {
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold text-center">Blog Not Found</h2>
        <Link
          to="/"
          className="text-blue-500 hover:underline mt-4 block text-center"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="wrapper py-[5rem]">
      {/* Hero Section */}
      <div className="mb-8">
        <div className="relative w-full h-64 sm:h-80 lg:h-[40rem]">
          {blog.image ? (
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover rounded-lg aspect-video"
              onError={(e) => {
                e.target.src = "";
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
          ) : (
            <FaImage
              className="w-full h-full text-gray-400 flex items-center justify-center"
              title="No image available"
            />
          )}
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-4">
          {blog.title}
        </h1>
        <p className="text-sm text-gray-600 mt-2">{blog.date}</p>
      </div>

      {/* Blog Content */}
      <div className="prose max-w-none sm:prose-lg lg:prose-xl">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <h2>Exploring the Topic</h2>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <div className="my-6">
          {/* <img
            src="https://via.placeholder.com/600x400"
            alt="Placeholder"
            className="w-full h-auto rounded-lg"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">
            Sample image caption
          </p> */}
        </div>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
        <h2>Key Takeaways</h2>
        <ul className="list-disc pl-6">
          <li>Nemo enim ipsam voluptatem quia voluptas sit aspernatur.</li>
          <li>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
          </li>
          <li>Consectetur, adipisci velit, sed quia non numquam eius modi.</li>
        </ul>
        <div className="my-6">
          {/* <img
            src="https://via.placeholder.com/600x400"
            alt="Placeholder"
            className="w-full h-auto rounded-lg"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">
            Another sample image
          </p> */}
        </div>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident.
        </p>
      </div>

      {/* Back Button */}
      <Link
        to="/"
        className="inline-block mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default BlogDetails;
