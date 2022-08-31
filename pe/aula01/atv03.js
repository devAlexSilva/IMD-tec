let hasChanged = true;
let originalText = "";

function alterText(id, newValue) {
  const text = document.querySelector(`#${id}`);

  originalText = hasChanged ? text.innerHTML : originalText;

  text.innerHTML = handleText(hasChanged, originalText, newValue);
  hasChanged = !hasChanged;
}

function handleText(hasChanged, originalText, newValue) {
  if (hasChanged) return newValue;
  return originalText;
}
