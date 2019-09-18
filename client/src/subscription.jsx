import React, { useEffect } from 'react';
import ArticleSubscription from './subscriptions/article_added';


const Subscription = ({ subscribeToMore }) => {
  useEffect(() => {
    return subscribeToMore({
      document: ArticleSubscription,
      updateQuery: (prev, { subscriptionData }) => {
        console.log("subdata: ", subscriptionData.data)
        if (!subscriptionData.data) return prev;
        const { articleAdded } = subscriptionData.data;
        if (articleAdded) {
          const alreadyInList = prev.articles.find(e => e.id === articleAdded.id);
          if (alreadyInList) {
            return prev;
          }

          return { ...prev, articles: prev.articles.concat([articleAdded]) };
        }

        return prev;
      },
    });
  }, []);
  return null;
};

export default Subscription;