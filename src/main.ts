import { renderContributors } from "./ContrubutorsList"
import "./style.css"

document.addEventListener("DOMContentLoaded", () => {
  const contributorsGridElement = document.getElementById("contributors-grid")
  if (contributorsGridElement) {
    renderContributors(contributorsGridElement)
  } else {
    console.error("Contributors grid element not found")
  }
})

