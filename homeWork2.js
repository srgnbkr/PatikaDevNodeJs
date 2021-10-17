const posts = [
  { name: "Post 1", writer: "Yazar 1" },
  { name: "Post 2", writer: "Yazar 2" },
  { name: "Post 3", writer: "Yazar 3" },
];

const getAllPost = () => {
  posts.map((posts) => {
    console.log(posts.name);
  });
};

const addPost = (newPost) => {
  const promise1 = new Promise((resolve, reject) => {
    posts.push(newPost);
    //resolve(posts);
    reject("Bir Hata Oluştu");
  });
  return promise1;
};

async function showPosts() {
  try {
    await addPost({ name: "Post 12", writer: "Yazar 12" });
    getAllPost();
  } catch (error) {
    console.log(error);
  }
}

showPosts();