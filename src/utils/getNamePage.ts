export function getNamePage(name: string) {
  switch (name) {
    case "home":
      return "Dashboard";
    case "clipboard":
      return "Decks";
    case "folder":
      return "Folders";
    case "user":
      return "Profile";
    default:
      break;
  }
}
