function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    // console.log("Data:", data);
    // console.log(event.target.isForGoodWeather.checked);
    // console.log(event.target.name.value);
    onAddActivity(data);
    event.target.reset();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Add new Activity</h2>
        <label htmlFor="name">
          Name:
          <input type="text" name="name" id="name" />
        </label>
        <label htmlFor="checkbox">
          Good Weather Activity:
          <input type="checkbox" name="isForGoodWeather" id="checkbox" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Form;
