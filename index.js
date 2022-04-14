let studentRecords = [  
                        {name: 'John', id: 123, marks : 98 },
                        {name: 'Baba', id: 101, marks : 23 },
                        {name: 'yaga', id: 200, marks : 45 },
                        {name: 'Wick', id: 115, marks : 75 } 
                    ] ;

// "Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps.

// ['JOHN', 'BABA', 'YAGA', 'WICK']

//Q1.

let namesOfStudents = studentRecords.map(x => x.name.toUpperCase());
console.log(namesOfStudents);


//"Question 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.


let firstClass = studentRecords.filter(x => x.marks > 50);
console.log(firstClass);

//Question 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.
let firstClasswid = studentRecords.filter((x) =>x.marks > 50&&x.id>120);
console.log(firstClasswid);

//Question 4: Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.

let totalMarks = studentRecords.reduce((accu, curr) => accu + curr.marks,0);
console.log(totalMarks);

//Question 5: This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.

let nameOfFirst = studentRecords.filter(x => x.marks > 50);
for(let i = 0; i<nameOfFirst.length; i++){
    console.log(nameOfFirst[i].name);
}

// Question 6: This time we are required to print the sum of marks of the students with id > 120.

let checkId = studentRecords.filter(x => x.id > 120);
let sumMarks = checkId.reduce((accu, curr) => accu + curr.marks,0);
console.log(sumMarks);

//Question 7: This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.

for(let x of studentRecords){
    if(x.marks<50){
        
        x.marks = x.marks + 15;
    }
}

let checkMarks = studentRecords.filter(x => x.marks > 50);
let addMarks = checkMarks.reduce((accu, curr) => accu + curr.marks,0);
console.log(addMarks);


//Question 8. Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects. 

let stnd1 = {
    name : "Rahul Yadav",
    class : 10,
    roll_no : 1854
}

let stnd2 = {
    name : "Sarang Paul",
    class : 10,
    roll_no : 1855
}
let stnd3 = {
    name : "Harry Tiwari",
    class : 10,
    roll_no : 1856
}

let stnd4 = {
    name : "Yash Nehare",
    class : 10,
    roll_no : 1857
}
let stnd5 = {
    name : "Mayur Ingle",
    class : 10,
    roll_no : 1858
}

let stnd6 = {
    name : "Sohail Shaikh",
    class : 10,
    roll_no : 1859
}
let allStudents =[{...stnd1},{...stnd2},{...stnd3},{...stnd4},{...stnd5},{...stnd6}];
console.log(allStudents);



