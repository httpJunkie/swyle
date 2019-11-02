import React, { useEffect } from 'react';
import SearchSubscription from './subscriptions/search_subscription';


const Subscription = ({ subscribeToMore }) => {
    useEffect(() => {
        return subscribeToMore({
            document: SearchSubscription,
            updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data) return prev;
                debugger;
                const { imageAdded } = subscriptionData.data;

                if (imageAdded) {
                    const alreadyInList = prev.postsByQuery.find(e => e.id === imageAdded.id && e.__typename === "Image");
                    if (alreadyInList) {
                        return prev;
                    }
                    return { postsByQuery: [imageAdded].concat(prev.postsByQuery) };
                }

                const { articleAdded } = subscriptionData.data
                if (articleAdded) {
                    const alreadyInList = prev.postsByQuery.find(e => e.id === articleAdded.id && e.__typename === "Article");
              
                    if (alreadyInList) {
                        return prev;
                    }
                    return { postsByQuery: [articleAdded].concat(prev.postsByQuery) };
                }
                return prev;
            },
        });
    }, []);
    return null;
};

export default Subscription;