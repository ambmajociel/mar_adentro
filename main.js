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
          panel: "1 · Seja bem-vindo",
          title: "Boas-vindas",
          url: "https://github.com/ambmajociel/mar_adentro/blob/main/audioguias/Mar%20Adentro%20Painel%2001.mp3?raw=true",
        },
        {
          panel: "2 · Expressão Artística",
          url: "https://github.com/ambmajociel/mar_adentro/blob/main/audioguias/Mar%20Adentro%20Painel%2002.mp3?raw=true",
        },
        {
          panel: "3 · Importância dos Oceanos",
          url: "https://github.com/ambmajociel/mar_adentro/blob/main/audioguias/Mar%20Adentro%20Painel%2003.mp3?raw=true",
        },
      ],
    },

    // > Section 2 <

    {
      section: "2 --> Conceitos Físicos 🔬",
      panels: [
        {
          panel: "4 · Formação dos Oceanos",
          url: "https://github.com/ambmajociel/mar_adentro/blob/main/audioguias/Mar%20Adentro%20Painel%2004.mp3?raw=true",
        },
        {
          panel: "5 · As Praias São Diferentes?",
          url: "https://github.com/ambmajociel/mar_adentro/blob/main/audioguias/Mar%20Adentro%20Painel%2005.mp3?raw=true",
        },
        {
          panel: "6 · Imagens de Sedimentos",
          url: "https://github.com/ambmajociel/mar_adentro/blob/main/audioguias/Mar%20Adentro%20Painel%2006.mp3?raw=true",
        },
        {
          panel: "7 · Expressão Artística",
          url: "https://github.com/ambmajociel/mar_adentro/blob/main/audioguias/Mar%20Adentro%20Painel%2007.mp3?raw=true",
        },
        {
          panel: "8 · Praias Refletivas",
          url: "https://github.com/ambmajociel/mar_adentro/blob/main/audioguias/Mar%20Adentro%20Painel%2008.mp3?raw=true",
        },
        {
          panel: "9 · Imagem de Hermitão",
          url: "https://github.com/ambmajociel/mar_adentro/blob/main/audioguias/Mar%20Adentro%20Painel%2009.mp3?raw=true",
        },
      ],
    },

    // > Section 3 <

    {
      section: "3 --> Conceitos Humanos 🌍",
      panels: [
        {
          panel: "10 · Povos Costeiros",
          url: "https://github.com/ambmajociel/mar_adentro/blob/main/audioguias/Mar%20Adentro%20Painel%2010.mp3?raw=true",
        },
        {
          panel: "11 · Sambaquis e Sambaquieiros",
          url: "https://github.com/ambmajociel/mar_adentro/blob/main/audioguias/Mar%20Adentro%20Painel%2011.mp3?raw=true",
        },
        {
          panel: "12 · Ocanos no seu Dia a Dia",
          url: "https://github.com/ambmajociel/mar_adentro/blob/main/audioguias/Mar%20Adentro%20Painel%2012.mp3?raw=true",
        },
        {
          panel: "13 · Linha do Tempo",
          url: "https://github.com/ambmajociel/mar_adentro/blob/main/audioguias/Mar%20Adentro%20Painel%2013.mp3?raw=true",
        },
        {
          panel: "14 · Reflexão sobre Consumismo (a)",
          url: "https://github.com/ambmajociel/mar_adentro/blob/main/audioguias/Mar%20Adentro%20Painel%2014.mp3?raw=true",
        },
        {
          panel: "15 · Reflexão sobre Consumismo (b)",
          url: "https://github.com/ambmajociel/mar_adentro/blob/main/audioguias/Mar%20Adentro%20Painel%2015.mp3?raw=true",
        },
      ],
    },

    // > Section 4 <

    {
      section: "4 --> Como o Lixo Chega no Mar? 🗑️",
      panels: [
        {
          panel: "16 · Como o Lixo Chega no Mar?",
          url: "https://github.com/ambmajociel/mar_adentro/blob/main/audioguias/Mar%20Adentro%20Painel%2016.mp3?raw=true",
        },
        {
          panel: "17 · Ilhas de Lixo",
          url: "https://github.com/ambmajociel/mar_adentro/blob/main/audioguias/Mar%20Adentro%20Painel%2017.mp3?raw=true",
        },
        {
          panel: "18 · Degradação do Plástico",
          url: "https://github.com/ambmajociel/mar_adentro/blob/main/audioguias/Mar%20Adentro%20Painel%2018.mp3?raw=true",
        },
        {
          panel: "19 · Tipos de Microplástico",
          url: "https://github.com/ambmajociel/mar_adentro/blob/main/audioguias/Mar%20Adentro%20Painel%2019.mp3?raw=true",
        },
      ],
    },

    {
      section: "5 --> O Impacto na Fauna Marinha 🐠🐬",
      panels: [
        {
          panel: "20 · Microplástico na Cadeia Alimentar",
          url: "https://github.com/ambmajociel/mar_adentro/blob/main/audioguias/Mar%20Adentro%20Painel%2020.mp3?raw=true",
        },
        {
          panel: "21 · Bioacumulação",
          url: "https://github.com/ambmajociel/mar_adentro/blob/main/audioguias/Mar%20Adentro%20Painel%2021.mp3?raw=true",
        },
        {
          panel: "22 · Impacto na Fauna Marinha",
          url: "https://github.com/ambmajociel/mar_adentro/blob/main/audioguias/Mar%20Adentro%20Painel%2022.mp3?raw=true",
        },
        {
          panel: "23 · Redes Fantasmas",
          url: "https://github.com/ambmajociel/mar_adentro/blob/main/audioguias/Mar%20Adentro%20Painel%2023.mp3?raw=true",
        },
      ],
    },

    {
      section: "6 --> Chegamos ao fundo? 🌊🔍",
      panels: [
        {
          panel: "24 e 25 · Imagem de Resíduos Flutuando",
          url: "https://github.com/ambmajociel/mar_adentro/blob/main/audioguias/Mar%20Adentro%20Painel%2024%20e%2025.mp3?raw=true",
        },
        {
          panel: "26 a 28 · Chegamos ao Fundo?",
          url: "https://github.com/ambmajociel/mar_adentro/blob/main/audioguias/Mar%20Adentro%20Painel%2026%2027%20e%2028.mp3?raw=true",
        },
      ],
    },

    {
      section: "7 --> A Solução Está Aqui! 💡",
      panels: [
        {
          panel: "29 · A Solução está Aqui",
          url: "https://github.com/ambmajociel/mar_adentro/blob/main/audioguias/Mar%20Adentro%20Painel%2029.mp3?raw=true",
        },
        {
          panel: "30 · O que é Sustentabilidade?",
          url: "https://github.com/ambmajociel/mar_adentro/blob/main/audioguias/Mar%20Adentro%20Painel%2030.mp3?raw=true",
        },
        {
          panel: "31 · Antigo eu x Novo eu",
          url: "https://github.com/ambmajociel/mar_adentro/blob/main/audioguias/Mar%20Adentro%20Painel%2031.mp3?raw=true",
        },
        {
          panel: "32 · Mais vida, menos lixo!",
          url: "https://github.com/ambmajociel/mar_adentro/blob/main/audioguias/Mar%20Adentro%20Painel%2032.mp3?raw=true",
        },
      ],
    },

    {
      section: "8 --> Conheça nossas Ações Sustentáveis ♻️🌱",
      panels: [
        {
          panel: "33 · Expressão Artística",
          url: "https://github.com/ambmajociel/mar_adentro/blob/main/audioguias/Mar%20Adentro%20Painel%2033.mp3?raw=true",
        },
        {
          panel: "34 · Expressão Artística",
          url: "https://github.com/ambmajociel/mar_adentro/blob/main/audioguias/Mar%20Adentro%20Painel%2034.mp3?raw=true",
        },
        {
          panel: "35 · Expressão Artística",
          url: "https://github.com/ambmajociel/mar_adentro/blob/main/audioguias/Mar%20Adentro%20Painel%2035.mp3?raw=true",
        },
        {
          panel: "36 · Expressão Artística",
          url: "https://github.com/ambmajociel/mar_adentro/blob/main/audioguias/Mar%20Adentro%20Painel%2036.mp3?raw=true",
        },
        {
          panel: "37 · Expressão Artística",
          url: "https://github.com/ambmajociel/mar_adentro/blob/main/audioguias/Mar%20Adentro%20Painel%2037.mp3?raw=true",
        },
        {
          panel: "38 · Expressão Artística",
          url: "https://github.com/ambmajociel/mar_adentro/blob/main/audioguias/Mar%20Adentro%20Painel%2038.mp3?raw=true",
        },
        {
          panel: "39 · Expressão Artística",
          url: "https://github.com/ambmajociel/mar_adentro/blob/main/audioguias/Mar%20Adentro%20Painel%2039.mp3?raw=true",
        },
        {
          panel: "40 a 42 · Qual é a sua Praia?",
          url: "https://github.com/ambmajociel/mar_adentro/blob/main/audioguias/Mar%20Adentro%20Painel%2040%2041%20e%2042.mp3?raw=true",
        },
        {
          panel: "43 · Encerramento",
          url: "https://github.com/ambmajociel/mar_adentro/blob/main/audioguias/mar%20adentro%20encerramento.mp3?raw=true",
        },
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
