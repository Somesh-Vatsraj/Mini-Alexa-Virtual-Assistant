export const handleCommand = (cmd, navigate, setModal) => {
  const query = cmd.toLowerCase().trim();
  if (query.includes('time')) {
    return `Current time is: ${new Date().toLocaleTimeString()}`;
  } else if (query.includes('joke')) {
    return 'Opening Jokes section!';
  } else if (query.includes('quote')) {
    return 'Opening Quotes section!';
  } else if (query.includes('calculator') || query.includes('calc')) {
    navigate('/calculator');
    return 'Navigating to Calculator.';
  } else if (query.includes('game') || query.includes('guess')) {
    navigate('/games');
    return 'Navigating to Number Guessing Game.';
  } else if (query.includes('activity') || query.includes('recommend')) {
    navigate('/activities');
    return 'Opening Activity Recommendation.';
  } else if (query.includes('sos') || query.includes('help')) {
    navigate('/sos');
    return 'Opening Emergency Safety Section.';
  }
  return `Command not recognized: "${cmd}". Try asking for time, jokes, or navigation.`;
};
