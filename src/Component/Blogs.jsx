import { Link } from "react-router-dom";
import blog1 from "../assets/images/blogs/blog1.png";
import blog2 from "../assets/images/blogs/blog2.png";
import blog3 from "../assets/images/blogs/blog3.png";
const Blogs = () => {
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
  return (
    <div>
      <div className="wrapper paddingTop paddingBottom">
        <h1 className="title-heading text-center mb-6">News & Blog</h1>{" "}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogsDetails.map((obj) => (
            <Link
              to={`/blog/${obj.id}`}
              className="rounded-2xl overflow-hidden"
            >
              <div className="relative">
                <div className="absolute top-3 left-3 bg-black text-white px-5 py-1 rounded-full font-medium">
                  News
                </div>
                <img
                  src={obj.image}
                  alt="blogs-image"
                  className="h-[25rem] object-cover w-full"
                />
              </div>
              <div className="py-4">
                <p>{obj.date}</p>
                <h2 className="text-xl font-bold">{obj.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Blogs;
