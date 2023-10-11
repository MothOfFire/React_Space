import { useState, useEffect, useCallback } from 'react';
import words from './simulationData/wordList.json';
import { HangmanDrawing } from './components/HangmanDrawing';
import { HangmanWord } from './components/HangmanWord';
import { Keyboard } from './components/Keyboard/Keyboard';

function getWord() {
  return words[Math.floor(Math.random() * words.length)]
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord);
  const [guessesLetters, setGuessesLetters] = useState<string[]>([]);

  const inCorrectLetters = guessesLetters.filter(letter => !wordToGuess.includes(letter));

  console.log(wordToGuess);

  const isLoser = inCorrectLetters.length > 6;
  const isWinner = wordToGuess.split('').every(letter => guessesLetters.includes(letter));

  const addGuessLetters = useCallback((letter: string) => {
    if(guessesLetters.includes(letter) || isLoser || isWinner) return;
    setGuessesLetters(currentLetters => [...currentLetters, letter]);
  }, [guessesLetters, isLoser, isWinner]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if(!key.match(/^[a-z]$/)) return
      e.preventDefault();
      addGuessLetters(key);
    }
    document.addEventListener('keypress', handler);
    return () => {
        document.removeEventListener('keypress', handler);
      }
  }, [guessesLetters]);

  useEffect(() =>{
    const handler = (e: KeyboardEvent) => {
          const key = e.key;
          if(key !== 'Enter') return;
          e.preventDefault();
          setGuessesLetters([]);
          setWordToGuess(getWord());  
      }
    document.addEventListener('keypress', handler);
    return () => {
        document.removeEventListener('keypress', handler);
      }
  }, [])

  return (
    <div style={{
      maxWidth: '800px',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      margin: '0 auto',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        fontSize: '2em',
        textAlign: 'center'
      }}>
        {isWinner &&  "winner! - Refresh to try again"}
        {isLoser &&  "Nice Try - Refresh to try again"}
      </div>

      <HangmanDrawing numberOfGuesses={inCorrectLetters.length} />

      <HangmanWord 
        reveal={isLoser}
        guessesLetters={guessesLetters} 
        wordToGuess={wordToGuess} />

      <div style={{
        alignSelf: 'stretch'
      }}>
        <Keyboard 
        disabled={isWinner || isLoser}
        activeLetter={guessesLetters.filter(letter => 
          wordToGuess.includes(letter)
        )} 
        inactiveLetters={inCorrectLetters}
        addGuessedLetter={addGuessLetters} />
      </div>
    </div>
  )
}

export default App
