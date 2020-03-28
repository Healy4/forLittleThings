function main() {
    var aside_mod = document.getElementsByTagName('aside');
    var section_mod = document.getElementsByTagName('section');

    var text_fish = "<p>С другой стороны начало повседневной работы по формированию ставляет собой интересный эксперимент проверки систем массового участия. Не следует, однако забывать, что начало повседневной работы по формированию позиции способствует подготовки и реализации системы обучения кадров, соответствует насущным потребностям./br "
    if (aside_mod.hasChildNodes == false) {
        aside_mod.innerHTML = text_fish;
    }
    
    if (section_mod.hasChildNodes == false) {
        section_mod.innerHTML = text_fish;
}}