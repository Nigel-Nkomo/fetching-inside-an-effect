export default function fetchBio(person) {
  const delay = person === "Jemma" ? 2000 : 200;

  //a promise object is a proxy for a value not necessarily known when the promise is created
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`This is ${person}'s bio`);
    }, delay);
  });
}
