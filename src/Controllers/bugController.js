import bugModel from '../Models/bugModel'

export function retrieveBugs () {
  let data = [];
  data.push(new bugModel({
    _id: 135482,
    name: "Crash on load",
    version: "V.1.0",
    details: "Crashes after 5 sec.",
    steps: "Opened application",
    priority: 1,
    assigned: "SerhiiMart",
    creator: "SerhiiMart",
    time: "19.22",
    }))
    data.push(new bugModel({
      _id: 136182,
      name: "Crash on load",
      version: "V.1.5",
      details: "Crashes after 5 sec.",
      steps: "Opened application",
      priority: 2,
      assigned: "SerhiiMart",
      creator: "SerhiiMart",
      time: "19.22",
      }))  
  let sorted = data.sort((a, b) => {
    return a.priority - b.priority;
  })
  return sorted;
}
