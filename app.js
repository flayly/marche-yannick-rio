// ==========================================
// 1. LISTE DES PRODUITS AVEC ICÔNES ET PRIX
// ==========================================
const produits = [
  /* PETIT-DEJEUNER */
  { categorie: "Petit-déjeuner", icone: "☕", nom: "Café moulu Santo Domingo", prix: 180 },
  { categorie: "Petit-déjeuner", icone: "🍵", nom: "Thé", prix: 120 },
  { categorie: "Petit-déjeuner", icone: "🍫", nom: "Chocolat en poudre", prix: 150 },
  { categorie: "Petit-déjeuner", icone: "🥣", nom: "Corn Flakes sans sucre", prix: 180 },
  { categorie: "Petit-déjeuner", icone: "🥣", nom: "Corn Flakes avec sucre", prix: 180 },
  { categorie: "Petit-déjeuner", icone: "🥞", nom: "Pâte à pancakes", prix: 160 },

  /* PRODUITS LAITIERS */
  { categorie: "Produits laitiers", icone: "🥛", nom: "Yaourt Don Bululu sucré 1L", prix: 180 },
  { categorie: "Produits laitiers", icone: "🥛", nom: "Yaourt Don Bululu non sucré 1L", prix: 180 },
  { categorie: "Produits laitiers", icone: "🥛", nom: "Lait entier Rica 1L", prix: 100 },
  { categorie: "Produits laitiers", icone: "🥛", nom: "Lait demi-écrémé", prix: 110 },
  { categorie: "Produits laitiers", icone: "🥛", nom: "Lait d'amande", prix: 220 },
  { categorie: "Produits laitiers", icone: "🥛", nom: "Lait de soja", prix: 200 },
  { categorie: "Produits laitiers", icone: "🧈", nom: "Beurre salé Sosua 227g", prix: 180 },
  { categorie: "Produits laitiers", icone: "🧈", nom: "Beurre non salé Sosua 227g", prix: 180 },

  /* PAIN ET TARTINES */
  { categorie: "Pain & Tartines", icone: "🍞", nom: "Pain de mie blanc", prix: 90 },
  { categorie: "Pain & Tartines", icone: "🍞", nom: "Pain de mie complet", prix: 110 },
  { categorie: "Pain & Tartines", icone: "🍯", nom: "Confiture", prix: 150 },
  { categorie: "Pain & Tartines", icone: "🥜", nom: "Beurre de cacahuète", prix: 220 },
  { categorie: "Pain & Tartines", icone: "🍫", nom: "Pâte à tartiner chocolat", prix: 240 },

  /* EPICERIE */
  { categorie: "Épicerie", icone: "🥚", nom: "12 œufs", prix: 220 },
  { categorie: "Épicerie", icone: "🍬", nom: "Sucre 500g", prix: 60 },
  { categorie: "Épicerie", icone: "🧂", nom: "Sel", prix: 40 },
  { categorie: "Épicerie", icone: "🧂", nom: "Poivre", prix: 90 },
  { categorie: "Épicerie", icone: "🍷", nom: "Vinaigre de vin", prix: 120 },
  { categorie: "Épicerie", icone: "🌻", nom: "Huile tournesol 1/2L", prix: 110 },

  /* BOISSONS */
  { categorie: "Boissons", icone: "💧", nom: "Bouteille eau 5L", prix: 90 },
  { categorie: "Boissons", icone: "🍊", nom: "Jus d'orange Rica avec sucre", prix: 120 },
  { categorie: "Boissons", icone: "🍊", nom: "Jus d'orange Rica sans sucre", prix: 120 },
  { categorie: "Boissons", icone: "🥤", nom: "Coca-Cola 1L", prix: 95 },
  { categorie: "Boissons", icone: "🥤", nom: "Sprite 1L", prix: 95 },
  { categorie: "Boissons", icone: "💧", nom: "Eau gazeuse Enriquillo 1L", prix: 80 },

  /* ALCOOLS */
  { categorie: "Alcools", icone: "🍷", nom: "Vin rouge Mureda", prix: 450 },
  { categorie: "Alcools", icone: "🥂", nom: "Vin blanc Mureda", prix: 450 },
  { categorie: "Alcools", icone: "🌹", nom: "Vin rosé Mureda", prix: 450 },
  { categorie: "Alcools", icone: "🥃", nom: "Rhum local", prix: 650 },
  { categorie: "Alcools", icone: "🍺", nom: "Bière Presidente 650ml", prix: 140 },

  /* SNACKS */
  { categorie: "Snacks", icone: "🍟", nom: "Chips 110g", prix: 90 },
  { categorie: "Snacks", icone: "🥨", nom: "Galettes salées", prix: 120 },

  /* FRUITS ET LEGUMES */
  { categorie: "Fruits & légumes", icone: "🍍", nom: "Ananas", prix: 100 },
  { categorie: "Fruits & légumes", icone: "🍅", nom: "Tomates (4 pièces)", prix: 150 },
  { categorie: "Fruits & légumes", icone: "🥭", nom: "Papaye", prix: 150 },
  { categorie: "Fruits & légumes", icone: "🥑", nom: "Avocat", prix: 70 },
  { categorie: "Fruits & légumes", icone: "🍌", nom: "Banane", prix: 10 },
  { categorie: "Fruits & légumes", icone: "🥭", nom: "Mangue", prix: 60 },
  { categorie: "Fruits & légumes", icone: "🍉", nom: "Pastèque", prix: 180 }
];

