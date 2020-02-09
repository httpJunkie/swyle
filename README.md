# Description

Swyle is the newest contender in the blog posting world.  

[Live Demo](https://afternoon-eyrie-69554.herokuapp.com/)

# Features

## Image Post

A user may post an image together with a brief description if so desired.  The Rails model includes a link to an AWS bucket where the image is stored.

## Article Post

This is an option for all-text post - usually a story or a blog.  

![alt text](https://i.imgur.com/lSAnTao.png "Article")

## User Authorization

Full registration and login functionality using bcrypt and the Rails auth pattern.
I ensure valid data is sent to the API with front-end validation.
![alt text](https://i.imgur.com/mWGzBVg.png "Front-End validation")

The error messages are a reusable react component of my own design. They receive two props: a string message, and a boolean that determines whether the component is visible when it renders.

**If you wanna have some fun** Try typing in "password" as your password when you register a new account!

```
const InlineError = props => {
    const {message, visible} = props;
    return (
        <span className="errors-inline" style={{"visibility":`${visible ? 'visible' : 'hidden'}`}}>
            <div className="error-tooltip-arrow"/><span className="error-message-inline">{message}</span>
        </span>
    )
}
```

## Demo Login Feature
![alt text](https://i.imgur.com/nvxKfDq.png "Demo Login")



## Reactions

Posts (articles only for the moment) can have many reactions (like, spicy, funny, and smart) that will update live on every user's client thanks to GraphQL subscriptions and the Rails ActionCable.

The Reaction component imports a number of [mutation strings](https://github.com/apollographql/graphql-tag) like the one below.

```
const likePost = gql`
mutation likePost($postType: String!, $userId: Int!, $postId: Int!) { 
        likePost(postType: $postType, userId: $userId, postId: $postId) {
            id
            liker{
                id
                username
            }
    }  
}
`;
```
The mutations are stored in JSON objects for O(1) access.  One constant stores mutations that create a new model, and the other stores mutations that destroy a model.  Additionally, because the Mutation can trigger the refetching of a query, we utilize another object that can be keyed into with the type of post.  A reaction also has a Font Awesome Icon that will vary depending on the type of reaction. 

```
const QUERIES = { "Article": article, "ImagePost": image };
const CREATE_MUTATIONS = {'like': likePost, 'funny': createFunny, 'smart': createSmart, "spicy": createSpicy}
const DELETE_MUTATIONS = {'like': unlikePost, 'funny': deleteFunny, 'smart': deleteSmart, "spicy": deleteSpicy}
const ICONS = { 'like': FaRegThumbsUp, 'funny': FaRegGrinSquint, 'smart': FaRegLightbulb, 'spicy': FaPepperHot}
```


# Technologies Used

Ruby on Rails, GraphQL, Apollo Server, React, Node, Webpack, AWS.  Rails Action Cable and GraphQL Subscriptions are utilized to create an immersive blog experience featuring live updates.


# Future

## New Features

### Tags
Posts may have a many-to-many relation with any number of tags; clicking on a tag will fetch articles that are linked to that tag on the join table.

### Videos
I hope to implement video uploads, or at least embedding.


## TODOS
*  Refactor all class components into functional components with  Hooks
*  Implement lazy loading or pagination
*  Change the -colorScheme to .colorScheme everywhere in the scss files and jsx elemental classNames
*  Create a reusable component to be used across the index, trending, and recent user posts. 

# Bugs Overcome
*  Leaving the title edit component open and then navigating by way of the next / prev link will cause the mutation to apply to the image newly loaded regardless of owner. Expected behavior: it should close the edit components out. I solved this by entering logic in componentDidUpdate - should the paramaters change the component's state will update so that editingTitle and editingDescription are both false, thereby closing the editors.


