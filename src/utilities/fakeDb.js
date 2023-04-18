const addToDb = (id) => {
  let appliedJobs = getappliedJobs();
  // add quantity
  const quantity = appliedJobs[id];

  if (!quantity) {
    appliedJobs[id] = 1;
  } else {
    const newQuantity = quantity + 1;
    appliedJobs[id] = newQuantity;
  }

  localStorage.setItem("applied-jobs", JSON.stringify(appliedJobs));
};

const getappliedJobs = () => {
  let appliedJobs = {};

  // get appliedJobs from the local storage
  const storedCart = localStorage.getItem("applied-jobs");
  if (storedCart) {
    appliedJobs = JSON.parse(storedCart);
  }

  return appliedJobs;
};

export { addToDb, getappliedJobs };
