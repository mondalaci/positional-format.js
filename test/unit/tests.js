
module('positional-format')

test('function is declared', function() {
    
    ok(String.prototype.format, "Function declared")

})

test('function replacement works', function() {

    equal("Hello, {0}!".format("Ricardo"),
        "Hello, Ricardo!",
        "One argument.")

    equal("{0} was a {1}.".format("Albert Einstein", "physicist"),
        "Albert Einstein was a physicist.",
        "Two arguments.")
    
    equal("Four numbers: {0}, {1}, {2}, {3}".format(1, 2, 3, 4),
        "Four numbers: 1, 2, 3, 4",
        "Using four integers.")

    equal("Shuffle parameters: {2}, {0}, {1}".format("one", "two", "three"),
        "Shuffle parameters: three, one, two",
        "Shuffle parameters.")

})