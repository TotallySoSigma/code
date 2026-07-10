function detectMutations(strand1, strand2) {
    let mutations = [];
    for (let i = 0; i < strand1.length; i++) {
        if (strand1[i] !== strand2[i]) {
            mutations.push(i);
        }
    }
    return mutations;
}