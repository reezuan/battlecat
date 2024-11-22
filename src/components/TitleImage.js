import BattleshipTitle from "../assets/battleship-title.png";

export function TitleImage() {
    const titleImage = new Image();
    
    titleImage.src = BattleshipTitle;
    titleImage.classList.add("title-image");

    return titleImage;
}