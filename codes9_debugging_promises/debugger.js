// run this code in the browser to test "debugger"
function fetchUserData() {
  console.log("Fetching user data...");
  return new Promise((resolve, reject) => {
    // Simulated async operation
    setTimeout(() => {
      const data = { name: "John Doe", age: 30 };
      console.log("Fetched user data:", data);
      resolve(data);
    }, 1000);
  });
}

fetchUserData()
  .then((userData) => {
    debugger; // Pause code execution here
    console.log("User data received:", userData);
  })
  .catch((error) => {
    console.error("Error fetching user data:", error);
  });
