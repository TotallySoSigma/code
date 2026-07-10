const periodics = ["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og"];
function getPeriodicSpelling(word) {
    let result = [];
    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < periodics.length; j++) {
            if (word[i][0].toLowerCase() == periodics[j][0].toLowerCase()) {
                if (word[i].length > 1) {
                    if (word[i][1].toLowerCase() == periodics[j][1].toLowerCase()) {
                        result.push(periodics[j]);
                    }
                } else {
                    result.push(periodics[j]);
                }
            }
        }
    }
    if (result.join().toLowerCase() === word) {
        return result;
    }
}
getPeriodicSpelling('neon');