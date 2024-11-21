import GitHub from "../assets/github.png";

export function Footer() {
    const footer = document.createElement("div");
    footer.classList.add("footer");

    const GitHubIcon = new Image();
    GitHubIcon.src = GitHub;

    const text = document.createElement("p");
    text.textContent = "Made by reezuan";

    const link = document.createElement("a");
    link.setAttribute("href", "https://github.com/reezuan");
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");

    link.appendChild(GitHubIcon);
    link.appendChild(text);

    footer.append(link);

    return footer;
}