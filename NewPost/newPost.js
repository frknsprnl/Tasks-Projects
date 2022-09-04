const posts = [
  { id: 1, user: "Mercy", content: "Did someone call a doctor?" },
  { id: 2, user: "Reinhardt", content: "I can't hold forever." },
  { id: 3, user: "Genji", content: "Marked by the dragon." },
];

const showPosts = () => {
  posts.map((post) => console.log(post));
  console.log("");
};

showPosts();

const addPost = (post) => {
  return new Promise((resolve, reject) => {
    posts.push(post);
    resolve(posts);
    reject("An error occurred.");
  });
};

const newPost = {
  id: 4,
  user: "Reaper",
  content: "Death walks among you.",
};

addPost(newPost)
  .then(() => showPosts())
  .catch((err) => {
    console.log(err);
  });
