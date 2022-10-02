import { NextPage } from "next";
import React from "react";
import { IArticles } from "../types";
import BlogCard from "./BlogCard";
import BlogCardWithImage from "./BlogCardWithImage";

interface IProps {
  articles: IArticles[];
}

const ArticleList: NextPage<IProps> = ({ articles }) => {
  return (
    <div className="grid lg:grid-cols-2 grid-gap gap-16 mt-16">
      {articles?.map((article, idx: number) => {
        return (
          <div key={article.id}>
            {idx === 1 ? (
              <BlogCardWithImage article={article} />
            ) : (
              <BlogCard article={article} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ArticleList;
