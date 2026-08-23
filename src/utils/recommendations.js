export const getRecommendation = (mood) => {
  switch (mood) {
    case 'Happy':
      return { activity: 'Listen to upbeat music or go for an energetic run!', type: 'Music / Exercise' };
    case 'Bored':
      return { activity: 'Play our Number Guessing Game or watch a sci-fi movie.', type: 'Game / Movie' };
    case 'Tired':
      return { activity: 'Take a 20-minute power nap or practice guided breathing meditation.', type: 'Rest / Meditation' };
    case 'Productive':
      return { activity: 'Tackle a deep-work coding session or study a new topic.', type: 'Study / Coding' };
    default:
      return { activity: 'Take a refreshing walk outside and stay hydrated.', type: 'Wellness' };
  }
};
