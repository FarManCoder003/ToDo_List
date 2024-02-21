let input = document.querySelector(".input");
let add = document.querySelector(".add");
let list = document.querySelector(".list");
let update = document.querySelector(".update");
let data = [];
let id;

add.addEventListener("click", () => {
  if (input.value) {
    data.push(input.value);
    addtodo();
    input.value = "";
  }
});

update.addEventListener("click", () => {
  if (input.value) {
    data[id] = input.value;
    addtodo();
    input.value = "";
  }
});

function addtodo() {
  list.innerHTML = "";
  data.map((item) => {
    list.innerHTML += `<li>${item} <button class="edit">edit</button> <button class="delete">delete</button></li>`;
  });
  let deletesingle = document.querySelectorAll(".delete");
  let edit = document.querySelectorAll(".edit");
  let delateArr = Array.from(deletesingle);
  let editsingle = Array.from(edit);

  delateArr.map((itemd, index) => {
    itemd.addEventListener("click", () => {
      data.splice(index, 1);
      addtodo();
    });
  });
  editsingle.map((iteme, index) => {
    iteme.addEventListener("click", () => {
      input.value = data[index];
      id = index;
      addtodo();
    });
  });
}
