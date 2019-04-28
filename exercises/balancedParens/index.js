// --- Directions
// Check a string if the parenthesis in it has the right order
// It is a very common interview question, where can be solved with stacks
// JS and its array helper function reduce put a new approach in front of us

// "((()))" : valid
// ")(" : invalid
// "()()()": valid

function balancedParens(string) {
    return !string.split('').reduce((isNotBalanced, char) => {
    // covering the mistake in the first place
        if (isNotBalanced < 0 ) {
            return isNotBalanced;
        }

    //    covering the normal scenario
        if (char == '(') return ++isNotBalanced;
        if (char == ')') return --isNotBalanced;

        return  isNotBalanced;

    },0 );
}


module.exports = balancedParens;