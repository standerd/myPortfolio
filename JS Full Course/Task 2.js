let p1Name = "Danie";
let p2Name = "Roger";
let p3Name = "Diana";

let p1Score1 = 145;
let p1Score2 = 146;
let p1Score3 = 146;

let p2Score1 = 146;
let p2Score2 = 146;
let p2Score3 = 146;

let p3Score1 = 146;
let p3Score2 = 145;
let p3Score3 = 146;

let p1AvgScore = (p1Score1 + p1Score2 + p1Score3) / 3;
let p2AvgScore = (p2Score1 + p2Score2 + p2Score3) / 3;
let p3AvgScore = (p3Score1 + p3Score2 + p3Score3) / 3;

if (p1AvgScore > p2AvgScore && p1AvgScore > p3AvgScore) {
  console.log(p1Name + " is the winner with a score of " + p1AvgScore);
} else if (p2AvgScore > p1AvgScore && p2AvgScore > p3AvgScore) {
  console.log(p2Name + " is the winner with a score of " + p2AvgScore);
} else if (p3AvgScore > p1AvgScore && p3AvgScore > p2AvgScore) {
  console.log(p3Name + " is the winner with a score of " + p3AvgScore);
} else {
  console.log("The scores are tied");
}
