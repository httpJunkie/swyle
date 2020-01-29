# Description

Swyle is the newest contender in the blog posting world.  

# Features

## Image Post

A user may post an image together with a brief description if so desired.  The Rails model includes a link to an AWS bucket where the image is stored.

## Article Post

This is an option for all-text post - usually a story or a blog.  

## User Authorization

Full registration and login functionality using bcrypt.

## Tags - Future Feature

Posts may have a many-to-many relation with any number of tags; clicking on a tag will fetch articles that are linked to that tag on the join table.

# Technologies Used

Ruby on Rails, GraphQL, Apollo Server, React, Node, Webpack, AWS


## TODOS

*  Force all usernames to lower case prior to saving, then convert login and register usernames and email to lower case as well.
*  Refactor class components into functional components with  Hooks
*  Implement lazy loading or pagination

## Known Bugs
*  Adding a comment, and then navigating to image index by way of the navbar, does not update the comment count; refreshing the page does. 

# Bugs Overcome
*  Leaving the title edit component open and then navigating by way of the next / prev link will cause the mutation to apply to the image newly loaded regardless of owner. Expected behavior: it should close the edit components out. I solved this by entering logic in componentDidUpdate - should the paramaters change the component's state will update so that editingTitle and editingDescription are both false, thereby closing the editors.


