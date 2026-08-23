import React from 'react';
import { Greeting } from '../components/Greeting';
import { Clock } from '../components/Clock';
import { CommandBox } from '../components/CommandBox';
import { QuoteCard } from '../components/QuoteCard';
import { JokeCard } from '../components/JokeCard';
import { ActivityRecommendation } from '../components/ActivityRecommendation';

export const Home = () => {
  return (
    <>
      <Greeting />
      <CommandBox />
      <Clock />
      <div className="grid-cols-2">
        <QuoteCard />
        <JokeCard />
      </div>
      <div style={{ marginTop: '1.5rem' }}>
        <ActivityRecommendation />
      </div>
    </>
  );
};
