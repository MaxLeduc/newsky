import React, {useEffect, useState} from 'react';
import {NewsPayload} from './types';

interface props {
  children: React.ReactNode;
}

const Context = React.createContext<NewsPayload | null>(null);

const getNews = async (setNews: (data: NewsPayload) => void) => {
  const key = 'IegUGAc8O1qghBISGAlucYOpcUDSsIfE';
  const res = await fetch(
    `https://api.nytimes.com/svc/topstories/v2/us.json?api-key=${key}`,
    {method: 'GET'},
  );
  const data = await res.json();
  setNews(data);
};

export const useNewsContext = () => {
  return React.useContext(Context);
};

export const NewsProvider = ({children}: props) => {
  const [news, setNews] = useState<NewsPayload | null>(null);

  useEffect(() => {
    getNews(setNews);
  }, []);

  return <Context.Provider value={news}>{children}</Context.Provider>;
};
