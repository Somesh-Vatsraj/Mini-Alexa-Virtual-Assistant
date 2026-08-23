import React from 'react';
import { QuoteCard } from '../components/QuoteCard';
import { JokeCard } from '../components/JokeCard';
import { FactCard } from '../components/FactCard';

export const QuotesPage = () => (
  <div className="grid-cols-2">
    <QuoteCard />
    <JokeCard />
    <FactCard />
  </div>
);
