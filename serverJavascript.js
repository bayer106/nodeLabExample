// Javascript for the SERVER side.

exports.stringLength = function(str){
    return str.length;
};

exports.addingStuff = function(str){
    return str + " the dog";
};

exports.yourMother = function(){
  return "huge";
};


exports.gradesTimesCredits = function(grade, credit){
  return grade*credit;
};

exports.gpaCalc = function(totalNumberOfCredits, class1, class2, class3){
  return   (class1 + class2 + class3)/totalNumberOfCredits;
};

exports.gradeConversion = function (letterGrade){
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