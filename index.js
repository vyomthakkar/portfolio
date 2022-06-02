let a = document.getElementById('emailCopyBtn')

a.onclick = (e) => {
  e.preventDefault();
  navigator.clipboard.writeText("vnt2@illinois.edu");
  console.log(a.innerHTML)
  a.innerHTML = "Copied!"
  setTimeout(() => {
    a.innerHTML = "<i class='fa-solid fa-copy'></i>";
  }, "1000")
}
