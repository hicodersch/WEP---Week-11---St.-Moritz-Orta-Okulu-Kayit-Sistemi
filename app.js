let form = document.querySelector('form');
let addButton = document.querySelector("#btnAddNewTask");
let table = document.querySelector("#table");
let list = document.querySelector("#addedStudents");

let inputFirstname = document.querySelector('#firstname');
let inputLastname = document.querySelector('#lastname');
let inputAge = document.querySelector('#age');

let addedStudents = [];
let numberOfStudent = 0;

/**
 * Validation saglar, ögrenciyi arraye ekler ve tabloya yazdirip inputlari temizler
 */
addButton.addEventListener("click", () => {
    if (validation()) {
        pushStudentToArray(addedStudents);
        resetUI();
        let studentTable = createStudentList(addedStudents);
        refreshStudentList(studentTable, list);
        refreshNumberOfStudent(addedStudents);
    } else {
        alert("Please enter the information correctly!");
    }
});

/**
 * Ögrencileri tablodan siler
 */
table.addEventListener("click", function (pEvent) {
    if (pEvent.target.id == 'remove-button') {
        pEvent.target.parentElement.parentElement.remove();
        addedStudents.splice(pEvent, 1);
    }
    refreshNumberOfStudent(addedStudents);
});