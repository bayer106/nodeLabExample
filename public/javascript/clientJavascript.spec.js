
//Just some example testing.
describe('testing basic functions', function(){
    it('should return the correct string length', function(){
        expect(testStringLength("kittens")).toEqual(7);
    });

    it('returnKittens should return kittens', function(){
        expect(returnKittens()).toBe("kittens");
    });

    //this test should fail.
    it('this test should fail!', function(){
        expect(returnKittens()).toBe("Not Kittens!");
    });

    //this test is for yourMother
    it("this is a test for our function!", function(){
        expect(yourMother()).toBe("huge");
    });

    it("this is a test for gradesTimesCredits", function(){
        testGrade = 4.0;
        testCredit = 5;
        expect(gradesTimesCredits(testGrade, testCredit)).toBe(20);
    });

    it("this is a test for gpaCalculator", function(){
        class1 = 3.0 * 4;
        class2 = 1.0 * 2;
        class3 = 4.0 * 3;
        totalNumberOfCredits = 9;
        expect(gpaCalc(totalNumberOfCredits, class1, class2, class3)).toBe(26/9);
    });
});

