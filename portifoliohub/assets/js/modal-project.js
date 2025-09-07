// Dados dos projetos
const projetos = {
  1: {
    titulo: "Bíblia Virtual",
    imagem: "/assets/img/bibliavirtual.png",
    descricao:
      "Este projeto foi desenvolvido com o objetivo de tornar o acesso às Escrituras mais prático e inclusivo. O site conta com todos os livros da Bíblia organizados de forma intuitiva, além de uma seção de versículos por tema para facilitar o estudo. Inclui também uma área com vídeos explicativos, sistema de leitura por voz, suporte em Libras, e um recurso de anotações que permite salvar notas em PDF ou diretamente no próprio site.\n\nAtualmente, o projeto está pausado, pois foi criado em uma fase em que eu ainda estava em processo de aprendizado. No futuro, pretendo redesenvolvê-lo com uma abordagem mais moderna e eficiente, aproveitando o conhecimento e as habilidades que adquiri desde então.",
    tecnologias: [
      "fab fa-html5",
      "fab fa-css3-alt",
      "fab fa-github",
      "fab fa-js",
    ],
    deploy: "https://bibliavirtual.netlify.app",
    github: "https://github.com/seuusuario/bibliavirtual",
  },

  2: {
    titulo: "Site Institucional - ASSTJ ",
    imagem: "/assets/img/",
    descricao:
      "Este projeto foi desenvolvido como parte de um trabalho freelancer para a instituição ASSTJ, a convite de um amigo. O objetivo era criar um site que tornasse o acesso às Escrituras mais prático e acessível. Para isso, utilizamos HTML, CSS e JavaScript, garantindo uma navegação intuitiva e responsiva.",
    tecnologias: [
      "fab fa-html5",
      "fab fa-css3-alt",
      "fab fa-github",
      "fab fa-js",
    ],
    deploy: "https://bibliavirtual.netlify.app",
  },
  3: {
    titulo: "Sistema de Gestão",
    imagem: "/assets/img/",
    descricao: "Em Desenvolvimento ",
    tecnologias: [
      "fab fa-react",
      "fab fa-js",
      "fab fa-css3-alt",
      "fab fa-github",
      "fab fa-figma",
    ],
    deploy: "#",
    github: "https://github.com/AntonioviniciusA/gestaocelular",
  },
  4: {
    titulo: "Site Institucional Faculdade Elohin",
    imagem: "/assets/img/",
    descricao:
      "Um site interativo que permite acessar e pesquisar versículos bíblicos.",
    tecnologias: [
      "fab fa-html5",
      "fab fa-css3-alt",
      "fab fa-github",
      "fab fa-js",
    ],
    deploy: "https://bibliavirtual.netlify.app",
    github: "https://github.com/seuusuario/bibliavirtual",
  },
  5: {
    titulo: "Gerador de Panfleto",
    imagem: "/assets/img/",
    descricao:
      "Este projeto foi desenvolvido com o objetivo de criar uma ferramenta prática e fácil de usar para gerar panfletos personalizados. Foi o meu primeiro contato com React, quando um amigo me convidou para colaborar no desenvolvimento. Ao longo do processo, adquiri bastante conhecimento tanto em React quanto no manejo de bibliotecas dentro desse framework, além de aprimorar minhas habilidades em versionamento de código. Embora o projeto tenha sido uma experiência de aprendizado, ele me proporcionou um crescimento significativo no desenvolvimento de aplicações web e no uso de boas práticas de programação.",
    tecnologias: [
      "fab fa-html5",
      "fab fa-css3-alt",
      "fab fa-github",
      "fab fa-js",
    ],
    deploy: "https://bibliavirtual.netlify.app",
    github: "https://github.com/seuusuario/bibliavirtual",
  },
  6: {
    titulo: "Site Institucional - Faculdade Elohin",
    imagem: "/assets/img/",
    descricao:
      "Este projeto foi desenvolvido com o objetivo de criar um site institucional para a Faculdade Elohin, focado em apresentar informações relevantes de forma clara e acessível. Durante o desenvolvimento, aproveitei a oportunidade para aprimorar meus conhecimentos em HTML, CSS e JavaScript. Através desse projeto, aprendi muitas coisas, como melhorar a estrutura e o layout de páginas, implementar interatividade e otimizar o desempenho do site.",
    tecnologias: [
      "fab fa-html5",
      "fab fa-css3-alt",
      "fab fa-github",
      "fab fa-js",
    ],
    deploy: "https://bibliavirtual.netlify.app",
    github: "https://github.com/seuusuario/bibliavirtual",
  },
  7: {
    titulo: "Paint Biblia Kids",
    imagem: "/assets/img/",
    descricao:
      "Este projeto faz parte do site bíblico e tem como objetivo proporcionar uma experiência interativa e educativa para as crianças, permitindo que elas pintem imagens relacionadas à Bíblia. Durante o desenvolvimento do Paint Bíblia Kids, aprimorei ainda mais meus conhecimentos em JavaScript. Um dos desafios do projeto foi criar um algoritmo que captura os pixels da tela e, ao detectar uma cor diferente da esperada, impede que essa cor seja alterada. Essa funcionalidade foi importante para garantir que as imagens fossem coloridas de maneira correta, e me ajudou a aprofundar minhas habilidades em manipulação de gráficos e processamento de dados na web",
    tecnologias: [
      "fab fa-html5",
      "fab fa-css3-alt",
      "fab fa-github",
      "fab fa-js",
    ],
    deploy:
      "https://bibliavirtual.netlify.app/recursosparacrian%C3%A7as/paint.html",
    github: "https://github.com/seuusuario/bibliavirtual",
  },
};

// Fechar modal ao clicar fora do conteúdo
document.getElementById("modal").addEventListener("click", function (event) {
  const modalContent = document.getElementById("modal-content");
  if (!modalContent.contains(event.target)) {
    closeModal();
  }
});

// Função para abrir o modal
function openModal(projetoID) {
  const projeto = projetos[projetoID];

  document.getElementById("modal-title").innerText = projeto.titulo;
  document.getElementById("modal-image").src = projeto.imagem;
  document.getElementById("modal-description").innerText = projeto.descricao;

  // Gerar os ícones das tecnologias
  const techContainer = document.getElementById("modal-techs");
  techContainer.innerHTML = "";
  projeto.tecnologias.forEach((tech) => {
    const icon = document.createElement("i");
    icon.className = tech;
    techContainer.appendChild(icon);
  });

  // Links
  document.getElementById("modal-deploy").href = projeto.deploy;
  // document.getElementById("modal-github").href = projeto.github;

  document.getElementById("modal").style.display = "flex";
}

// Fechar modal
function closeModal() {
  document.getElementById("modal").style.display = "none";
}
