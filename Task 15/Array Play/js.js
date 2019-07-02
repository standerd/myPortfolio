let object = [
  { label: "Salad", type: "salad" },
  { label: "Cheese", type: "cheese" },
  { label: "Bacon", type: "bacon" },
  { label: "Meat", type: "meat" }
];

object.map(ctrl => console.log(ctrl.label));

console.log(Object.keys(object));

let ingredients = Object.keys(object)
  .map(igKey => {
    return [...Array(object[igKey])].map((__, i) => {
        return igKey + " + " + (igKey + i);
      })
  })
  .reduce((arr, el) => {
    return arr.concat(el);
  }, []);
  
  console.log(ingredients);