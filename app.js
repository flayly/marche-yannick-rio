const produits = [

/* PETIT-DEJEUNER */

{
categorie:"Petit-déjeuner",
nom:"Café moulu Santo Domingo",
prix:180
},

{
categorie:"Petit-déjeuner",
nom:"Thé",
prix:120
},

{
categorie:"Petit-déjeuner",
nom:"Chocolat en poudre",
prix:150
},

{
categorie:"Petit-déjeuner",
nom:"Corn Flakes sans sucre",
prix:180
},

{
categorie:"Petit-déjeuner",
nom:"Corn Flakes avec sucre",
prix:180
},

{
categorie:"Petit-déjeuner",
nom:"Pâte à pancakes",
prix:160
},

/* PRODUITS LAITIERS */

{
categorie:"Produits laitiers",
nom:"Yaourt Don Bululu sucré 1L",
prix:180
},

{
categorie:"Produits laitiers",
nom:"Yaourt Don Bululu non sucré 1L",
prix:180
},

{
categorie:"Produits laitiers",
nom:"Lait entier Rica 1L",
prix:100
},

{
categorie:"Produits laitiers",
nom:"Lait demi-écrémé",
prix:110
},

{
categorie:"Produits laitiers",
nom:"Lait d'amande",
prix:220
},

{
categorie:"Produits laitiers",
nom:"Lait de soja",
prix:200
},

{
categorie:"Produits laitiers",
nom:"Beurre salé Sosua 227g",
prix:180
},

{
categorie:"Produits laitiers",
nom:"Beurre non salé Sosua 227g",
prix:180
},

/* PAIN ET TARTINES */

{
categorie:"Pain & Tartines",
nom:"Pain de mie blanc",
prix:90
},

{
categorie:"Pain & Tartines",
nom:"Pain de mie complet",
prix:110
},

{
categorie:"Pain & Tartines",
nom:"Confiture",
prix:150
},

{
categorie:"Pain & Tartines",
nom:"Beurre de cacahuète",
prix:220
},

{
categorie:"Pain & Tartines",
nom:"Pâte à tartiner chocolat",
prix:240
},

/* EPICERIE */

{
categorie:"Épicerie",
nom:"12 œufs",
prix:220
},

{
categorie:"Épicerie",
nom:"Sucre 500g",
prix:60
},

{
categorie:"Épicerie",
nom:"Sel",
prix:40
},

{
categorie:"Épicerie",
nom:"Poivre",
prix:90
},

{
categorie:"Épicerie",
nom:"Vinaigre de vin",
prix:120
},

{
categorie:"Épicerie",
nom:"Huile tournesol 1/2L",
prix:110
},

/* BOISSONS */

{
categorie:"Boissons",
nom:"Bouteille eau 5L",
prix:90
},

{
categorie:"Boissons",
nom:"Jus d'orange Rica avec sucre",
prix:120
},

{
categorie:"Boissons",
nom:"Jus d'orange Rica sans sucre",
prix:120
},

{
categorie:"Boissons",
nom:"Coca-Cola 1L",
prix:95
},

{
categorie:"Boissons",
nom:"Sprite 1L",
prix:95
},

{
categorie:"Boissons",
nom:"Eau gazeuse Enriquillo 1L",
prix:80
},

/* ALCOOLS */

{
categorie:"Alcools",
nom:"Vin rouge Mureda",
prix:450
},

{
categorie:"Alcools",
nom:"Vin blanc Mureda",
prix:450
},

{
categorie:"Alcools",
nom:"Vin rosé Mureda",
prix:450
},

{
categorie:"Alcools",
nom:"Rhum local",
prix:650
},

{
categorie:"Alcools",
nom:"Bière Presidente 650ml",
prix:140
},

/* SNACKS */

{
categorie:"Snacks",
nom:"Chips 110g",
prix:90
},

{
categorie:"Snacks",
nom:"Galettes salées",
prix:120
},

/* FRUITS ET LEGUMES */

{
categorie:"Fruits & légumes",
nom:"Ananas",
prix:100
},

{
categorie:"Fruits & légumes",
nom:"Tomates (4 pièces)",
prix:150
},

{
categorie:"Fruits & légumes",
nom:"Papaye",
prix:150
},

{
categorie:"Fruits & légumes",
nom:"Avocat",
prix:70
},

{
categorie:"Fruits & légumes",
nom:"Banane",
prix:10
},

{
categorie:"Fruits & légumes",
nom:"Mangue",
prix:60
},

{
categorie:"Fruits & légumes",
nom:"Pastèque",
prix:180
}

const champs = [
  "villa",
  "client",
  "telephone",
  "date",
  "commentaires"
];

champs.forEach(id => {

  const element = document.getElementById(id);

  element.value =
  localStorage.getItem(id) || "";

  element.addEventListener("input", () => {
    localStorage.setItem(
      id,
      element.value
    );
  });

{
categorie:"Fruits & légumes",
nom:"Pastèque",
prix:180
}

];

const champs = [
  "villa",
  "client",
  "telephone",
  "date",
  "commentaires"
];

champs.forEach(id => {

  const element = document.getElementById(id);

  if(!element) return;

  element.value =
    localStorage.getItem(id) || "";

  element.addEventListener("input", () => {
    localStorage.setItem(
      id,
      element.value
    );
  });

});nom:"Confiture",
prix:150
},

{
categorie:"Pain & Tartines",
nom:"Beurre de cacahuète",
prix:220
},

{
categorie:"Pain & Tartines",
nom:"Pâte à tartiner chocolat",
prix:240
},

/* EPICERIE */

{
categorie:"Épicerie",
nom:"12 œufs",
prix:220
},

{
categorie:"Épicerie",
nom:"Sucre 500g",
prix:60
},

{
categorie:"Épicerie",
nom:"Sel",
prix:40
},

{
categorie:"Épicerie",
nom:"Poivre",
prix:90
},

{
categorie:"Épicerie",
nom:"Vinaigre de vin",
prix:120
},

{
categorie:"Épicerie",
nom:"Huile tournesol 1/2L",
prix:110
},

/* BOISSONS */

{
categorie:"Boissons",
nom:"Bouteille eau 5L",
prix:90
},

{
categorie:"Boissons",
nom:"Jus d'orange Rica avec sucre",
prix:120
},

{
categorie:"Boissons",
nom:"Jus d'orange Rica sans sucre",
prix:120
},

{
categorie:"Boissons",
nom:"Coca-Cola 1L",
prix:95
},

{
categorie:"Boissons",
nom:"Sprite 1L",
prix:95
},

{
categorie:"Boissons",
nom:"Eau gazeuse Enriquillo 1L",
prix:80
},

/* ALCOOLS */

{
categorie:"Alcools",
nom:"Vin rouge Mureda",
prix:450
},

{
categorie:"Alcools",
nom:"Vin blanc Mureda",
prix:450
},

{
categorie:"Alcools",
nom:"Vin rosé Mureda",
prix:450
},

{
categorie:"Alcools",
nom:"Rhum local",
prix:650
},

{
categorie:"Alcools",
nom:"Bière Presidente 650ml",
prix:140
},

/* SNACKS */

{
categorie:"Snacks",
nom:"Chips 110g",
prix:90
},

{
categorie:"Snacks",
nom:"Galettes salées",
prix:120
},

/* FRUITS ET LEGUMES */

{
categorie:"Fruits & légumes",
nom:"Ananas",
prix:100
},

{
categorie:"Fruits & légumes",
nom:"Tomates (4 pièces)",
prix:150
},

{
categorie:"Fruits & légumes",
nom:"Papaye",
prix:150
},

{
categorie:"Fruits & légumes",
nom:"Avocat",
prix:70
},

{
categorie:"Fruits & légumes",
nom:"Banane",
prix:10
},

{
categorie:"Fruits & légumes",
nom:"Mangue",
prix:60
},

{
categorie:"Fruits & légumes",
nom:"Pastèque",
prix:180
}

const champs = [
  "villa",
  "client",
  "telephone",
  "date",
  "commentaires"
];

champs.forEach(id => {

  const element = document.getElementById(id);

  element.value =
  localStorage.getItem(id) || "";

  element.addEventListener("input", () => {
    localStorage.setItem(
      id,
      element.value
    );
  });

});
