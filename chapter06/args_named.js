function showDialog({
  content = "",
  title = "My Dialog",
  width = 100,
  height = 100,
  position = "center",
  modal = false,
}) {
  console.log(`content: ${content}`);
  console.log(`modal ${modal}`);
}

showDialog({
  content: "ダイアログです",
  modal: true,
});
