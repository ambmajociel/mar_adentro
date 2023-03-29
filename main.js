// This event is fired when the DOM is fully loaded and parsed
document.addEventListener("DOMContentLoaded", function () {
  // DOM elements
  const homePage = document.getElementById("home-page");
  const audioDescription = document.getElementById("audio-description");
  const startBtn = document.getElementById("start-btn");
  const panelList = document.getElementById("panel-list");
  const audioPlayer = document.getElementById("audio-player");

  // Set up event listener for the start button
  startBtn.onclick = () => {
    homePage.style.display = "none";
    audioDescription.style.display = "block";
  };

  // Smooth scrolling to the audio description section
  startBtn.addEventListener("click", () => {
    audioDescription.scrollIntoView({ behavior: "smooth" });
  });

  // Replace these URLs with the URLs of your audiodescription files
  const audiodescriptionFiles = [
    {
      section: "1 --> Introdução à Exposição 🌊",
      panels: [
        {
          panel: 1,
          title: "Boas-vindas",
          url: "https://example.com/panel1.mp3",
        },
        { panel: 2, url: "https://example.com/panel2.mp3" },
        { panel: 3, url: "https://example.com/panel3.mp3" },
      ],
    },

    // > Section 2 <

    {
      section: "2 --> Conceitos Físicos 🔬",
      panels: [
        { panel: 4, url: "https://example.com/panel4.mp3" },
        { panel: 5, url: "https://example.com/panel5.mp3" },
        { panel: 6, url: "https://example.com/panel6.mp3" },
        { panel: 7, url: "https://example.com/panel7.mp3" },
        { panel: 8, url: "https://example.com/panel8.mp3" },
        { panel: 9, url: "https://example.com/panel9.mp3" },
      ],
    },

    // > Section 3 <

    {
      section: "3 --> Conceitos Humanos 🌍",
      panels: [
        { panel: 10, url: "https://example.com/panel10.mp3" },
        { panel: 11, url: "https://example.com/panel11.mp3" },
        { panel: 12, url: "https://example.com/panel12.mp3" },
        { panel: 13, url: "https://example.com/panel13.mp3" },
        { panel: 14, url: "https://example.com/panel14.mp3" },
        { panel: 15, url: "https://example.com/panel15.mp3" },
      ],
    },

    // > Section 4 <

    {
      section: "4 --> Como o Lixo Chega no Mar? 🗑️",
      panels: [
        { panel: 16, url: "https://example.com/panel16.mp3" },
        { panel: 17, url: "https://example.com/panel17.mp3" },
        { panel: 18, url: "https://example.com/panel18.mp3" },
        { panel: 19, url: "https://example.com/panel19.mp3" },
      ],
    },

    {
      section: "5 --> O Impacto na Fauna Marinha 🐠🐬",
      panels: [
        { panel: 20, url: "https://example.com/panel20.mp3" },
        { panel: 21, url: "https://example.com/panel21.mp3" },
        { panel: 22, url: "https://example.com/panel22.mp3" },
        { panel: 23, url: "https://example.com/panel23.mp3" },
      ],
    },

    {
      section: "6 --> Chegamos ao fundo? 🌊🔍",
      panels: [{ panel: "24 - 28", url: "https://example.com/panel24.mp3" }],
    },

    {
      section: "7 --> A Solução Está Aqui! 💡",
      panels: [
        { panel: 29, url: "https://example.com/panel20.mp3" },
        { panel: 30, url: "https://example.com/panel21.mp3" },
        { panel: 31, url: "https://example.com/panel22.mp3" },
        { panel: 32, url: "https://example.com/panel23.mp3" },
      ],
    },

    {
      section: "8 --> Conheça nossas Ações Sustentáveis ♻️🌱",
      panels: [
        { panel: 33, url: "https://example.com/panel20.mp3" },
        { panel: 34, url: "https://example.com/panel21.mp3" },
        { panel: 35, url: "https://example.com/panel22.mp3" },
        { panel: 36, url: "https://example.com/panel23.mp3" },
        { panel: 37, url: "https://example.com/panel22.mp3" },
        { panel: 38, url: "https://example.com/panel22.mp3" },
        { panel: 39, url: "https://example.com/panel22.mp3" },
      ],
    },
  ];

  audiodescriptionFiles.forEach((section) => {
    const sectionTitle = document.createElement("h2");
    sectionTitle.textContent = section.section;
    sectionTitle.classList.add("mt-4");
    panelList.appendChild(sectionTitle);

    const panelRow = document.createElement("div");
    panelRow.classList.add("d-flex", "flex-wrap", "justify-content-between");
    panelList.appendChild(panelRow);

    section.panels.forEach((file) => {
      const buttonWrapper = document.createElement("div");
      buttonWrapper.classList.add("button-wrapper");
      buttonWrapper.style.width = "calc(20% - 1rem)"; // 1/5 of the screen width minus margin
      buttonWrapper.style.marginBottom = "1rem";
      panelRow.appendChild(buttonWrapper);

      const button = document.createElement("button");
      button.textContent = `Painel ${file.panel}`;
      button.classList.add("list-group-item", "list-group-item-action");
      button.style.width = "100%"; // Make the button fill the wrapper
      button.onclick = () => {
        audioPlayer.src = file.url;
        audioPlayer.hidden = false;
        audioPlayer.play();
      };
      buttonWrapper.appendChild(button);
    });
  });
});
