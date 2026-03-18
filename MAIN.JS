const double = x => x * 2; 
const doubleBloc = (x) => { return x * 2; };
console.log("Ex 1.1:", double(5), doubleBloc(5)); 

const salut = () => "Hello";
const somme = (a, b) => a + b;
console.log("Ex 1.2:", salut(), somme(2, 3)); 

const creerPoint = (x, y) => ({ x, y }); 
console.log("Ex 1.3 (Objet):", creerPoint(2, 3));


const compteur = {
  valeur: 0,
  start() {
    this.timer = setInterval(() => {
      this.valeur++;
      if (this.valeur % 2 === 0) console.log("Tick (Ex 2.1):", this.valeur);
      if (this.valeur >= 4) clearInterval(this.timer);
    }, 100);
  }
};
compteur.start();

const avecFlechee = (...nums) => nums.reduce((a, n) => a + n, 0);
console.log("Ex 2.2 (Rest):", avecFlechee(1, 2, 3)); 


const nums = [1, 2, 3, 4, 5, 6];
const carres = nums.map(n => n * n);
const pairs = nums.filter(n => n % 2 === 0);
const total = nums.reduce((acc, n) => acc + n, 0);
console.log("Ex 3.1:", { carres, pairs, total });


const multiplierPar = facteur => x => x * facteur;
const fois3 = multiplierPar(3);
console.log("Ex 4.1 (Curry):", fois3(10)); 

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const nettoyer = pipe(s => s.trim(), s => s.toUpperCase(), s => s + "!");
console.log("Ex 4.3 (Pipe):", nettoyer("  hello  ")); 


const produits = [
  { id: 1, nom: "Stylo", cat: "Bureau", prix: 1.2, stock: 50 },
  { id: 2, nom: "Cahier", cat: "Bureau", prix: 2.5, stock: 0 },
  { id: 3, nom: "Clavier", cat: "Informatique", prix: 29.9, stock: 10 },
  { id: 4, nom: "Souris", cat: "Informatique", prix: 19.9, stock: 5 },
];

const dispoTries = produits
  .filter(p => p.stock > 0)
  .sort((a, b) => a.cat.localeCompare(b.cat) || a.nom.localeCompare(b.nom));
console.log("Ex 5.1 (Dispo):", dispoTries);

const genererId = items => (items.length ? Math.max(...items.map(i => i.id ?? 0)) + 1 : 1);
const ajouter = (items, item) => [...items, { ...item, id: item.id ?? genererId(items) }];
const maj = (items, id, patch) => items.map(i => (i.id === id ? { ...i, ...patch } : i));
const supprimer = (items, id) => items.filter(i => i.id !== id);

let etat = [...produits];
etat = ajouter(etat, { nom: "Tapis", cat: "Bureau", prix: 9.9, stock: 3 });
etat = maj(etat, 3, { stock: 12 });
console.log("Final State (CRUD):", etat);