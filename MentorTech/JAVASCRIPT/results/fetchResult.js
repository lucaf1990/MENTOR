// POST
const nuovoUtente = {
  userId: 1,
  title: "Lorem ipsum",
  body: "Dolor sit amet",
};

async function esercizio1() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(nuovoUtente),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("Exercise 1 - POST Request Result:");
    console.log(data);
  } catch (error) {
    console.error("Error during POST request:", error);
  }
}

esercizio1();

// PUT
const utenteDaAggiornare = {
  id: 1,
  userId: 1,
  title: "Updated Title",
  body: "Updated Body",
};

async function esercizio2() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        method: "PUT",
        body: JSON.stringify(utenteDaAggiornare),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log("Exercise 2 - PUT Request Result:");
    console.log(data);
  } catch (error) {
    console.error("Error during PUT request:", error);
  }
}

esercizio2();

// DELETE
async function esercizio3() {
  try {
    await fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE",
    });
    console.log("Exercise 3 - DELETE Request Result:");
    console.log("User deleted successfully.");
  } catch (error) {
    console.error("Error during DELETE request:", error);
  }
}

esercizio3();

// GET
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    console.log("Exercise 4 - GET Request Result:");
    console.log(data);
  })
  .catch((error) => {
    console.error("Error during GET request:", error);
  });
