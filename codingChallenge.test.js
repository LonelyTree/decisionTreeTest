const decisionTree = require('./codingChallenge')

test('Correct Percentage', () => {
	expect(decisionTree(4.35)).toBeCloseTo(4.567)
})
