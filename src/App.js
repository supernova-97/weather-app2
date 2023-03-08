import "./App.css";
import Form from "./Form";
import List from "./List";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = useState("");

  function handleAddActivity(newActivity) {
    console.log("Act:", newActivity);
    setActivities([...activities, { id: uid(), ...newActivity }]);
  }

  return (
    <div className="App">
      <Form onAddActivity={handleAddActivity} />
      <List activity={activities} />
    </div>
  );
}

export default App;
