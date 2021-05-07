import axios from "axios";

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios
  .get("https://api.github.com/users/vamendez00")

  //upon success (.then)
  .then((response) => {
    //pathways
    // console.log("response: \n", response);
    // console.log("response.data: \n", response.data);
    // console.log("response.data.id: \n", response.data.login);

    //declare variable to represent the endpoint
    const responseInfo = response.data;
    console.log("newInfo: \n", responseInfo); 
    
    const imageURL = userInfo.avatar_url;
    console.log (imageURL);

    const nameInfo = userInfo.name;
    console.log(nameInfo);

    const idInfo = userInfo.login;
    console.log(idInfo);

    const locationInfo = userInfo.location;
    console.log(locationInfo);

    const profileURL = userInfo.html_url;
    console.log(profileURL);

    const followersInfo = userInfo.followers;
    console.log(followersInfo);

    const followingInfo = userInfo.following;
    console.log(followingInfo);

    const bioInfo = userInfo.bio; 
    console.log(bioInfo);

    let myCard = cardMaker( {imageURL, nameInfo, idInfo, locationInfo, profileURL, followersInfo, followingInfo, bioInfo} );
    console.log("myCard is: \n \n", myCard);

    let cards = document.querySelector(".cards");
    console.log(cards);
    cards.appendChild(myCard);
  })

  .catch((error) => {
    //debugger;
    console.log(error);
  })
  
  .finally(() => {
    console.log("done");
  });


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

function followerCards (array){
  array.forEach((person) => {
    axios
      .get("https://api.github.com/users/" + person)
      
      .then((response) => {
        console.log ("response: \n \n", response);
        console.log ("response.data: \n \n", response.data);
        console.log ("response.data login \n \n", response.data.login);

        const userInfo = response.data; console.log("userInfo: \n", userInfo);

        const imageURL = userInfo.avatar_url;
        console.log ("imageURL: ", imageURL);

        const nameInfo = userInfo.name;
        // console.log(nameInfo);

        const idInfo = userInfo.login;
        // console.log(idInfo);

        const locationInfo = userInfo.location;
        // console.log(locationInfo);

        const profileURL = userInfo.html_url;
        // console.log(profileURL);

        const followersInfo = userInfo.followers;
        // console.log(followersInfo);

        const followingInfo = userInfo.following;
        // console.log(followingInfo);

        const bioInfo = userInfo.bio; 
        // console.log(bioInfo);

        let newCard = cardMaker( {imageURL, nameInfo, idInfo, locationInfo, profileURL, followersInfo, followingInfo, bioInfo} );
        // console.log("myCard is: \n \n", myCard);

        let cards = document.querySelector(".cards");
        // console.log(cards);
        cards.appendChild(newCard);
      })

      .catch((error) => {
        console.log(error);
      })
      
      .finally(() => {
        console.log("done");
      })
    })
}

const followersArray = ["tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"];

followerCards(followersArray);


  // STEP 3: Create a function that accepts a single object as its only argument.
  //   Using DOM methods and properties, create and return the following markup:

function cardMaker( {imageURL, nameInfo, idInfo, locationInfo, profileURL, followersInfo, followingInfo, bioInfo} ) {

  let card = document.createElement("div");
  let cardImage = document.createElement("img");
  let cardInfo = document.createElement("div");
  let cardUserName = document.createElement("h3");
  let cardUserIDName = document.createElement("p");
  let cardUserLocation = document.createElement("p");
  let cardUserProfile = document.createElement("p");
  let cardUserProfileLink = document.createElement("a");
  let cardUserFollowers = document.createElement("p");
  let cardUserFollowing = document.createElement("p");
  let cardUserBio = document.createElement("p");

  card.classList.add("card");
  cardInfo.classList.add("card-info");
  cardUserName.classList.add("name");
  cardUserIDName.classList.add("username");

  cardImage.src = imageURL;

  cardUserName.textContent = nameInfo;

  cardUserIDName.textContent = idInfo;

  cardUserLocation.textContent = ("Location: ", locationInfo);

  cardUserProfile.textContent = ("Profile: \n")

  cardUserProfileLink.setAttribute.href = profileURL;
  
  cardUserFollowers.textContent = ("Followers: ", followersInfo);  

  cardUserFollowing.textContent = ("Following: ", followingInfo);

  cardUserBio.textContent = ("Bio:", bioInfo);

  card.appendChild(cardImage);
  card.appendChild(cardInfo);
  cardInfo.appendChild(cardUserName); 
  cardInfo.appendChild(cardUserIDName);
  cardInfo.appendChild(cardUserLocation);
  cardInfo.appendChild(cardUserProfile);
  cardInfo.appendChild(cardUserFollowers);
  cardInfo.appendChild(cardUserFollowing);
  cardInfo.appendChild(cardUserBio);
  cardUserProfile.appendChild(cardUserProfileLink);

  return card;  
//   let cards = document.querySelector(".cards");
// cards.appendChild(card);
//   console.log(cards);
}


// let cards = document.querySelector(".cards");
// cards.appendChild.card;
    // <div class="card">
    //   <img src={image url of user} />
    //   <div class="card-info">
    //     <h3 class="name">{users name}</h3>
    //     <p class="username">{users user name}</p>
    //     <p>Location: {users location}</p>
    //     <p>Profile:
    //       <a href={address to users github page}>{address to users github page}</a>
    //     </p>
    //     <p>Followers: {users followers count}</p>
    //     <p>Following: {users following count}</p>
    //     <p>Bio: {users bio}</p>
    //   </div>
    // </div>


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
