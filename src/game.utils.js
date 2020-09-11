import paragraphs from './game.constants';

const paragraph = paragraphs[Math.floor(Math.random() * paragraphs.length)];

const setText = () => {
    const pWords = paragraph.split(' ');
    // const [words, setWords] = useState(pWords);
    return paragraph;
}

export const PARAGRAPH_TEXT = setText();