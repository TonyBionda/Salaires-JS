const reponses = {};

const COMPAGNIES = [
    {
        name: "HAL",
        ranges: [[7615, 7800], [65952, 65953], [119296, 200000]],
    },
    {
        name: "GOUGLE",
        ranges: [[7936, 7958], [7960, 7966], [65952, 65953], [119290, 200000]],
    },
    {
        name: "YOUTOUBE",
        ranges: [[65856, 66000], [65952, 65953], [119000, 200000]],
    },
    {
        name: "ECRY",
        ranges: [[125184, 126000], [125264, 127000], [125278, 126100]]
    },
    {
        name: "DUPONTco",
        ranges: [[66864, 66916], [66927, 66928]]
    }
]

//1 - Ecrire une fonction donnant le nom d'une compagnie dont le salaire appartient à une catégorie.
a = (salaire) => {
    if (isNaN(salaire)) throw new Error("Pas bon salaire")
    try {
        return COMPAGNIES.find(elem => {
            return elem.ranges.some(([min, max]) => {
                return salaire >= min && salaire <= max;
            });
        });
    }
    catch (error) {
        console.trace(error);
    }
}
reponses.a = a(120000);

//2 - Ecrire une fonction qui donne l'ensemble des compagnies dont le montant appartient à une catégorie de salaires.
b = (salaire) => {
    if (isNaN(salaire)) throw new Error("Pas bon salaire")
    try {
        return COMPAGNIES.filter(elem => {
            return elem.ranges.some(([min, max]) => {
                return salaire >= min && salaire <= max;
            });
        });
    }
    catch (error) {
        console.trace(error);
    }
}
reponses.b = b(120000);

//3 - Ecrire une fonction donnant le nom des compagnies dont tous salaires encadre une valeur.
const c = (salaire) => {
    if (isNaN(salaire)) throw new Error("Pas bon salaire")
    try {
        return COMPAGNIES.filter(elem => {
            return elem.ranges.every(([min, max]) => {
                return salaire >= min && salaire <= max;
            });
        });
    }
    catch (error) {
        console.trace(error);
    }
}
reponses.c = c(125278);

//4 - Donner les compagnies triées par écart de salaires (gap).
reponses.d = COMPAGNIES.map(elem => {
    //On trie les range au cas où ce ne soit pas le cas
    elem.ranges.sort((a, b) => { a[0] - b[0] });
    //On met une clé gap qui aura pour valeur la différence entre le premier minimum et le dernier
    elem.gap = elem.ranges.slice().reverse()[0][0] - elem.ranges[0][0];
    //On renvoie l'élément courant pour le garder maintenant qu'on l'a modifié
    return elem;
}).sort((a, b) => a.gap - b.gap); //On trie selon le gap

//5 - Donner les compagnies triées par salaire moyen.
reponses.e = COMPAGNIES.map(elem => {
    elem.average = Math.round(elem.ranges.reduce((acc, cur) => {
        return acc += cur[0]
    }, 0) / elem.ranges.length);
    //On renvoie l'élément courant pour le garder maintenant qu'on l'a modifié
    return elem;
}).sort((a, b) => a.average - b.average);

console.log(reponses)