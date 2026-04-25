'use client';

import { Article } from "@/types/collections";
import ArticleCard from "./ArticleCard";

import SwiperGrid from "./SwiperGrid";
import { SwiperSlide } from "swiper/react";

import { useMemo } from "react";

export default function ArticlesGrid({ articles }: { articles: Article[] }) {
  const articleSlides = useMemo(() => {
    if (!articles || articles.length === 0) {
      return null;
    }
    return articles.map((article: Article) => (
      <SwiperSlide key={article.title}>
        <ArticleCard
          key={article.title}
          title={article.title}
          link={article.link}
          description={article.description}
          image={article.image}
          source={article.source}
        />
      </SwiperSlide>
    ));
  }, [articles]);

  if (!articleSlides) {
    return null;
  }

  return (

    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6 section-title">From Around the Web</h2>
      {articleSlides &&
        <SwiperGrid
          slides={articleSlides}
          showPagination={false}
          slideHeight="h-full"
          navigationClassPrefix="swiper-article"
          slideMaxWidth="max-w-[350px]"
          autoplay={false}
        />
      }
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {articleSlides}
        </div> */}
    </section>
  );
}
