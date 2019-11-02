import React, { useEffect } from 'react';
import SearchSubscription from './subscriptions/search_subscription';


const Subscription = ({ subscribeToMore }) => {
    useEffect(() => {
        return subscribeToMore({
            document: SearchSubscription,
            updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data) return prev;

                const { imageAdded } = subscriptionData.data;

                if (imageAdded) {
                    return {
                        image: imageAdded
                    }
                }
                const { articleAdded } = subscriptionData.data
                if (articleAdded) {
                    return {
                        article: articleAdded
                    }
                }
                return prev;
            },
        });
    }, []);
    return null;
};

export default Subscription;