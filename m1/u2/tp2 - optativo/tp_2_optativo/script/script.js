function clean() {
  document.form.textview.value = "";
}

function insert(number) {
  document.form.textview.value = document.form.textview.value + number;
}

function equal() {
  let exp = document.form.textview.value;

  if (exp) {
    document.form.textview.value = eval(exp);
  }
}

function back() {
  let exp = document.form.textview.value;
  document.form.textview.value = exp.substring(0, exp.length - 1);
}
