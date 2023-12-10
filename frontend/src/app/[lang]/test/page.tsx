import { useState, useEffect, useCallback } from "react";
import { fetchAPI } from "../utils/fetch-api";

import Loader from "../components/Loader";
import Blog from "../views/blog-list"
import PageHeader from "../components/PageHeader";

export default async function Page({ params, searchParams }: { params: { lang: string, slug: string }, searchParams: { slug: string } }) {
  // const { slug } = params;
  // console.log(slug)
  // const { slug } = searchParams;
  // console.log(slug)
  return (
    <div>
      <PageHeader heading="Test" text="Hello world!" />
          <div className="flex justify-center">
            <button
              type="button"
              className="px-6 py-3 text-sm rounded-lg hover:underline dark:bg-gray-900 dark:text-gray-400"
            >
              Войти
            </button>
          </div>
          {/* <Loader /> */}
    </div>
  );
}

export async function generateStaticParams() {
  return [];
}
