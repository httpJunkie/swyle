import React, { useEffect } from 'react';
import SearchSubscription from './subscriptions/search_subscription';


const Subscription = ({ subscribeToMore, query}) => {
    useEffect(() => {
        return subscribeToMore({
            document: SearchSubscription,
            updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data) return prev;
                const { imageAdded } = subscriptionData.data;

                if (imageAdded) {
                    const alreadyInList = prev.postsByQuery.find(e => e.id === imageAdded.id && e.__typename === "Image");
                    const match = imageAdded.description.match(query.replace("?q=", "")).length > 0 || imageAdded.title.match(query.replace("?q=", "")).length > 0

                    if (alreadyInList || !match) {
                        return prev;
                    }
                    return { postsByQuery: [imageAdded].concat(prev.postsByQuery) };
                }

                const { articleAdded } = subscriptionData.data
                if (articleAdded) {
                    const alreadyInList = prev.postsByQuery.find(e => e.id === articleAdded.id && e.__typename === "Article");
                    //TODO get all this regexp stuff in a helper function, and import it.
                    //Specifically, I need to iterate over all the words in the query string and return true when i get a hit.
                    //Testers
                    console.log(query);
                    const match = articleAdded.body.match(query.replace("?q=", "")).length > 0 || articleAdded.title.match(query.replace("?q=", "")).length > 0
                    if (alreadyInList || !match) {
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