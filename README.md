# AltimetrikGameFinderApp #
## Game Finder is an app to find games and learn more about them. 
### It's an Alimetrik Front-End Bootcamp project.

This App is part of the Bootcamp "Become a Front End Developer!" from [Altimetrik](https://altimetrik.com). Thanks to this practice I am making use of the theoretical concepts learned from HTML, CSS and JavaScript.

## What is Game Finder?
Find your next favorite game! Game Finder app has a list of more than 500.000 games with all their characteristics: images and videos, platforms where you can play them, developers and much more. You can perform searches and soon also add your favorites to a personalized list.
Stay close for new features!

#### This application is based on the web API [RAWG.io](https://rawg.io)

## Instalation
1. [Clone this proyect](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)
2. [Install Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
3. [Install JSON server and JSON Server Auth](https://www.npmjs.com/package/json-server-auth)
    You don't have to create the db.json file because it's already creted
4. Run the server with this command:
```
json-server-auth db.json
```
5. That's it!

If you want to test or create new users you can use [Postman](https://web.postman.co/). Remember to use POST method with "/register" route and include email and password to the body:
```
POST /register
{
  "email": "olivier@mail.com",
  "password": "bestPassw0rd"
}
```
Also, you can login with this user:
```
{
  "email": "user@server.com",
  "password": "pass123"
}
```
(Disclaimer: Yes, this is not a great password, it's just for testing! :wink: )

## Main features
* Responsive design
    - Mobile resolution: 320px x 767px,
    - Tablet resolution: 768px x 1024px,
    - Desktop resolution: 1440px x 1024px
* Dark mode design
* Log in page
    - Email and password verification
    - If user isn't register you can't navigate to others sections
    - If it does you can go to Games section
    - Browser remember the session
* Logout
* Games section
    - Shows a games list
    - Infinite scrolling load more games cards
    - In tablet and desktop you can switch to one-column view
* Search functionality
    - You can search games for title
    - You can access a list of the last terms searched


## About me
I’m a forming front-end developer based in Argentina. I use HTML5, CSS5 and Javascript, and I'm starting to learn React.JS
You can visit [my portfolio here](https://marianaconti.vercel.app/)

## Work in progress
This projects is still ongoing. Much of it still needs to be developed. Sorry if you find something broke!

### Things to fix or improve:
* Login
    - Registration functionality
    - Login with social media
    - Remember-me funcionality
    - Forgot password functionality
* Games section
    - Genres hover effect
    - Favorite heart
    - Styled platforms icons
* Search
    - Search terms suggestion
    - Last searches cards
* Modal card design
    - Dark mode design
    - Read more functionality and design
    - Images and video pop-up
    - Close modal clicking outside it

Please, let me know in a comment if you find something else to fix.

### Features to come:
* Skeletor desing
* Favorites games
* Navigate for categories, realese date and rating
* View reviews
* ... and more