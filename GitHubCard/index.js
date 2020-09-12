const { default: Axios } = require("axios");



/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios.get("https://api.github.com/users/cameronyoung94")
.then((resp) =>{
console.log('success!', resp.data)  
document.querySelector(".cards")
.appendChild(gitCard(resp.data))  
})


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
function gitCard (object) {
  const gitDiv = document.createElement('div')

  const gitImg = document.createElement('img')
  gitImg.src = object.avatar_url;
  gitDiv.appendChild(gitImg)


  const gitDiv2 = document.createElement('div')

  const gitH3 = document.createElement('h3')
  gitH3.textContent = object.name;
  gitDiv2.appendChild(gitH3)

  const gitUser = document.createElement('p')
  gitUser.textContent = object.login;
  gitDiv2.appendChild(gitUser)

  const gitLocation = document.createElement('p')
  gitLocation.textContent = `Location: ${object.location}`;
  gitDiv2.appendChild(gitLocation)
  
  const gitProfile = document.createElement('p')
  gitProfile.textContent = `Profile: `;
  gitDiv2.appendChild(gitProfile)

  const gitLink = document.createElement('a')
  gitLink.textContent = object.html_url;
  gitProfile.appendChild(gitLink)
  
  const gitFollowers = document.createElement('p')
  gitFollowers.textContent = `Followers: ${object.followers}`
  gitDiv2.appendChild(gitFollowers)

  const gitFollowing = document.createElement('p')
  gitFollowing.textContent = `Following: ${object.following}`
  gitDiv2.appendChild(gitFollowing)

  const gitBio = document.createAttribute('p')
  gitBio.textContent = `Bio: ${object.bio}`
  gitDiv2.appendChild(gitBio)

  gitDiv.appendChild(gitDiv2);

  gitDiv.classList.add("card") 

  gitDiv2.classList.add("card-info")

  gitH3.classList.add("name")

  gitUser.classList.add("username")

  return gitDiv
}
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/