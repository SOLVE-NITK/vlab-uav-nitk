const experiments = [
  {
    title: "Determination of Motor Trust",
    path: "exp-determination-of-motor-thrust",
    number: 1,
  },
  {
    title: "Assembly of Quadcopter",
    path: "exp-assembly-of-quadcopter",
    number: 2,
  },
  {
    title: "Caliberation of Quadcopter",
    path: "exp-calibration-of-quadcopter",
    number: 3,
  },
  {
    title: "3D Photogrammetry from UAV surveying",
    path: "exp-3D-Photogrammetry",
    number: 4,
  },
  {
    title: "Dynamics Exploration of a 3-Degree-of-Freedom System",
    path: "exp-dynamicsExplorationOf3DOFSystems",
    number: 5,
  },
  // {
  //   title: "Heat Transfer Coefficient of a Composite wall",
  //   path: "exp-composite-wall-nitk",
  //   number: 4,
  // },
  // {
  //   title: "Emissivity of Surface",
  //   path: "exp-emissivity-of-surface-nitk",
  //   number: 5,
  // },
  // {
  //   title: "Stefan Boltzmann Constant",
  //   path: "exp-stefan-boltzmann-constant-nitk",
  //   number: 6,
  // },
  // {
  //   title: "Heat Exchangers",
  //   path: "exp-heat-exchangers-nitk",
  //   number: 7,
  // },
  // {
  //   title: "Heat transfer by Natural Convection",
  //   path: "exp-natural-convection-nitk",
  //   number: 8,
  // },
  // {
  //   title: "Heat Transfer Coefficient in Forced Convection",
  //   path: "exp-forced-convection-nitk",
  //   number: 9,
  // },
];
const row = document.querySelector(".row");
const iframe = document.querySelector(".iframe-div");
const iframeParent = document.querySelector(".iframe");
// const search = document.querySelector(".search");
// search.addEventListener("input", (e) => seachExperiments(e));

// function seachExperiments(e) {
//   e.preventDefault();
//   const searchedExperiments = experiments.filter((exp) =>
//     exp.title.toLowerCase().includes(e.target.value.toLowerCase())
//   );
//   displayExperiments(searchedExperiments);
// }
{
  /* <a href=${experiment.path} class="col active" target="_blank"
            >${experiment.title}
            <span class='number'>${experiment.number}</span></a
          > */
}
function displayExperiments(expts = experiments) {
  row.innerHTML = "";
  expts.map((experiment, index) => {
    row.innerHTML += `
     <div class="col" 
            onclick='setExperiments(this,${index})'>${experiment.title}
            <span class='number' >${experiment.number}</span></div
          >
    `;
  });
}

function setExperiments(ele, index) {
  document
    .querySelectorAll(".col")
    .forEach((cl) => cl.classList.remove("active"));
  ele.classList.add("active");
  iframeParent.classList.remove("hide");
  const path = experiments[index].path;
  console.log(path);
  iframe.src = path;
}

displayExperiments();
