/**
 * Created by bayer106 on 1/26/15.
 */
var gradesTimesCredits = function(grade, credit){
    return grade*credit;
};

var gpaCalc = function(totalNumberOfCredits, class1, class2, class3){    //the class should equal that class's grade times the number of credits it is worth
    return   (class1 + class2 + class3)/totalNumberOfCredits;
};

var gradeConversion = function (letterGrade){
    if(letterGrade=="A" || letterGrade=='a'){
        return 4;
    }
    if (letterGrade=="B" || letterGrade=='b'){
        return 3;
    }
    if(letterGrade=="C" || letterGrade=='c'){
        return 2;
    }
    if(letterGrade=="D" || letterGrade=='d'){
        return 1;
    }
    if(letterGrade=="F" || letterGrade=='f'){
        return 0;
    }
};