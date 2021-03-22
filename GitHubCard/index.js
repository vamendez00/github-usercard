import axios from 'axios';

// console.log("CHECK OUT AXIOS: \n \n", axios);
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/vamendez00
*/
const myProfile = axios.get("https://api.github.com/users/vamendez00")
.then (dataResponse => {
  console.log('myData:', dataResponse);
  const myInfo = dataResponse.data;
  console.log('UserInfo:', myInfo);
  return myInfo;
})
.catch(error => {
  console.log("The data was not returned", error);
})
.finally(() => {
  console.log("DONE!");
});


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/
function cardMaker (){
  
  const newCard = document.createElement("div");
  newCard.classList.add("card");

  const newImage = document.createElement("img");
  // newImage.src = avatar_url;
  newCard.appendChild(newImage);

  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");
  newCard.appendChild(cardInfo);

  const fullName = document.createElement("h3");
  fullName.textContent = `Name: `;
  fullName.classList.add("name");
  cardInfo.appendChild(fullName);

  const userName = document.createElement("p");
  userName.textContent = `UserName: `;
  userName.classList.add("username");
  cardInfo.appendChild(userName);
  
  const profileLocation = document.createElement("p");
  profileLocation.textContent = "Location:";
  cardInfo.appendChild(profileLocation);

  const profile = document.createElement("p");
  profile.textContent = "Profile: ";
  cardInfo.appendChild(profile);

  const profileLink = document.createElement("a");
  profileLink.href = `GitHub link: `;
  profile.appendChild(profileLink);
    
  const userFollowers = document.createElement("p");
  userFollowers.textContent = `Followers: `;
  cardInfo.appendChild(userFollowers);

  const userFollowing = document.createElement("p");
  userFollowing.textContent = `Following: `;
  cardInfo.appendChild(userFollowing);

  const userBio = document.createElement("p");
  userBio.textContent = `Bio:`;
  cardInfo.appendChild(userBio);

  console.log(newCard);
}


/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

const cards = document.querySelector(".cards");
const userCardInfo = cardMaker(myProfile);
cards.appendChild(userCardInfo);



/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

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

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