// Assigner une quantité initiale globale
produits.forEach(p => { p.quantite = 0; });

// Sauvegarde automatique des données saisies
const champs = ["villa", "client", "telephone", "date", "commentaires"];
champs.forEach(id => {
  const element = document.getElementById(id);
  if (element) {
    element.value = localStorage.getItem(id) || "";
    element.addEventListener("input", () => {
      localStorage.setItem(id, element.value);
    });
  }
});

// Fonction globale de mise à jour des calculs
function mettreAJourTotal() {
  let totalGeneral = 0;
  let totalArticles = 0;

  produits.forEach((produit, index) => {
    const sousTotal = produit.prix * produit.quantite;
    totalGeneral += sousTotal;
    totalArticles += produit.quantite;

    const qteSpan = document.getElementById(`qte-${index}`);
    if (qteSpan) qteSpan.innerText = produit.quantite;

    const sousTotalSpan = document.getElementById(`soustotal-${index}`);
    if (sousTotalSpan) sousTotalSpan.innerText = sousTotal.toFixed(2) + " RD$";
  });

  const nbArticlesElem = document.getElementById("nbArticles");
  if (nbArticlesElem) nbArticlesElem.innerText = totalArticles;

  const totalElem = document.getElementById("total");
  if (totalElem) totalElem.innerText = totalGeneral.toFixed(2);
}

// Attacher les fonctions au navigateur
window.ajouter = function(index) {
  if (produits[index]) {
    produits[index].quantite++;
    mettreAJourTotal();
  }
};

window.enlever = function(index) {
  if (produits[index] && produits[index].quantite > 0) {
    produits[index].quantite--;
    mettreAJourTotal();
  }
};

window.viderPanier = function() {
  produits.forEach(p => { p.quantite = 0; });
  mettreAJourTotal();
};

// Génération de la commande textuelle
function genererTexteCommande() {
  const getVal = (id) => document.getElementById(id) ? document.getElementById(id).value : "Non renseigné";
  
  let message = `🌴 *BON DE COMMANDE - YANNICK RIO* 🌴\n\n`;
  message += `🏢 *Villa :* ${getVal("villa")}\n`;
  message += `👤 *Client :* ${getVal("client")}\n`;
  message += `📞 *Tél :* ${getVal("telephone")}\n`;
  message += `📅 *Date :* ${getVal("date")}\n`;
  message += `📝 *Commentaires :* ${getVal("commentaires")}\n\n`;
  message += `🛒 *ARTICLES COMMANDÉS :*\n`;
  message += `-------------------------------------------\n`;

  let totalGeneral = 0;
  let aDesArticles = false;

  produits.forEach(produit => {
    if (produit.quantite > 0) {
      aDesArticles = true;
      const totalLigne = produit.prix * produit.quantite;
      totalGeneral += totalLigne;
      message += `${produit.icone} ${produit.nom}\n`;
      message += `   Quantité : ${produit.quantite} x ${produit.prix} RD$ = *${totalLigne} RD$*\n`;
    }
  });

  if (!aDesArticles) return null;

  message += `-------------------------------------------\n`;
  message += `💰 *TOTAL GÉNÉRAL : ${totalGeneral} RD$*`;
  return message;
}

window.envoyerWhatsApp = function() {
  const texte = genererTexteCommande();
  if (!texte) {
    alert("Votre panier est vide !");
    return;
  }
  const url = `https://wa.me/19496335007?text=${encodeURIComponent(texte)}`;
  window.open(url, "_blank");
};

window.envoyerEmail = function() {
  const texte = genererTexteCommande();
  if (!texte) {
    alert("Votre panier est vide !");
    return;
  }
  const txtEmail = texte.replace(/\*/g, "");
  const url = `mailto:flayly@hotmail.fr?subject=Commande%20Marché%20Yannick&body=${encodeURIComponent(txtEmail)}`;
  window.open(url, "_blank");
};

window.payer = function() {
  alert("Paiement bientôt disponible.");
};

// Chargement initial du catalogue dès que la page HTML est prête
const catalogue = document.getElementById("catalogue");
if (catalogue) {
  catalogue.innerHTML = "";
  produits.forEach((produit, index) => {
    const div = document.createElement("div");
    div.className = "produit-item";
    div.innerHTML = `
      <div class="produit-info">
        <span class="produit-icone">${produit.icone}</span>
        <div>
          <h3>${produit.nom}</h3>
          <p class="categorie">${produit.categorie}</p>
          <p class="prix">${produit.prix.toFixed(2)} RD$</p>
        </div>
      </div>
      <div class="produit-actions">
        <div class="quantite-controls">
          <button class="btn-qte" onclick="window.ajouter(${index})">+</button>
          <span class="qte-valeur" id="qte-${index}">0</span>
          <button class="btn-qte" onclick="window.enlever(${index})">-</button>
        </div>
        <p class="soustotal" id="soustotal-${index}">0.00 RD$</p>
      </div>
    `;
    catalogue.appendChild(div);
  });
  mettreAJourTotal();
}
