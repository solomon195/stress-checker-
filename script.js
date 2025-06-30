function saveAndNext(id, nextPage) {
  const value = document.getElementById(id).value;
  localStorage.setItem(id, value);
  window.location.href = nextPage;
}

function showResult() {
  const value = document.getElementById('q3').value;
  localStorage.setItem('q3', value);
  window.location.href = 'result.html';
}
