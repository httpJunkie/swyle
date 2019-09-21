import React, { useEffect } from 'react';
import CommentSubscription from './subscriptions/article_added';


const Subscription = ({ subscribeToMore }) => {
    useEffect(() => {
        return subscribeToMore({
            document: CommentSubscription,
            updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data) return prev;

                const { commentAdded } = subscriptionData.data;
                if (commentAdded) {
                    const alreadyInList = prev.comments.find(e => e.id === commentAdded.id);
                    if (alreadyInList) {
                        return prev;
                    }
                    return { comments: [commentAdded].concat(prev.comments) };
                }

                const { commentUpdated } = subscriptionData.data;

                if (commentUpdated) {
                    return {
                        comments: prev.comments.map(el =>
                            el.id === commentUpdated.id ? { ...el, ...commentUpdated } : el)
                    }
                }

                const {commentDeleted} = subscriptionData.data;
                if (commentDeleted) {
                    debugger;
                    return {
                        comments: prev.comments.map(el =>
                            el.id === commentDeleted.id ? { } : el)
                    }
                }

                return prev;
            },
        });
    }, []);
    return null;
};

export default Subscription;