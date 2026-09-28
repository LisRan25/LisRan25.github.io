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
      gifs: ["images/Quick Hack Conversion/QuickHack-Zoom.gif",
        "images/Quick Hack Conversion/QuickHack-OverheatDistract.gif",
        "images/Quick Hack Conversion/QuickHack-ShortCircuitSuicide.gif"
      ],
    blurb: "A Unity Conversion of a Unreal Engine project done for a uni Gameplay Programming module.",
    contribution: "I converted all of the systems from the original Unreal version to Unity.",
    role: "Solo",
    tags: ["Unity", " C#"],
  },
    {
        title: "Quick Hack Gameplay Mechanic - Gameplay Programming",
        category: "uni",
        thumbnail: "images/QuickHackOg/QuickhackOriginalThumb.png",
        gifs: ["images/QuickHackOg/QuickHackOg-Zoom.gif",
            "images/QuickHackOg/QuickHackOg-OverheatDistract.gif",
            "images/QuickHackOg/QuickHackOg-ShortCircuit.gif",
            "images/QuickHackOg/QuickHackOg-Suicide.gif"    
        ],
        blurb: "An Unreal Engine project recreating the Quick Hack mechanic from Cyberpunk 2077 for a uni Gameplay Programming module.",
        contribution: "I recreated a base version of the Quick Hack system from Cyberpunk 2077, the idea is this base version should be built in such a way that it could be expanded for a full game release in a professional environment.",
        role: "Solo",
        tags: ["Unreal", " C++/Blueprints"],
   },
   {
       title: "Marathon (2026) Destroyer Movement + Heat System Recreation",
       category: "non-uni",
       thumbnail: "images/Mara/MaraThumb.png",
       gifs: ["images/Mara/Mara-MovementOptions.gif",
           "images/Mara/Mara-Cooldown.gif"
       ],
       blurb: "A small personal project recreating the movement system of the Destroyer shell from Marathon(2026) as well as recreating the games heat system with simple UI.",
       contribution: "I created the movement options available to the Destroyer shell and the games heat/stamina system",
       role: "Solo",
       tags: ["Unity", " C#"],
    },
    {
        title: "Poolatro - Game Programming and System Architectures",
        category: "uni",
        thumbnail: "images/Pool/PoolThumb.png",
        gifs: ["images/Pool/Pool-Demo.gif"],
        blurb: "A group project for university built on the PlayStation 5 Development Kits.",
        contribution: "I created the aiming UI, Controller Feedback and the sound effects + music. Helped create player input, points system, round changing, options menu.",
        role: "Group",
        tags: ["Abertay's Skateboard Engine", " C++"],
    },
    {
        title: "Genetic Algorithms in game AI",
        category: "uni",
        thumbnail: "images/Ai/AiThumb.png",
        gifs: ["images/Ai/Ai-Demo.gif"],
        blurb: "A university Ai module where I chose to use genetic algorithms to make 2 improving Ai characters in a stealth game.",
        contribution: "I the logic for both Ai characters as well as the logic that handles their improvements across generations",
        role: "Solo",
        tags: ["Unity", " C#"],
    },
    {
        title: "Graphics programming with shaders",
        category: "uni",
        thumbnail: "images/GraphShaders/GraphShadersThumb.png",
        gifs: ["images/GraphShaders/GraphShaders-VertexManipulation.gif",
            "images/GraphShaders/GraphShaders-LightAdjustment1.gif",
            "images/GraphShaders/GraphShaders-LightAdjustment2.gif",
            "images/GraphShaders/GraphShaders-Bloom.gif"
        ],
        blurb: "A university project focused on graphics programming with shaders.",
        contribution: "I ",
        role: "Solo",
        tags: ["Abertay's Skateboard Engine", " C++"],
    },
    {
        title: "Graphics programming",
        category: "uni",
        thumbnail: "images/Graph/GraphThumb.png",
        gifs: ["images/Graph/Graph-Demo.gif"],
        blurb: "A university project focused on graphics programming.",
        contribution: "I ",
        role: "Solo",
        tags: ["Abertay's Skateboard Engine", " C++"],
    },
    {
        title: "The Lonely Ghost: Super Mega Awesome Edition - Games Programming",
        category: "uni",
        thumbnail: "images/TLG/TLGThumb.png",
        gifs: ["images/TLG/TLG-UpgradeDemo1.gif",
            "images/TLG/TLG-UpgradeDemo2.gif",
            "images/TLG/TLG-UpgradeReplace.gif"
        ],
        blurb: "The personal extension portion of a 1st year games programming built off an intial group project done in SFML.",
        contribution: "Expanded on the HUD, fixed some technical issues and most importantly expanded the updgrade system.",
        role: "Solo/Team",
        tags: ["SFML", " C++"],
    },
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

const backdrop = document.getElementById("project-backdrop");

document.getElementById("project-close").addEventListener("click", () => 
{
  backdrop.classList.remove("open");
});


let currentProject = null;
let currentIndex = 0;

function showMedia(i) 
{
    const media = document.getElementById("project-media");
  currentIndex = i;
  media.src = currentProject.gifs[i];
}

function openProject(list, i) {
  currentProject = list[i];
  document.getElementById("project-title").textContent = currentProject.title;
  document.getElementById("project-role").textContent = currentProject.role;
  document.getElementById("project-blurb").textContent = currentProject.blurb;
  document.getElementById("project-contribution").textContent = currentProject.contribution;
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