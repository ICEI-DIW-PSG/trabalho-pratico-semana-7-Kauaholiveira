const dados = [
  {
    id: 1,
    nome: "Tyrannosaurus Rex",
    descricao: "Um dos maiores predadores terrestres já descobertos.",
    conteudo: "O fóssil foi encontrado em excelente estado de preservação. A equipe da EcoFossil utilizou técnicas de reconstrução digital para restaurar parte do crânio e das patas. Estima-se que o espécime tenha vivido há cerca de 68 milhões de anos.",
    local: "Montana, EUA",
    data: "2025-05-10",
    imagem: "img/trex.jpg"
  },
  {
    id: 2,
    nome: "Triceratops Horridus",
    descricao: "Herbívoro com três chifres e grande escudo ósseo na cabeça.",
    conteudo: "Encontrado em uma formação rochosa, este Triceratops contribuiu para entender como essa espécie se defendia dos grandes predadores. A equipe da EcoFossil reconstruiu digitalmente os chifres e parte do escudo.",
    local: "Dakota do Sul, EUA",
    data: "2025-03-02",
    imagem: "img/triceratops.jpg"
  },
  {
    id: 3,
    nome: "Pteranodon Longiceps",
    descricao: "Répteis voadores com mais de 7 metros de envergadura.",
    conteudo: "O exemplar recuperado pela EcoFossil estava incrivelmente preservado, revelando novos detalhes sobre a aerodinâmica dos pterossauros. As análises indicam adaptações únicas para o voo planado.",
    local: "Kansas, EUA",
    data: "2024-11-22",
    imagem: "img/pterosaur.jpg"
  },
  {
    id: 4,
    nome: "Inseto Preservado em Âmbar",
    descricao: "Pequeno inseto fossilizado em âmbar há milhões de anos.",
    conteudo: "O âmbar foi encontrado em um sítio de escavação na região amazônica. O DNA preservado permitirá estudos sobre a fauna do período Cretáceo. Essa descoberta reforça o compromisso da EcoFossil com a restauração da natureza original.",
    local: "Amazônia, Brasil",
    data: "2025-01-15",
    imagem: "img/amber.jpg"
  }
]

// --- Exibir cards na Home ---
const container = document.getElementById("catalogo")
if (container) {
  dados.forEach(item => {
    const card = document.createElement("div")
    card.classList.add("card")
    card.innerHTML = `
      <img src="${item.imagem}" alt="${item.nome}">
      <h2>${item.nome}</h2>
      <p>${item.descricao}</p>
    `
    card.addEventListener("click", () => {
      window.location.href = `detalhes.html?id=${item.id}`
    })
    container.appendChild(card)
  })
}

// --- Exibir detalhes ---
const detalhesContainer = document.getElementById("detalhes")
if (detalhesContainer) {
  const params = new URLSearchParams(window.location.search)
  const id = params.get("id")
  const item = dados.find(d => d.id == id)

  if (item) {
    detalhesContainer.innerHTML = `
      <img src="${item.imagem}" alt="${item.nome}">
      <h2>${item.nome}</h2>
      <p><strong>Descrição:</strong> ${item.descricao}</p>
      <p><strong>Local da Descoberta:</strong> ${item.local}</p>
      <p><strong>Data:</strong> ${item.data}</p>
      <p><strong>Detalhes:</strong> ${item.conteudo}</p>
    `
  } else {
    detalhesContainer.innerHTML = `<p>Item não encontrado!</p>`
  }
}
