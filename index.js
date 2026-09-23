// JavaScript source code
const PROJECTS = [
  {
    title: "Operation PET - Professional Project",
    category: "uni",
    thumbnail: "images/Operation Pet/OperationPet.png",
    gifs: ["images/Operation Pet/OperationPet-MagGun.gif",
          "images/Operation Pet/OperationPet-StoryPrompts.gif"
         ],
    artGradient: "linear-gradient(135deg,#2b3350,#182034)",
    blurb: "3D puzzle platformer with physics puzzles built in Unreal for a Professional Project module.",
    contribution: "I was responsible for the mag-gun the games main mechanic and all of it's systems as well as the pistol shrimp enemy, story prompts, generator functionality and more",
    role: "Programmer, Team",
    tags: ["Unreal", " C++/Blueprints"],
  },
  {
    title: "Quick Hack Conversion",
    category: "non-uni",
    thumbnail: "images/Quick Hack Conversion/QuickhackThumb.png",
    gifs: ["images/Quick Hack Conversion/QuickHack-demo.gif"],
    blurb: "A Unity Conversion of a Unreal Engine project done for a uni Gameplay Programming module.",
    contribution: "What you did on it.",
    role: "Solo",
    tags: ["Unity", " C#"],
  },
  {
    title: "Quick Hack Original",
    category: "uni",
    thumbnail: "images/Quick Hack Mechanic - Gameplay Programming/QuickhackOriginalThumb.png",
    gifs: ["images/Quick Hack Original/QuickHackOriginal-demo.gif"],
    blurb: "An Unreal Engine project recreating the Quick Hack mechanic from Cyberpunk 2077 for a uni Gameplay Programming module.",
    contribution: "What you did on it.",
    role: "Solo",
    tags: ["Unreal", " C++/Blueprints"],
  }
];

const uniProjects = PROJECTS.filter(p => p.category === "uni");
const otherProjects = PROJECTS.filter(p => p.category === "non-uni");

function renderGrid(list, containerId) 
{
  const grid = document.getElementById(containerId);

  list.forEach((p, i) => 
  {
    const card = document.createElement("div");
    card.className = "card-btn";
    card.innerHTML = `
      <img class="card-thumb" src="${p.thumbnail}" alt="" onerror="this.style.display='none'">
      <h3>${p.title}</h3>
      <p class="card-blurb">${p.blurb}</p>
      <p class="card-tags">${p.tags}</p>
    `;
    card.addEventListener("click", () => openProject(list, i));
    grid.appendChild(card);
  });
}

const backdrop = document.getElementById("modal-backdrop");

document.getElementById("modal-close").addEventListener("click", () => 
{
  backdrop.classList.remove("open");
});


let currentProject = null;
let currentIndex = 0;

function showMedia(i) 
{
  const media = document.getElementById("modal-media");
  currentIndex = i;
  media.src = currentProject.gifs[i];
}

function openProject(list, i) {
  currentProject = list[i];
  document.getElementById("modal-title").textContent = currentProject.title;
  document.getElementById("modal-role").textContent = currentProject.role;
  document.getElementById("modal-blurb").textContent = currentProject.blurb;
  document.getElementById("modal-contribution").textContent = currentProject.contribution;
  showMedia(0);
  backdrop.classList.add("open");
}

document.getElementById("media-prev").addEventListener("click", () => 
{
  const newIndex = (currentIndex - 1 + currentProject.gifs.length) % currentProject.gifs.length;
  showMedia(newIndex);
});

document.getElementById("media-next").addEventListener("click", () => 
{
  const newIndex = (currentIndex + 1) % currentProject.gifs.length;
  showMedia(newIndex);
});


renderGrid(otherProjects, "projects-grid-personal");
renderGrid(uniProjects, "projects-grid-uni");