import { gql, useQuery } from "@apollo/client";
import Header from "./components/layout/Header";
import HomePage from "./components/home/HomePage";
import Layout from "./components/layout/Layout";
import { Route, Routes } from "react-router-dom";
import BlogPage from "./components/blog/BlogPage";
import AuthorPage from "./components/authors/AuthorPage";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs/:slug" element={<BlogPage />} />
          <Route path="/authors/:slug" element={<AuthorPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
