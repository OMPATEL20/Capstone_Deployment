import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = ({ darkMode }) => {
  const navigate = useNavigate();

  const highlights = [
    {
      id: 1,
      title: "Transforming Public Engagement",
      description:
        "Urban Systems used narrative maps to make public engagement more accessible and effective.",
      thumbnail: "/thumbnail_image.png",
    },
    {
      id: 2,
      title: "Efficiency Without Compromise",
      description:
        "Streamline engagement with StoryMaps—no sacrifice on cost, time, or quality.",
      thumbnail: "/thumbnail_image.png",
    },
    {
      id: 3,
      title: "Tech Change Made Simple",
      description:
        "ArcGIS StoryMaps helped teams embrace innovation effortlessly.",
      thumbnail: "/thumbnail_image.png",
    },
    {
      id: 4,
      title: "Global COVID-19 Support",
      description:
        "Supporting partners in Peru and Uganda through Urban Systems Foundation.",
      thumbnail: "/thumbnail_image.png",
    },
    {
      id: 5,
      title: "A Vision for Food Security",
      description:
        "N’Quatqua FN delivers fresh fish to every household—strengthening resilience.",
      thumbnail: "/thumbnail_image.png",
    },
  ];

  const handleClick = (id) => {
    navigate(`/blog/${id}`);
  };

  const pageStyle = {
    minHeight: "100vh",
    backgroundColor: darkMode ? "#0d1117" : "#f5f7fa",
    display: "flex",
    flexDirection: "column",
    color: darkMode ? "#e6edf3" : "#000",
  };

  const containerStyle = {
    padding: "60px 80px",
    fontFamily: "Segoe UI, sans-serif",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
  };

  const cardStyle = {
    backgroundColor: darkMode ? "#161b22" : "#fff",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: darkMode
      ? "0 4px 12px rgba(255,255,255,0.05)"
      : "0 4px 12px rgba(0,0,0,0.1)",
    cursor: "pointer",
    transition: "transform 0.2s ease-in-out",
  };

  const imageStyle = {
    width: "100%",
    height: "160px",
    objectFit: "cover",
  };

  const contentStyle = {
    padding: "16px",
  };

  const titleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: darkMode ? "#fefefe" : "#333",
  };

  const descriptionStyle = {
    fontSize: "15px",
    color: darkMode ? "#cbd5e1" : "#666",
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <h1
          style={{
            fontSize: "36px",
            marginBottom: "20px",
            color: darkMode ? "#fefefe" : "#111",
          }}
        >
          Welcome to Urban Systems
        </h1>
        <p
          style={{
            fontSize: "18px",
            marginBottom: "40px",
            maxWidth: "720px",
            color: darkMode ? "#94a3b8" : "#444",
          }}
        >
          Discover how Urban Systems leverages cutting-edge technology and
          storytelling tools to empower communities, support change, and create
          meaningful impact across the globe.
        </p>

        <div style={gridStyle}>
          {highlights.map((item) => (
            <div
              key={item.id}
              style={cardStyle}
              onClick={() => handleClick(item.id)}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.02)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <img src={item.thumbnail} alt={item.title} style={imageStyle} />
              <div style={contentStyle}>
                <div style={titleStyle}>{item.title}</div>
                <div style={descriptionStyle}>{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
