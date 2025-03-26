import React from "react";

const BlogPost = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    borderTop: "2px solid #ddd",
    borderBottom: "2px solid #ddd",
    backgroundColor: "#fafafa"
  };

  const sidebarStyle = {
    width: "20%",
    paddingRight: "20px",
    borderRight: "2px solid #ddd"
  };

  const contentStyle = {
    width: "60%",
    padding: "0 20px"
  };

  const rightSidebarStyle = {
    width: "20%",
    paddingLeft: "20px",
    borderLeft: "2px solid #ddd"
  };

  const headingStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#222"
  };

  const subHeadingStyle = {
    color: "#444"
  };

  const linkStyle = {
    color: "#d32f2f",
    textDecoration: "none"
  };

  return (
    <div style={containerStyle}>
      {/* Left Sidebar */}
      <div style={sidebarStyle}>
        <h3>Conferences</h3>
        <ul>
          <li>
            <a href="https://www.urbansystems.ca/ai-action-summit-2025" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              AI Action Summit 2025
            </a>
          </li>
          <li>
            <a href="https://www.urbansystems.ca/neuralx-2024" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              NeuralX 2024
            </a>
          </li>
          <li>
            <a href="https://www.urbansystems.ca/toronto-ml-summit" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              8th Toronto Machine Learning Summit
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div style={contentStyle}>
        <h1 style={headingStyle}>8th Toronto Machine Learning Summit</h1>
        <p><strong>July 10, 2024 – July 15, 2024</strong></p>

        <h2 style={subHeadingStyle}>Executive Summary</h2>
        <p>
          The <a href="https://www.urbansystems.ca/toronto-ml-summit" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            8th Annual Toronto Machine Learning Summit
          </a> celebrates Canadian applied AI innovations...
        </p>

        <h2 style={subHeadingStyle}>1.0 Introduction</h2>
        <p>
          Corey Yang attended this conference from July 10 - July 15, 2024. He attended the following presentations:
        </p>

        <ul>
          <li>
            <a href="https://www.urbansystems.ca/scaling-vector-database" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              Scaling Vector Database Usage Without Breaking the Bank
            </a>
          </li>
          <li>
            <a href="https://www.urbansystems.ca/ai-award-winning-ml-models" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              AI for AI: Award Winning ML Models
            </a>
          </li>
          <li>
            <a href="https://www.urbansystems.ca/generative-ai-design-patterns" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              Generative AI Design Patterns
            </a>
          </li>
        </ul>
      </div>

      {/* Right Sidebar */}
      <div style={rightSidebarStyle}>
        <h3>Key Takeaways</h3>
        <ul>
          <li>
            <a href="https://www.urbansystems.ca/scaling-vector-database" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              Scaling Vector Database
            </a>
          </li>
          <li>
            <a href="https://www.urbansystems.ca/graph-database" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              Graph Database
            </a>
          </li>
          <li>
            <a href="https://www.urbansystems.ca/ai-agents" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              AI Agents
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BlogPost;


// import React from "react";
// import { useParams } from "react-router-dom";
// import blogData from "../data/blogs";

// const BlogPost = ({ darkMode }) => {
//   const { id } = useParams();
//   const blog = blogData.find((b) => b.id === parseInt(id));

//   if (!blog) return <div style={{ padding: "20px" }}>Blog not found</div>;

//   const pageStyle = {
//     minHeight: "100vh",
//     overflowY: "auto",
//     backgroundColor: darkMode ? "#0d1117" : "#f0f2f5",
//     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//     padding: "30px",
//     color: darkMode ? "#e6edf3" : "#000",
//     transition: "all 0.3s ease-in-out",
//   };

//   const containerStyle = {
//     display: "flex",
//     gap: "20px",
//     backgroundColor: darkMode ? "#161b22" : "#ffffff",
//     borderRadius: "12px",
//     padding: "24px",
//     boxShadow: darkMode
//       ? "0 8px 24px rgba(255,255,255,0.05)"
//       : "0 8px 24px rgba(0,0,0,0.05)",
//   };

//   const sidebarStyle = {
//     width: "20%",
//     paddingRight: "16px",
//     borderRight: `1px solid ${darkMode ? "#30363d" : "#e0e0e0"}`
//   };

//   const contentStyle = {
//     width: "60%",
//     padding: "0 20px"
//   };

//   const rightSidebarStyle = {
//     width: "20%",
//     paddingLeft: "16px",
//     borderLeft: `1px solid ${darkMode ? "#30363d" : "#e0e0e0"}`
//   };

//   const headingStyle = {
//     fontSize: "28px",
//     fontWeight: "700",
//     color: darkMode ? "#fefefe" : "#1a1a1a",
//     marginBottom: "10px"
//   };

//   const dateStyle = {
//     fontWeight: "500",
//     color: darkMode ? "#bbb" : "#666",
//     marginBottom: "20px"
//   };

//   const sectionHeadingStyle = {
//     color: darkMode ? "#93c5fd" : "#2c3e50",
//     fontSize: "20px",
//     marginTop: "24px",
//     marginBottom: "12px"
//   };

//   const paragraphStyle = {
//     lineHeight: "1.7",
//     color: darkMode ? "#cbd5e1" : "#444",
//     marginBottom: "12px"
//   };

//   const linkStyle = {
//     color: darkMode ? "#66b3ff" : "#d32f2f",
//     textDecoration: "none",
//     transition: "color 0.2s"
//   };

//   const listItemStyle = {
//     marginBottom: "8px"
//   };

//   return (
//     <div style={pageStyle}>
//       <div style={containerStyle}>
//         {/* Left Sidebar */}
//         <div style={sidebarStyle}>
//           <h3 style={{ fontSize: "18px", marginBottom: "12px" }}>Conferences</h3>
//           <ul style={{ paddingLeft: "16px" }}>
//             {blogData.map((conf) => (
//               <li key={conf.id} style={listItemStyle}>
//                 <a
//                   href={`/blog/${conf.id}`}
//                   style={linkStyle}
//                   onMouseOver={(e) => (e.target.style.color = darkMode ? "#3399ff" : "#a31616")}
//                   onMouseOut={(e) => (e.target.style.color = darkMode ? "#66b3ff" : "#d32f2f")}
//                 >
//                   {conf.title}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Main Content */}
//         <div style={contentStyle}>
//           <h1 style={headingStyle}>{blog.title}</h1>
//           <p style={dateStyle}>{blog.date}</p>

//           <h2 style={sectionHeadingStyle}>Executive Summary</h2>
//           <p style={paragraphStyle}>{blog.summary}</p>

//           <h2 style={sectionHeadingStyle}>1.0 Introduction</h2>
//           <p style={paragraphStyle}>{blog.introduction}</p>

//           <ul style={{ paddingLeft: "20px" }}>
//             {blog.sessions.map((session, idx) => (
//               <li key={idx} style={listItemStyle}>
//                 <a
//                   href={session.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   style={linkStyle}
//                   onMouseOver={(e) => (e.target.style.color = darkMode ? "#3399ff" : "#a31616")}
//                   onMouseOut={(e) => (e.target.style.color = darkMode ? "#66b3ff" : "#d32f2f")}
//                 >
//                   {session.name}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Right Sidebar */}
//         <div style={rightSidebarStyle}>
//           <h3 style={{ fontSize: "18px", marginBottom: "12px" }}>Key Takeaways</h3>
//           <ul style={{ paddingLeft: "16px" }}>
//             {blog.takeaways.map((item, idx) => (
//               <li key={idx} style={listItemStyle}>
//                 <a
//                   href={item.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   style={linkStyle}
//                   onMouseOver={(e) => (e.target.style.color = darkMode ? "#3399ff" : "#a31616")}
//                   onMouseOut={(e) => (e.target.style.color = darkMode ? "#66b3ff" : "#d32f2f")}
//                 >
//                   {item.name}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogPost;
