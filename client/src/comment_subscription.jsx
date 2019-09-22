import React, { useEffect } from 'react';
import CommentSubscription from './subscriptions/comment_subscription';


const Subscription = ({ subscribeToMore }) => {
    useEffect(() => {
        return subscribeToMore({
            document: CommentSubscription,
            updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data) return prev;

                const { commentAdded } = subscriptionData.data;
                debugger
                if (commentAdded) {
                    const alreadyInList = prev.commentsByPost.find(e => e.id === commentAdded.id);
                    if (alreadyInList) {
                        return prev;
                    }
                    return { commentsByPost: [commentAdded].concat(prev.commentsByPost) };
                }

                const { commentUpdated } = subscriptionData.data;
                debugger
                if (commentUpdated) {
                    return {
                        commentsByPost: prev.commentsByPost.map(el =>
                            el.id === commentUpdated.id ? { ...el, ...commentUpdated } : el)
                    }
                }

                const {commentDeleted} = subscriptionData.data;
                debugger
                if (commentDeleted) {
                    debugger;
                    return {
                        commentsByPost: prev.commentsByPost.map(el =>
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