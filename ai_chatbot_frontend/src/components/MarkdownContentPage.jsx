import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";

const MarkdownContentPage = () => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { contentId } = useParams();
  const BASE_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    setLoading(true);
    setError(null);

    axios.get(`${BASE_URL}/api/admin/get-markdown-content/${contentId}`)
      .then(res => {
        console.log("Fetched content:", res.data);
        setContent(res.data);
      })
      .catch(err => {
        console.error("Error fetching content:", err);
        setError("Failed to load content!");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [contentId, BASE_URL]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h1>{content.title}</h1>
      <ReactMarkdown>{content.markdown_content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownContentPage;
