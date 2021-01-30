/**
 * Ögrenci nesnesini olusturur
 */
function createStudent() {
    student = {
        "firstname": `${inputFirstname.value}`,
        "lastname": `${inputLastname.value}`,
        "age": `${Number(inputAge.value)}`
    };
    return student;
}

/**
 * Olusturulan ögrenciyi arraye ekler
 * @param {Array} pList 
 */
function pushStudentToArray(pList) {
    return pList.push(createStudent());
}

/**
 * Ögrenci arrayindeki ögrencileri tabloya ekler
 * @param {Array} pList 
 */
function createStudentList(pList) {
    let table = pList.map((element, index) => {
        return `<tr id="${index}">
        <td>${index+1}</td>
        <td>${element.firstname}</td>
        <td>${element.lastname}</td>
        <td>${element.age}</td>
        <td><button class="btn btn-danger" id="remove-button">Remove</button></td>
        </tr>`
    }).join("");
    return table;
}

/**
 * Kayittan sonra UI yeniler
 */
function resetUI() {
    list.innerHTML = "";
    inputFirstname.value = "";
    inputLastname.value = "";
    inputAge.value = "";
}

/**
 * Ögrenci sayisini gösterir
 * @param {Array} pList 
 */
function refreshNumberOfStudent(pList) {
    document.querySelector("#numberOfStudent").innerHTML = "Number of Student             :  " + pList.length;
}

/**
 * Olusturulan tabloyu dom'a ekler
 * @param {Table} pList 
 * @param {DOM} pDom 
 */
function refreshStudentList(pList, pDom) {
    return pDom.innerHTML = pList;
}

/**
 * Girdi degerlerini dogrular
 */
function validation() {
    if (inputFirstname.value != "" && inputLastname.value != "" && inputAge.value != "") {
        return true;
    } else {
        return false;
    }
}