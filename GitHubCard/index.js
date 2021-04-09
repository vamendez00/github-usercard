import axios from "axios"

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios
  .get("https://api.github.com/users/vamendez00")
  
  .then((response) => {
    console.log ("response: \n \n", response);
    console.log ("response.data: \n \n", response.data);
    console.log ("response.data login \n \n", response.data.login);

    const userInfo = response.data; console.log("userInfo: \n", userInfo);

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

    let myCard = userCardMaker( {imageURL, nameInfo, idInfo, locationInfo, profileURL, followersInfo, followingInfo, bioInfo} );
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

function moreCards (array){
  array.forEach((userHandle) => {
    axios
      .get("https://api.github.com/users/" + userHandle)
      
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

        let newCard = userCardMaker( {imageURL, nameInfo, idInfo, locationInfo, profileURL, followersInfo, followingInfo, bioInfo} );
        // console.log("myCard is: \n \n", myCard);

        let cards = document.querySelector(".cards");
        // console.log(cards);
        cards.appendChild(newCard);
      })

      .catch((error) => {
        //debugger;
        console.log(error);
      })
      
      .finally(() => {
        console.log("done");
      })
    })
}

const followersArray = ["tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"];

moreCards(followersArray);

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function userCardMaker ({imageURL, nameInfo, idInfo, locationInfo, profileURL, followersInfo, followingInfo, bioInfo}) {
  const userCard = document.createElement("div");
  userCard.classList.add("card");

  const userImage = document.createElement("img");
  userImage.src = imageURL;
  userCard.appendChild(userImage);

  const userCardInfo = document.createElement("div");
  userCardInfo.classList.add("card-info");
  userCard.appendChild(userCardInfo);

  const userName = document.createElement("h3");
  userName.textContent = nameInfo;
  userName.classList.add("name");
  userCardInfo.appendChild(userName);

  const userID = document.createElement("p");
  userID.textContent = idInfo;
  userID.classList.add("username");
  userCardInfo.appendChild(userID);

  const userLocation = document.createElement("p");
  userLocation.textContent = ("Location: ", locationInfo);
  userCardInfo.appendChild(userLocation);

  const userProfile = document.createElement("p");
  userProfile.textContent = "Profile: \n";
  userCardInfo.appendChild(userProfile);

  const profileLink = document.createElement("a");
  profileLink.setAttribute.href = profileURL;
  userProfile.appendChild(profileLink);

  const userFollowers = document.createElement("p");
  userFollowers.textContent = ("Followers: ", followersInfo);
  userCardInfo.appendChild(userFollowers);

  const userFollowing = document.createElement("p");
  userFollowing.textContent = ("Following: ", followingInfo)
  userCardInfo.appendChild(userFollowing);

  const userBio = document.createElement("p");
  userBio.textContent = ("Bio: ", bioInfo);
  userCardInfo.appendChild(userBio);

  console.log(userCard);
  
  return userCard;
  
}

// console.log(userCardMaker);
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
