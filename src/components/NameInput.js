export function NameInput() {
    const form = document.createElement("form");
    form.setAttribute("action", "");
    form.classList.add("name-input");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
    });

    // Text input
    const input = document.createElement("input"); 
    
    input.setAttribute("type", "text");
    input.setAttribute("required", "");
    input.setAttribute("minlength", "1");
    input.setAttribute("maxlength", "20");

    // Assemble the component
    form.appendChild(input);

    return form;
}