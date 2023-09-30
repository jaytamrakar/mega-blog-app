import "./App.css";
import config from "./config/config.js";

function App() {
  return (
    <>
      {console.log(config.appwriteBucketId)}
      <h1>blog app with appwrite</h1>
    </>
  );
}

export default App;
