// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
};
// The provided assignment group.
const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
        {
            id: 1,
            name: "Declare a Variable",
            due_at: "2023-01-25",
            points_possible: 50
        },
        {
            id: 2,
            name: "Write a Function",
            due_at: "2023-02-27",
            points_possible: 150
        },
        {
            id: 3,
            name: "Code the World",
            due_at: "3156-11-15",
            points_possible: 500
        }
    ]
};
// The provided learner submission data.
const LearnerSubmissions = [
    {
        learner_id: 125,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-25",
            score: 47
        }
    },
    {
        learner_id: 125,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-02-12",
            score: 150
        }
    },
    {
        learner_id: 125,
        assignment_id: 3,
        submission: {
            submitted_at: "2023-01-25",
            score: 400
        }
    },
    {
        learner_id: 132,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-24",
            score: 39
        }
    },
    {
        learner_id: 125,
        assignment_id: 3,
        submission: {
            submitted_at: "2023-01-25",
            score: 400
        }
    },
    {
        learner_id: 132,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-03-07",
            score: 140
        }
    }
];

/*
const result = [
    {
      id: 125,
      avg: 0.985, // (47 + 150) / (50 + 150)
      1: 0.94, // 47 / 50
      2: 1.0 // 150 / 150
    },
    {
      id: 132,
      avg: 0.82, // (39 + 125) / (50 + 150)
      1: 0.78, // 39 / 50
      2: 0.833 // late: (140 - 15) / 150
    }
  ];
*/
//Output:  an array of objects,
function getLearnerData(ci, ag, ls) {
    let learners = [];

    try {
        if (ci.id !== ag.course_id) throw ("The Course Id does not exist.");

        ls.sort((a, b) => a.learner_id - b.learner_id);

        let allAssignments = ag.assignments;   //console.log("allAssignments :",allAssignments);

        let learn = {};
        let newId = 0;
        for (const eachSubmit of ls) {   //console.log(ls[l]);
            const assignmentInfo = getAssignmentInfo(allAssignments, eachSubmit.assignment_id);
            if (assignmentInfo == null){
                console.log (`This ${eachSubmit.assignment_id} assignment id is not valid.`);
                continue;
            }    
            console.log(assignmentInfo, "    df  ",eachSubmit.assignment_id); break;
            //const assignment = getLernerAssignment(allAssignments, eachSubmit);
            /*
            if (newId !== l.learner_id){ 
                newId = l.learner_id;
                learn["id"] = l.learner_id;

                if (learn != null){
                    learners.push(learn);
                }
                console.log(learners," not same id ",learn);
                learn = {};
            }
            */
        }

        return learners;

    } catch (err) {
        console.log(err);
        return null;
    } finally {
        console.log("Thank you for taking the Course and submiting assignments.");
    }
}

function getAssignmentInfo(allAssignments, assignedId) {
    try{
        for (const assigmentInfo of allAssignments){
            if (assigmentInfo.id === assignedId){
                return assigmentInfo;
            }
        }
        return null
    }catch(e){
        console.log(e);
    }
}

function getLernerAssignment(allAssignments, eachSubmit) {
    let eachAssign = [];
    console.log(eachSubmit, "   allAssignments :", allAssignments);
    //for (const s of submission)
    //"id"
    //"avg"
    //<assignment_id>: number,
    //return eachSubmit;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
//console.log(result);

/* Logic - Instruction
-If an AssignmentGroup does not belong to its course 
(mismatching course_id), your program should throw an error, 
letting the user know that the input was invalid. Similar 
data validation should occur elsewhere within the program.
-You should also account for potential errors in the data that 
your program receives. What if points_possible is 0? You cannot 
divide by zero. What if a value that you are expecting to be a 
number is instead a string? 
-Use try/catch and other logic to handle these types of errors 
gracefully.
-If an assignment is not yet due, do not include it in the 
results or the average. Additionally, if the learner’s submission 
is late (submitted_at is past due_at), deduct 10 percent of the 
total points possible from their score for that assignment.

Output format Object:
{
    // the ID of the learner for which this data has been collected
    "id": number,
    // the learner’s total, weighted average, in which assignments
    // with more points_possible should be counted for more
    // e.g. a learner with 50/100 on one assignment and 190/200 on another
    // would have a weighted average score of 240/300 = 80%.
    "avg": number,
    // each assignment should have a key with its ID,
    // and the value associated with it should be the percentage that
    // the learner scored on the assignment (submission.score / points_possible)
    <assignment_id>: number,
    // if an assignment is not yet due, it should not be included in either
    // the average or the keyed dictionary of scores
*/

/*

const courseInfo = {
  "id": Number,
  "name": String
}
const assignmentInfo = {
  "id": Number,
  "name": String,
  "due_at": String,   //"yyyy-MM-dd Date in String" the due date for the assignment
  "points_possible": Number   // the maximum points possible for the assignment
}
const assignmentGroup = {
  "id": Number,
  "name": String,
  "course_id": Number,  // the ID of the course the assignment group belongs to
  "group_weight": Number, // the percentage weight of the entire assignment group
  "assignments": [assignmentInfo]
}
const learnerSubmission = {
    "learner_id": Number,
    "assignment_id": Number,
    "submission": {
      "submitted_at": String,  //Date format 2023-01-25
      "score": Number
    }
}
*/